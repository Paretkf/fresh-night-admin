<template>
  <div>
    <!-- <img src="/static/img/40797664_1871063649626396_6779287568119758848_n.png" alt=""> -->
    <section class="hero is-success is-fullheight is-marginless is-paddingless">
      <div class="hero-body is-marginless is-paddingless">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <h3 class="title has-text-grey"></h3>
            <p class="subtitle has-text-grey"></p>
            <div class="box">
              <figure class="avatar">
                <img src="https://media.giphy.com/media/xLI6yofqY6hzO/giphy.gif" width="128" height="128">
              </figure>
              <div class="field">
                <div class="control">
                    <input class="input" type="text" placeholder="Your Username"  v-model="username" v-on:keydown.enter="login()">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input" type="password" placeholder="Your Password" v-model="password" v-on:keydown.enter="login()">
                </div>
              </div>
              <div class="field">
              </div>
              <button class="button is-block is-info is-fullwidth" @click="login()">Login</button>
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
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      password: '',
      user: []
    }
  },
  methods: {
    ...mapActions({
      setDataLogin: 'login',
      getUser: 'getUser',
      setUser: 'setUser'
    }),
    async login () {
      let temp = await this.user.findIndex(u => u.id === this.username && u.password + '' === this.password + '')
      if (temp !== -1) {
        this.setUser({
          name: this.user[temp].name,
          id: this.user[temp].id
        })
        if (this.user[temp].name === 'cofen') {
          this.$router.push({name: 'DashBoard'})
        } else if (this.user[temp].name === 'RCT') {
          this.$router.push({name: 'CreateData'})
        } else {
          this.$router.push({name: 'UpdateScore'})
        }
      } else {
        this.$toast.open({
          message: 'User name หรือ Password ลองใหม่!',
          type: 'is-danger'
        })
      }
    }
  },
  computed: {
    ...mapState({
      // user: state => state.user
    })
  },
  async created () {
    this.user = await this.getUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  background-color: rgb(255, 255, 255, 0.8);
  margin-top: 10rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
