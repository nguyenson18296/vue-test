<template>
  <div>
    <CardManageItem :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import CardManageItem, {
  ICardManageInfoItem
} from '../CardManage/CardManageItem.vue'

const mockedItem: ICardManageInfoItem = {
  id: 1,
  name: 'Card details',
  icon: '/src/assets/icons/card-details.svg'
}

export default defineComponent({
  components: {
    CardManageItem
  },
  setup() {},
  data() {
    return {
      item: mockedItem
    }
  }
})
</script>
