<template>
  <Guest>
    <div
      class="w-full lg:w-[45%] p-2 flex flex-col justify-between h-[100vh] max-h-[100vh] lg:overflow-y-auto"
    >
      <div>
        <a :href="APP_URL">
          <Logo class="w-logo mt-4 ml-2 mb-6 lg:mb-0" />
        </a>
      </div>
      <div class="max-h-full lg:overflow-y-auto pb-8">
        <Form
          @submit="submit"
          :validationSchema="schema"
          class="p-2 flex flex-col gap-y-4 max-w-lg mx-auto"
        >
          <div class="text-center text-2xl font-bold text-primary">
            <div>Ah! You're going to sign up -</div>
            <div>that's damn cool!</div>
            <div class="text-sm font-normal text-[#9E9E9E] text-center mt-3">
              Come join the cool kids 😛
            </div>
          </div>
          <div class="flex gap-x-3">
            <button type="button" class="social-login-btn w-1/2">
              <IconGoogle />
              <span class="hidden lg:inline-block">Continue with</span> Google
            </button>
            <button type="button" class="social-login-btn w-1/2">
              <IconLinkedin />
              <span class="hidden lg:inline-block">Continue with</span>
              LinkedIn
            </button>
          </div>
          <div class="divider auth-divider">
            <span class="border-2 border-[#EDE7F6] px-10 py-2 rounded-2xl">OR</span>
          </div>
          <div class="text-center text-[#757575] font-bold text-sm">Sign in with Email address</div>
          <div class="flex flex-col gap-3">
            <FormField name="email">
              <Field
                type="email"
                placeholder="Email"
                class="input w-full"
                name="email"
                v-model="form.email"
              />
            </FormField>
            <FormField name="password">
              <div class="join input pl-0 w-full">
                <Field
                  type="password"
                  placeholder="Password"
                  class="input !border-0 w-full h-full"
                  name="password"
                  v-model="form.password"
                />
                <button>
                  <IconEye />
                </button>
              </div>
            </FormField>
          </div>
          <div class="text-yellow-400 cursor-pointer text-end">Forgot Password?</div>
          <!-- <button type="button" class="btn btn-primary">Sign in</button> -->
          <button type="submit" class="btn btn-primary">Sign in</button>
          <div class="divider auth-divider"></div>
          <RouterLink :to="{ name: 'Register' }" class="text-[#616161] text-center"
            >Don't have an account yet? Sign Up</RouterLink
          >
        </Form>
      </div>
      <div>&nbsp;</div>
    </div>
    <div class="w-full lg:w-[55%] auth-hero-bg">
      <div class="max-w-md text-center flex flex-col gap-y-4 p-10 lg:p-0">
        <div class="bg-white px-4 pt-8">
          <img :src="ImgAuthHeroFront" alt="Deepak Shukla" />
        </div>
        <div class="text-[#757575]">
          “I hope you enjoy using SERPWizz – we built this tool because we wanted a way to generate
          an instantly super detailed audit that a marketer can share with their client (or use
          internally). One that’s accurate, actionable and presented beautifully. It’s generated us
          $27,000 in new business so far. I hope it does the same for you!”
        </div>
        <div class="font-bold text-xl">Deepak Shukla - Founder at SERPWizz</div>
      </div>
    </div>
  </Guest>
</template>

<script setup>
import { inject } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import * as yup from 'yup'

// Stores
import { useUserStore } from '@/stores/user'

// Layout
import Guest from '@/layouts/Guest.vue'

// Images
import Logo from '@/components/layouts/Logo.vue'
import IconGoogle from '@/components/icons/IconGoogle.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconEye from '@/components/icons/IconEye.vue'
import ImgAuthHeroFront from '@/assets/images/auth-hero-front.png'

const APP_URL = inject('APP_URL')
const { login } = useUserStore()
const router = useRouter()

const form = {
  email: null,
  password: null
}

const schema = yup.object({
  email: yup.string().required('Please enter your email.').email('Please enter valid email'),
  password: yup.string().required('Please enter passowrd.')
})

const submit = async () => {
  const response = await login(form)
  if (response.status === true) {
    router.push({ name: 'Dashboard' })
  }
}
</script>
