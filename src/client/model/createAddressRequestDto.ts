/**
 * Pressy Admin API
 * Cœur du système pressy
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { CreateAddressRequestDtoCoordinates } from './createAddressRequestDtoCoordinates';


/**
 * 
 */
export interface CreateAddressRequestDto { 
    /**
     * 
     */
    name?: string;
    /**
     * 
     */
    extraLine?: string;
    /**
     * 
     */
    googlePlaceId?: string;
    coordinates?: CreateAddressRequestDtoCoordinates;
}
