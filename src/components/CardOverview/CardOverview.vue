<template>
  <div>
    <h4 class="text-sm mb-4"></h4>
    <div class="flex items-center justify-between px-6">
      <AccountBalance />
      <AddingCard :addCard="addCard" :isShowForm="isShowForm" />
    </div>
    <div v-if="cards.length > 0">
      <CardInformation v-for="card in cards" :key="card.id" :card="card" />
    </div>
    <ManageCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AccountBalance from '../AccountBalance/AccountBalance.vue'
import AddingCard from '../AddingCard/AddingCard.vue'
import ManageCard from '../ManageCard/ManageCard.vue'
import CardInformation, { ICardInformation } from '../CardInformation//CardInformation.vue'
import { generateExpiredDate, generateCVV } from '../../utils/utils'

export default defineComponent({
  setup() {},
  data() {
    return {
      cards: [],
      isShowForm: false
    }
  },
  components: {
    AccountBalance,
    AddingCard,
    ManageCard,
    CardInformation
  },
  async created() {
    const response = await fetch('src/mocks/cards.json')
    const data = await response.json()
    this.cards = data.response
  },
  methods: {
    addCard(number: string) {
      const newCard: ICardInformation = {
        id: 2,
        card_number: number,
        expired_date: generateExpiredDate(),
        cvv: generateCVV().toString()
      }
      this.cards.push(newCard)
    }
  }
})
</script>