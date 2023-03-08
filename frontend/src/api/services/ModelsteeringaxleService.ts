/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelSteeringAxle } from '../models/ModelSteeringAxle';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModelsteeringaxleService {

    /**
     * @returns ModelSteeringAxle 
     * @throws ApiError
     */
    public static modelsteeringaxleList(): CancelablePromise<Array<ModelSteeringAxle>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modelsteeringaxle/',
        });
    }

    /**
     * @param data 
     * @returns ModelSteeringAxle 
     * @throws ApiError
     */
    public static modelsteeringaxleCreate(
data: ModelSteeringAxle,
): CancelablePromise<ModelSteeringAxle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/modelsteeringaxle/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model steering axle.
     * @returns ModelSteeringAxle 
     * @throws ApiError
     */
    public static modelsteeringaxleRead(
id: number,
): CancelablePromise<ModelSteeringAxle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modelsteeringaxle/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this model steering axle.
     * @param data 
     * @returns ModelSteeringAxle 
     * @throws ApiError
     */
    public static modelsteeringaxleUpdate(
        id: number | undefined,
        data: ModelSteeringAxle,
    ): CancelablePromise<ModelSteeringAxle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/modelsteeringaxle/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model steering axle.
     * @param data 
     * @returns ModelSteeringAxle 
     * @throws ApiError
     */
    public static modelsteeringaxlePartialUpdate(
id: number,
data: ModelSteeringAxle,
): CancelablePromise<ModelSteeringAxle> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/modelsteeringaxle/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model steering axle.
     * @returns void 
     * @throws ApiError
     */
    public static modelsteeringaxleDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/modelsteeringaxle/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
