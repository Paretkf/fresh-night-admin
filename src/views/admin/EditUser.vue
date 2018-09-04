<template>
  <div>
    <section class="hero is-success is-fullheight is-marginless is-paddingless">
      <div class="hero-body is-marginless is-paddingless">
        <div class="container">
          <div class="column is-6 is-offset-3 box">
            <span>แก้ไข User</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'EditUser',
  data () {
    return {
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
      // this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style scoped>
.hero.is-success {
  background: #F2F6FA;
  background:url('/static/img/40797664_1871063649626396_6779287568119758848_n.png');
  background-size: cover;
  background-position: center;
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
