<template>
  <SubscribedUserTable
    title="Total Number of Users"
    subtitle="List of all users who have purchased this plan"
  />
</template>

<script setup>
import { useRoute } from 'vue-router'

import Table from "../components/UserTable.vue";
import SubscribedUserTable from "../components/SubscribedUsers.vue";

const route = useRoute()
const planId = route.params.planId
</script>
