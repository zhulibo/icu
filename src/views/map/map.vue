<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="map">
      <div class="item item-Colosseum">
        <div class="map-name">Colosseum 斗兽场</div>
      </div>
      <div class="item item-CrossStreet">
        <div class="map-name">CrossStreet 十字街</div>
      </div>
      <div class="item item-Dust">
        <div class="map-name">Dust Dust</div>
      </div>
      <div class="item item-Farm">
        <div class="map-name">Farm 农场</div>
      </div>
      <div class="item item-Arena">
        <div class="map-name">Arena 角斗场</div>
      </div>
      <div class="item item-TrainingField">
        <div class="map-name">TrainingField 训练场</div>
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
      padding-right: 7vw;
      padding-bottom: 7vh;
      font-size: 25px;
      color: rgba(255,255,255,0.8);
      text-shadow: rgba(0,0,0,0.8) 0 0 5px;
    }
  }
  .item-Colosseum{
    background: url("@/assets/img/bg.jpg") center center / cover no-repeat;
  }
  .item-CrossStreet{
    background: url("@/assets/img/bg.jpg") center center / cover no-repeat;
  }
  .item-Dust{
    background: url("@/assets/img/bg.jpg") center center / cover no-repeat;
  }
  .item-Farm{
    background: url("@/assets/img/bg.jpg") center center / cover no-repeat;
  }
  .item-Arena{
    background: url("@/assets/img/bg.jpg") center center / cover no-repeat;
  }
  .item-TrainingField{
    background: url("@/assets/img/bg.jpg") center center / cover no-repeat;
  }
}
</style>
