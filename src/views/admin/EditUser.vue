<template>
  <div>
    <section class="hero is-success is-fullheight is-marginless is-paddingless">
      <div class="hero-body is-marginless is-paddingless">
        <div class="container">
          <div class="column is-6 is-offset-3 box">
            <span class="f-s-30px f-w-bold">User</span>
            <a class="f-s-20px f-w-bold logout" @click="logout()">ออกจากระบบ</a>
            <table class="table is-bordered">
              <tr>
                <th>User Name</th> <th>Password</th> <th>Name</th> <th>Edit</th>
              </tr>
              <tr v-for="(user, index) in userDB" :key="index">
                <td>
                  {{user.id}}
                </td>
                <td>
                  {{user.password}}
                </td>
                <!-- <td>
                  {{user.name}}
                </td> -->
                <td>
                  <input type="text" v-model="user.name" class="input is-sucess is-small">
                </td>
                 <td>
                  <div class="button is-success is-small" @click="editUser(user, index)">บันทึก</div>
                </td>
              </tr>
            </table>
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
      user: state => state.user,
      userDB: state => state.userDB
    })
  },
  methods: {
    ...mapActions({
      binduserRef: 'binduserRef',
      unbinduserRef: 'unbinduserRef',
      editUserData: 'editUserData',
      setUser: 'setUser'
    }),
    editUser (user) {
      if (user.name === '') {
        this.$toast.open({
          message: `ไม่เอาชื่อที่เป็น '' สิ่ :(`,
          type: 'is-danger'
        })
        return
      }
      this.editUserData(user)
      this.$toast.open({
        message: 'บันทึกเสร็จแล้ว! มองไม่ทันล่ะสิ่ อิอิ :)',
        type: 'is-success'
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
    this.binduserRef()
    if (this.user.name === '') {
      // this.$router.push({name: 'Login'})
    }
  },
  destroyed () {
    this.unbinduserRef()
  }
}
</script>

<style scoped>
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
