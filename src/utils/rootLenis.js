/** Root Lenis from ReactLenis `root` — for imperative scroll outside hooks (nav links). */
let rootLenis = null;

export function setRootLenis(instance) {
  rootLenis = instance ?? null;
}

export function getRootLenis() {
  return rootLenis;
}
