import type { Plugin } from 'vite'
import type { Manifest, PrimaryCategory } from './manifest-type';
import { require as tsxRequire } from 'tsx/cjs/api'
import { glob } from 'fast-glob'
import { resolve } from 'node:path'
import { generateFromManifest, generateNavigation } from './generate';

const VIRTUAL_MODULE_ID = 'virtual:manifest-nav';
const RESOLVED_MODULE_ID = '\0' + VIRTUAL_MODULE_ID;

export function manifestPlugin(options: { supportedLanguages: string[] }): Plugin {
  const manifestCache: Record<string, Manifest> = {};
  let root = process.cwd();

  function loadManifest(absolutePath: string): Manifest {
    // bust the node module cache so re-requires pick up changes
    delete require.cache[absolutePath];
    return tsxRequire(absolutePath, import.meta.url).default as Manifest;
  }

  function scanAndGenerate() {
    const start = Date.now()
    const files = glob.sync('src/routes/**/manifest.ts', { cwd: root });
    for (const file of files) {
      const route = file.replace('src/routes/', '').replace('/manifest.ts', '');
      const manifest = loadManifest(resolve(root, file));
      manifestCache[route] = manifest;
      generateFromManifest(manifest, route, {
        supportedLanugages: options.supportedLanguages,
        root,
      });
    }
    const end = Date.now()
    console.log(`Generated ${files.length} manifests in ${end - start}ms`)
  }

  return {
    name: 'openrx-manifest-content-gen',

    configResolved(config) {
      root = config.root;
    },

    buildStart() {
      scanAndGenerate();
    },

    configureServer(server) {
      // runs before sveltekit's configureServer since we're first in the plugin array,
      // so generated files exist before sveltekit scans routes
      scanAndGenerate();

      server.watcher.add(resolve(root, 'src/routes/**/manifest.ts'));
      server.watcher.on('change', (path) => {
        if (!path.endsWith('manifest.ts') || path.includes('manifest-plugin')) return;

        const route = path
          .replace(resolve(root, 'src/routes') + '/', '')
          .replace('/manifest.ts', '');

        const manifest = loadManifest(path);
        manifestCache[route] = manifest;
        generateFromManifest(manifest, route, {
          supportedLanugages: options.supportedLanguages,
          root,
        });

        // invalidate the virtual nav module so it gets rebuilt with new data
        const mod = server.moduleGraph.getModuleById(RESOLVED_MODULE_ID);
        if (mod) server.moduleGraph.invalidateModule(mod);

        // sveltekit needs a full restart to pick up new/changed route files
        server.restart();
      });
    },

    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_MODULE_ID;
    },

    load(id) {
      if (id === RESOLVED_MODULE_ID) {
        return `export const nav = ${JSON.stringify(generateNavigation(manifestCache))};`;
      }
    },
  };
}

export function defineManifest<T extends PrimaryCategory>(manifest: Manifest<T>): Manifest<T> {
  return manifest;
}
