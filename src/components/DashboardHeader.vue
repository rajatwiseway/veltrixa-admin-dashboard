<!-- DashboardHeader.vue -->
<template>
  <div>
    <header class="bg-[#0f0e1e] shadow-sm border-b border-gray-800 hidden md:block">
      <div class="flex items-center justify-between h-16 px-4">
        <!-- Left side -->
        <router-link to="/" class="flex items-center md:hidden">
          <img src="/public/images/logo.png" alt="" class="w-[70%]  ">
        </router-link>

        <div class="flex items-center">
          <slot name="header-left"></slot>
        </div>

        <!-- Right side -->
        <div class="flex items-center space-x-4 px-4">
          <!-- Notifications -->
          <button class="p-1.5 rounded-full text-white bg-gray-700">
            <span class="sr-only">Notifications</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <!-- User dropdown -->
          <div class="relative">
            <button @click="userMenuOpen = !userMenuOpen" class="flex items-center space-x-2">
              <img class="h-8 w-8 rounded-full" src="https://i.pravatar.cc/150?img=5" alt="User avatar">
              <span class="hidden md:inline">Admin User</span>
            </button>

            <div v-if="userMenuOpen"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#0f0e1e] ring-1 ring-black ring-opacity-5">
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Your Profile</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Settings</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700">Sign out</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav class="flex-1 overflow-y-auto bg-[#0f0e1e] shadow-sm border-b border-gray-800  p-2 md:hidden">
      <ul class=" flex font-medium justify-between gap-3">
        <!-- user-dashboard -->
        <li class="w-full">
          <router-link to="/" @click="setActive('/')" class="flex flex-col items-center p-2 rounded-lg group"
            :class="activeItem === '/' ? 'bg-main-card text-gray-100' : 'text-gray-300 hover:bg-gray-800'">
            <!-- / Icon -->
            <svg class="w-4 h-4 transition duration-75"
              :class="activeItem === '/' ? 'text-gray-100' : 'text-gray-300 group-hover:text-gray-300'"
              fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
            </svg>
            <span class=" capitalize text-xs">dashboard</span>
          </router-link>
        </li>
        <!-- user -->
        <li class="w-full">
          <router-link to="/users" @click="setActive('users')" class="flex flex-col items-center p-2 rounded-lg group"
            :class="activeItem === 'users' ? 'bg-main-card text-gray-100' : 'text-gray-300 hover:bg-gray-800'">
            <svg class="w-4 h-4 transition duration-75"
              :class="activeItem === 'users' ? 'text-gray-100' : 'text-gray-300 group-hover:text-gray-300'"
              fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
            <span class=" capitalize text-xs">users</span>
          </router-link>
        </li>

        <!-- airdrop -->
        <li class="hidden">
          <router-link to="/airdrop" @click="setActive('airdrop')"
            class="flex flex-col items-center p-2 rounded-lg group"
            :class="activeItem === 'airdrop' ? 'bg-main-card text-gray-100' : 'text-gray-300 hover:bg-gray-800'">
            <svg class="w-4 h-4 transition duration-75"
              :class="activeItem === 'airdrop' ? 'text-gray-100' : 'text-gray-300 group-hover:text-gray-300'"
              fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h51.2L158.4 203.2l-18.3-55c-4.3-13-17.2-20.8-30.7-18.4s-23.1 14.5-23.1 28.2V208H32v48h54.3l35 105H64v48h80v-48H131.7l-35-105H168v136h48V256h80v136h48V256h71.3l-35 105H368v48h80v-48h-48.7l35-105H480v-48h-54.3v-52.8c0-13.7-9.8-25.4-23.1-28.2s-26.4 5.3-30.7 18.4l-18.3 55L308.8 112H360c13.3 0 24-10.7 24-24s-10.7-24-24-24c-23.6 0-45.1 10.4-59.7 28.3L256 118.3 211.7 92.3C197.1 74.4 175.6 64 152 64z" />
            </svg>
            <span class=" capitalize text-xs">airdrop</span>
          </router-link>
        </li>

        <!-- Chart -->
        <li class="hidden">
          <router-link to="/chart" @click="setActive('chart')" class="flex flex-col items-center p-2 rounded-lg group"
            :class="activeItem === 'chart' ? 'bg-main-card text-gray-100' : 'text-gray-300 hover:bg-gray-800'">
            <svg class="w-4 h-4 transition duration-75"
              :class="activeItem === 'chart' ? 'text-gray-100' : 'text-gray-300 group-hover:text-gray-300'"
              fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 22h16v-2H4v2zm4-6h2v4H8v-4zm4-5h2v9h-2v-9zm4-4h2v13h-2V7z" />
            </svg>
            <span class=" capitalize text-xs">Chart</span>
          </router-link>
        </li>

        <!-- Deals -->
        <li class="hidden">
          <router-link to="/deals" @click="setActive('deals')" class="flex flex-col items-center p-2 rounded-lg group"
            :class="activeItem === 'deals' ? 'bg-main-card text-gray-100' : 'text-gray-300 hover:bg-gray-800'">
            <svg class="w-4 h-4 transition duration-75"
              :class="activeItem === 'deals' ? 'text-gray-100' : 'text-gray-300 group-hover:text-gray-300'"
              fill="currentColor" viewBox="0 0 640 512">
              <path
                d="M434.7 167.9l-38.6 38.6c-4.5 4.5-11.8 4.5-16.3 0l-74.6-74.6c-4.5-4.5-4.5-11.8 0-16.3l38.6-38.6c20.9-20.9 54.9-20.9 75.8 0l15.1 15.1c20.9 20.9 20.9 54.9 0 75.8zM187.3 344.1l38.6-38.6c4.5-4.5 11.8-4.5 16.3 0l74.6 74.6c4.5 4.5 4.5 11.8 0 16.3l-38.6 38.6c-20.9 20.9-54.9 20.9-75.8 0l-15.1-15.1c-20.9-20.9-20.9-54.9 0-75.8z" />
            </svg>
            <span class=" capitalize text-xs">Deals</span>
          </router-link>
        </li>

        <!-- Robot -->
        <li class="hidden">
          <router-link to="/robot" @click="setActive('robot')" class="flex flex-col items-center p-2 rounded-lg group"
            :class="activeItem === 'robot' ? 'bg-main-card text-gray-100' : 'text-gray-300 hover:bg-gray-800'">
            <svg class="w-4 h-4 transition duration-75"
              :class="activeItem === 'robot' ? 'text-gray-100' : 'text-gray-300 group-hover:text-gray-300'"
              fill="currentColor" viewBox="0 0 640 512">
              <path
                d="M320 32c-17.7 0-32 14.3-32 32v32H144c-26.5 0-48 21.5-48 48v288h32v64c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32v-64h32V144c0-26.5-21.5-48-48-48H352V64c0-17.7-14.3-32-32-32zm-96 224a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm192 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
            </svg>
            <span class=" capitalize text-xs">Robot</span>
          </router-link>
        </li>

        <!-- Account -->
        <li class="w-full">
          <router-link to="/account" @click="setActive('account')"
            class="flex flex-col items-center p-2 rounded-lg group"
            :class="activeItem === 'account' ? 'bg-main-card text-gray-100' : 'text-gray-300 hover:bg-gray-800'">
            <svg class="w-4 h-4 transition duration-75"
              :class="activeItem === 'account' ? 'text-gray-100' : 'text-gray-300 group-hover:text-gray-300'"
              fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
            <span class=" capitalize text-xs">Account</span>
          </router-link>
        </li>
        <li class="w-full">
          <router-link to="/login" @click="setActive('login')" class="flex flex-col items-center p-2 rounded-lg group"
            :class="activeItem === 'login' ? 'bg-main-card text-gray-100' : 'text-gray-300 hover:bg-gray-800'">
            <svg class="w-4 h-4 transition duration-75"
              :class="activeItem === 'login' ? 'text-gray-100' : 'text-gray-300 group-hover:text-gray-300'"
              fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
            </svg>
            <span class=" capitalize text-xs">login</span>
          </router-link>
        </li>


      </ul>
    </nav>
  </div>

</template>
<script>
export default {
  data() {
    return {
      activeItem: '/'
    };
  },
  methods: {
    setActive(item) {
      this.activeItem = item;
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>