var app = angular.module('App', ['ngMaterial']);


app.controller('appCtrl', function ($scope) {

    $scope.currentNavItem = 'page1';

    $scope.goto = function (page) {
        console.log("Goto " + page);
    }


    //Side Nav
    $scope.imagePath = 'Images/logo2.jpg';

});