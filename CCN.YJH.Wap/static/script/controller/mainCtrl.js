var app=angular.module('myApp',['ng']);
app.controller('mainCtrl',['$scope',function($scope){
    main={};
    //��תҳ��
    main.jumpTo=function(url,id,back){
        window.location.href=url+'.html?back='+back+'&id='+id;
    };
    $scope.main=main;
}]);