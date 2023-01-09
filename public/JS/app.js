(function () {
    'use strict';

    angular.module('myApp', ["ngRoute"])

    .controller("Fltr", function ($scope, $http) {
        $http.get("http://localhost:3000/filterdata")
        .then(function (response) {
            $scope.fd = response.data;
            console.log($scope.fd);
            $scope.rowlimit = 3;
            $scope.orderByMe = function (x) {
                $scope.myOrderBy = x;
            }

            $scope.changeColorFilter = function (item) {

                if (item.distance > 40) {
                    item.class = 'High';
                }
                else if (item.distance < 20) {
                    item.class = 'Low';
                }
                else {
                    item.class = 'Medium';
                }

                return true;

            };
        })
    })

    .config(function ($routeProvider) {
        $routeProvider
            .when("/filter", {
                templateUrl: "Filter.html",
                controller: "Fltr"
            })
    })

})();