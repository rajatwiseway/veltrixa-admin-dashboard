<template>
  <section class="overflow-x-hidden p-4 bg-gray-900 relative mt-3">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div
        class="absolute top-1/4 left-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-2xl animate-float"
      ></div>
      <div
        class="absolute bottom-1/3 right-20 w-80 h-80 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-float-delay"
      ></div>
    </div>
    <div class="z-10 container relative flex-col justify-center h-full pb-12">
      <!-- Header -->
      <div class=" ">
        <h1 class="text-md md:text-xl font-bold text-white mb-1">
          Welcome to Veltrixa – Start Earning with Ease
        </h1>
        <p class="text-gray-400 mb-4">
            Start your Veltrixa journey with a quick onboarding! Complete these 5 simple tasks and unlock your 300 VELT token reward.
        </p>
      </div>
      <!-- Plans Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          class="bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-2xl p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-300 shadow-xl hover:shadow-blue-500/20 group"
        >
          <router-link>
            <div class="flex items-start gap-5">
            <div
              class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-3 flex-shrink-0 group-hover:rotate-6 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">
                Follow us on Instagram
              </h3>
              <p class="text-gray-300 mb-3">
                Stay updated with the latest announcements and rewards.
              </p>
            </div>
          </div>
          </router-link>
        </div>
        <div
          class="bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300 shadow-xl hover:shadow-purple-500/20 group"
        >
        <router-link>
          <div class="flex items-start gap-5">
            <div
              class="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 flex-shrink-0 group-hover:rotate-6 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">
                Join our Telegram Community
              </h3>
              <p class="text-gray-300 mb-3">
                Connect with other users and get support from our team.
              </p>
            </div>
          </div>
        </router-link>
        </div>
        <div
          class="bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-2xl p-8 border border-white/10 hover:border-emerald-400/30 transition-all duration-300 shadow-xl hover:shadow-emerald-500/20 group"
        >
        <router-link>
          <div class="flex items-start gap-5">
            <div
              class="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-3 flex-shrink-0 group-hover:rotate-6 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">
                Verify Your Email Address
              </h3>
              <p class="text-gray-300 mb-3">
                Secure your account and stay informed.
              </p>
            </div>
          </div>
          </router-link>
        </div>
        <div
          class="bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-2xl p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300 shadow-xl hover:shadow-amber-500/20 group"
        >
        <router-link>
          <div class="flex items-start gap-5">
            <div
              class="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-3 flex-shrink-0 group-hover:rotate-6 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">
                Complete Your Profile
              </h3>
              <p class="text-gray-300 mb-3">
                Help us tailor your experience by filling out your details.
              </p>
            </div>
          </div>
          </router-link>
        </div>
        <div
          class="bg-gradient-to-br from-gray-800/50 to-gray-900/70 rounded-2xl p-8 border border-white/10 hover:border-green-400/30 transition-all duration-300 shadow-xl hover:shadow-green-500/20 group"
        >
        <router-link>
          <div class="flex items-start gap-5">
            <div
              class="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-3 flex-shrink-0 group-hover:rotate-6 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2">
                Make Your First Referral
              </h3>
              <p class="text-gray-300 mb-3">
                Invite a friend and start earning from our 10-level referral program.
              </p>
            </div>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style>
/* Add any custom styles here if needed */
</style>
