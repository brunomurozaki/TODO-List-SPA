<template>
  <div class="weekly">
    <div class="weekWrapper">
	  <h3>Semana x-x</h3>
      <div v-for="day in days" class="weekDayBox">
        <div class="boxHeader">{{ day }}</div>
        <div class="boxContent"></div>
		<div class="boxFooter"><a class="glyphicon glyphicon-plus"></a></div>
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

.weekDayBox{display:block; float:left; width:14%; height:20em; border: #000 solid 1px; border-radius:12px}
.boxHeader{border-bottom:#000 solid 1px; height:10%}
.boxContent{height:80%;}
.boxFooter{border-top:#000 solid 1px; height:10%;}
.boxFooter>a{display:none}
.boxFooter:hover>a{display:block}
</style>
