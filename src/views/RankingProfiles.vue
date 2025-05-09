<template>
  <div class="p-4 md:p-4 mx-auto text-white">
    <!-- Header with Back Button and Actions -->
    <div class="flex justify-between items-center mb-3">
      <button
        @click="$router.back()"
        class="flex items-center text-blue-400 hover:text-blue-300 transition duration-200 group cursor-pointer"
      >
        <svg
          class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7 7-7"
          />
        </svg>
        <span class="font-medium">Back</span>
      </button>
      <div class="flex space-x-3 cursor-pointer">
        <router-link
          to="/user-edit"
          class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition duration-200"
        >
          Edit Profile
        </router-link>
      </div>
    </div>
    <!-- Profile Card -->
    <div
      class="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8 p-4 bg-[#0f0e1e] rounded-2xl shadow-lg"
    >
      <div class="relative">
        <img
          src="https://i.pravatar.cc/150?img=5"
          alt="Avatar"
          class="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-blue-500 shadow-md"
        />
        <span
          class="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-[#18162c]"
        ></span>
      </div>
      <div class="text-center sm:text-left flex-1">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between">
          <div>
            <h2 class="text-2xl sm:text-3xl font-bold">John Doe</h2>
            <p class="text-sm text-gray-400">Senior UI/UX Designer</p>
          </div>
          <span
            class="inline-block mt-2 sm:mt-0 px-3 py-1 text-xs font-medium bg-green-600/30 text-green-400 rounded-full"
          >
            Active
          </span>
        </div>
        <div
          class="mt-4 flex items-center justify-center sm:justify-start space-x-4 text-sm"
        >
          <div class="flex items-center text-gray-400">
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-4 0 3 3 0 016 0z"
              />
            </svg>
            <span>San Francisco, CA</span>
          </div>
          <div class="flex items-center text-gray-400">
            <svg
              class="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>john@example.com</span>
          </div>
        </div>
      </div>
    </div>
    <!-- User Info Sections -->
    <div class="grid lg:grid-cols-3 gap-5 mb-6">
      <div
        class="bg-[#0f0e1e] p-5 rounded-2xl shadow-lg shadow-blue-500/20 transition duration-300"
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold">Personal Info</h3>
          <!-- <button class="text-blue-400 hover:text-blue-300 text-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button> -->
        </div>
        <ul class="space-y-3">
          <li
            v-for="(item, index) in personalInfo"
            :key="index"
            class="flex justify-between items-center py-2 border-b border-gray-800 last:border-0"
          >
            <span class="text-gray-400 text-sm">{{ item.label }}</span>
            <span class="font-medium text-right">{{ item.value }}</span>
          </li>
        </ul>
      </div>
      <div
        class="bg-[#0f0e1e] p-5 rounded-2xl shadow-lg shadow-blue-500/20 transition duration-300"
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold">Account Info</h3>
          <!-- <button class="text-blue-400 hover:text-blue-300 text-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button> -->
        </div>
        <ul class="space-y-3">
          <li
            v-for="(item, index) in accountInfo"
            :key="index"
            class="flex justify-between items-center py-2 border-b border-gray-800 last:border-0"
          >
            <span class="text-gray-400 text-sm">{{ item.label }}</span>
            <span
              :class="{
                'text-green-400': item.label === 'Status',
                'text-blue-400': item.label === 'Role',
              }"
              class="font-medium text-right"
            >
              {{ item.value }}
            </span>
          </li>
        </ul>
      </div>
      <div
        class="bg-[#0f0e1e] p-5 rounded-2xl shadow-lg shadow-blue-500/20 transition duration-300"
      >
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold">Preferences</h3>
          <!-- <button class="text-blue-400 hover:text-blue-300 text-sm">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button> -->
        </div>
        <ul class="space-y-3">
          <li
            v-for="(item, index) in additionalInfo"
            :key="index"
            class="flex justify-between items-center py-2 border-b border-gray-800 last:border-0"
          >
            <span class="text-gray-400 text-sm">{{ item.label }}</span>
            <span class="font-medium text-right">{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Recent Activity Table -->
    <div class="bg-[#0f0e1e] p-3 rounded-2xl shadow-lg">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-lg font-semibold">John Doe Referrals</h3>
        <button
          class="text-sm text-blue-400 hover:text-blue-300 cursor-pointer"
        >
          View All
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left">
          <thead
            class="text-md text-gray-200 border-b border-gray-700 bg-gray-700 px-3"
          >
            <tr>
              <th class="py-3 px-4 font-medium">User</th>
              <th class="py-3 px-4 font-medium">Contact</th>
              <th class="py-3 px-4 font-medium">Status</th>
              <th class="py-3 px-4 font-medium">Date</th>
              <!-- <th class="py-3 px-4 font-medium">Device</th>
              <th class="py-3 font-medium">IP</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(log, i) in activityLogs"
              :key="i"
              class="border-b border-gray-700 hover:bg-gray-700/30 transition duration-200"
            >
              <td class="py-2 px-3 md:py-3 md:px-6 min-w-[100px]">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      alt="Sarah Johnson"
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">Sarah Johnson</div>
                    <div class="text-sm text-gray-400">@sarahj</div>
                  </div>
                </div>
              </td>
              <td class="py-2 px-3 md:py-3 md:px-6 min-w-[100px]">
                <div class="text-sm">sarah@example.com</div>
                <div class="text-sm text-gray-400">+1 (555) 123-4567</div>
              </td>
              <td class="py-2 px-3 md:py-3 md:px-6 min-w-[100px]">
                <span
                  :class="getActionClass(log.action)"
                  class="px-2 py-1 rounded-full text-xs font-medium w-full text-center block lg:inline bg-green-600/30 text-green-400"
                >
                  Active
                </span>
              </td>
              <td class="py-2 px-3 md:py-3 md:px-6 min-w-[100px]">
                <div class="font-medium">{{ log.date }}</div>
                <div class="text-xs text-gray-400">{{ log.time }}</div>
              </td>
              
              <!-- <td class="py-2 px-3 md:py-3 md:px-6 min-w-[100px]">
                <div class="flex items-center">
                  <span
                    :class="getDeviceIcon(log.device).color"
                    class="p-1.5 mr-2 rounded-md bg-opacity-20"
                  >
                    <component
                      :is="getDeviceIcon(log.device).icon"
                      class="w-4 h-4"
                    />
                  </span>
                  {{ log.device }}
                </div>
              </td>
              <td class="py-3 min-w-[100px]">
                <div class="flex items-center justify-between">
                  <span>{{ log.ip }}</span>
                  <button class="text-gray-400 hover:text-white">
                    <svg
                      class="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      />
                    </svg>
                  </button>
                </div>
              </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const DesktopIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>`,
};
const MobileIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>`,
};
const LaptopIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>`,
};

// Data
const personalInfo = [
  { label: "Full Name", value: "John Michael Doe" },
  { label: "Email", value: "john@example.com" },
  { label: "Phone", value: "+1 (234) 567-890" },
  { label: "Birthday", value: "May 15, 1990" },
];

const accountInfo = [
  { label: "Status", value: "Active" },
  { label: "Role", value: "Administrator" },
  { label: "Joined Date", value: "Jan 10, 2024" },
  { label: "Last Active", value: "2 hours ago" },
];

const additionalInfo = [
  { label: "Language", value: "English" },
  { label: "Timezone", value: "EST (UTC-5)" },
  { label: "Currency", value: "USD ($)" },
];

const activityLogs = [
  {
    date: "2025-05-04",
    time: "10:45 AM",
    action: "Login",
    device: "iPhone 13",
    ip: "192.168.1.2",
  },
  {
    date: "2025-05-03",
    time: "02:30 PM",
    action: "Unactive",
    device: "MacBook Pro",
    ip: "192.168.1.2",
  },
  {
    date: "2025-05-01",
    time: "09:15 AM",
    action: "Password Change",
    device: "Windows PC",
    ip: "192.168.1.3",
  },
  {
    date: "2025-04-28",
    time: "11:20 PM",
    action: "Login",
    device: "iPad Air",
    ip: "192.168.1.4",
  },
];

// Methods
const getActionClass = (action) => {
  const classes = {
    Login: "bg-blue-500/10 text-blue-400",
    "Unactive": " bg-red-900/30 text-red-400",
    "Password Change": "bg-amber-500/10 text-amber-400",
    Logout: "bg-gray-500/10 text-gray-400",
  };
  return classes[action] || "bg-gray-500/10 text-gray-400";
};

const getDeviceIcon = (device) => {
  if (device.includes("iPhone") || device.includes("iPad")) {
    return { icon: MobileIcon, color: "text-blue-400 bg-blue-400" };
  } else if (device.includes("Mac")) {
    return { icon: LaptopIcon, color: "text-gray-400 bg-gray-400" };
  } else if (device.includes("Windows")) {
    return { icon: DesktopIcon, color: "text-indigo-400 bg-indigo-400" };
  }
  return { icon: DesktopIcon, color: "text-gray-400 bg-gray-400" };
};
</script>
