/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TypeMaintenance } from '../models/TypeMaintenance';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TypemaintenanceService {

    /**
     * @returns TypeMaintenance 
     * @throws ApiError
     */
    public static typemaintenanceList(): CancelablePromise<Array<TypeMaintenance>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/typemaintenance/',
        });
    }

    /**
     * @param data 
     * @returns TypeMaintenance 
     * @throws ApiError
     */
    public static typemaintenanceCreate(
data: TypeMaintenance,
): CancelablePromise<TypeMaintenance> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/typemaintenance/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this type maintenance.
     * @returns TypeMaintenance 
     * @throws ApiError
     */
    public static typemaintenanceRead(
id: number,
): CancelablePromise<TypeMaintenance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/typemaintenance/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this type maintenance.
     * @param data 
     * @returns TypeMaintenance 
     * @throws ApiError
     */
    public static typemaintenanceUpdate(
        id: number | undefined,
        data: TypeMaintenance,
    ): CancelablePromise<TypeMaintenance> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/typemaintenance/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this type maintenance.
     * @param data 
     * @returns TypeMaintenance 
     * @throws ApiError
     */
    public static typemaintenancePartialUpdate(
id: number,
data: TypeMaintenance,
): CancelablePromise<TypeMaintenance> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/typemaintenance/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this type maintenance.
     * @returns void 
     * @throws ApiError
     */
    public static typemaintenanceDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/typemaintenance/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
