<template>
  <div class="p-3 md:p-4 bg-gray-900 text-gray-100 min-h-screen">
    <!-- Dashboard Header -->
    <div class="flex items-center justify-between h-16 md:hidden bg-[#0f0e1e] p-2 rounded-md mb-2">
      <!-- Left side -->
      <router-link to="/" class="flex items-center md:hidden">
        <img src="/public/images/logo.png" alt="" class="w-[80%]  ">
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
            <img class="h-8 w-10 rounded-full" src="https://i.pravatar.cc/150?img=5" alt="User avatar">
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


    <div class="flex justify-between items-center mb-3">
      <h1 class="text-md md:text-xl font-bold">Admin Dashboard</h1>
      <div class="flex items-center flex-wrap space-x-4">
        <span class="text-sm text-gray-400">Last updated: Today, 3:12 PM</span>
        <button class="px-4 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition hidden md:block">
          Refresh Data
        </button>
      </div>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <!-- Card 1 -->
      <div class="bg-[#0f0e1e] rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-gray-400">Total Users</p>
            <p class="text-3xl font-bold">1,248</p>
          </div>
          <div class="p-3 rounded-full bg-blue-900/30 text-blue-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        <p class="mt-2 text-sm text-green-400 font-medium">+12.5% from last month</p>
      </div>

      <!-- Card 2 -->
      <div class="bg-[#0f0e1e] rounded-lg shadow-lg p-6 border-l-4 border-green-500">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-gray-400">Active Sessions</p>
            <p class="text-3xl font-bold">482</p>
          </div>
          <div class="p-3 rounded-full bg-green-900/30 text-green-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>
        <p class="mt-2 text-sm text-green-400 font-medium">+8.3% from yesterday</p>
      </div>

      <!-- Card 3 -->
      <div class="bg-[#0f0e1e] rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-gray-400">AI Requests</p>
            <p class="text-3xl font-bold">24,891</p>
          </div>
          <div class="p-3 rounded-full bg-purple-900/30 text-purple-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
        <p class="mt-2 text-sm text-red-400 font-medium">-3.2% from last week</p>
      </div>

      <!-- Card 4 -->
      <div class="bg-[#0f0e1e] rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
        <div class="flex justify-between items-start">
          <div>
            <p class="text-sm font-medium text-gray-400">Avg. Response Time</p>
            <p class="text-3xl font-bold">342ms</p>
          </div>
          <div class="p-3 rounded-full bg-yellow-900/30 text-yellow-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <p class="mt-2 text-sm text-green-400 font-medium">-15% improvement</p>
      </div>
    </div>

    <!-- Table View -->
    <div class="bg-[#0f0e1e] rounded-lg shadow-lg overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
        <h2 class="text-lg font-semibold">Recent Activity</h2>
        <div class="relative">
          <select
            class="appearance-none bg-gray-700 border border-gray-600 rounded-md pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-700">
          <thead class="bg-gray-700">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                User</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Action</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Time</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Details</th>
            </tr>
          </thead>
          <tbody class="bg-[#0f0e1e] divide-y divide-gray-700">
            <!-- Row 1 -->
            <tr class="hover:bg-gray-700/50 transition">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/32.jpg" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">Sarah Johnson</div>
                    <div class="text-sm text-gray-400">sarah@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm">AI Model Training</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400">Completed</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">3:12 PM</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" class="text-blue-400 hover:text-blue-300">View</a>
              </td>
            </tr>

            <!-- Row 2 -->
            <tr class="hover:bg-gray-700/50 transition">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">Michael Chen</div>
                    <div class="text-sm text-gray-400">michael@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm">Data Query</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900/30 text-blue-400">Processing</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">2:45 PM</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" class="text-blue-400 hover:text-blue-300">View</a>
              </td>
            </tr>

            <!-- Row 3 -->
            <tr class="hover:bg-gray-700/50 transition">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/63.jpg" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">Emily Rodriguez</div>
                    <div class="text-sm text-gray-400">emily@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm">API Integration</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-400">Pending</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">1:30 PM</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" class="text-blue-400 hover:text-blue-300">View</a>
              </td>
            </tr>

            <!-- Row 6 -->
            <tr class="hover:bg-gray-700/50 transition">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">Michael Chen</div>
                    <div class="text-sm text-gray-400">michael@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm">Data Query</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900/30 text-blue-400">Processing</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">2:45 PM</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" class="text-blue-400 hover:text-blue-300">View</a>
              </td>
            </tr>

            <!-- Row 5 -->
            <tr class="hover:bg-gray-700/50 transition">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">Michael Chen</div>
                    <div class="text-sm text-gray-400">michael@example.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm">Data Query</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900/30 text-blue-400">Processing</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">2:45 PM</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" class="text-blue-400 hover:text-blue-300">View</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="px-6 py-4 border-t border-gray-700 flex items-center flex-col md:flex-row justify-between">
        <div class="text-sm text-gray-400">Showing <span class="font-medium">1</span> to <span
            class="font-medium">3</span> of <span class="font-medium">24</span> entries</div>
        <div class="flex space-x-2">
          <button
            class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer">Previous</button>
          <button
            class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer">1</button>
          <button
            class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer">2</button>
          <button
            class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer">3</button>
          <button
            class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script></script>
