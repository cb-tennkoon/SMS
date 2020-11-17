<template>
      <div id="content-wrapper" class="d-flex flex-column">
        <TopBar></TopBar>
        <mainContent></mainContent>
        <pagefooter></pagefooter>
      </div> 
</template>

<script>
import mainContent from './mainContent'
// import Sidebar from '../public/Sidebar'
// import pagefooter from '../public/pagefooter'
// import TopBar from '../public/TopBar';


export default {
  name: "ContentWrapper",
  props: {

  },
  components:{
    // Sidebar,
    mainContent,
    // pagefooter,
    // TopBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
