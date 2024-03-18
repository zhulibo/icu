<script setup>
import {ref} from "vue";
import dayjs from "dayjs";

const dateStr = ref()
dateStr.value = dayjs().format('YYYY')

const openUrl = (url) => {
  window.open(url)
}

</script>

<template>
  <div class="footer">
    <ul class="link">
      <li title="bilibili" @click="openUrl('https://space.bilibili.com/11741743')">
        <icon name="bilibili" size="40px" />
      </li>
      <li title="qq频道" @click="openUrl('https://pd.qq.com/s/2b4kjxms7')">
        <icon name="qq-channel" size="20px" />
      </li>
      <li title="discord" @click="openUrl('https://discord.gg/2tNJpfHfXK')">
        <icon name="discord" size="25px" />
      </li>
      <li title="github" @click="openUrl('https://github.com/zhulibo/BiochemicalArena')">
        <icon name="github" size="25px" />
      </li>
    </ul>
    <p class="copyright">Copyright © {{dateStr}} zhulibo(yoyoyoochn@outlook.com)</p>
  </div>
</template>

<style scoped lang="pcss">
.footer{
  padding: 10px;
  color: #444;
  background-color: rgba(var(--green-rgb), .6)
}
.link{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  li{
    padding: 0 10px;
    cursor: pointer;
    &:hover{
      color: #000;
    }
  }
}
.copyright{
  text-align: center;
  font-size: 12px;
  color: #666;
}
</style>
