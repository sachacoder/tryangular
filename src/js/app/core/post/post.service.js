'use strict';

angular.
    module('post').
        factory('Post', function($resource) {
            var url = '/data/data.json'
            return $resource(url, {}, {
                query: {
                    method: "GET",
                    params: {},
                    isArray: true,
                    cache: true
                    //transformResponse
                    //interceptor
                },
                get: {
                    method: "GET",
                    //params: {"id",@id},
                    isArray: true,
                    cache: true
                }
            })
    });