<template>
  <Auth>
    <template #head>
      <h1>Report Templates</h1>
    </template>

    <div class="card lg:card-side bg-white divide-x">
      <div class="w-2/5 p-4 flex flex-col items-center gap-7">
        <h1 class="page-title">Company Logo</h1>

        <div class="border border-dashed p-2 rounded-lg">
          <img :src="PerlemonLogo" class="w-28 h-28" alt="Upload image here" id="user_logo" />
          <samp id="error_img" class="text-danger error"></samp>
        </div>
        <div class="flex items-center flex-col gap-3">
          <input
            type="file"
            name="company_logo"
            placeholder="file"
            id="input_logo"
            class="btn btn-primary hidden"
            accept="image/png, image/jpeg,image/jpeg"
          />
          <input type="button" id="input_logo" />
          <label for="input_logo" class="btn btn-primary"> Upload Logo </label>

          <div>
            All image file sizes and dimensions are accepted, with the exception of the GIF format.
            Please note, images are resized to 250px width and 100px height, so it is best to get as
            close to that size or proportion to maximise the logo size in the report.
          </div>
        </div>
      </div>
      <div class="w-3/5 p-4">
        <h1 class="page-title">Information</h1>
        <div class="flex flex-col gap-3">
          <Form @submit="submit" :validationSchema="schema" class="w-full">
            <div id="report-title-text">
              <div class="label">
                <span class="label-text">Report Header Text</span>
              </div>

              <FormField name="report_header_text">
                <Field
                  name="report_header_text"
                  type="text"
                  class="input w-full"
                  placeholder="Report Header Text"
                  v-model="form.report_header_text"
                />
              </FormField>
            </div>

            <div class="label">
              <span class="label-text">Report Title Text:</span>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <div class="label">
                  <span class="label-text">Company Name</span>
                </div>
                <FormField name="company_name">
                  <Field
                    name="company_name"
                    type="text"
                    class="input w-full"
                    placeholder="Company Name"
                    v-model="form.company_name"
                  />
                </FormField>
              </div>
              <div>
                <div class="label">
                  <span class="label-text">Company Email</span>
                </div>
                <FormField name="company_email">
                  <Field
                    name="company_email"
                    type="text"
                    class="input w-full"
                    placeholder="Company Email"
                    v-model="form.company_email"
                  />
                </FormField>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div>
                <div class="label">
                  <span class="label-text">Company Website</span>
                </div>
                <FormField name="company_website">
                  <Field
                    name="company_website"
                    type="url"
                    class="input w-full"
                    placeholder="Company Website"
                    v-model="form.company_website"
                  />
                </FormField>
              </div>
              <div>
                <div class="label">
                  <span class="label-text">Company Phone</span>
                </div>

                <FormField name="company_phone">
                  <Field
                    name="company_phone"
                    type="tel"
                    class="input w-full"
                    placeholder="Company Phone"
                    v-model="form.company_phone"
                    maxlength="16"
                  />
                </FormField>
              </div>
            </div>

            <div>
              <FormField name="company_address">
                <Field
                  as="textarea"
                  name="company_address"
                  class="input py-2 min-h-[100px] mt-4 w-full"
                  placeholder="Company Address"
                  cols="50"
                  v-model="form.company_address"
                />
              </FormField>
            </div>

            <label class="cursor-pointer label justify-start">
              <Field
                name="custom_title_status"
                type="checkbox"
                class="toggle toggle-primary"
                v-model="form.custom_title_status"
              />
              <span class="label-text ml-3">Show with Custom Title</span>
            </label>

            <div>
              <div class="label">
                <span class="label-text">Custom Title</span>
              </div>
              <FormField name="custom_title">
                <Field
                  name="custom_title"
                  type="text"
                  class="input w-full"
                  placeholder="Custom Title"
                  v-model="form.custom_title"
                />
              </FormField>
            </div>

            <div class="text-right my-4">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </Form>
        </div>
      </div>
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
