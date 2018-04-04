<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6" style="margin-top: 100px; width: 100%">
        <hr>
        <div class="row">
          <div class="col-lg-12">
          <h1>REFERENCES</h1>
            <md-content class="md-elevation-3" style="margin-top: 15px; padding: 20px; height: 175px">
              <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif; ">Java</md-button>
              <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif;">Android</md-button>
              <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif;">HTML5</md-button><br>
              <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif;">Tizen</md-button>
              <md-button class="md-primary" @click="showDialog = false" style="background-color: #353b4f; color: white; font: 14px Tahoma, Geneva, sans-serif;">UML</md-button>
            </md-content>
        </div>
      </div>

      </div>
      <div class="col-lg-6 col-md-10 " style="margin-top:100px; width: 100%">
        <hr>
        <h1>PARTNER</h1>
        <div class="row">
          <div class="col-lg-6 col-md-10 " style="margin-top: 20px">
            <md-card style="height: 175px;">
              <md-card-header style="padding: 0px">
                <md-card-media style="width: auto; height: auto; margin: 0px">
                  <img src='../../static/img/media/lge_small.jpg' alt="People">
                </md-card-media>
              </md-card-header>
              <md-card-header-text style="margin-top: 10px">
                <h6 class="md-title">LG전자</h6>
                <label style="padding: 5px; font: 14px Tahoma, Geneva, sans-serif;">HTML5,	Hybrid Web, Android(기본/고급/네트워크), Javascript</label>
              </md-card-header-text>
            </md-card>
          </div>
          <div class="col-lg-6 col-md-10 " style="margin-top: 20px">
            <md-card style="height: 175px;">
              <md-card-header style="padding: 0px">
                <md-card-media style="width: auto; height: auto; margin: 0px">
                  <img src='../../static/img/media/sec_small.png' alt="People">
                </md-card-media>
              </md-card-header>
              <md-card-header-text style="margin-top: 10px">
                <h6 class="md-title">삼성전자</h6>
                <label style="padding: 5px; font: 14px Tahoma, Geneva, sans-serif;">Java,Hybrid Mobile Web,Android(기본/고급/네트워크), SQLite,Design Pattern,분석및설계</label>
              </md-card-header-text>
            </md-card>
          </div>
          <div class="col-lg-6 col-md-10 " style="margin-top: 20px">
            <md-card style="height: 175px;">
              <md-card-header style="padding: 0px">
                <md-card-media style="width: auto; height: auto; margin: 0px">
                  <img src='../../static/img/media/LGCNS.png' alt="People">
                </md-card-media>
              </md-card-header>
              <md-card-header-text style="margin-top: 10px">
                <h6 class="md-title">LG CNS</h6>
                <label style="padding: 5px; font: 14px Tahoma, Geneva, sans-serif;">Java(intermediate, advanced), Android(basic, intermediate, advanced)</label>
              </md-card-header-text>
            </md-card>
          </div>
          <div class="col-lg-6 col-md-10 " style="margin-top: 20px;">
            <md-card style="height: 175px;">
              <md-card-header style="padding: 0px">
                <md-card-media style="width: auto; height: auto; margin: 0px">
                  <img src='../../static/img/media/rapa.jpg' alt="People">
                </md-card-media>
              </md-card-header>
              <md-card-header-text style="margin-top: 10px">
                <h6 class="md-title">RAPA</h6>
                <label style="padding: 5px; font: 14px Tahoma, Geneva, sans-serif;">HTML5, Hybrid Web,Android, SmartTV</label>
              </md-card-header-text>
            </md-card>
          </div>
          <div class="col-lg-6 col-md-10 " style="margin-top: 20px">
            <md-card style="height: 175px;">
              <md-card-header style="padding: 0px">
                <md-card-media style="width: auto; height: auto; margin: 0px">
                  <img src='../../static/img/media/sds.gif' alt="People">
                </md-card-media>
              </md-card-header>
              <md-card-header-text style="margin-top: 10px">
                <h6 class="md-title">삼성 SDS</h6>
                <label style="padding: 5px; font: 14px Tahoma, Geneva, sans-serif;">HTML5, Hybrid Web, Android(기본/고급/네트워크), Javascript</label>
              </md-card-header-text>
            </md-card>
          </div>
          <div class="col-lg-6 col-md-10 " style="margin-top: 20px">
            <md-card style="height: 175px;">
              <md-card-header style="padding: 0px">
                <md-card-media style="width: auto; height: auto; margin: 0px">
                  <img src='../../static/img/media/mds.jpg' alt="People">
                </md-card-media>
              </md-card-header>
              <md-card-header-text style="margin-top: 10px">
                <h6 class="md-title">MDS</h6>
                <label style="padding: 5px; font: 14px Tahoma, Geneva, sans-serif;">MDS Academy, HTML5, Hybrid Web, Android(기본/고급/네트워크), Javascript</label>
              </md-card-header-text>
            </md-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "company-tab",
      data () {
        return {}
      },
      methods: {

        }
    }
</script>

<style scoped>
  img {
    width: 50%;
  }
</style>
