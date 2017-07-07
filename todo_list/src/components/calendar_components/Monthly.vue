<template>
  <div class="monthly">
    
  </div>
</template>

<script>

export default {
  name: 'monthly',
  data: function () {
    return {
      daysCount: new Date(new Date().getYear(), new Date().getMonth(), 0).getDate(),
      weekDays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
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
