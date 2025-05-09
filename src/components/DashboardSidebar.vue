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
        <li>
          <router-link
            to="/airdrop"
            @click="toggleAirdrop"
            class="flex items-center justify-between p-2 rounded-lg group cursor-pointer"
            :class="
              activeItem.startsWith('Airdrop')
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <div class="flex items-center">
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
              <span class="ms-3 capitalize text-sm">Airdrop</span>
            </div>
            <svg
              class="w-4 h-4 transition-transform duration-200"
              :class="{ 'rotate-90': isAirdropOpen }"
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

          <ul v-show="isAirdropOpen" class="ml-8 mt-1 space-y-1">
            <li v-for="plan in airdropPlans" :key="plan.name">
              <router-link
                :to="'/airdrop/' + plan.route"
                @click="setActive('Airdrop/' + plan.route)"
                class="flex items-center p-2 rounded-lg group text-sm"
                :class="
                  activeItem === 'Airdrop/' + plan.route
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

        <!-- Ranking -->
        <li class="">
          <router-link
            to="/ranking"
            @click="setActive('ranking')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === 'ranking'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === 'ranking'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path
                d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-128 0zM32 320c-17.7 0-32 14.3-32 32L0 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L32 320zm416 96l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">Ranking</span>
          </router-link>
        </li>

        <!-- Withdrawal  -->
        <li class="">
          <router-link
            to="/withdrawal"
            @click="setActive('withdrawal')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === 'withdrawal'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === 'withdrawal'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path
                d="M535 41c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17s-2.5 12.5-7 17l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l23-23L384 112c-13.3 0-24-10.7-24-24s10.7-24 24-24l174.1 0L535 41zM105 377l-23 23L256 400c13.3 0 24 10.7 24 24s-10.7 24-24 24L81.9 448l23 23c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 441c-4.5-4.5-7-10.6-7-17s2.5-12.5 7-17l64-64c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM96 64l241.9 0c-3.7 7.2-5.9 15.3-5.9 24c0 28.7 23.3 52 52 52l117.4 0c-4 17 .6 35.5 13.8 48.8c20.3 20.3 53.2 20.3 73.5 0L608 169.5 608 384c0 35.3-28.7 64-64 64l-241.9 0c3.7-7.2 5.9-15.3 5.9-24c0-28.7-23.3-52-52-52l-117.4 0c4-17-.6-35.5-13.8-48.8c-20.3-20.3-53.2-20.3-73.5 0L32 342.5 32 128c0-35.3 28.7-64 64-64zm64 64l-64 0 0 64c35.3 0 64-28.7 64-64zM544 320c-35.3 0-64 28.7-64 64l64 0 0-64zM320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">Withdrawal</span>
          </router-link>
        </li>

        <!-- TRADING CAPITAL -->
        <li class="">
          <router-link
            to="/trading-capital"
            @click="setActive('trading-capital')"
            class="flex items-center p-2 rounded-lg group"
            :class="
              activeItem === 'trading-capital'
                ? 'bg-main-card text-gray-100'
                : 'text-gray-300 hover:bg-gray-800'
            "
          >
            <svg
              class="w-5 h-5 transition duration-75"
              :class="
                activeItem === 'trading-capital'
                  ? 'text-gray-100'
                  : 'text-gray-300 group-hover:text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path
                d="M320 96L192 96 144.6 24.9C137.5 14.2 145.1 0 157.9 0L354.1 0c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128l128 0c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4c0 0 0 0 0 0s0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15c0 0 0 0 0 0l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z"
              />
            </svg>
            <span class="ms-3 capitalize text-sm">Trading Capital</span>
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
      isAirdropOpen: false,
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
      airdropPlans: [
        {
          name: "Completed Taks",
          route: "completed-tasks",
          icon: "fas fa-fire text-yellow-500",
        },
        {
          name: "Pending Taks",
          route: "pending-tasks",
          icon: "fas fa-gem text-blue-400",
        },
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
    toggleAirdrop() {
      this.isAirdropOpen = !this.isAirdropOpen;
      if (this.isAirdropOpen) {
        this.activeItem = "Airdrop";
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
