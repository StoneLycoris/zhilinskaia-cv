import { storeToRefs } from "pinia";
import { onMounted, onUnmounted } from "vue";

import { useNavigationStore } from "@/stores/navigation.store";

export function useNavigation() {
  const store = useNavigationStore();

  const { activeSection } = storeToRefs(store);

  onMounted(() => {
    store.initObserver();
  });

  onUnmounted(() => {
    store.destroyObserver();
  });

  return {
    activeSection,
    scrollToSection: store.scrollToSection,
  };
}
