<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="map">
      <div class="item item1">
        <div class="map-name">迷雾都市 foggy city</div>
      </div>
      <div class="item item2">
        <div class="map-name">农场 farm</div>
      </div>
      <div class="item item3">
        <div class="map-name">训练场 training field</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="pcss">
.wrapper{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
}
.map{
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scrollbar-width: none;
  .item{
    height: 100%;
    scroll-snap-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    .map-name{
      padding-right: 5vw;
      padding-bottom: 5vh;
      font-size: 20px;
      color: rgba(255,255,255,0.6);
      text-shadow: rgba(0,0,0,0.8) 0 0 5px;
    }
  }
  .item1{
    background: url("@/assets/img/0.jpg") center center / cover no-repeat;
  }
  .item2{
    background: url("@/assets/img/0.jpg") center center / cover no-repeat;
  }
  .item3{
    background: url("@/assets/img/0.jpg") center center / cover no-repeat;
  }
}
</style>
