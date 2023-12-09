<template>
  <div>
    <CardInformationItem :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CardInformationItem, {
  ICardInformationItem
} from '../CardInformation/CardInformationItem.vue'

const mockedItem: ICardInformationItem = {
  id: 2,
  name: 'Recent transactions',
  icon: '/src/assets/icons/recent-transactions.svg'
}

export default defineComponent({
  components: {
    CardInformationItem
  },
  setup() {},
  data() {
    return {
      item: mockedItem
    }
  }
})
</script>
