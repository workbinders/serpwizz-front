<template>
  <Guest>
    <div class="w-full lg:w-[45%] p-2 justify-center items-center max-h-[100vh] lg:overflow-y-auto">
      <div class="pb-8">
        <a :href="APP_URL">
          <Logo class="w-logo mt-4 ml-2 mb-6 lg:mb-0" />
        </a>

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
              <span class="hidden lg:inline-block">Continue with</span> LinkedIn
            </button>
          </div>
          <div class="divider auth-divider">
            <span class="border-2 border-[#EDE7F6] px-10 py-2 rounded-2xl">OR</span>
          </div>
          <div class="text-center text-[#757575] font-bold text-sm">
            Register with Email address
          </div>
          <div class="flex flex-col gap-3">
            <div>
              <FormField name="first_name">
                <Field
                  type="text"
                  placeholder="First Name"
                  class="input w-full"
                  name="first_name"
                  v-model="form.first_name"
                />
              </FormField>
            </div>
            <div>
              <FormField name="last_name">
                <Field
                  type="text"
                  placeholder="Last Name"
                  class="input w-full"
                  name="last_name"
                  v-model="form.last_name"
                />
              </FormField>
            </div>
            <div>
              <FormField name="account_name">
                <Field
                  type="text"
                  placeholder="Account Name"
                  class="input w-full"
                  name="account_name"
                  v-model="form.account_name"
                />
              </FormField>
            </div>
            <div>
              <FormField name="email">
                <Field
                  type="email"
                  placeholder="Email"
                  class="input w-full"
                  name="email"
                  v-model="form.email"
                />
              </FormField>
            </div>
            <div>
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
            <div>
              <FormField name="referal_code">
                <Field
                  type="text"
                  placeholder="Referal Code"
                  class="input w-full"
                  name="referal_code"
                  v-model="form.referal_code"
                />
              </FormField>
            </div>
          </div>
          <label class="label cursor-pointer justify-start">
            <input type="checkbox" checked="checked" class="checkbox checkbox-primary mr-3" />
            <span class="label-text">I Accept <a href="underline">Terms and Conditions</a></span>
          </label>
          <!-- <button type="button" class="btn btn-primary">Sign in</button> -->
          <button type="submit" class="btn btn-primary">Register</button>
          <div class="divider auth-divider"></div>
          <RouterLink :to="{ name: 'Login' }" class="text-[#616161] text-center"
            >Already have an account?</RouterLink
          >
        </Form>
      </div>
    </div>
    <div class="w-full lg:w-[55%] auth-hero-bg">
      <div class="max-w-md text-center flex flex-col gap-y-4 p-10 lg:p-0">
        <div class="bg-white px-4 pt-8">
          <img :src="ImgAuthHeroSide" alt="Deepak Shukla" class="hidden lg:block" />
          <img :src="ImgAuthHeroFront" alt="Deepak Shukla" class="block lg:hidden" />
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
import ImgAuthHeroSide from '@/assets/images/auth-hero-side.svg'
import ImgAuthHeroFront from '@/assets/images/auth-hero-front.png'

const APP_URL = inject('APP_URL')
const { register } = useUserStore()
const router = useRouter()

const form = {
  first_name: null,
  last_name: null,
  account_name: null,
  email: null,
  password: null,
  referal_code: null
}

// const form = {
//   first_name: 'Sandip',
//   last_name: 'Solanki',
//   account_name: 'sandip',
//   email: 'sandeep.solanki2010+1@gmail.com',
//   password: 'Sandeep@123',
//   referal_code: ''
// }

const schema = yup.object({
  first_name: yup
    .string()
    .required('Please enter your first name.')
    .min(3, 'First name must be at least 3 characters'),
  last_name: yup
    .string()
    .required('Please enter your last name.')
    .min(3, 'Last name must be at least 3 characters'),
  account_name: yup
    .string()
    .required('Please enter account name.')
    .min(6, 'Account name must be at least 6 characters')
    .matches(/^[a-zA-Z0-9@]+$/, 'Account name cannot contain white space and special character'),
  email: yup.string().required('Please enter your email.').email('Please enter valid email'),
  password: yup
    .string()
    .required('Please enter passowrd.')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    )
})

const submit = async () => {
  const response = await register(form)
  if (response.status === true) {
    router.push({ name: 'Login' })
  }
}
</script>
