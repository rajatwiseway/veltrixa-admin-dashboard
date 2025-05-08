<template>
  <div class="flex h-screen bg-[#15151f] text-white">
    <!-- Sidebar: Only show if layout is required -->
    <div v-if="showLayout" class="hidden md:flex fixed inset-y-0 left-0 w-64 z-50">
      <DashboardSidebar />
    </div>

    <!-- Main Content Area -->
    <div :class="['flex flex-col flex-1 overflow-hidden', showLayout ? 'md:ml-64' : '']">
      <!-- Header: Only show if layout is required -->
      <div v-if="showLayout" class="fixed hidden md:block top-0 left-0 md:left-64 right-0 z-40">
        <DashboardHeader />
      </div>
      <div v-if="showLayout" class="fixed md:hidden bottom-0 left-0 md:left-64 right-0 z-40">
        <DashboardHeader />
      </div>

      <!-- Scrollable Main Section -->
      <main :class="[
        'flex-1 overflow-y-auto md:px-4',
        showLayout ? 'pt-0 pb-20 md:pt-16 md:pb-4' : ''
      ]">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

import DashboardSidebar from './components/DashboardSidebar.vue';
import DashboardHeader from './components/DashboardHeader.vue';

const route = useRoute();

// If route.meta.requiresLayout is not false, show layout
const showLayout = computed(() => route.meta.requiresLayout !== false);
</script>
