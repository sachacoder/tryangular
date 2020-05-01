'use strict';

angular.module('try').
config(
    function(
        $locationProvider,
        $routeProvider
        ){
            $routeProvider.when("/",{
                template: "<blog-List></blog-List>"
            })
            .when ("/about", {
                templateUrl: "/templates/about.html"    
            })
            .when("/blog/:id", {
                template: "<blog-Detail></blog-Detail>"
            })
            .otherwise ({
                template: "<h1>Not Found 222</h1>"    
            })
       $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

});