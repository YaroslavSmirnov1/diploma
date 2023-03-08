/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenCreate } from '../models/TokenCreate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Use this endpoint to obtain user authentication token.
     * @param data 
     * @returns TokenCreate 
     * @throws ApiError
     */
    public static authTokenLoginCreate(
data: TokenCreate,
): CancelablePromise<TokenCreate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token/login/',
            body: data,
        });
    }

    /**
     * Use this endpoint to logout user (remove user authentication token).
     * @returns any 
     * @throws ApiError
     */
    public static authTokenLogoutCreate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/token/logout/',
        });
    }

}
