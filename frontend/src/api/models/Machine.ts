/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Machine = {
    readonly id?: number;
    serNumM: string;
    modelM?: number | null;
    readonly modelm_title?: string;
    readonly modelm_description?: string;
    modelE?: number | null;
    readonly modele_title?: string;
    readonly modele_description?: string;
    serNumE: string;
    modelT?: number | null;
    readonly modelt_title?: string;
    readonly modelt_description?: string;
    serNumT: string;
    modelDA?: number | null;
    readonly modelda_title?: string;
    readonly modelda_description?: string;
    serNumDA: string;
    modelSA?: number | null;
    readonly modelsa_title?: string;
    readonly modelsa_description?: string;
    serNumSA: string;
    NumSupContract: string;
    dateShipmentFactory: string;
    consignee: string;
    addressOperation: string;
    equipment: string;
    readonly user?: string;
    userClient: number;
    readonly service_company?: string;
    userService: number;
};
