<template>
  <div
    class="card-information-item flex items-center justify-between p-6 mb-6"
    @click="handleToggle"
  >
    <div class="flex items-center">
      <img :src="item.icon" alt="card-item-icon" />
      <span class="ml-3 text-sm font-bold">
        {{ item.name }}
      </span>
    </div>
    <img :src="isToggle ? imageSrc[1] : imageSrc[0]" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface ICardManageInfoItem {
  id: number
  name: string
  icon: string
}

export default defineComponent({
  setup() {},
  props: {
    item: {
      type: Object as PropType<ICardManageInfoItem>
    }
  },
  data() {
    return {
      imageSrc: ['src/assets/icons/down-arrow.svg', 'src/assets/icons/up-arrow.svg'],
      isToggle: false
    }
  },
  methods: {
    handleToggle() {
      this.isToggle = !this.isToggle
    }
  }
})
</script>

<style lang="scss">
.card-information-item {
  background-color: #fafcff;
  width: 366px;
  height: 72px;
  color: #0c365a;
  border: 1px solid #f5f5f5;
}
</style>
