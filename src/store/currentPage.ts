import { createMapperHooksStore } from "@apiknight/store/lib/hooks";

const currentPageStore = createMapperHooksStore(1,{withLocalStorage: 'current-page'});

export const useCurrentPage = currentPageStore.useStoreValue;

export const setCurrentPage = currentPageStore.setStoreValue;