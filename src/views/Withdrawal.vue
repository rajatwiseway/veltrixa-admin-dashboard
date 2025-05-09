<template>
    <WithdrawalTable
      title="Withdrawal Overview"
      subtitle="Browse the list of users who have successfully withdrawn their earnings from subscribed plans, along with withdrawal amounts and timestamps."
    />
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  import WithdrawalTable from "../components/WithdrawalTable.vue";
  
  const route = useRoute()
  const planId = route.params.planId
  </script>
  