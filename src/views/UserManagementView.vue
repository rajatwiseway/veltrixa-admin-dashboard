<template>
  <Table
    title="User Management"
    subtitle="Manage all registered users"
  />
</template>

<script setup>
import { useRoute } from 'vue-router'

import Table from "../components/UserTable.vue";

const route = useRoute()
const planId = route.params.planId
</script>
