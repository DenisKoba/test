export default function debounce(
  func: (...args: unknown[]) => void,
  waitMs: number,
  immediate = false,
): (params?: unknown) => void {
  let timeout: number | undefined;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = undefined;
      if (!immediate) func(...args);
    }, waitMs);
    if (immediate && !timeout) func(...args);
  };
}
