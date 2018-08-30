<template>
  <div class="navbarx pd-10px">
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B1', 'G1', 'TA'])">
      TA
    </div>
     <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B2', 'G2', 'IM'])">
      IM
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B3', 'G3', 'TAM'])">
      TAM
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B4', 'G4', 'CA'])">
      CA
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B5', 'G5', 'ITI'])">
      ITI
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B6', 'G6', 'IMT'])">
      IMT
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B7', 'G7', 'AI'])">
      AI
    </div>
    <div class="w-40px h-40px item cs-pointer" @click="setSelectScore(['B8', 'G8', 'IT'])">
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
    background: #7957d5;
    border-radius: 50%;
  }
</style>
