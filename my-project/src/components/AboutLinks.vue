<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-1 " style="z-index: -1"></div>
      <div class="col-lg-10 " style="margin-top:70px; width: 100%">
        <div class="row">
          <div class="col-lg-12">
            <div class="card" style="text-align: left; border: 1px #17a2b8 solid">
              <div class="card-header" style="background-color:#17a2b8;">
                <h5 style=" color: white">NEW PROGRAMS</h5>
              </div>
              <div class="card-body" style="text-align: center">
                <p class="card-text" style="margin-top: 0; ">
                  <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left;">Hybrid Mobile Web App &rarr;</button><br>
                  <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left">Android & NFC technology &rarr;</button><br>
                  <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left">SQLite development &rarr;</button><br>
                  <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left">Android network technology &rarr;</button><br>
                  <button type="button" class="btn btn-outline-info pro-btn" style="width: 350px;text-align: left">Analysis & Design for Embeded &rarr;</button><br>
                </p>
              </div>
            </div>
          </div>
        </div>
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
