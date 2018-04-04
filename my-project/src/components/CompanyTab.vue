<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6" style="margin-top: 100px; width: 100%">
        <hr>
        <div class="row">
          <div class="col-lg-12">
            <h1>COMPANY</h1>
            <md-content class="md-elevation-3" style="margin-top: 15px">
              <h6 style="text-align: left; padding: 5px;font: 14px Tahoma, Geneva, sans-serif;">자앤은 뛰어난 연구력과 전달력으로 수준 높은 기술을 체계적으로 제공합니다.<br><br>
              시간만 축내는 교육과는 차원이 다른 양질의 교육 서비스와 컨설팅 그리고 적은 비용으로 R&D 조직을 운영할 수 있도록 초기 진입을 위한 가이드를 제공합니다.<br><br>
              자앤은 과거 한국썬교육센터와 비트컴퓨터에서 활동하던 강사진이 국내외 주요 IT기업에서 10여년간의 연구개발업무를 경험하고 이를 바탕으로 수준높고 체계적인 서비스를 제공하고자는 뜻을 모아 만들어 졌습니다.<br><br>
              자바를 기반으로 하는 모바일, 웹(HTML5), 임베디드, IDE 영역을 연구 개발 경험을 토대로 깊이 있는 기술적 지식을 가지고 있습니다. 몸에 베어 있는 체계적인 강의 스킬로 쉽고 빠르고 전달력있게 제공합니다. 자앤은 잘 모르는 분야를 무턱대고 서비스 하지 않습니다.</h6></md-content>
          </div>
        </div>
        <div class="col-lg-12" style="margin-top: 50px">
          <h1>COURSES</h1>
          <md-content class="md-elevation-3" style="margin-top: 15px; padding: 20px">
            <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif; ">Java</md-button>
            <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif;">Android</md-button>
            <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif;">HTML5</md-button>
            <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif;">Tizen</md-button>
            <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif;">Analysis & Design</md-button>
            <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif;">UML</md-button>
          </md-content>
        </div>
      </div>
      <div class="col-lg-6 col-md-10 " style="margin-top:100px; width: 100%">
        <hr>
        <h1>INSTRUCTORS</h1>
        <div class="row">
          <div class="col-lg-6" style="margin-top: 15px" v-for="List in Lists">
            <instrutors-tag :List="List" @popOpen="popFunc"></instrutors-tag>
          </div>
        </div>
      </div>
      <md-dialog :md-active.sync="showDialog" style="background-color: white">
        <md-dialog-title style="background-color: #353b4f; color: white; padding: 15px">{{modalTitle}}</md-dialog-title>
        <ul class="nav nav-tabs" id="myTab" role="tablist" style="padding: 20px; padding-top: 0px; padding-bottom: 1px; border-bottom: 1px solid #353b4f;">
          <li class="nav-item" style="padding-top: 0px">
            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">강의 사이트</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" >강의 과목</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent" style="padding: 20px;">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab" style="height: 150px; font: 14px Tahoma, Geneva, sans-serif;">{{modalSite}}</div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab" style="height: 150px; font: 14px Tahoma, Geneva, sans-serif;">{{modalContents}}</div>
        </div>
        <md-dialog-actions>
          <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; ">확인</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script>
    export default {
        name: "company-tab",
      data () {
        return{
          showDialog: false,
          modalContents: "",
          modalTitle: "",
          modalSite: "",
          Lists:[
            {
              Name: "박정님",
              imgUrl: "../../static/img/person/pjn.png",
              CEO: "1"
            },
            {
              Name: "박상진",
              imgUrl: "../../static/img/person/psj.png",
              CEO: "0"
            },
            {
              Name: "김영환",
              imgUrl: "../../static/img/person/kyh.png",
              CEO: "0"
            },
            {
              Name: "신동진",
              imgUrl: "../../static/img/person/sdj.png",
              CEO: "0"
            },
            {
              Name: "이세우",
              imgUrl: "../../static/img/person/lsw.png",
              CEO: "0"
            },
            {
              Name: "이세준",
              imgUrl: "../../static/img/person/lsj.png",
              CEO: "0"
            },
            {
              Name: "김동근",
              imgUrl: "../../static/img/person/kdk.png",
              CEO: "0"
            },
            {
              Name: "김현주",
              imgUrl: "../../static/img/person/khj.png",
              CEO: "0"
            }
          ]
        }
      },
      methods: {
        popFunc: function (type,name) {
          var me = this;
          if(type === 1 && name === "박정님"){
            me.modalTitle = "강의 소개";
            me.modalSite = "삼성전자, 엘지전자, Sun Microsystmes, MDS 테크놀로지 ㈜, 한양대학교, 삼성멀티캠퍼스 외 다수"
            me.modalContents = "안드로이드 Application, 안드로이드 Workshop 컨텐츠 개발 및 강의 HTML5 , WebApp, HybridApp 관련 기술 컨텐츠 개발 및 강의 SW Modeling, UML2.0 컨텐츠 개발 및 강의 자바 관련 기술 컨텐츠 개발 및 강의 Project 분석,설계"
            me.showDialog = true;
          }else if(type === 1 && name === "박상진"){
            me.modalTitle = "강의 소개";
            me.modalSite = "삼성전자, 엘지전자, Sun Microsystmes, SK하이닉스, MDS 테크놀로지 ㈜, 삼성멀티캠퍼스, 팬택 외 다수"
            me.modalContents = "Java Programming, Java Project 고급 ,Android Application Programming, Advanced Android Application, 품질 향상을 위한 Android Project, SW 디자인 패턴 & 리팩토링, 안드로이드플랫폼을 위한 SQLite 활용, HTML5 Mobile WebApp, 개발 멀티 플랫폼 기반의 Hybrid Mobile App Project Design Patterns"
            me.showDialog = true;
          }else if(type === 1 && name === "김영환"){
            me.modalTitle = "강의 소개";
            me.modalSite = "국민은행,쌍용정보통신,주택은행, 한국 썬 마이크로시스템즈 교육센타, 한국능률협회, 한국무역협회, LG CNS, 삼성멀티캠퍼스, 현대정보기술, 현대중공업 등 외 다수"
            me.modalContents = "Fundamentals of Java Programming Language, Java Programming Language, Java Application Project, Advanced Java Programming, Database Application Programming with Java Technology, Servlet & JSP with JDBC Workshop, Web Component Development Using Servlet & JSP, Distributed Programming with Java (RMI), Managing XML with the Java Platform,HP-UX, Solaris, Linux 기본, 시스템,네트웍관리,쉘프로그래밍,Android Application Programming HTML5, WebApp, HybridApp 개발,스마트폰을 위한 Java,Advanced Java Programming"
            me.showDialog = true;
          }else if(type === 1 && name === "신동진"){
            me.modalTitle = "강의 소개";
            me.modalSite = "삼성전자, LG전자, 팬택, 현대정보 , 한국썬 교육센타 쌍용정보통신, LG CNS, 현대정보기술, 한국무역정보통신, KCC, 삼성SDS외 다수"
            me.modalContents = "Fundmentals of Java Programming ,Java Programming Language ,Advanced Java Programming Workshop ,Java Servlet &JSP Technology ,Distributed Programming with RMI,CORBA ,Java 관련 기술 컨텐츠 개발 및 교육 ,Android 관련 기술 컨텐츠 개발 및 교육 ,HTML5, WebApp,HybridApp 컨텐츠 개발 및 교육"
            me.showDialog = true;
          }else if(type === 1 && name === "이세준"){
            me.modalTitle = "강의 소개";
            me.modalSite = "삼성전자, 엘지전자, Sun Microsystmes, MDS 테크놀로지 ㈜, 포스코ICT, 팬택, 삼성멀티캠퍼스 외 다수"
            me.modalContents = "Java Programming Java Project 고급 Android Application Programming , Advanced Android Application, SQLite 활용 품질 향상을 위한Android Project, SW 디자인 패턴 & 리팩토링 안드로이드플랫폼을 위한 SQLite 활용 HTML5 Mobile WebApp 개발 멀티 플랫폼 기반의 Hybrid Mobile App Project"
            me.showDialog = true;
          }else if(type === 1 && name === "김동근"){
            me.modalTitle = "강의 소개";
            me.modalSite = "삼성전자, LG전자, 팬택, 현대모비스 MDS, 한국전자진흥회 외 다수"
            me.modalContents = "스마트폰을 위한 Java Java 고급 Project Android Application Android Application Project HTML5 를 이용한 WebApp개발 Oracle SQL, JDBC Programming Web 관련 기술(Servlet, JSP, Javascript, jQuery등) Frameworks(Struts, Spring, myBatis등"
            me.showDialog = true;
          }else if(type === 1 && name === "김현주"){
            me.modalTitle = "강의 소개";
            me.modalSite = "삼성전자, 엘지전자, MDS 테크놀로지 ㈜, 삼성멀티캠퍼스 외 다수"
            me.modalContents = "안드로이드 Application, 안드로이드 Workshop 컨텐츠 개발 및 강의 HTML5 , WebApp, SW Modeling, UML2.0, 컨텐츠 개발 및 강의 자바 관련 기술 컨텐츠 개발 및 강의 Project 분석,설계"
            me.showDialog = true;
          }
        }
      }
    }
</script>

<style scoped>
  .post-contents{
    font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  .pro-btn{
    margin-bottom: 5px;
    width: 350px;
  }
  .md-ripple {
     border: 1px solid;
  }
  .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    background-color: #353b4f;
    color: white
  }
</style>
