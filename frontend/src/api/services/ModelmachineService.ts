/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ModelMachine } from '../models/ModelMachine';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModelmachineService {

    /**
     * @returns ModelMachine 
     * @throws ApiError
     */
    public static modelmachineList(): CancelablePromise<Array<ModelMachine>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modelmachine/',
        });
    }

    /**
     * @param data 
     * @returns ModelMachine 
     * @throws ApiError
     */
    public static modelmachineCreate(
data: ModelMachine,
): CancelablePromise<ModelMachine> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/modelmachine/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model machine.
     * @returns ModelMachine 
     * @throws ApiError
     */
    public static modelmachineRead(
id: number,
): CancelablePromise<ModelMachine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/modelmachine/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this model machine.
     * @param data 
     * @returns ModelMachine 
     * @throws ApiError
     */
    public static modelmachineUpdate(
        id: number | undefined,
        data: ModelMachine,
    ): CancelablePromise<ModelMachine> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/modelmachine/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model machine.
     * @param data 
     * @returns ModelMachine 
     * @throws ApiError
     */
    public static modelmachinePartialUpdate(
id: number,
data: ModelMachine,
): CancelablePromise<ModelMachine> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/modelmachine/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this model machine.
     * @returns void 
     * @throws ApiError
     */
    public static modelmachineDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/modelmachine/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
