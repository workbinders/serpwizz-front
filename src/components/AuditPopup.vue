<template>
  <dialog id="run_audit" class="modal">
    <div class="modal-box">
      <div class="modal-head flex justify-between">
        <h3>Run Audit</h3>
        <div>
          <div class="model-esc">(esc)</div>
        </div>
      </div>
      <div class="modal-body">
        <Form @submit="submit" :validationSchema="schema" method="dialog">
          <label class="text-primary">Website</label>
          <FormField name="website">
            <Field
              type="url"
              placeholder="Website"
              class="input w-full"
              name="website"
              v-model="form.website"
            />
          </FormField>

          <div class="my-6">Optional Fields</div>
          <div class="grid grid-cols-2 gap-x-3 gap-y-4">
            <div>
              <label class="text-primary">First Name</label>
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
              <label class="text-primary">Last Name</label>
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
              <label class="text-primary">Email</label>
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
              <label class="text-primary">Phone</label>
              <FormField name="phone">
                <Field
                  type="tel"
                  placeholder="Phone"
                  class="input w-full"
                  name="phone"
                  v-model="form.phone"
                />
              </FormField>
            </div>
          </div>
          <div class="modal-action">
            <button class="btn btn-primary btn-outline" type="reset">Reset</button>
            <button class="btn btn-primary" type="submit">Run Audit</button>
          </div>
        </Form>
      </div>
    </div>
  </dialog>
</template>
<script setup>
import * as yup from 'yup'
import leadService from '@/services/leads'

const form = {
  website: null,
  first_name: null,
  last_name: null,
  email: null,
  phone: null
}

const schema = yup.object({
  website: yup.string().required('Please enter webiste URL.').url('Please enter valid webiste URL.')
})

const submit = async () => {
  const response = await leadService.store(form)
  if (response?.lead?.id) {
    run_audit.close()
  }
}
</script>
