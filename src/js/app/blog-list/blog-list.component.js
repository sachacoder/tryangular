'use strict';

angular.module('blogList').
component('blogList', {
    //template: "<div class''>{{title}}<button ng-click='someClickTest()'>Click Me!</button></div>",
    templateUrl: '/templates/blog-list.html',
    controller: function($http, $routeParams, $scope) {
        console.log($routeParams.id);

        var onSuccess = function(data, status, headers, config){
            $scope.items = data;
            console.log($scope.items)
        }
        
        var onError = function(data, status, headers, config){
            $scope.status = status;
        }

        var promise = $http.get("/data/data.json");

        promise.success(onSuccess);
        promise.error(onError);
        $scope.title = "Test with http";
        $scope.items = 
        $scope.clicks = 0;
        $scope.someClickTest= function(){
            console.log("clicked");
            $scope.clicks += 1;
            $scope.title = "Clicked "+ $scope.clicks + " times";    
        }

        /*
        var blogItems = [
              {title:"some title1", id:1, description:"This is a book1"},
              {title:"some title2", id:2, description:"This is a book2"},
              {title:"some title3", id:3, description:"This is a book3"},
              {title:"some title4", id:4, description:"This is a book4"},
              {title:"some title5", id:5, description:"This is a book5"},
          ]
          $scope.items = blogItems;
        console.log("hello there!");
        $scope.title = "Hi from controller scope!"
        $scope.clicks = 0;
        $scope.someClickTest= function(){
            console.log("clicked");
            $scope.clicks += 1;
            $scope.title = "Clicked "+ $scope.clicks + " times";    
        }
        */
    }
});
