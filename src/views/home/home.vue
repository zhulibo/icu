<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="ct">
      <div class="top">
        <h1>Biochemical Arena</h1>
        <h3>Biochemical Arena is a multiplayer online first-person shooter game, the main gameplay is mutation mode.</h3>
      </div>
      <div class="bottom">
        <p>In early development<b>🚧</b></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="pcss">
.wrapper{
  margin-top: -32.4px;
}
.ct{
  position: relative;
  min-height: 100vh;
  background: url(@/assets/img/bg.jpg) center center / cover no-repeat;
  .top{
    margin-left: 25vw;
    padding-top: 30vh;
    max-width: 500px;
    h1{
      color: var(--main);
      font-size: 40px;
      text-shadow: rgba(200,200,200,.4) 0 0 10px;
    }
    h3{
      padding-top: 20px;
      color: rgba(255,255,255,.8);
      font-size: 25px;
    }
  }
  .bottom{
    position: absolute;
    bottom: 10vh;
    width: 100%;
    p{
      text-align: center;
      font-size: 20px;
      color: rgba(255,255,255,.8);
      b{
        font-size: 40px;
      }
    }
  }
}
</style>
