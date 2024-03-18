<script setup>
import {ref} from "vue";

let mutants = ref([
  { name: 'tank 坦克', describe: '', attribute: 'repulse-20%', skill: 'damage-60% repulse-60%', CD: '10s/20s 10s/15s', damage: '80/120', health: '3000/6000' },
  { name: 'ghost 幽魂', describe: '', attribute: 'jump+20%', skill: 'unseen+95% speed+20%', CD: '10s/20s 10s/15s', damage: '60/100', health: '2000/4000' },
  { name: 'octopus 章鱼', describe: '', attribute: '', skill: 'smoke 7m 8s', CD: '10s/25s 10s/20s', damage: '60/100', health: '2000/4000' },
  { name: 'hunter 猎手', describe: '', attribute: 'night vision', skill: 'speed+40% repulse-40%', CD: '10s/20s 10s/15s', damage: '100/140', health: '2000/4000' },
  { name: 'corrupter 腐蚀者', describe: '', attribute: '', skill: 'spit liquid -3hp/1s', CD: '10s/25s 10s/20s', damage: '60/100', health: '2000/4000' },
  { name: 'cooker 厨师', describe: '', attribute: '', skill: 'throw spore psychedelic 10m 8s', CD: '10s/20s 10s/15s', damage: '60/100', health: '2000/4000' },
  { name: 'tracker 追踪者', describe: '', attribute: '', skill: '', CD: '10s/20s 10s/15s', damage: '60/100', health: '2000/4000' },
]);
</script>

<template>
  <div class="wrapper">
    <div class="table-ct">
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
          <th>describe</th>
          <th>attribute</th>
          <th>skill</th>
          <th>CD</th>
          <th>damage</th>
          <th>health</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="mutant in mutants" :key="mutant.name">
          <td>{{ mutant.name }}</td>
          <td>{{ mutant.describe }}</td>
          <td>{{ mutant.attribute }}</td>
          <td>{{ mutant.skill }}</td>
          <td>{{ mutant.CD }}</td>
          <td>{{ mutant.damage }}</td>
          <td>{{ mutant.health }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped lang="pcss">
.table-ct{
  margin-top: 10px;
  width: 100%;
  max-width: 1200px;
  overflow-x: auto;
}
.table{
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  td, th{
    padding: 5px;
    border: 1px solid #ccc;
  }
  thead{
    background-color: rgba(0,0,0,.04);
    th{
      color: #666;
      font-weight: normal;
      text-align: left;
    }
  }
  tbody tr:nth-child(even){
    background-color: rgba(0,0,0,.04);
  }
}
</style>
