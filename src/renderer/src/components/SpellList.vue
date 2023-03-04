<script setup>
import {useSpellsStore} from "../stores/spells";


const spellStore = useSpellsStore();
let showSpellInfo = false;
let spellData = spellStore.spellList[0];

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
function showSpell(spell){
  spellData = spell;
  if(spell !== undefined){
    const myModal = new bootstrap.Modal('#spellInfoData', {focus: true})
  }
  console.log(`Showing spell (${showSpellInfo}) with Data: \/n ${spellData}`)
}

</script>

<template>
  <div class="row pt-2 spellGallery align-items-baseline">
    <div class="col-lg-3" @click="showSpell(spell)" v-for="spell in spellStore.spellList">
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
  <div class="modal" tabindex="-1" id="spellInfoData">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="spellInfoTitle"></h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-md-4">Level:</div>
                <div class="col-md-4">{{ spellData.Level }}</div>
              </div>
              <div class="row">
                <div class="col-md-4">School:</div>
                <div class="col-md-4">{{ spellData.School }}</div>
              </div>
              <div class="row">
                <div class="col-md-4">Casting Time:</div>
                <div class="col-md-4">{{ spellData.CastingTime }}</div>
              </div>
              <div class="row">
                <div class="col-md-4">Range:</div>
                <div class="col-md-4">{{ spellData.Range }}</div>
              </div>
              <div class="row">
                <div class="col-md-4">Duration:</div>
                <div class="col-md-4">{{ spellData.Duration }}</div>
              </div>
              <div class="row">
                <div class="col-md-4">Book:</div>
                <div class="col-md-4">{{ spellData.Book }}</div>
              </div>
              <div class="row">
                <div class="col-md-4">Page:</div>
                <div class="col-md-4">{{ spellData.Page }}</div>
              </div>
              <div class="row">
                <div class="col-md-4">Class:</div>
                <div class="col-md-4"><span v-for="playerclass in spellClass(spellStore.spellList.indexOf(spellData))" class="badge text-bg-success mx-1">{{ playerclass }}</span></div>
              </div>
              <div class="row">
                <div class="col-md-4">Components:</div>
                <div class="col-md-4"><span v-for="component in componentList(spellStore.spellList.indexOf(spellData))" class="badge text-bg-info mx-1">{{ component }}</span></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

