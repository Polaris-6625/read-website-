import { createMapperHooksStore } from "@apiknight/store/lib/hooks";

export interface PageData {
  id: number;
  title: string;
  content: string;
}

const pageDataStore = createMapperHooksStore<PageData[]>([
    { id: 1, content: "第一页的内容",title: "第一页的标题" },
    { id: 2, content: "第二页的内容",title: "第二页的标题" },
  ],{withLocalStorage:"page-data"});

export const usePageData = pageDataStore.useStoreValue;

export const setPageData = pageDataStore.setStoreValue;