<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12" style="width: 100%">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" data-interval="1000"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" data-interval="1000"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" data-interval="1000"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="../../static/img/image-1.jpg" alt="First slide">
              <div class="carousel-caption d-none d-md-block">
                <h1>1ST TITLE</h1>
                <h5>CONTENTS</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../static/img/image-2.jpg" alt="Second slide">
              <div class="carousel-caption d-none d-md-block">
                <h1>2ND TITLE</h1>
                <h5>CONTENTS</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="../../static/img/home-bg.jpg" alt="Third slide">
              <div class="carousel-caption d-none d-md-block" style="padding-top: -200px">
                <h1>이곳은 타이틀이다</h1>
                <h5>할말이 있다면 적어라</h5>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "home-tab",
      created: function () {
        $('.carousel').carousel({
          interval: 1000
        })
      },

    }

</script>

<style scoped>

</style>
