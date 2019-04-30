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
        "/apis/splcloud/fcgi-bin/gethotkey.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1513317614040"
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
