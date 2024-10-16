<template>
  <div id="app">
    <nav class="navbar">
      <notification-bell></notification-bell>
    </nav>
    <router-view />
  </div>
</template>

<script>
import NotificationBell from './components/NotificationBell.vue';

export default {
  components: {
    NotificationBell,
  },
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  color: white;
}
</style>
