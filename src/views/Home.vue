<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
import { mapGetters} from 'vuex';
import { mapMutations} from 'vuex';
export default {
  data() {
    return {
      
    };
  },
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
  },
  methods:{
    ...mapMutations([
      "set_playing_state",
      "set_full_screen",
      "set_play_list",
      "set_sequence_list",
      "set_play_mode",
      "set_current_index",
    ])
  },
  components: {},
  created() {
    console.log(this.playing)
    this.set_playing_state(true);
    console.log(this.playing)
    
    // console.log(this.$store.getters.playing)
    // this.axios
    //   .get(
    //     "/apis/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1513317614040"
    //   )
    //   .then(
    //     res => {
    //       console.log(res.data);
    //     },
    //     res => {
    //       console.info("调用失败");
    //     }
    //   );
  }
};
</script>
