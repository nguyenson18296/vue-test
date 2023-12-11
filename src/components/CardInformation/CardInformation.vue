<template>
  <div class="card-wrapper relative pb-12 pt-16 px-0 w-full">
    <div
      class="relative z-10 mx-auto p-6 w-full h-[220px] bg-[#01D167] rounded-xl transition-all duration-200"
      :class="isActive ? 'bg-[#01D167]' : 'bg-[#016633]'"
    >
      <div class="transition-all duration-200" :class="isActive ? '' : 'opacity-50'">
        <img src="/src/assets/icons/logo.svg" class="float-right" />
        <div class="clear-both" />
        <h1 class="card-wrapper__card-owner-name font-bold text-[22px]">Mark Henry</h1>
        <CardNumber :card_number="card.card_number" :show_card_number="showCardNumber" />
        <div class="card-wrapper__card-security mt-5 flex items-center">
          <div class="expired-date font-bold text-sm">Thru: {{ card.expired_date }}</div>
          <div class="cvv flex items-center ml-8 font-bold text-sm">
            CVV:&nbsp;&nbsp;
            <div>
              <span class="text-sm font-bold" v-for="(number, index) in formattedCVV" :key="index">
                {{ showCardNumber ? number : '*' }}
              </span>
            </div>
          </div>
        </div>
        <img src="/src/assets/icons/visa.svg" class="float-right" />
      </div>
    </div>
    <div
      class="card-wrapper__show-card rounded-md absolute -right-2 top-8 w-[155px] h-[40px] flex items-center text-center text-xs font-bold py-1.5 px-2.5 z-0"
      @click="onToggleShowCardNumber"
    >
      <img src="/src/assets/icons/eye.svg" />
      <span class="ml-1.5 font-bold"> Show card number </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

import CardNumber from './CardNumber.vue'

export interface ICardInformation {
  id: string
  card_number: string
  expired_date: string
  cvv: string
  is_card_freezed: boolean
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
    },
    isActive: {
      type: Boolean
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

  &__show-card {
    background-color: #ffffff;
    color: #01d167;
  }

  &__bullet {
    font-size: 24px;
  }
}
</style>
