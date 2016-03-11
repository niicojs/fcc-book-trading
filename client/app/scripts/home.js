(function() {
    
    var app = angular.module('myApp');
  
    app.controller('homeCtrl', ["$scope", '$http', "$location", "adalAuthenticationService",
        function ($scope, $http, $location, adal) {
            var vm = this;
            
            vm.loading = true;
            vm.message = "";
            vm.books = [];
            vm.trades = [];
            
            var handleError = function(resp) {
                vm.loading = false;
                vm.message = resp.data;
                console.log(resp.data);
            };
            
            if (adal.userInfo.isAuthenticated) {
                $http.get("/api/book/my").then(function(resp) {
                    vm.loading = false;
                    vm.books = resp.data.my;
                    vm.trades = resp.data.trades;
                    
                }, handleError);
            }
        }
    ]);
  
}());
