<template>
    <TradingCapitalTable
      title="Capital Deposit Commissions"
      subtitle=" User deposits trading capital in USDT—your earnings scale with each deposit based on the structured rewards module.

"
    />
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  import TradingCapitalTable from "../components/TradingCapitalTable.vue";
  
  const route = useRoute()
  const planId = route.params.planId
  </script>
  