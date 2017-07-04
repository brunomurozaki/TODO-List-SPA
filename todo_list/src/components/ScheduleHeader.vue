<template>
  <div class="header">
    <div class="headerTitle"><h1>Agenda</h1></div>
  	<div class="menuWrapper">
	  <div class="taskOptions">
	    <button class="btn">Add Task</button>
	  </div>
   	  <div class="scheduleOptions">       
        <button class="btn">Dia</button>
        <button class="btn">Semana</button>
        <button class="btn">Mes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style>

.header{width:100%; height:20%; border-bottom: #000 solid 1px; position:fixed}
.headerTitle>h1{margin-top:0px}
.menuWrapper{float:left; width:100%; padding:0 10px}
.scheduleOptions{float:right;}
.taskOptions{float:left}

</style>
