/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Machine } from '../models/Machine';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MachineService {

    /**
     * @param serNumMIcontains 
     * @param modelMTitle 
     * @param modelETitle 
     * @param modelTTitle 
     * @param modelDaTitle 
     * @param modelSaTitle 
     * @returns Machine 
     * @throws ApiError
     */
    public static machineList(
serNumMIcontains?: string,
modelMTitle?: string,
modelETitle?: string,
modelTTitle?: string,
modelDaTitle?: string,
modelSaTitle?: string,
): CancelablePromise<Array<Machine>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/machine/',
            query: {
                'serNumM__icontains': serNumMIcontains,
                'modelM__title': modelMTitle,
                'modelE__title': modelETitle,
                'modelT__title': modelTTitle,
                'modelDA__title': modelDaTitle,
                'modelSA__title': modelSaTitle,
            },
        });
    }

    /**
     * @param data 
     * @returns Machine 
     * @throws ApiError
     */
    public static machineCreate(
data: Machine,
): CancelablePromise<Machine> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/machine/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this machine.
     * @returns Machine 
     * @throws ApiError
     */
    public static machineRead(
id: number,
): CancelablePromise<Machine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/machine/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this machine.
     * @param data 
     * @returns Machine 
     * @throws ApiError
     */
    public static machineUpdate(
id: number,
data: Machine,
): CancelablePromise<Machine> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/machine/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this machine.
     * @param data 
     * @returns Machine 
     * @throws ApiError
     */
    public static machinePartialUpdate(
id: number,
data: Machine,
): CancelablePromise<Machine> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/machine/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this machine.
     * @returns void 
     * @throws ApiError
     */
    public static machineDelete(
id: number,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/machine/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
