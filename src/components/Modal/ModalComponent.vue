<template>
  <div class="fixed w-full h-full top-0 left-0 flex items-center justify-center z-10" v-if="open">
    <div class="absolute w-full h-full bg-gray-900 opacity-50" @click="close"></div>

    <div class="absolute w-11/12 max-h-full">
      <div class="container bg-white overflow-hidden md:rounded">
        <div
          class="px-2 py-2 leading-none flex justify-between items-center font-medium text-sm bg-gray-100 border-b select-none"
        >
          <h3>{{ title }}</h3>
          <div @click="close" class="text-2xl hover:text-gray-600 cursor-pointer">&#215;</div>
        </div>

        <div class="max-h-full px-4 py-4">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
})
</script>
