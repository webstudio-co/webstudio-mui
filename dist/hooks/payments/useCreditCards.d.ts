import React from 'react';
import { CreditCardType } from '../../types';
declare const useCreditCards: () => {
    loading: boolean;
    delayedLoading: any;
    errors: Record<string, any>;
    creditCard: import("frontend-js").ResourceType;
    creditCards: import("frontend-js").ResourceType[];
    findCreditCard: (id: import("frontend-js").ID) => import("frontend-js").ResourceType;
    findCreditCards: (queryParams?: import("frontend-js").QueryParamsType, loadMore?: boolean) => Promise<any>;
    createCreditCard: (resource: import("frontend-js").ResourceType) => import("frontend-js").ResourceType;
    deleteCreditCard: (id: import("frontend-js").ID) => Promise<any>;
    selectCreditCard: (creditCardId: any) => Promise<CreditCardType>;
    setCreditCard: (value: import("frontend-js").ResourceType) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePage: any;
    reloadCreditCards: () => Promise<any>;
    query: import("frontend-js").QueryParamsType;
    setQuery: (params: import("frontend-js").QueryParamsType) => void;
    page: number;
    numPages: number;
    perPage: number;
    totalCount: number;
    sortBy: any;
    sortDirection: any;
    handleSort: any;
    loadMore: () => void;
    loadingWrapper: (fn: () => void) => void;
    paginate: (page: number) => Promise<any>;
    removeAttachment: (id: import("frontend-js").ID, fieldName: string) => import("frontend-js").ResourceType;
};
export default useCreditCards;