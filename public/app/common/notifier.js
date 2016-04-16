angular.module('app').value('myToastr', toastr);

angular.module('app').factory('notifier', function(toastr){
   return   {
       notify: function (msg) {
       }
   }
});