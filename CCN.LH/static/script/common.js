function jumpTo(a){
    //�Ӳ�����Ϊ�˷�ֹ��������棬��׿������תҳ��
    var n=parseInt(Math.random()*1000000);
    window.location.href=a+'.html?u='+n;
}
function PageTop(){
    $('body').animate({
        'scrollTop':0
    },300);
}