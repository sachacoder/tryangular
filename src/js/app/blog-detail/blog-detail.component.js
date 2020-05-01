'use strict';

angular.module('blogDetail').
component('blogDetail', {
    templateUrl: '/templates/blog-detail.html',
    controller: function(Post, $location, $routeParams, $scope) {
        
        console.log(Post.query())
        console.log(Post.get())

        Post.query(function(data) {
            angular.forEach(data, function (data) {
                if(data.id == $routeParams.id) {
                    $scope.item = data
                }
            });
        })
        console.log($routeParams.id);
         
        $scope.title = "Blog "+$routeParams.id
        $scope.notFound = false;
        if ($scope.notFound) {
        console.log("Not Found")
        $location.path("/404")
        }
     }
});

