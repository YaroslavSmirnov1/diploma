/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Claim } from '../models/Claim';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClaimService {

    /**
     * @param machineSerNumMIcontains 
     * @param typeFailureTitle 
     * @param recMethodTitle 
     * @param machineUserServiceTitle 
     * @returns Claim 
     * @throws ApiError
     */
    public static claimList(
machineSerNumMIcontains?: string,
typeFailureTitle?: string,
recMethodTitle?: string,
machineUserServiceTitle?: string,
): CancelablePromise<Array<Claim>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/claim/',
            query: {
                'machine__serNumM__icontains': machineSerNumMIcontains,
                'typeFailure__title': typeFailureTitle,
                'recMethod__title': recMethodTitle,
                'machine__userService__title': machineUserServiceTitle,
            },
        });
    }

    /**
     * @param data 
     * @returns Claim 
     * @throws ApiError
     */
    public static claimCreate(
data: Claim,
): CancelablePromise<Claim> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/claim/',
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this claim.
     * @returns Claim 
     * @throws ApiError
     */
    public static claimRead(
id: number,
): CancelablePromise<Claim> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/claim/{id}/',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param id A unique integer value identifying this claim.
     * @param data 
     * @returns Claim 
     * @throws ApiError
     */
    public static claimUpdate(
        id: number | undefined,
        data: Claim,
    ): CancelablePromise<Claim> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/claim/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this claim.
     * @param data 
     * @returns Claim 
     * @throws ApiError
     */
    public static claimPartialUpdate(
id: number,
data: Claim,
): CancelablePromise<Claim> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/claim/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }

    /**
     * @param id A unique integer value identifying this claim.
     * @returns void 
     * @throws ApiError
     */
    public static claimDelete(
        id: number | undefined,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/claim/{id}/',
            path: {
                'id': id,
            },
        });
    }

}
