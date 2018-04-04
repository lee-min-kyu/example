<template>
  <md-card>
    <md-card-header style="padding: 0px">
      <md-card-media style="flex: 0 0 80px">
        <img v-bind:src='List.imgUrl' alt="People">
      </md-card-media>
      <md-card-header-text style="margin-top: 15px">
        <div class="md-title">{{List.Name}} 강사<br><div class="md-subhead" v-show="List.CEO === '1'"><label style="color: #000000;">현) 자앤 대표</label></div></div>
      </md-card-header-text>
    </md-card-header>
    <md-card-actions style="margin-top: 20px">
      <!--<button type="button" class="btn btn-outline-info btn-sm" @click="popModal(1,'pjn')" data-toggle="modal" data-target="#exampleModal">강의 사이트</button>
      <button type="button" class="btn btn-outline-info btn-sm" @click="popModal(2,'pjn')" data-toggle="modal" data-target="#exampleModal">강의 과목</button>-->
      <md-button class="btn btn-outline-info" @click="$emit('popOpen',1,List.Name)"  style="border: 1px solid; color: #353b4f">강의 소개</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
    export default {
        name: "instrutors",
      data () {
          return {
            modalTitle: "",
            modalContents: "",
          }
      },
      props: {
          List: Object
      },
      mounted: function () {
          var me = this;
          console.log(me.List)
      },
      methods: {
        popModal: function (type,name) {
          var me = this;

        },
        popOff: function () {
          var me = this;
          me.modalTitle = ""
          me.modalContents = ""
        }
      }
    }
</script>

<style scoped>

</style>
