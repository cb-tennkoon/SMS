<template>
  <div id="page-top">
    <mainDashboard></mainDashboard>
        <!-- End of Content Wrapper -->
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded one" href="#page-top" >
        <i class="fas fa-angle-up" @click="bottomtotop"></i>
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
import mainDashboard from "../components/dashboard/mainDashboard";

export default {
  name: "Dashboard",
  components: {
    mainDashboard
  },
  methods:{
      bottomtotop(){
            // Scroll to top button appear
        var scrollDistance = 300;
        if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
        } else {
        $('.scroll-to-top').fadeOut();
        }
    }
  }
};
</script>
<style scoped lang="scss">
.one{
    z-index: 9999;
}
</style>

