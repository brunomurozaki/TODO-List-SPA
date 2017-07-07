<template>
  <div class="header">
    <div class="headerTitle"><h1>Agenda</h1></div>
  </div>
</template>

<script>

import { changeType } from '../vuex/actions'

export default {
  name: 'header',
  vuex: {
    actions: {
      changeType
    }
  }
}
</script>

<style>

.header{width:100%;}
.headerTitle>h1{margin-top:0px}
.menuWrapper{float:left; width:100%; padding:0 10px}
.scheduleOptions{float:right;}
.taskOptions{float:left}

</style>
