<template>
  <div>
    <section class="hero is-success is-fullheight is-marginless is-paddingless">
      <div class="hero-body is-marginless is-paddingless">
        <div class="container">
          <div class="column is-8 is-offset-2 box">
            <div class="field">
              <label class="">1. </label>
              <input class="w-60pct" step="1" min="0" max="100" value="50" v-model="input" type="range"> {{input}}
            </div>
            <!-- <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Submit</button>
              </div>
              <div class="control">
                <button class="button is-text">Cancel</button>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CreateCompetitor',
  data () {
    return {
      input: 0
    }
  },
  computed: {
    ...mapGetters({
      score: 'score'
    })
  },
  methods: {
    ...mapActions({
      bindscoreRef: 'bindscoreRef',
      unbindscoreRef: 'unbindscoreRef'
    })
  },
  created () {
    this.bindscoreRef()
  },
  destroyed () {
    this.unbindscoreRef()
  }
}
</script>

<style scoped>
.hero.is-success {
  background: #F2F6FA;
  background:url('/static/img/39900569_945240225662683_6306849167083831296_n.png');
  background-size: cover;
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
