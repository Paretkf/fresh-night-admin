<template>
  <div>
    <section class="hero is-success is-fullheight is-marginless is-paddingless">
      <div class="container">
        <span class="f-s-24px f-w-bold">
          Referee : <u>{{user.name}}</u>
          <a title="logout" class="logout" @click="logout()"> ออกจากระบบ </a>
        </span>
        <div class="column is-12 card">
          <div class="list-item">
            <div class="columns is-marginless is-paddingless">
              <div class="column is-6 card mg-vtc-20px" v-if="score.BOY">
                <span class="f-s-24px f-w-bold">ผู้เข้าแข่งขัน {{selectScore[0]}} | สาขา : {{selectScore[2]}}</span>
                <span class="f-s-18px f-w-bold"></span>
                <div class="columns is-marginless is-paddingless f-s-14px" v-for="(a, index) in score.BOY[selectScore[0]].part1[user.id]" :key="'part1' + index">
                  <div class="column is-7">
                    <label class="">{{index + 1}}. </label>
                    {{a.name}} ({{a.max}})
                  </div>
                  <div class="column is-5">
                    <input class="w-80pct" step="1" min="0" :max="a.max" :value="a.score" type="range" @input="updateDataScore(`BOY/${selectScore[0]}/part1/${user.id}/${index}`, $event.target.value)"> <b class="f-s-20px">{{a.score}}</b>
                  </div>
                </div>
              </div>
              <div class="column is-6 card mg-vtc-20px" v-if="score.GIRL">
                <span class="f-s-24px f-w-bold">ผู้เข้าแข่งขัน {{selectScore[1]}} | สาขา : {{selectScore[2]}}</span>
                <span class="f-s-18px f-w-bold"></span>
                <div class="columns is-marginless is-paddingless f-s-14px" v-for="(a, index) in score.GIRL[selectScore[1]].part1[user.id]" :key="'part1' + index">
                  <div class="column is-7">
                    <label class="">{{index + 1}}. </label>
                    {{a.name}} ({{a.max}})
                  </div>
                  <div class="column is-5">
                    <input class="w-80pct" step="1" min="0" :max="a.max" :value="a.score" type="range"  @input="updateDataScore(`GIRL/${selectScore[1]}/part1/${user.id}/${index}`, $event.target.value)"> <b class="f-s-20px">{{a.score}}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'UpdateScore',
  data () {
    return {
      input: 0,
      colorIconWhite: '#fff'
    }
  },
  computed: {
    ...mapState({
      score: state => state.score,
      user: state => state.user,
      selectScore: state => state.selectScore
    })
  },
  methods: {
    ...mapActions({
      bindscoreRef: 'bindscoreRef',
      unbindscoreRef: 'unbindscoreRef',
      updateScore: 'updateScore',
      setUser: 'setUser'
    }),
    updateDataScore (index, score) {
      this.updateScore({
        index,
        score
      })
    },
    logout () {
      this.setUser({
        name: '',
        id: ''
      })
      this.$router.push({name: 'Login'})
    }
  },
  created () {
    this.bindscoreRef()
    if (this.user.name === '') {
      this.$router.push({name: 'Login'})
    }
  },
  destroyed () {
    this.unbindscoreRef()
  }
}
</script>

<style scoped>
.logout {
  color: red;
}
.logout:hover {
  color: #fff;
}
.list-item {
  height: calc(100vh - 100px);
  overflow: auto;
}
.hero.is-success {
  background: #F2F6FA;
  background:url('/static/img/BG-Clock.jpg');
  background-size: cover;
  background-position: center;
  max-height: calc(100vh - 30px);
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  /* opacity: 0.8; */
  background-color: rgb(255, 255, 255);
  margin-top: 5rem;
}
input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 13.8px 0;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: #43c2f8;;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-webkit-slider-thumb {
  border: 1px solid #a4a4a4;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -14px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #43c2f8;;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: #43c2f8;;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #43c2f8;;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type=range]::-ms-fill-upper {
  background: #43c2f8;;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type=range]::-ms-thumb {
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  height: 8.4px;
}
input[type=range]:focus::-ms-fill-lower {
  background: #43c2f8;;
}
input[type=range]:focus::-ms-fill-upper {
  background: #43c2f8;;
}
</style>
