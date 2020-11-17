<template>
  <div>
    <!-- Main Content -->
    <div id="content">
        <!-- <TopBar></TopBar> -->
        <BeginPageContent></BeginPageContent>
        <!-- <router-view></router-view> -->
        <!-- <buttoncoll></buttoncoll> -->
    </div>
    <!-- End of Main Content -->
  </div>
</template>

<script>
// import TopBar from '../public/TopBar';
import BeginPageContent from './BeginPageContent';
// import buttoncoll from '../otherpages/buttoncoll'
export default {
  name: "mainContent",
  components: {
      // TopBar,
      BeginPageContent,
      // buttoncoll
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>