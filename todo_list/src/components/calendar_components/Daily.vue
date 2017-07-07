<template>
  <div class="daily">
    <div class="dayWrapper">
      <h3>DIA X</h3>
      <div v-for="i in count" class="dayRow">
        <div class="hour">{{ i }}</div>
        <div class="task"><a class="glyphicon glyphicon-plus"></a></div>
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

.dayRow{clear: both; width:80%; border:#000 solid 1px; margin: 0 auto; height:25px}
.hour{width:10%; border-right: #000 solid 1px; float:left; height:100%}
.task{width:90%; height:100%; float:left}
.task>a{display:none}
.task:hover>a{display:block}
</style>
