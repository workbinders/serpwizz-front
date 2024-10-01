<template>
  <Auth>
    <template #head>
      <div class="flex justify-between items-center w-full">
        <h1>White Label Settings</h1>
        <button type="button" class="btn dark-dark" @click="showVideoTutorial = !showVideoTutorial">
          <IconVideo class="w-5 h-5" />
          Watch Tutorial
        </button>
      </div>
    </template>

    <div class="card bg-white divide-x p-3">
      <div class="flex flex-col gap-2">
        <div class="label-text">
          Here in the white label settings section - Get your domain name, header logo, favicon, and
          report title setup here! 💪
        </div>
        <div>
          <label class="cursor-pointer label justify-start">
            <input type="checkbox" class="toggle toggle-primary" checked />
            <span class="label-text ml-3">White label</span>
          </label>
        </div>
        <div class="grid grid-cols-2 gap-3 w-full">
          <div>
            <div class="label">
              <span class="label-text">Domain Name </span>
            </div>
            <input type="text" placeholder="Enter Domain Name" class="input w-full" />
          </div>
          <div>
            <div class="label">
              <span class="label-text">Audit Report Title</span>
            </div>
            <input type="email" placeholder="Enter Audit Report Title" class="input w-full" />
          </div>
        </div>
        <div class="grid grid-cols-3 justify-between gap-10">
          <div class="flex flex-col gap-3">
            <div class="page-title">Header Big Logo</div>
            <div
              class="flex items-center justify-center border border-dashed py-10 rounded-lg min-h-36"
            >
              <img :src="PerlemonLogo" alt="" class="w-32" />
              <input type="file" name="" id="company_logo" class="hidden" />
            </div>
            <div class="label-text">
              All image file sizes and dimensions are accepted, with the exception of the GIF
              format. Please note, images are resized to 170px width and 50px height, so it is best
              to get as close to that size or proportion to maximise the logo size in the report.
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="page-title">Header Small Logo</div>
            <div
              class="flex items-center justify-center border border-dashed py-10 rounded-lg min-h-36"
            >
              <img :src="PerlemonLogo" alt="" class="w-32" />
              <input type="file" name="" id="company_logo" class="hidden" />
            </div>
            <div class="label-text">
              All image file sizes and dimensions are accepted, with the exception of the GIF
              format. Please note, images are resized to 170px width and 50px height, so it is best
              to get as close to that size or proportion to maximise the logo size in the report.
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="page-title">Favicon Logo</div>
            <div
              class="flex items-center justify-center border border-dashed py-10 rounded-lg min-h-36"
            >
              <img :src="PerlemonLogo" alt="" class="w-32" />
              <input type="file" name="" id="company_logo" class="hidden" />
            </div>
            <div class="label-text">
              All image file sizes and dimensions are accepted, with the exception of the GIF
              format. Please note, images are resized to 170px width and 50px height, so it is best
              to get as close to that size or proportion to maximise the logo size in the report.
            </div>
          </div>
        </div>
        <div class="flex justify-end items-end my-3">
          <button class="btn btn-primary w-28">Submit</button>
        </div>
      </div>
    </div>

    <!-- Vidoe Tutorial -->
    <div
      class="w-screen h-screen bg-black/80 fixed top-0 left-0 flex items-center justify-center"
      v-if="showVideoTutorial"
      @click="showVideoTutorial = !showVideoTutorial"
    >
      <iframe
        class="max-w-4xl w-full h-[600px]"
        src="https://www.youtube.com/embed/71spM2i4bhY?si=T4sqdyn10oe0n93l"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </Auth>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as yup from 'yup'
// Stores
import service from '@/services/reportTemplates'

// Layout
import Auth from '@/layouts/Auth.vue'

// Images
import PerlemonLogo from '@/assets/images/perlemon-logo.png'
import IconVideo from '@/components/icons/sidebar/IconVideo.vue'

const selectedLogo = PerlemonLogo
const showVideoTutorial = ref(false)
const form = ref({
  company_logo: null,
  report_header_text: null,
  company_name: null,
  company_email: null,
  company_website: null,
  company_phone: null,
  company_address: null,
  custom_title_status: false,
  custom_title: null
})

const schema = yup.object({
  // company_logo: yup
  // .string()
  // .required('Please enter your first name.')
  // .min(3, 'First name must be at least 3 characters'),
  report_header_text: yup
    .string()
    .required('Please enter header text.')
    .max(50, 'Report Header Text must be 50 characters or less.'),
  company_name: yup
    .string()
    .required('Please enter comapny name.')
    .min(3, 'Comapny name must be at least 3 characters')
    .max(50, 'Comapny name must be 50 characters or less.'),
  company_email: yup.string().email('Please enter valid email'),
  company_website: yup.string().required('Please enter comapny webiste.').url(),
  company_phone: yup.string().required('Please enter comapny phone number.'),
  company_address: yup.string().required('Please enter comapny address.'),
  custom_title: yup.string().nullable().max(50, 'Custom title must be 50 characters or less.')
})

onMounted(async () => {
  const response = await service.get()
  if (response.status) {
    form.value = response.data
  }
})

const submit = async () => {
  await service.store(form.value)
}
</script>
