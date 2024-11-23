<script setup>

</script>

<template>
  <div class="wrapper">
    <ul class="human">
      <li>
        <div class="img-ct">
          <img src="../../assets/img/0.jpg" alt="">
          <img src="../../assets/img/0.jpg" alt="">
        </div>
        <p>SAS</p>
      </li>
      <li>
        <div class="img-ct">
          <img src="../../assets/img/0.jpg" alt="">
          <img src="../../assets/img/0.jpg" alt="">
        </div>
        <p>SEAL</p>
      </li>
      <li>
        <div class="img-ct">
          <img src="../../assets/img/0.jpg" alt="">
          <img src="../../assets/img/0.jpg" alt="">
        </div>
        <p>PLA</p>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="pcss">
.human{
  li{
    margin: 10px 10px 0;
    display: inline-block;
    .img-ct{
      position: relative;
      width: 200px;
      height: 300px;
      img{
        position: absolute;
        width: 100%;
        height: 100%;
        transition: opacity 0.3s;
      }
      img:nth-child(2){
        opacity: 0;
      }
      &:hover img:nth-child(1){
        opacity: 0;
      }
      &:hover img:nth-child(2){
        opacity: 1;
      }
    }
    p{
      margin-top: 5px;
      text-align: center;
    }
  }
}
</style>
