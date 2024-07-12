import {createMapperHooksStore} from "@apiknight/store"

const currentIndexRegion = createMapperHooksStore<number>(1,{withLocalStorage: 'currentIndex'});

export const useCurrentIndex = currentIndexRegion.useStoreValue;

export const setCurrentIndex = currentIndexRegion.setStoreValue;

export const resetCurrentIndex = currentIndexRegion.reset;