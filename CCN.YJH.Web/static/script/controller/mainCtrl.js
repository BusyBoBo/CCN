var url_config = {};

url_config = {
    //url: 'http://localhost:39991/Ajax/RimulaServices.ashx'
    url:'../../../Ajax/RimulaServices.ashx'

};

var cart = {
    carlist: [],
    currentCart: {},
    currentSelectAdr: {},
    link: {
        man: localStorage.getItem("userLinkMan") || '���㲨',
        phone: localStorage.getItem("userLinkPhone") || '13788955988'
    },
    currentIndex: 0
};




//��ȡ������Ϣ���������������ֻ��š��ܻ���
function GetUserInfo() {
    var data = {
        'action': '8',
        'userid': 'c786e011d1fb4a5996c7499e7ff28ecc',       //�û�id
    };

    $.ajax({
        type: "get",
        url: url_config.url,
        data: data,
        dataType: "json",
//        dataType: "jsonp",
//        jsonp: "callback",//���ݸ�����������ҳ��ģ����Ի��jsonp�ص��������Ĳ�����(һ��Ĭ��Ϊ:callback)
        success: function (data){

            var message = data.message;
            if (data.state == 0) {
                var json = JSON.parse(data.data);

                $("#nav_left_name").html(json[0].STORELINKMAN);
                $("#span_leftpoint").html(json[0].USERPOINTS);
                
            } else {

            }
        },
        error: function (e)
        {
        }
    });
}




var app=angular.module('myApp',['ng', 'R5E.services']);
app.controller('mainCtrl',['$scope','$timeout',function($scope,$timeout){
    main={};
    //��תҳ��
    main.jumpTo=function(url,id,back){
        window.location.href=url+'.html?back='+back+'&id='+id;
    };
    main.nav=function(){
        var oNavWrap=document.getElementById('nav_wrap');
        var aLi=oNavWrap.getElementsByTagName('li');
        var oDownLine=document.getElementById('line_move');
        var currentI=$('.list_current').index();
        var addMove_=parseInt(Math.pow(currentI,2.4));
        oDownLine.style.left=currentI*130+addMove_+'px';
        for(var i=0;i<aLi.length;i++){
            aLi[i].index=i;
            aLi[i].onmouseover=function(){
                var addMove=parseInt(Math.pow(this.index,2.4));
                startMove(oDownLine,{left:this.index*130+addMove},300,'easeOut');
            };
            aLi[i].onmouseout=function(){
                startMove(oDownLine,{left:currentI*130+addMove_},300,'easeOut');
            }
        }
    };
    main.nav();
    $scope.main=main;
}]);