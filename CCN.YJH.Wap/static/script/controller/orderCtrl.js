app.controller('cartCtrl',['$scope','$location','$timeout',function($scope,$location,$timeout){
    cart={};
    cart.isLoading=false;
    //������һҳ��
    var urls=$location.absUrl();
    var b=urls.search('back')+5;
    var c=urls.search('&');
    cart.back=urls.slice(b,c);
    if(cart.back=='true'){
        cartPopShow();
    }
    //������һҳ�����
    //�һ���Ʒ
    cart.exchangeR=function(){
        $('.pop_box').hide();
        cart.isLoading=true;
        $timeout(function(){
            cart.isLoading=false;
            $('.exchange_result').show();
        },1000);
    }
    //�һ���Ʒ����
    $scope.cart=cart;
}]);