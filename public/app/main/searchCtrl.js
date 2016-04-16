angular.module('app').controller('searchCtrl',function($scope, $http, searchService){
    $scope.search = function (supplierName, productName) {
        $http.get('/getDetails', {supplierName: supplierName, productName: productName}).then(function(response){
             if(response.data.success){

             }else{

             }
        });
        /*if(supplierName !== null && productName !== null){
            $scope.resultRecord = searchService.fetchResult(supplierName, productName);
        }else{
            notifier.notify('Please select supplier and product ');
        }*/
    }
});