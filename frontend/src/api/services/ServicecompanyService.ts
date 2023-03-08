/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ServiceCompany } from '../models/ServiceCompany';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ServicecompanyService {

    /**
     * @returns ServiceCompany 
     * @throws ApiError
     */
    public static servicecompanyList(): CancelablePromise<Array<ServiceCompany>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/servicecompany/',
        });
    }

    /**
     * @param data 
     * @returns ServiceCompany 
     * @throws ApiError
     */
    public static servicecompanyCreate(
data: ServiceCompany,
): CancelablePromise<ServiceCompany> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/servicecompany/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this service company.
     * @returns ServiceCompany 
     * @throws ApiError
     */
    public static servicecompanyRead(
id: number,
): CancelablePromise<ServiceCompany> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/servicecompany/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this service company.
     * @param data 
     * @returns ServiceCompany 
     * @throws ApiError
     */
    public static servicecompanyUpdate(
id: number,
data: ServiceCompany,
): CancelablePromise<ServiceCompany> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/servicecompany/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this service company.
     * @param data 
     * @returns ServiceCompany 
     * @throws ApiError
     */
    public static servicecompanyPartialUpdate(
id: number,
data: ServiceCompany,
): CancelablePromise<ServiceCompany> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/servicecompany/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this service company.
     * @returns void 
     * @throws ApiError
     */
    public static servicecompanyDelete(
id: number,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/servicecompany/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
