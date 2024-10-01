<template>
  <header class="navbar px-4">
    <div class="flex-1">
      <div class="w-64 flex justify-between items-center">
        <a :href="APP_URL" class="btn btn-ghost text-xl px-0"><Logo /></a>
        <button id="toggle-btn" class="action-btn">
          <IconHamburger />
        </button>
      </div>
    </div>
    <div class="flex-none gap-3">
      <div class="dropdown dropdown-end">
        <select class="select select-bordered select-xs py-0" name="sel_lang" id="sel_lang">
          <option value="english">English</option>
          <option value="german">German</option>
          <option value="spanish">Spanish</option>
          <option value="arabic">Arabic</option>
        </select>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle flex w-24 profile-actions">
          <img id="user" :src="PerlemonLogo" alt="user-image" class="w-10 h-10" />
          <IconGear />
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>
              <div class="w-8">
                <IconProfile />
              </div>
              Profile
            </a>
          </li>
          <li>
            <a
              ><div class="w-8">
                <IconTeam />
              </div>
              Team
            </a>
          </li>
          <li>
            <a
              ><div class="w-8">
                <IconSubscription />
              </div>
              Subscription
            </a>
          </li>
          <li>
            <button type="button" @click="logoutSubmit">
              <div class="w-8">
                <IconLogout />
              </div>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { inject } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

// Stores
import { useUserStore } from '@/stores/user'

// Images
import Logo from '@/components/layouts/Logo.vue'
import IconHamburger from '@/components/icons/IconHamburger.vue'
import IconGear from '@/components/icons/IconGear.vue'
import IconProfile from '@/components/icons/IconProfile.vue'
import IconTeam from '@/components/icons/IconTeam.vue'
import IconSubscription from '@/components/icons/IconSubscription.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import PerlemonLogo from '@/assets/images/perlemon-logo.png'

const APP_URL = inject('APP_URL')
const { logout } = useUserStore()
const router = useRouter()

const logoutSubmit = async () => {
  const response = await logout()
  if (response.status === true) {
    router.push({ name: 'Login' })
  }
}
</script>
