/* global DEBUG */

import { F7 } from 'commons'
import store from 'vuex/store'

export default {
  ready() {
    DEBUG && console.log('init component %s', this.$options.name)
    var mainView = store.mainView

    mainView.router.loadContent(this.$els.page)
    F7.params.swipePanel = 'left' // this.$route.panel
  },
}
