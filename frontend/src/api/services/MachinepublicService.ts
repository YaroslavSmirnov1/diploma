/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MachinePublic } from '../models/MachinePublic';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MachinepublicService {

    /**
     * @param search A search term.
     * @returns MachinePublic 
     * @throws ApiError
     */
    public static machinepublicList(
search?: string,
): CancelablePromise<Array<MachinePublic>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/machinepublic/',
            query: {
                'search': search,
            },
        });
    }

}
