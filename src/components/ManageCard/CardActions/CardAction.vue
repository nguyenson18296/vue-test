<template>
  <div>
    <div class="card-actions w-full p-8 rounded-t-lg flex items-center">
      <div
        v-for="action in actions"
        :key="action.id"
        class="card-action-item flex flex-col items-center"
      >
        <img :src="action.icon" class="w-8 h-8 mb-2" />
        <h4 class="text-center">
          {{ action.name }}
        </h4>
      </div>
    </div>
    <CardManage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { ICardAction } from '../../../types/types'
import CardManage from '../CardManage/CardManage.vue';

const mockedCardActions: ICardAction[] = [
  {
    id: 1,
    icon: 'src/assets/icons/freeze-card.svg',
    name: 'Freeze card',
    action: () => {}
  },
  {
    id: 2,
    icon: 'src/assets/icons/set-spend-limit.svg',
    name: 'Set spend limit',
    action: () => {}
  },
  {
    id: 3,
    icon: 'src/assets/icons/GPay.svg',
    name: 'Add to GPay',
    action: () => {}
  },
  {
    id: 4,
    icon: 'src/assets/icons/replace-card.svg',
    name: 'Replace card',
    action: () => {}
  },
  {
    id: 5,
    icon: 'src/assets/icons/deactivate-card.svg',
    name: 'Cancel card',
    action: () => {}
  }
];

export default defineComponent({
    setup() {},
    components: {
        CardManage,
    },
    data() {
        const actions = mockedCardActions;
        return {
            actions
        }
    }
})
</script>

<style scoped lang="scss">
.card-actions {
  background-color: #edf3ff;

  .card-action-item {
    font-size: 13px;
  }
}
</style>