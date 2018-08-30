<template>
  <div>
    <section class="hero is-success is-fullheight is-marginless is-paddingless">
      <div class="container">
        <span class="f-s-24px f-w-bold">
          Referee : <u>{{user.name}}</u>
          <a title="logout" @click="logout()"> x </a>
          <!-- <svg-filler class="mg-l-5px cs-pointer" path="/static/svg/sign-out-alt-solid.svg" :fill="'#fff'" width="20px" height="20px"/> -->
        </span>
        <div class="columns">
          <div class="column is-6 card mg-vtc-20px" v-if="score.BOY">
            <span class="f-s-24px f-w-bold">ผู้เข้าแข่งขัน {{selectScore[0]}} | สาขา : {{selectScore[2]}}</span>
            <VuePerfectScrollbar class="list-item">
              <span class="f-s-18px f-w-bold">รอบที่ 1 <u>รอบการแสดงความสามารถพิเศษ</u></span>
              <div class="columns f-s-14px" v-for="(a, index) in score.BOY[selectScore[0]].part1[user.id]" :key="'part1' + index">
                <div class="column is-7">
                  <label class="">{{index + 1}}. </label>
                  {{a.name}} ({{a.max}})
                </div>
                <div class="column is-5">
                  <input class="w-80pct" step="1" min="0" :max="a.max" :value="a.score" type="range" @input="updateDataScore(`BOY/${selectScore[0]}/part1/${user.id}/${index}`, $event.target.value)"> {{a.score}}
                </div>
              </div>
              <hr>
              <span class="f-s-18px f-w-bold">รอบที่ 2 <u>รอบแนะนำตัว</u></span>
                <div class="columns f-s-14px" v-for="(a, index) in score.BOY[selectScore[0]].part2[user.id]" :key="'part2' + index">
                <div class="column is-7">
                  <label class="">{{index + 1}}. </label>
                  {{a.name}} ({{a.max}})
                </div>
                <div class="column is-5">
                  <input class="w-80pct" step="1" min="0" :max="a.max" :value="a.score" type="range" @input="updateDataScore(`BOY/${selectScore[0]}/part2/${user.id}/${index}`, $event.target.value)"> {{a.score}}
                </div>
              </div>
              <hr>
              <span class="f-s-18px f-w-bold">รอบที่ 3 <u>ตอบคำถาม</u></span>
              <div class="columns f-s-14px" v-for="(a, index) in score.BOY[selectScore[0]].part3[user.id]" :key="'part3' + index">
                <div class="column is-7">
                  <label class="">{{index + 1}}. </label>
                  {{a.name}} ({{a.max}})
                </div>
                <div class="column is-5">
                  <input class="w-80pct" step="1" min="0" :max="a.max" :value="a.score" type="range"  @input="updateDataScore(`BOY/${selectScore[0]}/part3/${user.id}/${index}`, $event.target.value)"> {{a.score}}
                </div>
              </div>
            </VuePerfectScrollbar>
          </div>

          <div class="column is-6 card mg-vtc-20px" v-if="score.GIRL">
            <span class="f-s-24px f-w-bold">ผู้เข้าแข่งขัน {{selectScore[1]}} | สาขา : {{selectScore[2]}}</span>
            <VuePerfectScrollbar class="list-item">
              <span class="f-s-18px f-w-bold">รอบที่ 1 <u>รอบการแสดงความสามารถพิเศษ</u></span>
              <div class="columns f-s-14px" v-for="(a, index) in score.GIRL[selectScore[1]].part1[user.id]" :key="'part1' + index">
                <div class="column is-7">
                  <label class="">{{index + 1}}. </label>
                  {{a.name}} ({{a.max}})
                </div>
                <div class="column is-5">
                  <input class="w-80pct" step="1" min="0" :max="a.max" :value="a.score" type="range"  @input="updateDataScore(`GIRL/${selectScore[1]}/part1/${user.id}/${index}`, $event.target.value)"> {{a.score}}
                </div>
              </div>
              <hr>
              <span class="f-s-18px f-w-bold">รอบที่ 2 <u>รอบแนะนำตัว</u></span>
                <div class="columns f-s-14px" v-for="(a, index) in score.GIRL[selectScore[1]].part2[user.id]" :key="'part2' + index">
                <div class="column is-7">
                  <label class="">{{index + 1}}. </label>
                  {{a.name}} ({{a.max}})
                </div>
                <div class="column is-5">
                  <input class="w-80pct" step="1" min="0" :max="a.max" :value="a.score" type="range"  @input="updateDataScore(`GIRL/${selectScore[1]}/part2/${user.id}/${index}`, $event.target.value)"> {{a.score}}
                </div>
              </div>
              <hr>
              <span class="f-s-18px f-w-bold">รอบที่ 3 <u>ตอบคำถาม</u></span>
              <div class="columns f-s-14px" v-for="(a, index) in score.GIRL[selectScore[1]].part3[user.id]" :key="'part3' + index">
                <div class="column is-7">
                  <label class="">{{index + 1}}. </label>
                  {{a.name}} ({{a.max}})
                </div>
                <div class="column is-5">
                  <input class="w-80pct" step="1" min="0" :max="a.max" :value="a.score" type="range"  @input="updateDataScore(`GIRL/${selectScore[1]}/part3/${user.id}/${index}`, $event.target.value)"> {{a.score}}
                </div>
              </div>
            </VuePerfectScrollbar>
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
  height: calc(100vh - 125px);
}
.hero.is-success {
  background: #F2F6FA;
  background:url('/static/img/39900569_945240225662683_6306849167083831296_n.png');
  background-size: cover;
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
  background: #7957d5;
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
  background: #7957d5;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: #7957d5;
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
  background: #7957d5;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
}
input[type=range]::-ms-fill-upper {
  background: #7957d5;
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
  background: #7957d5;
}
input[type=range]:focus::-ms-fill-upper {
  background: #7957d5;
}
</style>
