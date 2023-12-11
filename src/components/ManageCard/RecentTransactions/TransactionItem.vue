<template>
  <div class="transaction-item p-6 flex items-start justify-between">
    <div class="flex items-start">
      <div
        class="transaction-item__icon w-12 h-12 rounded-full flex items-center justify-center"
        :class="`transaction-item__${item.transaction_type}`"
      >
        <img :src="image[item.transaction_type]" />
      </div>
      <div class="ml-3 flex flex-col">
        <h3 class="transaction-item__transaction-name text-sm">
          {{ item.name }}
        </h3>
        <span class="transaction-item__transaction-date"> {{ transactionDate }} </span>
        <div class="action mt-3 flex items-center">
          <div class="action-icon w-6 h-6 rounded-full flex items-center justify-center">
            <img src="/src/assets/icons/pay.svg" class="w-2.5" />
          </div>
          <span class="transaction-item__action-text ml-2 text-xs"> Refund on debit card </span>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <span class="transaction-item__balance font-bold mr-2.5" :class="balanceClassName">
        {{ transactionbalance }}
      </span>
      <img src="/src/assets/icons/next.svg" alt="next" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { formatDate } from '../../../utils/utils'

export interface ITransactionItem {
  id: number
  name: string
  date: string
  balance: string
  type: string
  transaction_type: string
}

export default defineComponent({
  setup() {
    return {
      image: {
        storage: 'src/assets/icons/file-storage.svg',
        travel: 'src/assets/icons/travel.svg',
        shopping: 'src/assets/icons/shopping.svg'
      },
      roundedColor: {
        storage: '#009DFF1A',
        travel: '#00D6B51A',
        shopping: '#F251951A'
      }
    }
  },
  props: {
    item: {
      type: Object as PropType<ITransactionItem>
    }
  },
  computed: {
    transactionbalance() {
      return Number(this.item.balance) > 0
        ? `+ S$ ${this.item.balance}`
        : `- S$ ${this.item.balance}`
    },
    balanceClassName() {
      return Number(this.item.balance) > 0 ? `income` : `outcome`
    },
    transactionDate() {
      return formatDate(this.item.date)
    }
  }
})
</script>

<style scoped lang="scss">
.transaction-item {
  border-bottom: 1px solid #f5f5f5;

  &__storage {
    background-color: #009dff1a;
  }

  &__travel {
    background-color: #00d6b51a;
  }

  &__shopping {
    background-color: #f251951a;
  }

  .transaction-name {
    color: #222222;
  }

  .transaction-date {
    color: #aaaaaa;
    font-size: 13px;
  }

  .action-icon {
    background-color: #325baf;
  }

  .action-text {
    color: #325baf;
  }

  .balance.income {
    color: #01d167;
  }

  .balance.outcome {
    color: #222222;
  }
}
</style>
