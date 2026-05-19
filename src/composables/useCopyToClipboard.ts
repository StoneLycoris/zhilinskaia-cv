import { ref } from "vue";

export function useCopyToClipboard() {
  const copied = ref(false);
  let timeout: number | null = null;

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);

      copied.value = true;

      if (timeout) clearTimeout(timeout);

      timeout = window.setTimeout(() => {
        copied.value = false;
      }, 1400);
    } catch (e) {
      console.error("Copy failed", e);
    }
  }

  return {
    copied,
    copy,
  };
}
