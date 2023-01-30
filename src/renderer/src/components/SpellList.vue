<script setup>
import {useSpellsStore} from "../stores/spells";


const spellStore = useSpellsStore();
function spellClass(data){
  const classList = ["Druid", "Ranger", "Sorcerer", "Wizard", "Cleric", "Paladin", "Warlock", "Bard"];
  let badges = [];
  classList.forEach((x) => {
    if(spellStore.spellList[data][x] === 1){
      badges.push(x)
    }
  })
  return badges
}
function componentList(data){
  const componentList = ["Vocal", "Somatic", "Material"];
  let components = [];
  componentList.forEach((x) => {
    if(spellStore.spellList[data][x] !== undefined){
      if(x === "Material"){
        components.push("Material")
      }else{
        components.push(x)
      }
    }
  })
  return components
}

</script>

<template>
  <div class="row pt-2 spellGallery align-items-baseline">
    <div class="col-lg-3" v-for="spell in spellStore.spellList">
      <div class="card mb-3 spellCard">
        <div class="card-header">
          <div class="row">
            <div class="col-6" style="font-weight: bold">{{ spell.Name }}</div>
            <div class="col-6 text-end">Level: {{ spell.Level }}</div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-title">Book: {{ spell.Book }}</div>
          <div class="card-title">School: {{ spell.School }}</div>
          <div class="card-title">Class: <span v-for="playerclass in spellClass(spellStore.spellList.indexOf(spell))" class="badge text-bg-success mx-1">{{ playerclass }}</span></div>
          <div class="card-title">Components: <span v-for="component in componentList(spellStore.spellList.indexOf(spell))" class="badge text-bg-info mx-1">{{ component }}</span></div>
          <div class="card-title">Duration: {{ spell.Duration }}</div>
          <div class="card-title" v-if="spell.DamageType !== undefined">DamageType: {{ spell.DamageType }}</div>
          <div class="card-text"></div>
        </div>
      </div>
    </div>
  </div>
</template>

