'use strict';

angular.module('blogDetail').
component('blogDetail', {
    templateUrl: '/templates/blog-detail.html',
    controller: function($location, $routeParams, $scope) {
        console.log($routeParams.id);
          var blogItems = [
              {title:"some title1", id:1, description:"This is a book1"},
              {title:"some title2", id:2, description:"This is a book2"},
              {title:"some title3", id:3, description:"This is a book3"},
              {title:"some title4", id:4, description:"This is a book4"},
              {title:"some title5", id:5, description:"This is a book5"},
          ]
          $scope.items = blogItems;
          $scope.title = "Blog "+$routeParams.id
          $scope.notFound = false;
          angular.forEach(blogItems, function (blogItem) {
              if(blogItem.id == $routeParams.id) {
                  $scope.post = blogItem
                  

              }
          });
          if ($scope.notFound) {
            console.log("Not Found")
            $location.path("/404")
          }
     }
});

