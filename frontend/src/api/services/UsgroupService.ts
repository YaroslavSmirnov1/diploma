/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSilant } from '../models/UserSilant';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsgroupService {

    /**
     * @param search A search term.
     * @returns UserSilant 
     * @throws ApiError
     */
    public static usgroupList(
search?: string,
): CancelablePromise<Array<UserSilant>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/usgroup/',
            query: {
                'search': search,
            },
        });
    }

}
