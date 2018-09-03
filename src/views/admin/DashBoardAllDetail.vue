<template>
  <div>
    <section class="hero is-success is-fullheight is-marginless is-paddingless">
      <div class="container">
        <div class="columns mg-t-50px mg-bt-10px">
          <div class="column is-12 card">
            <VuePerfectScrollbar class="list-item">
            <div class="t-al-right pd-hrzt-20px">
                <span class="f-s-20px f-w-bold">User: {{user.name}} | </span>
                <a class="f-s-20px f-w-bold" @click="$router.push({name: 'DashBoard'})"> กลับ </a>
                <a class="f-s-20px f-w-bold logout" @click="logout()">ออกจากระบบ</a>
              </div>
            <div class="columns is-paddingless is-marginless" v-if="score !== []">
              <div class="column">
                <b-field label="เพศ" v-if="score">
                  <b-select placeholder="Select a name" v-model="sex"  @input="clearFillter()">
                      <option
                        v-for="(a, index) in score"
                        :value="index"
                        :key="index"
                        v-if="index !== '.key'"
                       >
                        {{ index }}
                      </option>
                  </b-select>
                </b-field>
              </div>
              <div class="column">
                <b-field label="เลือกรหัสผู้เข้าแข่งขัน" v-if="sex !== ''">
                  <b-select placeholder="Select a name" v-model="id">
                      <option
                        v-for="(b, index) in score[sex]"
                        :value="index"
                        :key="index">
                        {{ index }}
                      </option>
                  </b-select>
                </b-field>
              </div>
              <div class="column">
                <b-field label="พาร์ท" v-if="id !== ''">
                  <b-select placeholder="Select a name" v-model="part">
                    <option
                      v-for="(c, index) in  score[sex][id]"
                      :value="index"
                      :key="index">
                      {{ index }}
                    </option>
                  </b-select>
                </b-field>
              </div>
              <div class="column">
                <b-field label="กรรมการ" v-if="part !== ''">
                  <b-select placeholder="Select a name" v-model="referee">
                    <option
                      v-for="(d, index) in  score[sex][id][part]"
                      :value="index"
                      :key="index">
                      {{ index }}
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>
              <table class="table is-bordered mg-auto" v-if="referee !== ''">
                <th>No.</th><th>คำถาม</th><th>คะแนน</th><th>เต็ม</th>
                <tr v-for="(e, index) in score[sex][id][part][referee]" :key="index">
                  <td>
                    {{index+1}}
                  </td>
                  <td>
                    {{e.name}}
                  </td>
                  <td class="t-al-right">
                    {{e.score}}
                  </td>
                  <td class="t-al-right">
                    {{e.max}}
                  </td>
                </tr>
              </table>
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
  name: 'DashBoardAllDetail',
  data () {
    return {
      sex: '',
      id: '',
      part: '',
      referee: ''
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
      unbindscoreRef: 'unbindscoreRef'
    }),
    clearFillter () {
      this.part = ''
      this.referee = ''
      this.id = ''
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
.list-item {
  width: 100%;
  height: calc(100vh - 200px);
}
.logout {
  color: red;
}
.logout:hover {
  color: #000;
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
</style>
