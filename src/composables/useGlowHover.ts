export function useGlowHover() {
  function updateGlowPosition(event: MouseEvent) {
    if (!(event.currentTarget instanceof HTMLElement)) {
      return;
    }

    const target = event.currentTarget;

    const rect = target.getBoundingClientRect();

    target.style.setProperty("--x", `${event.clientX - rect.left}px`);

    target.style.setProperty("--y", `${event.clientY - rect.top}px`);
  }

  return {
    updateGlowPosition,
  };
}
