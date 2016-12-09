import {mapGetters} from 'vuex'

export default {
  ...require('./index.pug'),
  name: 'member-index',
  data: () => ({
    classes: require('./index.styl')
  }),
  computed: {
    ...mapGetters(['winHeight'])
  },
  methods: {
    animationEnd(e) {
      this.$util.removeClass(e.target, 'animated')
    }
  }
}