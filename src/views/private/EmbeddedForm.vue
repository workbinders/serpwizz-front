<template>
  <Auth>
    <template #head>
      <h1>Embedded Form</h1>
    </template>

    <div class="card lg:card-side bg-white divide-x">
      <div class="w-4/6 p-4 flex flex-col gap-7">
        <div class="flex flex-col gap-5">
          <h1 class="page-title">Embedded Form Options</h1>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <input type="radio" name="radio" id="radio-1" class="radio radio-primary" />
              <label for="radio-1">Display Report in New Browser Tab</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="radio" id="radio-2" class="radio radio-primary" />
              <label for="radio-2"
                >No Report - show "We'll be in touch" pop-up message instead</label
              >
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="radio" id="radio-3" class="radio radio-primary" />
              <label for="radio-3">No Report - redirect to another page instead</label>
            </div>
          </div>
          <input type="url" placeholder="Enter Redirect URL" class="input w-full" />
        </div>
        <div class="flex flex-col gap-5">
          <h1 class="page-title">Embedded Form Design</h1>
          <div class="divide-y">
            <div class="grid grid-cols-3 pb-2">
              <div class="flex flex-col">
                <label class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="checkbox checkbox-primary" />
                  <span class="label-text">Email</span>
                </label>
                <label for="radio-required-1" class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="toggle toggle-primary" id="radio-required-1" />
                  <span>Required</span>
                </label>
              </div>
              <div class="flex flex-col">
                <label class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="checkbox checkbox-primary" />
                  <span class="label-text">Phone</span>
                </label>
                <label for="radio-required-2" class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="toggle toggle-primary" id="radio-required-2" />
                  <span>Required</span>
                </label>
              </div>
              <div class="flex flex-col">
                <label class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="checkbox checkbox-primary" />
                  <span class="label-text">First Name</span>
                </label>
                <label for="radio-required-3" class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="toggle toggle-primary" id="radio-required-3" />
                  <span>Required</span>
                </label>
              </div>
            </div>
            <div class="grid grid-cols-3 pt-2">
              <div class="flex flex-col">
                <label class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="checkbox checkbox-primary" />
                  <span class="label-text">Last Name</span>
                </label>
                <label for="radio-required-1" class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="toggle toggle-primary" id="radio-required-1" />
                  <span>Required</span>
                </label>
              </div>
              <div class="flex flex-col">
                <label class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="checkbox checkbox-primary" />
                  <span class="label-text">Custom Field</span>
                </label>
                <label for="radio-required-2" class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="toggle toggle-primary" id="radio-required-2" />
                  <span>Required</span>
                </label>
              </div>
              <div class="flex flex-col">
                <label class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="checkbox checkbox-primary" />
                  <span class="label-text">Opt-In Checkbox</span>
                </label>
                <label for="radio-required-3" class="cursor-pointer label justify-start gap-2">
                  <input type="checkbox" class="toggle toggle-primary" id="radio-required-3" />
                  <span>Required</span>
                </label>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-1/2">
              <div class="label">
                <span class="label-text">Company Name</span>
              </div>
              <input type="url" placeholder="Button Text" class="input w-full" />
            </div>
            <div class="w-1/2 flex items-center mt-5">
              <div class="label-text mx-8">Button color</div>
              <div class="radius-border border border-gray-400">
                <div class="custom-color-picker">
                  <input class="input-color-picker" type="color" value="#1E88E5" />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full">
            <div class="label">
              <span class="label-text">Enter Checkbox Text</span>
            </div>
            <input
              type="text"
              placeholder="I consent to being added to your mailing list"
              class="input w-full"
            />
          </div>
          <h1 class="page-title">Choose Your Form layout</h1>

          <div class="flex justify-between w-3/4">
            <div class="flex items-center gap-2">
              <input type="radio" name="radio" id="radio-one" class="radio radio-primary" />
              <label for="radio-one">Large Row</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="radio" id="radio-one" class="radio radio-primary" />
              <label for="radio-one">Large Row</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="radio" id="radio-one" class="radio radio-primary" />
              <label for="radio-one">Large Row</label>
            </div>
            <div class="flex items-center gap-2">
              <input type="radio" name="radio" id="radio-one" class="radio radio-primary" />
              <label for="radio-one">Large Row</label>
            </div>
          </div>
          <div class="border border-dashed rounded-xl border-black bg-[#FAFAFA] p-10">
            <div class="flex">
              <input
                type="text"
                placeholder="https://teampl.serpwizz.com/embed-settings"
                class="input w-full py-7"
              />
              <button
                type="button"
                class="btn bg-skyblue text-white hover:bg-skyblue w-24 h-14 ml-5"
              >
                Check
              </button>
            </div>
            <label class="cursor-pointer label justify-start gap-2">
              <input type="checkbox" class="checkbox checkbox-primary" />
              <span class="text-lg my-4">I consent to being added to your mailing list</span>
            </label>
          </div>
          <div class="flex justify-end">
            <button class="btn btn-primary font-mono w-64 h-16">Generate Embedded code</button>
          </div>
        </div>
      </div>
      <div class="w-2/6 p-4">
        <h1 class="page-title">Embedded Audit Form HTML Code</h1>
        <div class="flex flex-col gap-3 h-full">
          <textarea
            name=""
            id=""
            class="input py-2 h-full border border-dashed border-black mt-4 resize-y"
            placeholder="Company Address"
          ></textarea>

          <div class="text-right mb-4">
            <button type="button" class="btn btn-primary">Copy To Clipboard</button>
          </div>
        </div>
      </div>
    </div>

    <div class="card bg-white p-5">
      <h1 class="page-title block">Zapier</h1>
      <div class="flex items-center">
        <div class="flex-1">
          <div class="label">
            <span class="label-text">Zapier Authorization Key</span>
          </div>
          <input type="text" placeholder="SWIZZyYSyHl676129DGfIVD" class="input w-full" />
        </div>
        <div class="ml-4 mt-8">
          <button type="button" class="btn btn-primary">Copy</button>
        </div>
        <div class="ml-4 mt-8">
          <button
            type="button"
            class="btn border-primary hover:bg-primary hover:border-primary hover:text-white text-primary"
          >
            Connect with Zapier
          </button>
        </div>
      </div>
      <div class="my-3">
        <h1 class="page-title">Instructions</h1>
        <div class="label-text my-3">
          Assuming that you already have a Zapier account, follow these steps to connect SERPWizz to
          your Zapier account:
        </div>
        <ol class="list-decimal label-text py-4 px-6">
          <li>Copy and save your Zapier Authorization Key.</li>
          <li>Click on the "Connect with Zapier" button to go to the Zapier page for SERPWizz.</li>

          <li>Accept the invitation by clicking the "Accept Invite & Build Zap" button.</li>

          <li>If you are not already signed in to your Zapier account, log in when prompted.</li>

          <li>
            Now that SERPWizz is added to your Zapier account, click on the "Create Zap" button.
          </li>
          <li>Search for SERPWizz and select it from the search results to set up a trigger.</li>

          <img class="my-4" src="../../assets/images/zapier-embed-1.png" alt="image" />

          <li>Select "SERPWizz" for the event, which will trigger when a new lead is created.</li>
          <li>
            Click "Continue" and sign in to your SERPWizz account by clicking "Sign in" and entering
            your SERPWizz key in the new window that appears.
          </li>
          <img class="my-4" src="../../assets/images/zapier-embed-2.png" alt="image" />
          <li>
            If you have previously connected SERPWizz to Zapier, you may see your account already
            listed in this field. Select your account from the list.
          </li>
          <li>Click "Continue" in the window and test the connection.</li>
          <li>
            At this point, SERPWizz is connected to Zapier, and you can continue setting up your Zap
            on the Zap setup page.
          </li>
        </ol>
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
