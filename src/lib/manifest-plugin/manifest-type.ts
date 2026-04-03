import type { FragmentKey } from "./fragment-type";

/** 
 * Manifest for content-only routes.
 */
export type Manifest<T extends PrimaryCategory = PrimaryCategory> = {
  /**
   * A unique id for this route. Unused currently, kept just in case.
   */
  id: string;
  /**
   * A locale string id for the title of the page.
   */
  // also becomes $.items[].label in the nav
  titleRef: string;
  /**
   * The primary category for this route.
   */  
  primaryCategory: T;
  /**
   * The secondary category for this route.
   */
  secondaryCategory: SecondaryCategory<T>;
  /**
   * Options to pass to the navigation module.
   */
  nav?: {
    order?: number;
  }
  /**
   * Whether this route has table data.
   */
  tables?: boolean;
  /**
   * Page content fragment reference keys
   */
  contentSections: FragmentKey[];
}
export type PrimaryCategory = "hrt" | "glp1" | "guides" | "other";
export type SecondaryCategory<T extends PrimaryCategory = PrimaryCategory> =
  T extends "hrt" ? "transfem" | "transmasc" | "resources" :
  T extends "glp1" ? "getting-started" | "safety" | "path-guides" | "sourcing" | "resources" :
  T extends "guides" ? "injection-technique" | "reconstitution" | "safety" | "payments" :
  T extends "other" ? "other" :
  never;