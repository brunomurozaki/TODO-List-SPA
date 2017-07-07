<template>
  <div class="weekly">
    <div class="weekWrapper">
      <div v-for="day in days" class="weekDayBox">
        <div class="boxHeader">{{ day }}</div>
        <div class="boxContent"></div>
      </div>
    </div> 
  </div>
</template>

<script>

export default {
  name: 'weekly',
  data: function () {
    return {
      days: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
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
