/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelTransmission } from '../models/ModelTransmission';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModeltransmissionService {

    /**
     * @returns ModelTransmission 
     * @throws ApiError
     */
    public static modeltransmissionList(): CancelablePromise<Array<ModelTransmission>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modeltransmission/',
        });
    }

    /**
     * @param data 
     * @returns ModelTransmission 
     * @throws ApiError
     */
    public static modeltransmissionCreate(
data: ModelTransmission,
): CancelablePromise<ModelTransmission> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/modeltransmission/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model transmission.
     * @returns ModelTransmission 
     * @throws ApiError
     */
    public static modeltransmissionRead(
id: number,
): CancelablePromise<ModelTransmission> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modeltransmission/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this model transmission.
     * @param data 
     * @returns ModelTransmission 
     * @throws ApiError
     */
    public static modeltransmissionUpdate(
        id: number | undefined,
        data: ModelTransmission,
    ): CancelablePromise<ModelTransmission> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/modeltransmission/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model transmission.
     * @param data 
     * @returns ModelTransmission 
     * @throws ApiError
     */
    public static modeltransmissionPartialUpdate(
id: number,
data: ModelTransmission,
): CancelablePromise<ModelTransmission> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/modeltransmission/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model transmission.
     * @returns void 
     * @throws ApiError
     */
    public static modeltransmissionDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/modeltransmission/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
