<template>
    <div id="app">
      <router-view/>
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './componets/FooterGuide/FooterGuide.vue'

    export default {
        // 测试接口
        mounted () {
          this.getAddress()
        },

      methods: {
          ...mapActions(['getAddress'])
      },

        components: {
          FooterGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
