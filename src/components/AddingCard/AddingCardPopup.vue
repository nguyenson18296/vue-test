<template>
  <modal :open="open" :close="(showModal = false)">
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative my-auto w-full text-black-900 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                  Enter card number
                </h3>
                <form class="flex flex-wrap gap-3 w-full p-5">
                  <label class="relative w-full flex flex-col">
                    <input
                      class="rounded-md text-gray-900 peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-600"
                      name="card_number"
                      placeholder="0000 0000 0000 0000"
                      v-model="card_number"
                      autocomplete="off"
                      maxlength="16"
                      @input="validate"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      ></path>
                    </svg>
                  </label>
                  <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
                </form>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto disabled:opacity-75"
              :disabled="errorMessage || card_number.length !== 16"
              @click="onSubmit"
            >
              Submit
            </button>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              @click="onClose"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Modal from '../Modal/ModalComponent.vue'

export default defineComponent({
  name: 'AddingCardModal',
  components: {
    Modal
  },
  setup() {},
  emits: ['add-card'],
  props: {
    addCard: {
      type: Function
    },
    onCloseModal: {
      type: Function
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showModal: false,
      card_number: '',
      errorMessage: ''
    }
  },
  methods: {
    validate() {
      if (/^\d+$/.test(this.card_number)) {
        this.errorMessage = '' // Input is a number, clear error message
      } else {
        this.errorMessage = 'Please enter a valid number.'
      }
    },
    onSubmit() {
      this.$emit('add-card', this.card_number)
      this.onCloseModal()
    },
    onClose() {
      this.onCloseModal()
    }
  }
})
</script>
