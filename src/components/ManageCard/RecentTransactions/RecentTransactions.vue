<template>
  <div class="recent-transactions border border-[#F0F0F0]">
    <CardManageItem :item="item" />
    <TransactionItem v-for="item in data" :key="item.id" :item="item" />
    <div class="load-more-transactions bg-[#DDFFEC] text-[#01D167] text-center font-bold py-6">
      View all card transactions
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CardManageItem, { ICardManageInfoItem } from '../CardManage/CardManageItem.vue'
import TransactionItem from './TransactionItem.vue'

const mockedItem: ICardManageInfoItem = {
  id: 2,
  name: 'Recent transactions',
  icon: '../../../assets/icons/recent-transactions.svg'
}

export default defineComponent({
  components: {
    CardManageItem,
    TransactionItem
  },
  setup() {},
  data() {
    return {
      item: mockedItem,
      data: []
    }
  },
  async created() {
    const response = await fetch('/mocks/transactions.json')
    const data = await response.json()
    this.data = data.response
  }
})
</script>
