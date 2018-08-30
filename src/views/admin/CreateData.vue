<template>
  <div>
    <section class="hero is-success is-fullheight is-marginless is-paddingless">
      <div class="hero-body is-marginless is-paddingless">
        <div class="container">
          <div class="column is-4 is-offset-4 box">
            <b-field label="Sex">
              <b-radio v-model="sex"
                native-value="BOY">
                BOY
              </b-radio>
              <b-radio v-model="sex"
                native-value="GIRL">
                GIRL
              </b-radio>
            </b-field>
                <hr>
            <div>
               <b-field label="Name">
                <b-input v-model="name"></b-input>
                <div class="button" @click="add">เพิ่ม</div>
              </b-field>
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
  name: 'createData',
  data () {
    return {
      input: 0,
      name: '',
      sex: 'BOY'
    }
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    ...mapActions({
      addData: 'addData'
    }),
    add () {
      if (this.name !== '') {
        this.addData({
          name: this.name,
          sex: this.sex
        })
      }
    }
  },
  created () {
    if (this.user.name === '') {
      this.$router.push({name: 'Login'})
    }
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
</style>
