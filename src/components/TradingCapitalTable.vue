<template>
    <div class="p-2 md:p-4 bg-gray-900 text-gray-100 min-h-screen">
      <!-- Page Header -->
      <div class="flex justify-between items-start mb-3 flex-col gap-2 md:flex-row md:justify-between md:flex-start">
        <div>
          <h1 class="text-md md:text-xl font-bold ">{{ title }}</h1>
          <p class="text-gray-400">{{ subtitle }}</p>
        </div>
        <div class="flex items-center space-x-4 w-full md:w-max">
          <div class="relative w-full md:w-max">
            <input
              type="text"
              placeholder="Search users..."
              class="bg-gray-800 border border-gray-700 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white w-full md:w-max"
            />
            <div class="absolute left-3 top-2.5 text-gray-500">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
          <button
            class="px-4 py-2 hidden bg-blue-600 text-white rounded-3xl hover:bg-blue-700 transition flex items-center gap-2"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add User
          </button>
        </div>
      </div>
      <!-- User Table -->
      <div class="bg-[#0f0e1e] rounded-lg shadow-lg overflow-hidden">
        <div
          class="px-6 py-4 border-b border-gray-700 flex justify-between items-center"
        >
          <h2 class="text-lg font-semibold">All Users (248)</h2>
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-400">Filter:</span>
              <select
                class="bg-gray-700 border border-gray-600 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option>All Users</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Admins</option>
              </select>
            </div>
            <button class="p-2 rounded-md hover:bg-gray-700">
              <svg
                class="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-700">
            <thead class="bg-gray-700">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Capital Deposite (USDT)
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                  Level 1 Commission
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                >
                Level 2 Commission
                </th>
              </tr>
            </thead>
            <tbody class="bg-[#0f0e1e] divide-y divide-gray-700">
              <!-- User 1 -->
              
              <tr class="hover:bg-gray-700/50 transition cursor-pointer">
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >$100 - $999</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >1%</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >1%</span
                  >
                </td>
              </tr>
              <!-- User 2 -->
              <tr class="hover:bg-gray-700/50 transition cursor-pointer">
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >$1,000 - $9,999</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >2%</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >1%</span
                  >
                </td>
              </tr>
              <!-- User 3 -->
              <tr class="hover:bg-gray-700/50 transition cursor-pointer">
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >$10,000 - $49,999</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >3%</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >1%</span
                  >
                </td>
              </tr>
              <!-- User 4 -->
              <tr class="hover:bg-gray-700/50 transition cursor-pointer">
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >$50,000+</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >4%</span
                  >
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    >1%</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Pagination -->
        <div
          class="px-6 py-4 border-t border-gray-700 flex items-center justify-between flex-col gap-2 lg:flex-row lg:justify-between"
        >
          <div class="text-sm text-gray-400">
            Showing <span class="font-medium">1</span> to
            <span class="font-medium">4</span> of
            <span class="font-medium">248</span> users
          </div>
          <div class="flex space-x-2">
            <button
              class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer"
            >
              Previous
            </button>
            <button
              class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 cursor-pointer"
            >
              1
            </button>
            <button
              class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer"
            >
              2
            </button>
            <button
              class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer"
            >
              3
            </button>
            <span class="px-3 py-1 text-sm text-gray-400">...</span>
            <button
              class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer"
            >
              10
            </button>
            <button
              class="px-3 py-1 border border-gray-600 rounded-md text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  defineProps({
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  });
  
  const router = useRouter()
  const goToUserDetails = () => {
    router.push('/user-details')
  }
  
  </script>
  