app.controller('addressCtrl',['$scope','$location',function($scope,$location){
    address={};
    // //����ǰһҳ��
    address.id=$location.absUrl().slice(-3);
    address.back=function(){
        if(address.id=='ned'){
            main.jumpTo('cart',address.id,true);
        }else{
            main.jumpTo('detail',address.id,true);
        }
    };
    //����ǰһҳ�����
    //��ַ�޸�
    address.modify=function(){
        $('.pop_modify').show();
    };
    //��ӵ�ַ
    address.add_address=function(){
        $('.pop_add').show();
    };
    //�޸ĺ�ر�ҳ��
    address.closeModify=function(){
        $('.pop_modify,.pop_add').hide();
    };
    //ɾ����ַ
    address.deleteAd=function(){
        var otrash=document.getElementsByClassName('delete_address');
        var oAddress=document.getElementsByClassName('address_list');
        console.log(otrash);
        var ind;      //ɾ�����ﳵ�����
        for(var i=0;i<otrash.length;i++){
            otrash[i].index=i;
            otrash[i].onclick=function(){
                console.log(this);
                ind=this.index;
                startMove(oAddress[ind],{opacity:0},300,'easeOut',function(){
                    startMove(oAddress[ind],{height:0},300,'easeOut');
                });
            };
        }
    };
    address.deleteAd();
    //ɾ����ַ����
    $scope.address=address;
}]);