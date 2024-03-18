<script setup>
import {ref} from "vue";

let equipments = ref([
  { name: 'ak47', damage: '60', fireRate: '600', ammo: '40/40*3', reloadTime: '3', moveSpeed: '0.9' },
  { name: 'm4a1', damage: '45', fireRate: '750', ammo: '45/45*3', reloadTime: '3', moveSpeed: '0.9' },
  { name: 'mp5', damage: '45', fireRate: '800', ammo: '45/45*3', reloadTime: '2', moveSpeed: '1' },
  { name: 'pkm', damage: '68', fireRate: '650', ammo: '100/100*1.5', reloadTime: '5', moveSpeed: '0.8' },
  { name: 'm60', damage: '66', fireRate: '600', ammo: '120/120*1.5', reloadTime: '5', moveSpeed: '0.7' },
  { name: 'mg5', damage: '60', fireRate: '700', ammo: '80/80*2', reloadTime: '5', moveSpeed: '0.7' },
  { name: 'm249', damage: '48', fireRate: '800', ammo: '100/100*1.5', reloadTime: '4', moveSpeed: '0.8' },
  { name: 'm870', damage: '400', fireRate: '70', ammo: '7/7*5', reloadTime: '0.8*7', moveSpeed: '0.9' },
  { name: 'awm', damage: '500', fireRate: '80', ammo: '7/7*4', reloadTime: '3', moveSpeed: '0.8' },
  { name: 'g17', damage: '45', fireRate: '300', ammo: '17/17*5', reloadTime: '1.8', moveSpeed: '1' },
  { name: 'm1911', damage: '50', fireRate: '300', ammo: '10/10*6', reloadTime: '1.8', moveSpeed: '1' },
  { name: 'desert eagle', damage: '100', fireRate: '200', ammo: '7/7*6', reloadTime: '2', moveSpeed: '1' },
  { name: 'kukri', damage: '160/300', fireRate: '200', ammo: '7/7*6', reloadTime: '2', moveSpeed: '1' },
  { name: 'fire ax', damage: '180/400', fireRate: '200', ammo: '7/7*6', reloadTime: '2', moveSpeed: '1' },
  { name: 'military shovel', damage: '140/240', fireRate: '-', ammo: '-', reloadTime: '-', moveSpeed: '-' },
  { name: 'hatchet', damage: '160/300', fireRate: '-', ammo: '-', reloadTime: '-', moveSpeed: '-' },
  { name: 'm134', damage: '50', fireRate: '2000', ammo: '200/200', reloadTime: '6', moveSpeed: '0.6' },
  { name: 'mg42', damage: '68', fireRate: '1200', ammo: '150/150', reloadTime: '5', moveSpeed: '0.7' },
  { name: 'aa12', damage: '400', fireRate: '300', ammo: '20/20*4', reloadTime: '3', moveSpeed: '0.9' },
  { name: 'gm6 lynx', damage: '500', fireRate: '100', ammo: '10/10*4', reloadTime: '3.5', moveSpeed: '0.8' },
]);
</script>

<template>
  <div class="wrapper">
    <div class="table-ct">
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
          <th>damage</th>
          <th>fireRate</th>
          <th>ammo</th>
          <th>reloadTime</th>
          <th>moveSpeed</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="equipment in equipments" :key="equipment.name">
          <td>{{ equipment.name }}</td>
          <td>{{ equipment.damage }}</td>
          <td>{{ equipment.fireRate }}</td>
          <td>{{ equipment.ammo }}</td>
          <td>{{ equipment.reloadTime }}</td>
          <td>{{ equipment.moveSpeed }}</td>
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
