<template>
  <div>
    <section class="hero is-success is-fullheight is-marginless is-paddingless">
      <div class="container">
        <div class="columns is-marginless is-paddingless mg-t-50px mg-bt-10px">
          <div class="column is-12 card">
            <div class="list-item">
              <div class="t-al-right pd-hrzt-20px">
                <span class="f-s-20px f-w-bold">User: {{user.name}} | </span>
                <a class="f-s-20px f-w-bold" @click="$router.push({name: 'DashBoardAllDetail'})"> รายละเอียดคะแนน </a>
                <a class="f-s-20px f-w-bold logout" @click="logout()">ออกจากระบบ</a>
              </div>
              <br>
              <div class="columns is-marginless is-paddingless">
                <div class="column is-3 card">
                  <span class="f-s-20px f-w-bold"> รอบที่ 1 ชาย </span>
                  <table class="table mg-auto is-bordered">
                    <tr>
                      <th>No.</th><th>คะแนน</th><th>เต็ม</th>
                    </tr>
                    <tr v-for="(d, index) in score.BOY" :key="'pb1' + index">
                      <td>
                        {{index}}
                      </td>
                      <td class="t-al-right">
                        {{totalScore(d, 'part1')}}
                      </td>
                      <td>
                        {{totalMaxScore(d, 'part1')}}
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="column is-3 card">
                  <span class="f-s-20px f-w-bold"> รอบที่ 1 หญิง</span>
                  <table class="table mg-auto is-bordered">
                    <tr>
                      <th>No.</th><th>คะแนน</th><th>เต็ม</th>
                    </tr>
                    <tr v-for="(d, index) in score.GIRL" :key="'pg1' + index">
                      <td>
                        {{index}}
                      </td>
                      <td class="t-al-right">
                        {{totalScore(d, 'part1')}}
                      </td>
                      <td>
                        {{totalMaxScore(d, 'part1')}}
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="column is-3 card">
                  <span class="f-s-20px f-w-bold"> รวม ชาย </span>
                  <table class="table mg-auto is-bordered">
                    <tr>
                      <th>No.</th><th>คะแนน</th><th>เต็ม</th>
                    </tr>
                    <tr v-for="(d, index) in score.BOY" :key="'sb3' + index">
                      <td>
                        {{index}}
                      </td>
                      <td class="t-al-right">
                        {{sumScore(d)}}
                      </td>
                      <td>
                        {{sumMaxScore(d)}}
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="column is-3 card">
                  <span class="f-s-20px f-w-bold"> รวม หญิง </span>
                  <table class="table mg-auto is-bordered">
                    <tr>
                      <th>No.</th><th>คะแนน</th><th>เต็ม</th>
                    </tr>
                    <tr v-for="(d, index) in score.GIRL" :key="'sg3' + index">
                      <td>
                        {{index}}
                      </td>
                      <td class="t-al-right">
                        {{sumScore(d)}}
                      </td>
                      <td>
                        {{sumMaxScore(d)}}
                      </td>
                    </tr>
                  </table>
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
  name: 'DashBoard',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      score: state => state.score,
      user: state => state.user
    })
  },
  methods: {
    ...mapActions({
      bindscoreRef: 'bindscoreRef',
      unbindscoreRef: 'unbindscoreRef',
      setUser: 'setUser'
    }),
    logout () {
      this.setUser({
        name: '',
        id: ''
      })
      this.$router.push({name: 'Login'})
    },
    totalScore (data, part) {
      let result1 = data[part].referee1.reduce((sum, d) => sum + parseInt(d.score), 0)
      let result2 = data[part].referee2.reduce((sum, d) => sum + parseInt(d.score), 0)
      let result3 = data[part].referee3.reduce((sum, d) => sum + parseInt(d.score), 0)
      return result1 + result2 + result3
    },
    totalMaxScore (data, part) {
      let result1 = data[part].referee1.reduce((sum, d) => sum + parseInt(d.max), 0)
      let result2 = data[part].referee2.reduce((sum, d) => sum + parseInt(d.max), 0)
      let result3 = data[part].referee3.reduce((sum, d) => sum + parseInt(d.max), 0)
      return result1 + result2 + result3
    },
    sumScore (data) {
      let result1 = data.part1.referee1.reduce((sum, d) => sum + parseInt(d.score), 0)
      let result2 = data.part1.referee2.reduce((sum, d) => sum + parseInt(d.score), 0)
      let result3 = data.part1.referee3.reduce((sum, d) => sum + parseInt(d.score), 0)

      return result1 + result2 + result3
    },
    sumMaxScore (data) {
      let result1 = data.part1.referee1.reduce((sum, d) => sum + parseInt(d.max), 0)
      let result2 = data.part1.referee2.reduce((sum, d) => sum + parseInt(d.max), 0)
      let result3 = data.part1.referee3.reduce((sum, d) => sum + parseInt(d.max), 0)
      return result1 + result2 + result3
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
.list-item {
  width: 100%;
  height: calc(100vh - 125px);
  overflow: auto;
}
.logout {
  color: red;
}
.logout:hover {
  color: #000;
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
</style>
