/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelEngine } from '../models/ModelEngine';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModelengineService {

    /**
     * @returns ModelEngine 
     * @throws ApiError
     */
    public static modelengineList(): CancelablePromise<Array<ModelEngine>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modelengine/',
        });
    }

    /**
     * @param data 
     * @returns ModelEngine 
     * @throws ApiError
     */
    public static modelengineCreate(
data: ModelEngine,
): CancelablePromise<ModelEngine> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/modelengine/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model engine.
     * @returns ModelEngine 
     * @throws ApiError
     */
    public static modelengineRead(
id: number,
): CancelablePromise<ModelEngine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modelengine/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this model engine.
     * @param data 
     * @returns ModelEngine 
     * @throws ApiError
     */
    public static modelengineUpdate(
        id: number | undefined,
        data: ModelEngine,
    ): CancelablePromise<ModelEngine> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/modelengine/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model engine.
     * @param data 
     * @returns ModelEngine 
     * @throws ApiError
     */
    public static modelenginePartialUpdate(
id: number,
data: ModelEngine,
): CancelablePromise<ModelEngine> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/modelengine/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model engine.
     * @returns void 
     * @throws ApiError
     */
    public static modelengineDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/modelengine/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
