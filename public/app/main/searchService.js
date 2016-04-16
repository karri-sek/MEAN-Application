/*global angular */


/**
 * Services that persists and retrieves details from localStorage.
 *
 * They both follow the same API, returning promises for all changes to the
 * model.
 */


   
angular.module('app')
    .factory('searchService', function ($http, $injector) {
        'use strict';
        return {
            fetchResult: function (supplierName, productName) {
                var result = {
                    supplier: supplierName,
                    product: productName,
                    price: 20
                };
                return result;
            }
        };
    });