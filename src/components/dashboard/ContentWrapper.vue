<template>
      <div id="content-wrapper" class="d-flex flex-column">
        <TopBar></TopBar>
        <MainContent></MainContent>
        <pagefooter></pagefooter>
      </div> 
</template>

<script>
import MainContent from './mainContent'
// import Sidebar from '../public/Sidebar'
// import pagefooter from '../public/pagefooter'
// import TopBar from '../public/TopBar';


export default {
  name: "ContentWrapper",
  props: {

  },
  components:{
    // Sidebar,
    MainContent,
    // pagefooter,
    // TopBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
