<template>
  <modal :open="open" :close="(showModal = false)">
    <p class="text-gray-800">Are you sure you want you delete your card?</p>

    <div class="text-right mt-4">
      <button
        @click="onClose"
        class="px-4 py-2 text-sm text-gray-600 focus:outline-none hover:underline"
      >
        Cancel
      </button>
      <button
        class="mr-2 px-4 py-2 text-sm rounded text-white bg-red-500 focus:outline-none hover:bg-red-400"
        @click="onDeleteCard"
      >
        Delete
      </button>
    </div>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Modal from '../Modal/ModalComponent.vue'

export default defineComponent({
  setup() {},
  props: {
    open: {
      type: Boolean,
      default: false
    },
    onCloseModal: {
      type: Function
    },
    onDeleteCard: {
      type: Function
    },
  },
  data() {
    return {
      showModal: false
    }
  },
  components: {
    Modal
  },
  methods: {
    onClose() {
      this.onCloseModal()
    }
  }
})
</script>
