<template>
  <div class="card-number mt-4 flex items-center">
    <div>
      <span 
        class="text-sm"
        :class="show_card_number ? 'number text-sm font-bold' : 'bullet ml-1 font-bold'"
        v-for="(number, index) in card_number_format[0]" :key="index"
    >
        {{ show_card_number ? number : "•" }}
      </span>
    </div>
    <div class="ml-6">
      <span
        class="text-sm"
        :class="show_card_number ? 'number text-sm font-bold' : 'bullet ml-1 font-bold'"
        v-for="(number, index) in card_number_format[1]"
        :key="index"
      >
        {{ show_card_number ? number : "•" }}
      </span>
    </div>
    <div class="ml-6">
      <span 
        class="text-sm"
        :class="show_card_number ? 'number text-sm font-bold' : 'bullet ml-1 font-bold'"
         v-for="(number, index) in card_number_format[2]" :key="index"
        >
        {{ show_card_number ? number : "•" }}
      </span>
    </div>
    <div class="ml-6 text-sm">
      <span class="number text-sm font-bold" v-for="(number, index) in card_number_format[3]" :key="index">
        {{ number }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {},
  data() {
    return {
      card_number_format: [[], [], [], []]
    }
  },
  props: {
    card_number: {
      type: String,
      required: true
    },
    show_card_number: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.splitCardNumber(this.card_number.replace(/ /g, ''))
  },
  methods: {
    splitCardNumber(card_number: string) {
      const arrCardNumber = card_number.split('')
      let arr = []

      for (let i = 0; i < arrCardNumber.length; i += 4) {
        const group = arrCardNumber.slice(i, i + 4)
        arr.push(group)
      }
      this.card_number_format = arr
    }
  }
})
</script>

<style scoped>
.bullet {
  font-size: 24px;
}
</style>
