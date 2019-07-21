<template>
  <div class="navbarx pd-10px">
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B1', 'G1', 'INE'])" title="B1 • G1">
      INE
    </div>
     <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B2', 'G2', 'ITI'])" title="B2 • G2">
      ITI
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B3', 'G3', 'AI'])" title="B3 • G3">
      AI
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B4', 'G4', 'IM'])" title="B4 • G4">
      IM
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B5', 'G5', 'IMT'])" title="B5 • G5">
      IMT
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B6', 'G6', 'TA'])" title="B6 • G6">
      TA
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B7', 'G7', 'CA'])" title="B7 • G7">
      CA
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B8', 'G8', 'IT'])" title="B8 • G8">
      IT
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'NavBar',
  methods: {
    ...mapActions({
      setSelectScore: 'setSelectScore'
    })
  }
}
</script>

<style scoped>
  .navbarx {
    background-color: #000;
    height: calc(100vh);
    width: 60px;
  }
  .item {
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
    border: 2px solid #fff;
    padding-top: 6px;
    color: #fff;
    background: #43c2f8;
    border-radius: 50%;
  }
</style>
