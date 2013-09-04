'use strict';

var App = angular.module('App', ['ui.bootstrap']);

App.controller('MainCtrl', function($scope, $routeParams) {

    // Tabs
    $scope.tabs = [
        { title:"Tab 1", template:"templates/tpl1.html", active: false},
        { title:"Tab 2", template:"templates/tpl2.html", active: false},
		{ title:"Tab 3", template:"templates/tpl3.html", active: false }
    ];
    
    $scope.renderTabTemplate = function(tabIndex) {
        return $scope.tabs[tabIndex].template;
    };  
    
    // Active tab - selection based on value in route
    $scope.activeTab = 0;
    $scope.tabs[$scope.activeTab].active = true;
    
    // Find index of active tab
    $scope.active = function() {
        for (var i=0;i<$scope.tabs.length;i++) {
            if ($scope.tabs[i].active) {
                return i;
            }            
        }
    };

    // When tab is changed
    $scope.$watch('active()', function(tabIndex) {
        console.log(tabIndex);
     });


});
