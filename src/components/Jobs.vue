<template>
  <h1>This is job page</h1>
  <div v-for=" job in jobs" :key="job.id" class="job">
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
.job h3{
  background: rgb(57, 241, 47);
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444

}

.job h3:hover{
  background: #fff;
}

.job a{
  text-decoration: none;
}
</style>