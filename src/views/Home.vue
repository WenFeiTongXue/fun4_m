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
        "/apis/v8/fcg-bin/album_library?g_tk=1278911659&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&cmd=firstpage&page=0&pagesize=20&sort=1&language=-1&genre=0&year=1&pay=0&type=-1&company=-1"
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
