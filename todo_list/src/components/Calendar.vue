<template>
  <div class="calendar">
    <div class="menuWrapper">
      <div class="taskOptions">
        <button class="btn">Add Task</button>
      </div>
      <div class="scheduleOptions">       
        <button v-on:click='type = "dia"' class="btn">Dia</button>
        <button v-on:click='type = "semana"' class="btn">Semana</button>
        <button v-on:click='type = "mes"' class="btn">Mes</button>
      </div>
    </div>
    <div class="container" v-if='type === "semana"'>
      <weekly-component></weekly-component>
    </div>
    <div class="container" v-if='type === "mes"'>
      <monthly-component></monthly-component>
    </div>
    <div class="container" v-if='type === "dia"'>
      <daily-component></daily-component>
    </div>
  </div>
</template>

<script>

import WeeklyComponent from './calendar_components/Weekly.vue'
import DailyComponent from './calendar_components/Daily.vue'
import MonthlyComponent from './calendar_components/Monthly.vue'

export default {
  vuex: {
    getters: {
      calendarType: state => state.calendarType
    }
  },
  name: 'calendar',
  data: function () {
    return {
      type: 'semana'
    }
  },
  components: {
    WeeklyComponent,
    MonthlyComponent,
    DailyComponent
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

.calendar{}
</style>
