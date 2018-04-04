// ------------- 건들지 마삼 ------------- 2008년 9월 19일 11시 42분 윤석규 //
function ajaxformmailProcess() {
	return false;
}

function ajaxProcessFormMailCallBack(req) {
	rsXml = Ajax.rltXml(req);
}
// ------------- 건들지 마삼 ------------- //

// 우편번호검색
function com_formmail_zipcode(name1, name2, name3)
{
	//window.open("/chtml/zipcode.php?com_zipcode_openerform=document.com_formmail&com_zipcode_openername1=document.com_formmail." + name1 + "&com_zipcode_openername2=document.com_formmail." + name2 + "&com_zipcode_openername3=document.com_formmail." + name3, "cafe_component_zipcode", "width=447,height=370,scrollbars=yes");
    window.open("/chtml/zipcode.php?com_zipcode_openerform=document.com_formmail&com_zipcode_openername1=" + name1 + "&com_zipcode_openername2=" + name2 + "&com_zipcode_openername3=" + name3, "cafe_component_zipcode", "width=447,height=370,scrollbars=yes");
}

// 폼체크
var comFormmailFormCheckFlag=false;
function com_formmail_formCheck(this_form)
{
    if(comFormmailFormCheckFlag==true){
        return false;
    }
	Ajax.init("/cjs/ajax/ajax.formmail.php?com_formmail_id=1&template=/bizdemo26429", null, 'GET', null , null , false , false );

	var rsXml = Ajax.rltXml();

	if(this_form) {
		var fform	=	this_form;
	} else {
		var fform	=	"com_formmail";
	}

	//rsXml	=	Ajax.rltXml();
	var xmlData	=	Ajax.rltXmlLoop(rsXml, "formmail_title");
	var tempArr	=	new Array();

	for(var i = 0; i < xmlData.length; i++) {
		tempArr[i]	=	new Array();
		tempArr[i]["code"]	=	Ajax.rltXmlOnce(xmlData[i], "code");
		tempArr[i]["name"]	=	Ajax.rltXmlOnce(xmlData[i], "name");
		tempArr[i]["attribute"]	=	Ajax.rltXmlOnce(xmlData[i], "attribute");
		tempArr[i]["necessary"]	=	Ajax.rltXmlOnce(xmlData[i], "necessary");
		tempArr[i]["attribute_value"]	=	Ajax.rltXmlOnce(xmlData[i], "attribute_value");

		if(Common.int(tempArr[i]["necessary"]) == 1) {
			switch (Common.int(tempArr[i]["attribute"])) {
				case	1	:	//일반텍스트
					FormCheck.setCheck(fform, tempArr[i]["code"], 'y', tempArr[i]["name"], '', '1-'+tempArr[i]["attribute_value"]);
					break;
				case	3	:	//이메일
					FormCheck.setCheck(fform, tempArr[i]["code"], 'y', tempArr[i]["name"], 'email');
					break;
				case	2	:	//testarea
				case	4	:	//URL
				case	9	:	//select
					FormCheck.setCheck(fform, tempArr[i]["code"], 'y', tempArr[i]["name"], '');
					break;
				case	5	:	//전화번호
					if(Common.int(tempArr[i]["attribute_value"]) == 2) {
						FormCheck.setCheck(fform, tempArr[i]["code"]+'0', 'y', tempArr[i]["name"], 'num', '1-4');
					}
					FormCheck.setCheck(fform, tempArr[i]["code"]+'1', 'y', tempArr[i]["name"], 'num', '1-4');
					FormCheck.setCheck(fform, tempArr[i]["code"]+'2', 'y', tempArr[i]["name"], 'num', '1-4');
					FormCheck.setCheck(fform, tempArr[i]["code"]+'3', 'y', tempArr[i]["name"], 'num', '1-4');
					break;
				case	6	:	//날짜
					FormCheck.setCheck(fform, tempArr[i]["code"]+'Y', 'y', tempArr[i]["name"], '');
					FormCheck.setCheck(fform, tempArr[i]["code"]+'M', 'y', tempArr[i]["name"], '');
					FormCheck.setCheck(fform, tempArr[i]["code"]+'D', 'y', tempArr[i]["name"], '');
					break;
				case	7	:	//주소
					if(Common.int(tempArr[i]["attribute_value"]) == 1) {
						FormCheck.setCheck(fform, tempArr[i]["code"]+'_post1', 'y', tempArr[i]["name"], 'num', '5-5');
						//FormCheck.setCheck(fform, tempArr[i]["code"]+'_post2', 'y', tempArr[i]["name"], 'num', '3-3');
					}
					FormCheck.setCheck(fform, tempArr[i]["code"], 'y', tempArr[i]["name"], '');
					break;
				case	8	:	//file
					FormCheck.setCheck(fform, tempArr[i]["code"]+'[]', 'y', tempArr[i]["name"], 'file', '', '', '');
					break;
				case	10	:	//체크박스
					FormCheck.setCheck(fform, tempArr[i]["code"]+'[]', 'y', tempArr[i]["name"], 'checkbox', '', '', '1');
					break;
				case	11	:	//라디오버튼
					FormCheck.setCheck(fform, tempArr[i]["code"], 'y', tempArr[i]["name"], 'checkbox', '', '', '');
					break;
				case	13	:	//휴대전화
					if(Common.int(tempArr[i]["attribute_value"]) == 1) {
    					FormCheck.setCheck(fform, tempArr[i]["code"]+'0', 'y', tempArr[i]["name"], '');
					}
					FormCheck.setCheck(fform, tempArr[i]["code"]+'1', 'y', tempArr[i]["name"], 'num', '1-4');
					FormCheck.setCheck(fform, tempArr[i]["code"]+'2', 'y', tempArr[i]["name"], 'num', '1-4');
					FormCheck.setCheck(fform, tempArr[i]["code"]+'3', 'y', tempArr[i]["name"], 'num', '1-4');
					break;
			}
		}

	}

	// 개인정보의 수집 및 이용목적 체크
	if(eval(document.com_formmail.com_formmail_check_safe) != undefined) {
		FormCheck.setCheck(fform, 'com_formmail_check_safe', 'y', '개인정보의 수집 및 이용목적', 'checkbox', '', '', '');
	}

     //개인정보 수집 동의 사용자 임의로 삽입하는 경우 추가.2011.05.11
    if(eval(document.com_formmail.com_formmail_check_safe_user_add) != undefined) {
		FormCheck.setCheck(fform, 'com_formmail_check_safe_user_add', 'y', '개인정보의 수집 및 이용목적', 'checkbox', '', '', '');
	}

	if(FormCheck.init(fform) == true) {
		var f = document.forms['com_formmail'];
		f.target='';
		if(typeof(gRelay) != "undefined")
		{
			//gRelay.relayForm('com_formmail');
            gRelay.relayForm(f);
		}
        // 스팸코드체크
        try {
            if(!document.getElementsByName('captcha_code')[0].value) {
                alert('스팸방지문자를 입력해 주세요.');
                document.getElementsByName('captcha_code')[0].focus();
                return false;
            }
        } catch (e){}
        comFormmailFormCheckFlag=true;
		f.submit();

		//return true;
	}

	return false;
	//return true;
	//return FormCheck.init(fform);
}