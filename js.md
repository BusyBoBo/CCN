# �����ǳ��õĴ����ռ���û���κμ�������


1������дת������

```js
//��ʽת��
function transform(tranvalue) {
    try {
        var i = 1;
        var dw2 = new Array("", "��", "��"); //��λ
        var dw1 = new Array("ʰ", "��", "Ǫ"); //С��λ
        var dw = new Array("��", "Ҽ", "��", "��", "��", "��", "½", "��", "��", "��"); //����������
        //������Сдת���ɴ�д��ʾ�ںϼƴ�д���ı�����     
        //����������С��
        var source = splits(tranvalue);
        var num = source[0];
        var dig = source[1];
        //ת����������
        var k1 = 0; //��С��λ
        var k2 = 0; //�ƴ�λ
        var sum = 0;
        var str = "";
        var len = source[0].length; //�����ĳ���
        for (i = 1; i <= len; i++) {
              var n = source[0].charAt(len - i); //ȡ��ĳ��λ���ϵ�����
              var bn = 0;
              if (len - i - 1 >= 0) {
                bn = source[0].charAt(len - i - 1); //ȡ��ĳ��λ��ǰһλ�ϵ�����
              }
              sum = sum + Number(n);
              if (sum != 0) {
                str = dw[Number(n)].concat(str); //ȡ�ø����ֶ�Ӧ�Ĵ�д���֣������뵽str�ַ�����ǰ��
                if (n == '0') sum = 0;
              }
              if (len - i - 1 >= 0) { //�����ַ�Χ��
                if (k1 != 3) { //��С��λ
                      if (bn != 0) {
                        str = dw1[k1].concat(str);
                      }
                      k1++;
                } else { //����С��λ���Ӵ�λ
                      k1 = 0;
                      var temp = str.charAt(0);
                      if (temp == "��" || temp == "��") //����λǰû����������ȥ��λ
                      str = str.substr(1, str.length - 1);
                      str = dw2[k2].concat(str);
                      sum = 0;
                }
              }
              if (k1 == 3){ //С��λ��ǧ���λ��һ
                k2++;
              }
        }
        //ת��С������
        var strdig = "";
        if (dig != "") {
              var n = dig.charAt(0);
              if (n != 0) {
                strdig += dw[Number(n)] + "��"; //������
              }
              var n = dig.charAt(1);
              if (n != 0) {
                strdig += dw[Number(n)] + "��"; //������
              }
        }
        str += "Ԫ" + strdig;
    } catch(e) {
        return "0Ԫ";
    }
    return str;
}
//���������С��
function splits(tranvalue) {
    var value = new Array('', '');
    temp = tranvalue.split(".");
    for (var i = 0; i < temp.length; i++) {
        value = temp;
    }
    return value;
}