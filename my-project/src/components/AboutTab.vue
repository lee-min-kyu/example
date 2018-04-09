<template>
  <div class="container-fluid">
  <div class="row">
    <div class="col-lg-12 col-md-10 " style="margin-top:100px; width: 100%;">
      <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div class="container-fluid" style="padding: 0px">
          <div class="collapse navbar-collapse" id="navbarResponsive" >
            <ul class="navbar-nav ml-auto ">
              <li class="nav-item btn-outline-info active" id="contents"  style=" border: 1px #17a2b8 solid;">
                <a class="nav-link" id="contentsText" style="color: #ffffff" @click="goToTab('contents')">about</a>
              </li>
              <li class="nav-item btn-outline-info" id="links" style=" border: 1px #17a2b8 solid; margin-left: 2px">
                <a class="nav-link" id="linksText" @click="goToTab('links')">new programs</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
    <transition name="slide-fade" mode="out-in">
      <about-contents v-if="subTabName === 'contents' " />
      <about-links v-if="subTabName === 'links'" />
    </transition>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      subTabName: 'contents'
    }
  },
  methods: {
    goToTab: function (type) {
      var me = this;
      console.log()
      me.subTabName = type;
      if(type === 'contents'){
        $('#contents').attr('class','nav-item btn-outline-info active')
        $('#contentsText').attr('style',' color:#ffffff')
        $('#links').attr('class','nav-item btn-outline-info')
        $('#linksText').attr('style',' color: #000000')
      }else{
        $('#contents').attr('class','nav-item btn-outline-info ')
        $('#contentsText').attr('style','color:#000000')
        $('#links').attr('class','nav-item btn-outline-info active')
        $('#linksText').attr('style',' color: #ffffff')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .nav-link{
    cursor: pointer;
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .6s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
