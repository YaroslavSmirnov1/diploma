/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TypeFailure } from '../models/TypeFailure';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TypefailureService {

    /**
     * @returns TypeFailure 
     * @throws ApiError
     */
    public static typefailureList(): CancelablePromise<Array<TypeFailure>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/typefailure/',
        });
    }

    /**
     * @param data 
     * @returns TypeFailure 
     * @throws ApiError
     */
    public static typefailureCreate(
data: TypeFailure,
): CancelablePromise<TypeFailure> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/typefailure/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this type failure.
     * @returns TypeFailure 
     * @throws ApiError
     */
    public static typefailureRead(
id: number,
): CancelablePromise<TypeFailure> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/typefailure/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this type failure.
     * @param data 
     * @returns TypeFailure 
     * @throws ApiError
     */
    public static typefailureUpdate(
        id: number | undefined,
        data: TypeFailure,
    ): CancelablePromise<TypeFailure> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/typefailure/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this type failure.
     * @param data 
     * @returns TypeFailure 
     * @throws ApiError
     */
    public static typefailurePartialUpdate(
id: number,
data: TypeFailure,
): CancelablePromise<TypeFailure> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/typefailure/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this type failure.
     * @returns void 
     * @throws ApiError
     */
    public static typefailureDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/typefailure/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
