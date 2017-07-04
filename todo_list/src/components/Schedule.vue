<template>
  <div class="schedule">
    <header-component></header-component>
  </div>
</template>

<script>

import HeaderComponent from './ScheduleHeader.vue'

export default {
  name: 'schedule',
  components: {
    HeaderComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
