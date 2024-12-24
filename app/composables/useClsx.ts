import clsx from 'clsx'

/**
 * A composable utility for building dynamic class strings using the `clsx` library.
 *
 * This function simplifies conditional class assignment in Vue templates and leverages
 * the full power of `clsx`, supporting strings, objects, arrays, and conditional logic.
 *
 * @param {...any[]} classes - The class definitions. Can be strings, objects, arrays, or booleans.
 * @returns {string} The computed class string.
 *
 * @example
 * // Usage in a Vue template:
 * <template>
 *   <div :class="clsx('base-class', isActive && 'active-class', { 'hover-class': isHovered })">
 *     Hello World
 *   </div>
 * </template>
 *
 * @example
 * // Output examples:
 * clsx('btn', true && 'btn-primary', false && 'btn-disabled', ['extra-class']);
 * // => 'btn btn-primary extra-class'
 *
 * clsx({ 'is-valid': true, 'is-invalid': false });
 * // => 'is-valid'
 */
export function useClsx(...classes: Parameters<typeof clsx>): string {
  return clsx(...classes)
}
