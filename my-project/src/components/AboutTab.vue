<template>
  <div class="container-fluid">
  <div class="row">
    <div class="col-lg-6 col-md-10 " style="margin-top:100px; width: 100%">
      <div class="row">
        <div class="col-lg-6">
          <md-card>
            <md-card-header style="padding: 0px">
              <md-card-header-text>
                <div class="md-title">WELCOME TO <br>JAEN CENTER</div>
                <div class="md-subhead"><label style="color: #005cbf">jean is an expert group for Korea IT...</label></div>
                <md-card-content style="text-align: left">
                  자앤은 Java를 기반으로 하는 다양한 영역에 축적된 지식과 경험으로 컨설팅, 프로토타이핑, 교육을 전문으로 하는 기업입니다. 기업체 위탁교육 및 IT 교육 사업 및 컨설팅으로, 귀사의 기술력과 경쟁력을 향상 시키는데 가장 좋은 선택이 될 것입니다. 자바와 안드로이드 관련된 교육은 자앤(Jaen)에 맡겨 주십시오.
                </md-card-content>
              </md-card-header-text>
            </md-card-header>
          </md-card>
        </div>
        <div class="col-lg-6">
          <md-card>
            <md-card-header style="padding: 0px">
              <md-card-header-text>
                <div class="md-title">APPROACH TO IT EDUCATION!</div>
                <!--<md-card-media>
                  <img src="../../static/img/about-bg.jpg" alt="People">
                </md-card-media>-->
                <md-card-content style="text-align: left">
                  자앤은 Java를 기반으로 하는 다양한 영역에 축적된 지식과 경험으로 컨설팅, 프로토타이핑, 교육을 전문으로 하는 기업입니다. 기업체 위탁교육 및 IT 교육 사업 및 컨설팅으로, 귀사의 기술력과 경쟁력을 향상 시키는데 가장 좋은 선택이 될 것입니다. 자바와 안드로이드 관련된 교육은 자앤(Jaen)에 맡겨 주십시오.
                </md-card-content>
              </md-card-header-text>
            </md-card-header>
            <md-card-actions>
              <md-button class="btn btn-outline-info">Read More</md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-10" style="margin-top: 100px; width: 100%">
      <div class="row">
        <div class="col-lg-12">
          <md-card>
            <md-card-header style="padding: 0px">
              <md-card-header-text>
                <div class="md-title" style="margin-bottom: 10px">NEW PROGRAM</div>
              </md-card-header-text>
            </md-card-header>
            <md-card-content>
              <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left;">Hybrid Mobile Web App &rarr;</button><br>
              <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left">Android & NFC technology &rarr;</button><br>
              <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left">SQLite development &rarr;</button><br>
              <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left">Android network technology &rarr;</button><br>
              <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left">Analysis & Design for Embeded &rarr;</button><br>
            </md-card-content>
          </md-card>
        </div>
      </div>
      <div class="post-preview">
        <h2 class="post-title">

        </h2>

      </div>
      <!--<div class="post-preview" style="margin-top: 20px">
        <h2 class="post-title">
          LATEST NEWS
        </h2>
        <div class="row">
          <div class="col-lg-3">
            <h3 class="post-contents" style="font-size: 100%;">
              <button style="background-image: url(../../static/img/date.gif);text-align: center; width: 75px;height: 75px;"><label style="margin-top: 30px">27</label></button>
            </h3>
          </div>
          <div class="col-lg-9">
            <h3 class="post-contents" style="font-size: 80%">
              <a href="#">Oct,2014</a>
            </h3>
            <p class="post-meta" style="font-size: 70%; margin: 0" >Android 5.0 Lolly pop!...</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <h3 class="post-contents" style="font-size: 100%;">
              <button style="background-image: url(../../static/img/date.gif);text-align: center; width: 75px;height: 75px;"><label style="margin-top: 30px">1</label></button>
            </h3>
          </div>
          <div class="col-lg-9">
            <h3 class="post-contents" style="font-size: 80%">
              <a href="#">Jun,2014</a>
            </h3>
            <p class="post-meta" style="font-size: 70%; margin: 0" >Java 8 is a revolutionary release of the world’s #1 development platform ...</p>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .post-contents{
    font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
  }
  .pro-btn{
    margin-bottom: 5px;
    width: 350px;
  }
  .md-card {
    width: 100%;
    display: inline-block;
    vertical-align: top;
  }
</style>
