/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelDriveAxle } from '../models/ModelDriveAxle';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModeldriveaxleService {

    /**
     * @returns ModelDriveAxle 
     * @throws ApiError
     */
    public static modeldriveaxleList(): CancelablePromise<Array<ModelDriveAxle>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modeldriveaxle/',
        });
    }

    /**
     * @param data 
     * @returns ModelDriveAxle 
     * @throws ApiError
     */
    public static modeldriveaxleCreate(
data: ModelDriveAxle,
): CancelablePromise<ModelDriveAxle> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/modeldriveaxle/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model drive axle.
     * @returns ModelDriveAxle 
     * @throws ApiError
     */
    public static modeldriveaxleRead(
id: number,
): CancelablePromise<ModelDriveAxle> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modeldriveaxle/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this model drive axle.
     * @param data 
     * @returns ModelDriveAxle 
     * @throws ApiError
     */
    public static modeldriveaxleUpdate(
        id: number | undefined,
        data: ModelDriveAxle,
    ): CancelablePromise<ModelDriveAxle> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/modeldriveaxle/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model drive axle.
     * @param data 
     * @returns ModelDriveAxle 
     * @throws ApiError
     */
    public static modeldriveaxlePartialUpdate(
id: number,
data: ModelDriveAxle,
): CancelablePromise<ModelDriveAxle> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/modeldriveaxle/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model drive axle.
     * @returns void 
     * @throws ApiError
     */
    public static modeldriveaxleDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/modeldriveaxle/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
