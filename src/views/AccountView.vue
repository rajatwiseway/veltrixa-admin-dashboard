<template>
  <div class="bg-gray-900 text-gray-100 min-h-screen p-3 md:p-6">
    <div class="flex justify-between items-center mb-3">
      <div>
        <h1 class="text-md md:text-xl font-bold">Admin Account</h1>
        <p class="text-gray-400">Manage your administrator profile and settings</p>
      </div>
      <div class="flex items-center space-x-4">
        <span class="text-sm text-gray-400">Last login: Today, 3:12 PM</span>
        <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-3xl transition flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
            </path>
          </svg>
          Edit Profile
        </button>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Profile Card -->
      <div class="lg:col-span-1 bg-[#0f0e1e] rounded-lg shadow-lg p-6">
        <div class="flex flex-col items-center">
          <div class="relative mb-4">
            <img class="w-32 h-32 rounded-full border-4 border-blue-500"
              src="https://randomuser.me/api/portraits/men/75.jpg" alt="Admin Profile">
            <div class="absolute bottom-0 right-0 bg-green-500 rounded-full p-1 border-2 border-[#0f0e1e]">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h2 class="text-xl font-bold">Michael Chen</h2>
          <p class="text-blue-400 mb-2">Super Administrator</p>
          <p class="text-gray-400 text-sm mb-6">Joined: January 15, 2022</p>

          <div class="w-full space-y-4">
            <div class="flex justify-between">
              <span class="text-gray-400">Email:</span>
              <span>michael.chen@veltrixa.ai</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Phone:</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Location:</span>
              <span>San Francisco, CA</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Timezone:</span>
              <span>PST (UTC-8)</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Security Card -->
        <div class="bg-[#0f0e1e] rounded-lg shadow-lg p-6">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Security Settings</h2>
            <button class="text-blue-400 hover:text-blue-300 flex items-center gap-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                </path>
              </svg>
              Security
            </button>
          </div>
          <div class="space-y-4">
            <div class="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-green-900/30 rounded-full text-green-400">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium">Password</h3>
                  <p class="text-sm text-gray-400">Last changed 3 weeks ago</p>
                </div>
              </div>
              <button class="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Change
              </button>
            </div>
            <div class="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-blue-900/30 rounded-full text-blue-400">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                    </path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium">Two-Factor Authentication</h3>
                  <p class="text-sm text-gray-400">Currently disabled</p>
                </div>
              </div>
              <button class="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Enable
              </button>
            </div>
            <div class="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-purple-900/30 rounded-full text-purple-400">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                    </path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-medium">Active Sessions</h3>
                  <p class="text-sm text-gray-400">2 devices</p>
                </div>
              </div>
              <button class="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Manage
              </button>
            </div>
          </div>
        </div>

        <!-- Activity Log -->
        <div class="bg-[#0f0e1e] rounded-lg shadow-lg overflow-hidden">
          <div class="px-6 py-4 border-b border-gray-700">
            <h2 class="text-lg font-semibold">Recent Activity</h2>
          </div>
          <div class="divide-y divide-gray-700">
            <!-- Activity Item 1 -->
            <div class="px-6 py-4 hover:bg-gray-700/50 transition">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-blue-900/30 rounded-full text-blue-400 mt-1">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                    </path>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between">
                    <h3 class="font-medium">Password changed</h3>
                    <span class="text-sm text-gray-400">Today, 3:12 PM</span>
                  </div>
                  <p class="text-sm text-gray-400 mt-1">You updated your account password</p>
                  <div class="text-xs text-gray-500 mt-2">From: Chrome • San Francisco, CA</div>
                </div>
              </div>
            </div>

            <!-- Activity Item 2 -->
            <div class="px-6 py-4 hover:bg-gray-700/50 transition">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-green-900/30 rounded-full text-green-400 mt-1">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                    </path>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between">
                    <h3 class="font-medium">Login successful</h3>
                    <span class="text-sm text-gray-400">Today, 2:45 PM</span>
                  </div>
                  <p class="text-sm text-gray-400 mt-1">You logged in from a new device</p>
                  <div class="text-xs text-gray-500 mt-2">From: Safari • San Francisco, CA</div>
                </div>
              </div>
            </div>

            <!-- Activity Item 3 -->
            <div class="px-6 py-4 hover:bg-gray-700/50 transition">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-yellow-900/30 rounded-full text-yellow-400 mt-1">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <div class="flex justify-between">
                    <h3 class="font-medium">Session timeout</h3>
                    <span class="text-sm text-gray-400">Yesterday, 11:30 PM</span>
                  </div>
                  <p class="text-sm text-gray-400 mt-1">Your session expired due to inactivity</p>
                  <div class="text-xs text-gray-500 mt-2">From: Chrome • San Francisco, CA</div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-6 py-4 border-t border-gray-700 text-center">
            <button class="text-blue-400 hover:text-blue-300 text-sm font-medium">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
