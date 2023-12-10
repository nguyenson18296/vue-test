<template>
  <div class="card-wrapper relative p-6 w-full">
    <div
      class="show-card w-[150px] h-[40px] flex items-center text-center text-xs font-bold py-1.5 px-2.5 absolute right-6"
      @click="onToggleShowCardNumber"
    >
      <img src="/src/assets/icons/eye.svg" />
      <span class="ml-1.5"> Show card number </span>
    </div>
    <div class="mb-7 mt-10 mx-auto p-6 w-[360px] h-[220px] bg-[#01D167] rounded-xl">
      <img src="/src/assets/icons/logo.svg" class="float-right" />
      <div class="clear-both" />
      <h1 class="card-owner-name font-bold text-[22px]">Mark Henry</h1>
      <CardNumber :card_number="card.card_number" :show_card_number="showCardNumber" />
      <div class="card-security flex items-center">
        <div class="expired-date font-bold text-[13px]">Thru: {{ card.expired_date }}</div>
        <div class="cvv flex items-center ml-8 font-bold text-[13px]">
          CVV:
          <span class="text-3xl" v-for="(number, index) in formattedCVV" :key="index">
            {{ showCardNumber ? number : '*' }}
          </span>
        </div>
      </div>
      <img src="/src/assets/icons/visa.svg" class="float-right" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import CardNumber from './CardNumber.vue'

export interface ICardInformation {
  id: number
  card_number: string
  expired_date: string
  cvv: string
}

export default defineComponent({
  setup() {},
  components: {
    CardNumber
  },
  data() {
    return {
      showCardNumber: false,
      formattedCVV: ['', '', '']
    }
  },
  props: {
    card: {
      type: Object as PropType<ICardInformation>
    }
  },
  created() {
    this.formattedCVV = this.card.cvv.split('')
  },
  methods: {
    onToggleShowCardNumber() {
      this.showCardNumber = !this.showCardNumber
    }
  }
})
</script>

<style scoped lang="scss">
.card-wrapper {
  color: #ffffff;

  .show-card {
    background-color: #ffffff;
    color: #01d167;
  }

  .bullet {
    font-size: 24px;
  }
}
</style>
