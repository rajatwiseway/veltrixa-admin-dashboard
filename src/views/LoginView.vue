<template>
<div class="flex min-h-screen flex-1 flex-col justify-center px-2 md:px-6 py-12 lg:px-8 bg-gray-900">
    <div class="bg-[#0f0e1e] rounded-lg shadow-lg p-6 w-full md:w-[500px] mx-auto">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <router-link to="/" class=""><img src="/public/images/logo.png" alt="Logo" class="w-[70%] mx-auto"></router-link>
            <h2 class="mt-6 text-center text-2xl font-bold tracking-tight text-white">Sign in to your account</h2>
        </div>

        <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-300">Email address</label>
                    <div class="mt-2">
                        <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium text-gray-300">Password</label>
                        <div class="text-sm">
                            <a href="#" class="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
                        </div>
                    </div>
                    <div class="mt-2">
                        <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                </div>

                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-main-card px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        Sign in
                    </button>
                </div>
            </form>

            <p class="mt-6 text-center text-sm text-gray-400">
                Don't have an account?
                <span>
                    <router-link to="/register" class="font-semibold leading-6 text-indigo-400 hover:text-indigo-300">Sign up</router-link>
                </span>
            </p>

        </div>
    </div>
</div>
</template>

  
<script></script>
