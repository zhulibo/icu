<script setup>
import {ref} from "vue";

let mutants = ref([
  { name: 'Tank 坦克', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Ghost 幽灵', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Smoker 烟鬼', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Hunter 猎手', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Cooker 厨师', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Corrupter 腐蚀者', attribute: '', skill: '', CD: '', damage: '', health: '' },
  { name: 'Tracker 追踪者', attribute: '', skill: '', CD: '', damage: '', health: '' },
]);
</script>

<template>
  <div class="wrapper">
    <div class="table-ct">
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
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
