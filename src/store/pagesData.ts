/* eslint-disable @typescript-eslint/no-explicit-any */
import { createMapperHooksStore } from "@apiknight/store/lib/hooks";
import fetchCurrentPageContent from "../api/fetchCurrentPageContent";
import { PageDataParams } from "../type/params";

export interface PageData {
    id: number;
    title: string;
    content: string;
}


const pageDataStore = createMapperHooksStore<string,PageDataParams>('', { withLocalStorage: 'page-data-new' });

export const usePageData = pageDataStore.useStoreValue;

export const usePageDataLoading = pageDataStore.useStoreLoading;

export const loadPageData = pageDataStore.loadStoreValue(
    params => params,
    fetchCurrentPageContent
);