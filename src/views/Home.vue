<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {};
  },
  components: {},
  created() {
    this.axios
      .get(
        "/apis/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg?type=1&json=1&utf8=1&onlysong=0&disstid=3602407677&format=json&g_tk=5381&loginUin=0&hostUin=0&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"
      )
      .then(
        res => {
          console.log(res.data);
        },
        res => {
          console.info("调用失败");
        }
      );
  }
};
</script>
