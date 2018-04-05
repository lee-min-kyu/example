<template>
    <md-card style="height: 175px;">
      <md-card-header style="padding: 0px">
        <md-card-media style="width: auto; height: auto; margin: 0px">
          <img v-bind:src='partnerList.ImgUrl' alt="People">
        </md-card-media>
      </md-card-header>
      <md-card-header-text style="margin-top: 10px">
        <h6 class="md-title">{{partnerList.Name}}</h6>
        <label style="padding: 5px; font: 14px Tahoma, Geneva, sans-serif;">{{partnerList.Contents}}</label>
      </md-card-header-text>
    </md-card>
</template>

<script>
    export default {
        name: "partner",
      props: {
        partnerList: Object
      },
      mounted: function () {
        var me = this;
        console.log(me.partnerList)
      }
    }
</script>

<style scoped>
  img {
    width: 50%;
  }
</style>
