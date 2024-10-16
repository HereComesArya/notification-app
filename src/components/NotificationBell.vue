<script src='../script/script.js' />

<style>
@import '../styles/NotificationBell.css';
</style>

<template>
  <div class="notification-bell">
    <i class="bell-icon" @click="toggleDropdown">
      🔔
      <span v-if="unreadNotifications.length > 0" class="notification-count">{{ unreadNotifications.length }}</span>
    </i>
  </div>
</template>




