<template>
  <div id="demo" class="slider-header carousel slide" data-ride="carousel">
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
    </ul>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          class="slider-image"
          src="../assets/images/conveyor.jpg"
          alt="Los Angeles"
          width="1100"
          height="500"
        />
        <div class="carousel-caption">
          <h3>Konveyör Bant</h3>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/cenelikirici.jpg"
          alt="Chicago"
          width="1100"
          height="500"
        />
        <div class="carousel-caption">
          <h3>Çeneli Kırıcı</h3>
        </div>
      </div>
      <div class="carousel-item">
        <img
          src="../assets/images/elekler.jpg"
          alt="Chicago"
          width="1100"
          height="500"
        />
        <div class="carousel-caption">
          <h3>Titreşimli Elek</h3>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  </div>
</template>

<style>
.slider-header {
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 117px;
}

.carousel-inner img {
  width: 100%;
  height: 500px;
}
.slider-image {
  height: 300px;
}
</style>
