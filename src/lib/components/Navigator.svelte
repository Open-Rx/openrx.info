<script lang="ts">
  type NavItem = { id: string; label: string; href: string }
  type NavGroup = { label: string; items: NavItem[] }

  let { current, nav }: { current: string; nav: NavGroup[] } = $props()
</script>

<nav class="navigator">
  {#each nav as group (group.label)}
    <details class="navigator-group" open>
      <summary class="navigator-group-label">{group.label}</summary>
      <ul class="navigator-list">
        {#each group.items as item (item.id)}
          <li class="navigator-item" class:active={item.id === current}>
            <a href={item.href} class="navigator-link">{item.label}</a>
          </li>
        {/each}
      </ul>
    </details>
  {/each}
</nav>
