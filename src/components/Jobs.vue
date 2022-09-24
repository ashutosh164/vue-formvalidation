<template>
  <h1>This is job page</h1>
  <div v-for=" job in jobs" :key="job.id">
    <router-link :to="{name: 'JobsDetails', params:{id:job.id}}">
      <h3>{{job.title}}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'nija z900', id: 1, details: 'its a superbike' },
        { title: 'yamaha r1', id: 2, details: 'its a superbike' },
        {title: 'cd down', id:3 , details: 'its a regular bike'}
      ]
    }
  }

}
</script>

<style>

</style>