<script setup>
import { inject, reactive } from 'vue';
const show = reactive(inject('showSpellInfo'))
console.log(show)
</script>

<template>
  <div class="modal fade" v-if="show">
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
                <div class="col-md-4"><slot name="level" /></div>
              </div>
              <div class="row">
                <div class="col-md-4">School:</div>
                <div class="col-md-4"><slot name="school" /></div>
              </div>
              <div class="row">
                <div class="col-md-4">Casting Time:</div>
                <div class="col-md-4"><slot name="castingTime" /></div>
              </div>
              <div class="row">
                <div class="col-md-4">Range:</div>
                <div class="col-md-4"><slot name="range" /></div>
              </div>
              <div class="row">
                <div class="col-md-4">Duration:</div>
                <div class="col-md-4"><slot name="duration" /></div>
              </div>
              <div class="row">
                <div class="col-md-4">Book:</div>
                <div class="col-md-4"><slot name="book" /></div>
              </div>
              <div class="row">
                <div class="col-md-4">Page:</div>
                <div class="col-md-4"><slot name="page" /></div>
              </div>
              <div class="row">
                <div class="col-md-4">Class:</div>
                <div class="col-md-4"><slot name="playerClass" /></div>
              </div>
              <div class="row">
                <div class="col-md-4">Components:</div>
                <div class="col-md-4"><slot name="spellComponents" /></div>
              </div>

            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>
