<template>
  <h1>this is job details page</h1>
  <p>the job id is {{id }}</p>
  <!-- <p>the job id is {{id.details }}</p> -->
</template>

<script>
export default {
    props: ['id'],
    // if we are passing the id like above line and make props true in router the we no longer need bellow line
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>