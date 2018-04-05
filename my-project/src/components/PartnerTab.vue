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
          <div class="col-lg-6 col-md-10 " style="margin-top: 20px" v-for="partnerList in partnerLists">
            <partner :partnerList="partnerList" ></partner>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Partner from "./Partner";

    export default {
      components: {Partner},
      name: "company-tab",
      data () {
        return {
          partnerLists: [
            {
              Name: "LG전자",
              Contents: "HTML5,\tHybrid Web, Android(기본/고급/네트워크), Javascript",
              ImgUrl: "../../static/img/media/lge_small.jpg",
            },
            {
              Name: "삼성전자",
              Contents: "Java,Hybrid Mobile Web,Android(기본/고급/네트워크), SQLite,Design Pattern,분석및설계",
              ImgUrl: "../../static/img/media/sec_small.png",
            },
            {
              Name: "LG CNS",
              Contents: "Java(intermediate, advanced), Android(basic, intermediate, advanced)",
              ImgUrl: "../../static/img/media/LGCNS.png",
            },
            {
              Name: "RAPA",
              Contents: "HTML5, Hybrid Web,Android, SmartTV",
              ImgUrl: "../../static/img/media/rapa.jpg",
            },
            {
              Name: "삼성 SDS",
              Contents: "HTML5, Hybrid Web, Android(기본/고급/네트워크), Javascript",
              ImgUrl: "../../static/img/media/sds.gif",
            },
            {
              Name: "MDS",
              Contents: "MDS Academy, HTML5, Hybrid Web, Android(기본/고급/네트워크), Javascript",
              ImgUrl: "../../static/img/media/mds.jpg",
            }
          ]
        }
      },
      methods: {

        }
    }
</script>

<style scoped>
</style>
