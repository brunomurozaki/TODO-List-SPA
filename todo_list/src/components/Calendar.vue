<template>
  <div class="calendar">
    <weekly-component v-if='type === "semana"'></weekly-component>
    <monthly-component v-if='type === "dia"'></monthly-component>
    <daily-component v-if='type === "mes"'></daily-component>
  </div>
</template>

<script>

import eventHub from '../shared/EventHub.js'
import WeeklyComponent from './calendar_components/Weekly.vue'
import DailyComponent from './calendar_components/Daily.vue'
import MonthlyComponent from './calendar_components/Monthly.vue'

export default {
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
  },
  mounted: function () {
    eventHub.$on('onCalendarTypeChange', function (data) {
      alert(this.type)
      this.type = data
    })
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
