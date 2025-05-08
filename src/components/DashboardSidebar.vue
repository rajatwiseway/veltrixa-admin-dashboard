<template>
  <aside class="bg-[#0f0e1e] h-full flex flex-col w-full">
    <div
      class="flex items-center justify-center h-16 px-4 border-b border-gray-800"
    >
      <router-link to="/" class=""
        ><img src="/public/images/logo.png" alt="Logo"
      /></router-link>
    </div>

    <nav class="flex-1 overflow-y-auto px-2">
      <ul class="space-y-2 font-medium pt-6">
        <!-- user-dashboard -->
        <li>
          <router-link
            to="/"
            @click="setActive('/')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === '/'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <!-- / Icon -->
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === '/'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">dashboard</span>
          </router-link>
        </li>
        <!-- user -->
        <li>
          <router-link
            to="/users"
            @click="setActive('users')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === 'users'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === 'users'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">users</span>
          </router-link>
        </li>

        <!-- airdrop -->
        <li class="hidden">
          <router-link
            to="/airdrop"
            @click="setActive('airdrop')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === 'airdrop'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === 'airdrop'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M152 64c-13.3 0-24 10.7-24 24s10.7 24 24 24h51.2L158.4 203.2l-18.3-55c-4.3-13-17.2-20.8-30.7-18.4s-23.1 14.5-23.1 28.2V208H32v48h54.3l35 105H64v48h80v-48H131.7l-35-105H168v136h48V256h80v136h48V256h71.3l-35 105H368v48h80v-48h-48.7l35-105H480v-48h-54.3v-52.8c0-13.7-9.8-25.4-23.1-28.2s-26.4 5.3-30.7 18.4l-18.3 55L308.8 112H360c13.3 0 24-10.7 24-24s-10.7-24-24-24c-23.6 0-45.1 10.4-59.7 28.3L256 118.3 211.7 92.3C197.1 74.4 175.6 64 152 64z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">airdrop</span>
          </router-link>
        </li>

        <li>
          <router-link
            to="/subscription"
            @click="toggleSubscription"
            class="flex items-center justify-between p-2 rounded-lg group cursor-pointer"
            :class="
              activeItem.startsWith('Subscription')
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <div class="flex items-center">
              <svg
                class="w-5 h-5 transition duration-75"
                :class="
                  activeItem.startsWith('Subscription')
                    ? 'text-gray-100'
                    : 'text-gray-300 group-hover:text-gray-300'
                "
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 22h16v-2H4v2zm4-6h2v4H8v-4zm4-5h2v9h-2v-9zm4-4h2v13h-2V7z"
                />
              </svg>
              <span class="ms-3 capitalize text-sm">Subscription</span>
            </div>
            <svg
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-90': isSubscriptionOpen }"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>

          <ul v-show="isSubscriptionOpen" class="ml-8 mt-1 space-y-1">
            <li v-for="plan in subscriptionPlans" :key="plan.name">
              <router-link
                :to="'/subscription/' + plan.route"
                @click="setActive('Subscription/' + plan.route)"
                class="flex items-center p-2 rounded-lg group text-sm"
                :class="
                  activeItem === 'Subscription/' + plan.route
                    ? 'text-purple-300'
                    : 'text-gray-400 hover:text-gray-300'
                "
              >
                <i :class="plan.icon" class="w-5 h-5 text-center"></i>
                <span class="ms-3 capitalize text-sm">{{ plan.name }}</span>
              </router-link>
            </li>
          </ul>
        </li>

        <!-- Deals -->
        <li class="hidden">
          <router-link
            to="/deals"
            @click="setActive('deals')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === 'deals'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === 'deals'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path
                d="M434.7 167.9l-38.6 38.6c-4.5 4.5-11.8 4.5-16.3 0l-74.6-74.6c-4.5-4.5-4.5-11.8 0-16.3l38.6-38.6c20.9-20.9 54.9-20.9 75.8 0l15.1 15.1c20.9 20.9 20.9 54.9 0 75.8zM187.3 344.1l38.6-38.6c4.5-4.5 11.8-4.5 16.3 0l74.6 74.6c4.5 4.5 4.5 11.8 0 16.3l-38.6 38.6c-20.9 20.9-54.9 20.9-75.8 0l-15.1-15.1c-20.9-20.9-20.9-54.9 0-75.8z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">Deals</span>
          </router-link>
        </li>

        <!-- Robot -->
        <li class="hidden">
          <router-link
            to="/robot"
            @click="setActive('robot')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === 'robot'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === 'robot'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path
                d="M320 32c-17.7 0-32 14.3-32 32v32H144c-26.5 0-48 21.5-48 48v288h32v64c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32v-64h32V144c0-26.5-21.5-48-48-48H352V64c0-17.7-14.3-32-32-32zm-96 224a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm192 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">Robot</span>
          </router-link>
        </li>

        <!-- Account -->
        <li>
          <router-link
            to="/account"
            @click="setActive('account')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === 'account'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === 'account'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">Account</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/login"
            @click="setActive('login')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === 'login'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === 'login'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">login</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="p-4 border-t border-gray-800">
      <div class="flex items-center opacity-0">
        <img
          class="h-10 w-10 rounded-full"
          src="https://via.placeholder.com/40"
          alt="User Avatar"
        />
        <div class="ml-3 text-white">
          <p class="text-sm">User Name</p>
          <p class="text-xs">Admin</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeItem: "/",
      isSubscriptionOpen: false,
      subscriptionPlans: [
        {
          name: "Ignite",
          route: "ignite",
          icon: "fas fa-fire text-yellow-500",
        }, // Fire = Starter/Energy
        { name: "Core", route: "core", icon: "fas fa-gem text-blue-400" }, // Gem = Core/Value
        {
          name: "Plus",
          route: "plus",
          icon: "fas fa-plus-circle text-green-400",
        }, // Plus = Upgrade
        { name: "Nova", route: "nova", icon: "fas fa-star text-purple-400" }, // Star = Stellar/New
        { name: "Vortex", route: "vortex", icon: "fas fa-water text-red-400" }, // Water = Flow/Vortex
        {
          name: "Quantum",
          route: "quantum",
          icon: "fas fa-infinity text-indigo-400",
        }, // Infinity = Quantum Scale
      ],
    };
  },
  methods: {
    setActive(item) {
      this.activeItem = item;
    },

    toggleSubscription() {
      this.isSubscriptionOpen = !this.isSubscriptionOpen;
      if (this.isSubscriptionOpen) {
        this.activeItem = "Subscription";
      }
    },
  },
};
</script>

<style scoped>
.bg-main-card {
  background-image: linear-gradient(
    90deg,
    rgba(165, 119, 255, 1) 0%,
    rgba(112, 40, 255, 1) 50%
  );
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  transition: all 0.3s ease-in-out;
}

.text-gray-100 {
  color: #f7fafc;
}

.text-gray-300 {
  color: #e2e8f0;
}

.text-gray-300:hover {
  color: #ffffff;
}

.text-sm {
  font-size: 0.875rem;
}

.text-xs {
  font-size: 0.75rem;
}

.group:hover .text-gray-300 {
  color: #ffffff;
}

/* Blinking Animation */
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

.blinking-icon {
  animation: blink 1s ease-in-out infinite;
}
</style>
