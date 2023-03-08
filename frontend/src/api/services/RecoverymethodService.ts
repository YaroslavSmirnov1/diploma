/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecoveryMethod } from '../models/RecoveryMethod';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RecoverymethodService {

    /**
     * @returns RecoveryMethod 
     * @throws ApiError
     */
    public static recoverymethodList(): CancelablePromise<Array<RecoveryMethod>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/recoverymethod/',
        });
    }

    /**
     * @param data 
     * @returns RecoveryMethod 
     * @throws ApiError
     */
    public static recoverymethodCreate(
data: RecoveryMethod,
): CancelablePromise<RecoveryMethod> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/recoverymethod/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this recovery method.
     * @returns RecoveryMethod 
     * @throws ApiError
     */
    public static recoverymethodRead(
id: number,
): CancelablePromise<RecoveryMethod> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/recoverymethod/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this recovery method.
     * @param data 
     * @returns RecoveryMethod 
     * @throws ApiError
     */
    public static recoverymethodUpdate(
        id: number | undefined,
        data: RecoveryMethod,
    ): CancelablePromise<RecoveryMethod> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/recoverymethod/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this recovery method.
     * @param data 
     * @returns RecoveryMethod 
     * @throws ApiError
     */
    public static recoverymethodPartialUpdate(
id: number,
data: RecoveryMethod,
): CancelablePromise<RecoveryMethod> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/recoverymethod/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this recovery method.
     * @returns void 
     * @throws ApiError
     */
    public static recoverymethodDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/recoverymethod/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
