<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="index.html"><img src="../../static/img/jaen_logo3.png"/></a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          MENU
          <i class="fa fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" @click="goToTab('ABOUT')">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="goToTab('COMPANY')">COMPANY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="goToTab('PARTNER')">PARTNER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="goToTab('BUSINESS')">BUSINESS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="goToTab('COURSES')">COURSES</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="goToTab('CONTACTS')">CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div style="margin-top: 105px;background-color:#353b4f;width: 100% ">&nbsp;</div>
    <!-- Page Header -->
    <!--<header class="masthead" style="background-image: url('../../static/img/bg_top_img2.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading" style="text-align: left">
              <h2>We Will Open The World</h2>
              <span class="subheading">of knowledge for you!</span>
            </div>
          </div>
        </div>
      </div>
    </header>-->

    <!-- Main Content -->
    <transition name="slide-fade">
    <about-tab v-if="TabType === 'ABOUT'" style="margin-top: 100px" />
    <company-tab v-if="TabType === 'COMPANY'" style="margin-top: 100px"  />
    </transition>
    <hr>
    <!-- Footer -->
      <footer-tag />
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      TabType: "ABOUT"
    }
  },
  methods: {
    goToTab: function (tabName) {
      var me = this;
      me.TabType = tabName;
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
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
