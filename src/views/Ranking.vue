<template>
  <div class="p-2">
    <h1 class="text-md md:text-xl font-bold mb-1">
      Top Performers Leaderboard
    </h1>
    <p class="text-gray-400">
      Track the highest-ranking users based on task completion, referrals, and
      total VELT earnings. Stay active to climb the ranks and earn more rewards!
    </p>
  </div>
  <div
    class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 w-full"
  >
    <div class="p-6 sm:p-8">
      <!-- <h2
        class="md:text-2xl text-md font-bold text-white mb-6 flex items-center"
      >
        <span
          class="w-3 h-3 bg-purple-400 rounded-full mr-2 animate-pulse"
        ></span>
        10-Level Referral Distribution
      </h2> -->
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-white/10">
          <thead>
            <tr>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider bg-white/5"
              >
                User
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider bg-white/5"
              >
                Rank
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider bg-white/5"
              >
                Self Subscription
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider bg-white/5"
              >
                Self Capital
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider bg-white/5"
              >
                Team Subscription
              </th>
              <th
                class="px-4 py-3 text-left text-xs font-medium text-indigo-300 uppercase tracking-wider bg-white/5"
              >
                Reward
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr class="hover:bg-white/5 transition-colors cursor-pointer bg-white/2.5" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors cursor-pointer" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors cursor-pointer bg-white/2.5" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors cursor-pointer" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors cursor-pointer bg-white/2.5" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors cursor-pointer" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors cursor-pointer bg-white/2.5" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors cursor-pointer" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors cursor-pointer bg-white/2.5" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
            <tr class="hover:bg-white/5 transition-colors cursor-pointer" @click="goRankingProfile">
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-medium text-white font-mono"
              >
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
              <td class="px-4 py-4 whitespace-nowrap text-sm text-indigo-300">
                Cortex Agent
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $500
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $1000
              </td>
              <td
                class="px-4 py-4 whitespace-nowrap text-sm font-semibold text-emerald-400 font-mono"
              >
                $100
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goRankingProfile = () => {
  router.push('/ranking-profile')
}

</script>