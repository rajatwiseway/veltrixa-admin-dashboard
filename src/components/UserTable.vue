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
                User
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Contact
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Last Active
              </th>
              <th
                scope="col"
                class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-[#0f0e1e] divide-y divide-gray-700">
            <!-- User 1 -->
            
            <tr class="hover:bg-gray-700/50 transition cursor-pointer" @click="goToUserDetails">
                
              <td class="px-6 py-4 whitespace-nowrap">
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
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm">sarah@example.com</div>
                <div class="text-sm text-gray-400">+1 (555) 123-4567</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-900/30 text-purple-400"
                  >Admin</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400"
                  >Active</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                <div>Today, 3:12 PM</div>
                <div class="text-xs">from New York</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-3">
                  <router-link
                    to="/user-details"
                    class="text-blue-400 hover:text-blue-300"
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </router-link>
                  <router-link
                    to="/user-edit"
                    class="text-yellow-400 hover:text-yellow-300"
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
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      ></path>
                    </svg>
                  </router-link>
                  <router-link
                    to="/user-edit"
                    class="text-red-400 hover:text-red-300"
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </router-link>
                </div>
              </td>
            </tr>
            <!-- User 2 -->
            <tr class="hover:bg-gray-700/50 transition cursor-pointer" @click="goToUserDetails">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      alt="Michael Chen"
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">Michael Chen</div>
                    <div class="text-sm text-gray-400">@michaelc</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm">michael@example.com</div>
                <div class="text-sm text-gray-400">+1 (555) 987-6543</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-900/30 text-blue-400"
                  >Developer</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400"
                  >Active</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                <div>Today, 2:30 PM</div>
                <div class="text-xs">from San Francisco</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-3">
                  <!-- Same action buttons as above -->
                </div>
              </td>
            </tr>
            <!-- User 3 -->
            <tr class="hover:bg-gray-700/50 transition cursor-pointer" @click="goToUserDetails">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://randomuser.me/api/portraits/women/68.jpg"
                      alt="Emily Rodriguez"
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">Emily Rodriguez</div>
                    <div class="text-sm text-gray-400">@emilyr</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm">emily@example.com</div>
                <div class="text-sm text-gray-400">+1 (555) 456-7890</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400"
                  >User</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-900/30 text-yellow-400"
                  >Pending</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                <div>Yesterday, 5:45 PM</div>
                <div class="text-xs">from Chicago</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-3">
                  <!-- Same action buttons as above -->
                </div>
              </td>
            </tr>
            <!-- User 4 -->
            <tr class="hover:bg-gray-700/50 transition cursor-pointer" @click="goToUserDetails">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="David Wilson"
                    />
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium">David Wilson</div>
                    <div class="text-sm text-gray-400">@davidw</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm">david@example.com</div>
                <div class="text-sm text-gray-400">+1 (555) 789-0123</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-900/30 text-green-400"
                  >User</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-900/30 text-red-400"
                  >Suspended</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                <div>1 week ago</div>
                <div class="text-xs">from London</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-3">
                  <!-- Same action buttons as above -->
                </div>
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
