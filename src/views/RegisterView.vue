<template>
  <div class="flex min-h-screen flex-1 flex-col justify-center px-2 md:px-6 py-12 lg:px-8 bg-gray-900">
    <div class="bg-[#0f0e1e] rounded-lg shadow-lg p-6 w-full md:w-[500px] mx-auto">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <router-link to="/" class="">
          <img src="/public/images/logo.png" alt="Logo" class="w-[70%] mx-auto">
        </router-link>
        <h2 class="mt-6 text-center text-2xl font-bold tracking-tight text-white">Create a new account</h2>
      </div>
      <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-300">Full Name</label>
            <div class="mt-2">
              <input type="text" name="name" id="name" required
                class="block w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="John Doe" />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300">Email address</label>
            <div class="mt-2">
              <input type="email" name="email" id="email" autocomplete="email" required
                class="block w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
            <div class="mt-2 relative">
              <input :type="showPassword ? 'text' : 'password'" name="password" id="password"
                autocomplete="new-password" required
                class="block w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••" />
              <span class="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                @click="showPassword = !showPassword">
                <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </span>
            </div>
          </div>
          <div>
            <label for="confirm-password" class="block text-sm font-medium text-gray-300">Confirm Password</label>
            <div class="mt-2 relative">
              <input :type="showConfirmPassword ? 'text' : 'password'" name="confirm-password" id="confirm-password"
                required
                class="block w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2 pr-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="••••••••" />
              <span class="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer"
                @click="showConfirmPassword = !showConfirmPassword">
                <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
              </span>
            </div>
          </div>
          <div>
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-main-card px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Create account
            </button>
          </div>
        </form>
        <p class="mt-6 text-center text-sm text-gray-400">
          Already have an account?
          <span><router-link to="/login" class="font-semibold text-indigo-400 hover:text-indigo-300">Sign in
              here</router-link></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const showPassword = ref(false)
  const showConfirmPassword = ref(false)
</script>