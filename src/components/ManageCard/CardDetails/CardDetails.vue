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
  id: 1,
  name: 'Card details',
  icon: '/src/assets/icons/card-details.svg'
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
