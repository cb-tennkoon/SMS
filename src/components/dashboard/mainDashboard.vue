<template>
  <div>
    <!-- Page Wrapper -->
    <div id="wrapper">
      <Sidebar></Sidebar>
      <ContentWrapper></ContentWrapper>
    </div>
    <!-- End of Page Wrapper -->
  </div>
</template>

<script>

import ContentWrapper from "../dashboard/ContentWrapper";

export default {
  name: "mainDashboard",
  props: {
  },
  components:{
    ContentWrapper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
