<template>
  <div>
    <!-- Main Content -->
    <div id="content">
        <buttonContent></buttonContent>
    </div>
    <!-- End of Main Content -->
  </div>
</template>

<script>
// import TopBar from '../public/TopBar';
import buttonContent from './buttonContent';
// import buttoncoll from '../otherpages/buttoncoll'
export default {
  name: "mainContent",
  components: {
      // TopBar,
      buttonContent,
      // buttoncoll
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>