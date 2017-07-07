<template>
  <div class="daily">
    <div class="dayWrapper">
      <h3>DIA X</h3>
      <div v-for="i in count" class="dayRow">
        <div class="hour">{{ i }}</div>
        <div class="task"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'daily',
  data: function () {
    return {
      count: 24
    }
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
