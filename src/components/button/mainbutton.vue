<template>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <ContentWrapper></ContentWrapper>
      </div> 
</template>

<script>
// import Sidebar from '../public/Sidebar.vue';
// import mainContent from './mainContent'
 import ContentWrapper from './ContentWrapper'

export default {
  name: "mainbutton",
  props: {
  },
  components:{
    // mainContent,
    // pagefooter,
    ContentWrapper
    // Sidebar,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
