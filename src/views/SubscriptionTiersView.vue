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
    <div
      class="z-10 container relative  flex-col justify-center h-full pb-12"
    >
      <!-- Header -->
      <div class=" ">
        <h1 class="text-md md:text-xl font-bold text-white mb-4">
          Subscription Tiers
        </h1>
       
      </div>
      <!-- Plans Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 w-full gap-3"
      >
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="bg-[#0f0e1e] rounded-xl p-3 md:p-6 shadow-lg border border-gray-700 transition-transform hover:border-clr_base"
        >
          <div class="flex justify-between items-start mb-4">
            <div class="flex items-center gap-2">
              <i :class="plan.icon" class="text-white text-xl"></i>
              <h3 class="text-lg font-bold text-white">{{ plan.title }}</h3>
            </div>
            <span :class="`${plan.tagColor} text-xs px-2 py-1 rounded-full`">{{
              plan.tag
            }}</span>
          </div>
          <div class="mb-4">
            <p class="text-gray-300 text-sm mb-1">Monthly Reward</p>
            <p class="text-2xl font-bold text-green-400">
              {{ plan.roi }}
              <!-- <span
                class="text-sm text-gray-400 border border-gray-600 px-2 py-1 rounded-full"
                >{{ plan.subscription }}</span
              > -->
            </p>
          </div>

          <div class="mb-4">
            <p class="text-gray-300 text-sm mb-1 capitalize">
              subscription fee
            </p>
            <p class="text-lg font-semibold text-white">
              {{ plan.subscriptionfees }}
            </p>
          </div>

          <div class="mb-4">
            <p class="text-gray-300 text-sm mb-1 capitalize">capital Range</p>
            <p class="text-lg font-semibold text-white">
              {{ plan.capitalRange }}
            </p>
          </div>
          <!-- <div class="pt-2 border-t border-white/10">
            <p class="text-gray-300 text-sm mb-1 capitalize">earningLimit</p>
            <p class="text-lg font-semibold text-white">
              {{ plan.earningLimit }}
            </p>
          </div> -->
         <router-link   :to="'/subscription/' + plan.route" >
          <button
            class="w-full btn mt-6 bg-main-card  text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            Subscribe
          </button>
         </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    title: "Ignite",
    route: "ignite",
    icon: "fas fa-fire text-yellow-500",
    capitalRange: "$100 - $250",
    subscriptionfees: "$20",
    roi: "8% - 10%",
    earningLimit: "250% / 400%",
    tag: "Starter",
    tagColor: "bg-red-500",
    popular: false,
  },
  {
    title: "Core",
    route: "core",
    icon: "fas fa-gem text-blue-400",
    capitalRange: "$500 - $1,500",
    subscriptionfees: "$100",
    roi: "9% - 11%",
    earningLimit: "260% / 420%",
    tag: "Basic",
    tagColor: "bg-yellow-500",
    popular: false,
  },
  {
    title: "Plus",
    route: "plus",
    icon: "fas fa-plus-circle text-green-400",
    capitalRange: "$2,500 - $5,000",
    subscriptionfees: "$250",
    roi: "10% - 12%",
    earningLimit: "270% / 440%",
    tag: "Popular",
    tagColor: "bg-green-500",
    popular: true,
  },
  {
    title: "Nova",
    route: "nova",
    icon: "fas fa-star text-purple-400",
    capitalRange: "$10,000 - $20,000",
    subscriptionfees: "$1000",
    roi: "11% - 13%",
    earningLimit: "280% / 460%",
    tag: "Growth",
    tagColor: "bg-blue-500",
    popular: false,
  },
  {
    title: "Vortex",
    route: "vortex",
    icon: "fas fa-tornado text-red-400",
    capitalRange: "$25,000 - $50,000",
    subscriptionfees: "$2500",
    roi: "12% - 14%",
    earningLimit: "290% / 480%",
    tag: "Advanced",
    tagColor: "bg-indigo-500",
    popular: false,
  },
  {
    title: "Quantum",
    route: "quantum",
    icon: "fas fa-atom text-indigo-400",
    capitalRange: "$75,000 - $100,000",
    subscriptionfees: "$7500",
    roi: "13% - 15%",
    earningLimit: "300% / 500%",
    tag: "Elite",
    tagColor: "bg-purple-500",
    popular: false,
  },
];
</script>


<style>
/* Add any custom styles here if needed */
</style>
