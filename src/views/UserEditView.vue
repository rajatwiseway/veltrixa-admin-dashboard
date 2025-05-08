<template>
  <div class="p-4 md:p-4  text-white">
    <div class="flex justify-between items-center mb-4">
      <div class="">
        <button @click="$router.back()"
          class="flex items-center text-blue-400 hover:text-blue-300 transition duration-200 group">
          <svg class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7 7-7" />
          </svg>
          <span class="font-medium">Back</span>
        </button>
        <!-- <h1 class="text-2xl font-bold mt-4">Edit Profile</h1>
        <p class="text-gray-400">Update your personal and account information</p> -->
      </div>
    </div>
    <!-- Main Form -->
    <div class="space-y-4">
      <!-- Profile Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-[#0f0e1e]  p-4 rounded-2xl shadow-lg">
          <h2 class="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Profile Information</h2>
          <div class="flex flex-col md:flex-row gap-4">
            <!-- Avatar Upload -->
            <div class="flex-shrink-0">
              <div class="relative group">
                <img :src="form.avatar || 'https://i.pravatar.cc/150?img=5'" alt="Avatar"
                  class="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md object-cover" />
                <div
                  class="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 cursor-pointer">
                  <label for="avatar-upload" class="p-3 bg-blue-400 rounded-full">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 13a3 3 0 11-4 0 3 3 0 016 0z" />
                    </svg>
                    <input id="avatar-upload" type="file" class="hidden" @change="handleAvatarUpload"
                      accept="image/*" />
                  </label>
                </div>
              </div>
            </div>
            <!-- Personal Info Form -->
            <div class="flex-1 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label for="first-name" class="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                  <input id="first-name" v-model="form.firstName" type="text"
                    class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200" />
                </div>
                <div>
                  <label for="last-name" class="block text-sm font-medium text-gray-400 mb-1">Last Name</label>
                  <input id="last-name" v-model="form.lastName" type="text"
                    class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200" />
                </div>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-400 mb-1">Email</label>
                <input id="email" v-model="form.email" type="email"
                  class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200" />
              </div>
              <div>
                <label for="bio" class="block text-sm font-medium text-gray-400 mb-1">Bio</label>
                <textarea id="bio" v-model="form.bio" rows="3"
                  class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200"
                  placeholder="Tell us about yourself..."></textarea>
              </div>
            </div>
          </div>
        </div>
        <!-- Danger Zone -->
        <div class="bg-[#0f0e1e] border border-red-500/30 p-4 rounded-2xl shadow-lg">
          <h2 class="text-lg font-semibold mb-4 text-red-400">Danger Zone</h2>

          <div class="space-y-4">
            <div class="flex flex-col md:flex-row md:items-center justify-between p-4 bg-red-500/10 rounded-lg">
              <div class="mb-3 md:mb-0">
                <h3 class="font-medium text-red-400">Deactivate Account</h3>
                <p class="text-sm text-gray-400">Your account will be temporarily disabled</p>
              </div>
              <button @click="confirmDeactivate"
                class="px-4 py-2 border border-red-500 text-red-400 hover:bg-red-500/10 rounded-lg text-sm font-medium transition duration-200 whitespace-nowrap">
                Deactivate Account
              </button>
            </div>
            <div class="flex flex-col md:flex-row md:items-center justify-between p-4 bg-red-500/10 rounded-lg">
              <div class="mb-3 md:mb-0">
                <h3 class="font-medium text-red-400">Delete Account</h3>
                <p class="text-sm text-gray-400">This action cannot be undone</p>
              </div>
              <button @click="confirmDelete"
                class="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30 rounded-lg text-sm font-medium transition duration-200 whitespace-nowrap">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Account Settings -->
      <div class="bg-[#0f0e1e]  p-4 rounded-2xl shadow-lg">
        <h2 class="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Account Settings</h2>
        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="username" class="block text-sm font-medium text-gray-400 mb-1">Username</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  @
                </div>
                <input id="username" v-model="form.username" type="text"
                  class="w-full bg-gray-800 border border-gray-700 rounded-lg pl-8 px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200" />
              </div>
            </div>
            <div>
              <label for="role" class="block text-sm font-medium text-gray-400 mb-1">Role</label>
              <select id="role" v-model="form.role"
                class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200">
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="timezone" class="block text-sm font-medium text-gray-400 mb-1">Timezone</label>
              <select id="timezone" v-model="form.timezone"
                class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200">
                <option v-for="tz in timezones" :key="tz" :value="tz">{{ tz }}</option>
              </select>
            </div>
            <div>
              <label for="language" class="block text-sm font-medium text-gray-400 mb-1">Language</label>
              <select id="language" v-model="form.language"
                class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="ja">Japanese</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- Contact Information -->
      <div class="bg-[#0f0e1e]  p-4 rounded-2xl shadow-lg">
        <h2 class="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Contact Information</h2>
        <div class="space-y-4">
          <div>
            <label for="phone" class="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
            <input id="phone" v-model="form.phone" type="tel"
              class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200" />
          </div>
          <div>
            <label for="address" class="block text-sm font-medium text-gray-400 mb-1">Address</label>
            <input id="address" v-model="form.address" type="text"
              class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label for="city" class="block text-sm font-medium text-gray-400 mb-1">City</label>
              <input id="city" v-model="form.city" type="text"
                class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label for="state" class="block text-sm font-medium text-gray-400 mb-1">State/Region</label>
              <input id="state" v-model="form.state" type="text"
                class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200" />
            </div>
            <div>
              <label for="zip" class="block text-sm font-medium text-gray-400 mb-1">ZIP/Postal Code</label>
              <input id="zip" v-model="form.zip" type="text"
                class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200" />
            </div>
          </div>
          <div>
            <label for="country" class="block text-sm font-medium text-gray-400 mb-1">Country</label>
            <select id="country" v-model="form.country"
              class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:border-blue-500 focus:ring-blue-500 transition duration-200">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              <option value="AU">Australia</option>
              <option value="DE">Germany</option>
              <option value="JP">Japan</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex justify-end mt-4 gap-4">
        <button @click="$router.back()"
          class="px-4 py-2 border border-gray-400 hover:border-gray-500 rounded-lg text-sm font-medium transition duration-200">
          Cancel
        </button>
        <button @click="saveChanges"
          class="px-4 py-2 bg-blue-400 hover:bg-blue-700 rounded-lg text-sm font-medium transition duration-200 flex items-center"
          :disabled="isSaving">
          <svg v-if="isSaving" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
            </path>
          </svg>
          <span>{{ isSaving ? 'Saving...' : 'Save Changes' }}</span>
        </button>
      </div>
    </div>

    <!-- Confirmation Modal -->
    <div v-if="showConfirmationModal"
      class="fixed inset-0 bg-[#070707db] bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div class="bg-[#0f0e1e]  rounded-2xl shadow-xl max-w-md w-full p-4">
        <h3 class="text-lg font-semibold mb-4">{{ modalTitle }}</h3>
        <p class="text-gray-400 mb-4">{{ modalMessage }}</p>
        <div class="flex justify-end space-x-3">
          <button @click="showConfirmationModal = false"
            class="px-4 py-2 border border-gray-400 hover:border-gray-500 rounded-lg text-sm font-medium transition duration-200">
            Cancel
          </button>
          <button @click="executeAction"
            class="px-4 py-2 bg-red-400 hover:bg-red-700 rounded-lg text-sm font-medium transition duration-200">
            {{ actionButtonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const form = ref({
  avatar: '',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  bio: 'Senior UI/UX Designer with 8 years of experience creating beautiful digital experiences.',
  username: 'johndoe',
  role: 'admin',
  timezone: 'America/New_York',
  language: 'en',
  phone: '+1 (234) 567-8901',
  address: '123 Main Street',
  city: 'San Francisco',
  state: 'CA',
  zip: '94105',
  country: 'US'
})

// Timezone options
const timezones = ref([
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'Europe/London',
  'Europe/Berlin',
  'Asia/Tokyo',
  'Australia/Sydney'
])

// Avatar upload
const handleAvatarUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      form.value.avatar = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

// Save changes
const isSaving = ref(false)
const saveChanges = () => {
  isSaving.value = true
  // Simulate API call
  setTimeout(() => {
    isSaving.value = false
    router.back()
  }, 1500)
}

// Danger zone actions
const showConfirmationModal = ref(false)
const modalTitle = ref('')
const modalMessage = ref('')
const actionButtonText = ref('')
const actionToExecute = ref(null)

const confirmDeactivate = () => {
  modalTitle.value = 'Deactivate Account'
  modalMessage.value = 'Are you sure you want to temporarily deactivate your account? You can reactivate it by logging in again.'
  actionButtonText.value = 'Deactivate'
  actionToExecute.value = deactivateAccount
  showConfirmationModal.value = true
}

const confirmDelete = () => {
  modalTitle.value = 'Delete Account'
  modalMessage.value = 'This will permanently delete your account and all associated data. This action cannot be undone.'
  actionButtonText.value = 'Delete Forever'
  actionToExecute.value = deleteAccount
  showConfirmationModal.value = true
}

const executeAction = () => {
  if (actionToExecute.value) {
    actionToExecute.value()
  }
  showConfirmationModal.value = false
}

const deactivateAccount = () => {
  console.log('Account deactivated')
  // API call would go here
  router.push('/')
}

const deleteAccount = () => {
  console.log('Account deleted')
  // API call would go here
  router.push('/')
}
</script>