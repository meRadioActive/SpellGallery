<script setup>
import SideBar from "./components/SideBar.vue";
import Main from "./components/Main.vue";

import json from "./spellData.json";
import {useSpellsStore} from "./stores/spells";

const spellStore = useSpellsStore()
console.log(`SpellLists length: ${spellStore.spellList.length}`)

if(spellStore.spellList.length <= 0){
  console.log(`Adding spells to the array`)
  for (const spell in json) {
    let s = json[spell]
    spellStore.spellList.push(s)
  }
}
</script>

<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-auto px-0 sidebar"><SideBar /></div>
      <div class="col ps-md-2"><Main /></div>
    </div>
  </div>
</template>

<style lang="less">
</style>
