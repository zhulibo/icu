<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

let navList = [
  {path: '/home', name: 'home'},
  {path: '/mutant', name: 'mutant'},
  {path: '/human', name: 'human'},
  {path: '/equipment', name: 'equipment'},
  {path: '/map', name: 'map'}
]
const navTo = (e) => {
  router.push({path: e})
}
</script>

<template>
  <div class="header">
    <ul class="nav">
      <li v-for="item in navList"
          :key="item.name"
          @click="navTo(item.path)"
          :class="{active: item.name === route.name}">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="pcss">
.header{
  position: sticky;
  top: 0;
  left: 0;
  max-width: 100%;
  z-index: 1;
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.nav{
  overflow-x: auto;
  white-space: nowrap;
  box-shadow: rgba(0,0,0,.1) 0 0 5px;
  background-color: rgba(255,255,255,.7);
  backdrop-filter: blur(2px);
  li{
    display: inline-block;
    padding: 5px 10px;
    min-width: 3.5em;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    transition: color .2s;
    &.active{
      color: var(--main);
    }
  }
}
</style>
