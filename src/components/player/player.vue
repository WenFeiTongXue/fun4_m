<template>
  <div class="player" v-show="playList">

  </div>
</template>
<script>
import {mapGetters} from "vuex"
export default {
  computed:{
    ...mapGetters([
      'playing',
      'fullScreen',
      'playList',
      'sequenceList',
      'mode',
      'currentIndex',
      "currentSong"
    ])
  }
}
</script>
<style scoped>

</style>
