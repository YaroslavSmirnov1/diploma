/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Claim = {
    readonly id?: number;
    dateRejection: string;
    operTime: number;
    readonly typefailure_title?: string;
    readonly typefailure_description?: string;
    failDescription: string;
    readonly recmethode_title?: string;
    readonly recmethode_description?: string;
    spareParts: string;
    dateRecovery: string;
    downtime?: number;
    readonly machine_title?: string;
    readonly service_company?: string;
    typeFailure: number;
    recMethod: number;
    machine: number;
};
