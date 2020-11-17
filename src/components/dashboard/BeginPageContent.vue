<template>
    <!-- Begin Page Content -->
    <div class="container-fluid">
        <PageHeading></PageHeading>
        <row1></row1>
        <row2></row2>
        <row3></row3>
    </div>
</template>

<script>
import PageHeading from './BeginContent/PageHeading'
import row1 from './BeginContent/row1'
import row2 from './BeginContent/row2'
import row3 from './BeginContent/row3'

export default {
  name: "BeginPageContent",
  props: {

  },
  components:{
      PageHeading,
      row1,
      row2,
      row3,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
