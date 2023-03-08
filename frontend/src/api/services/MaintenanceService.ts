/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Maintenance } from '../models/Maintenance';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MaintenanceService {

    /**
     * @param machineSerNumMIcontains 
     * @param typeTitle 
     * @param serviceCompanyTitle 
     * @returns Maintenance 
     * @throws ApiError
     */
    public static maintenanceList(
machineSerNumMIcontains?: string,
typeTitle?: string,
serviceCompanyTitle?: string,
): CancelablePromise<Array<Maintenance>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance/',
            query: {
                'machine__serNumM__icontains': machineSerNumMIcontains,
                'type__title': typeTitle,
                'serviceCompany__title': serviceCompanyTitle,
            },
        });
    }

    /**
     * @param data 
     * @returns Maintenance 
     * @throws ApiError
     */
    public static maintenanceCreate(
data: Maintenance,
): CancelablePromise<Maintenance> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maintenance/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this maintenance.
     * @returns Maintenance 
     * @throws ApiError
     */
    public static maintenanceRead(
id: number,
): CancelablePromise<Maintenance> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/maintenance/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this maintenance.
     * @param data 
     * @returns Maintenance 
     * @throws ApiError
     */
    public static maintenanceUpdate(
id: number,
data: Maintenance,
): CancelablePromise<Maintenance> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/maintenance/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this maintenance.
     * @param data 
     * @returns Maintenance 
     * @throws ApiError
     */
    public static maintenancePartialUpdate(
id: number,
data: Maintenance,
): CancelablePromise<Maintenance> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/maintenance/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this maintenance.
     * @returns void 
     * @throws ApiError
     */
    public static maintenanceDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/maintenance/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
