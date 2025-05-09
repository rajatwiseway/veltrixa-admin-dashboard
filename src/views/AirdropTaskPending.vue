<template>
    <AirdropTaskTable
      title="Total Number of Users"
      subtitle="List of all users with pending tasks"
    />
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  import AirdropTaskTable from "../components/AirdropTaskTable.vue";
  
  const route = useRoute()
  const planId = route.params.planId
  </script>
  