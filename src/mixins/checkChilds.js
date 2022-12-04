export default {
  methods: {
    checkTeacherLaw() {
      let i =null
      this.$store.state.user.childs.forEach((item)=>{
        if (item.confirmChild === true) {
          i += 1
        }
      })
      if (this.$store.state.user.childs && i && this.$store.state.user.isAuth) {
        return true
      } else {return false}
    }
  }
}