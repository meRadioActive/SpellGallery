import {defineStore} from "pinia";

export const useSpellsStore = defineStore({
  id: 'spells',
  state: () => ({
    spellList: [],
    filters: {}
  }),
  getters: () => ({
    spellList: (state) => state.spellList
  }),
  actions: () => ({
    addSpell(book, page, level, name, school, druid, ranger, sorcerer, wizard, castingTime, range, material, vocal, somatic, duration, damageType, description) {
      let spell = {
        "Book": book,
        "Page": page,
        "Level": level,
        "Name": name,
        "School": school,
        "Druid": druid,
        "Ranger": ranger,
        "Sorcerer": sorcerer,
        "Wizard": wizard,
        "CastingTime": castingTime,
        "Range": range,
        "Material": material,
        "Vocal": vocal,
        "Somatic": 1,
        "Duration": duration,
        "DamageType": damageType,
        "Description": description
      }
      if(spellList.indexOf(spell) === -1){
        spellList.push(spell)
      }
    },
    async setFilter(filter, value){

    }
  }),
})
