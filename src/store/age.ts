import {createMapperHooksStore} from "@apiknight/store/lib/hooks"


const ageStore = createMapperHooksStore<number>(0,{withLocalStorage: 'age'})

export const useAgeValue = ageStore.useStoreValue

export const setAgeValue = ageStore.setStoreValue