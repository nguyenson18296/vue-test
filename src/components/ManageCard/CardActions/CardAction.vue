<template>
  <div class="text-[#0c365a]">
    <div class="card-actions w-full p-6 rounded-t-lg flex items-center">
      <div
        v-for="action in actions"
        :key="action.id"
        class="card-actions__card-action-item flex flex-col items-center"
        @click="action.action"
      >
        <img :src="action.icon" class="w-8 h-8 mb-2" />
        <h4 class="text-center">
          {{ action.name }}
        </h4>
      </div>
    </div>
    <CardManage />
    <DeleteCardConfirmPopup
      :open="isShowDeleteModal"
      :onCloseModal="onCancelDeleteCard"
      :onDeleteCard="onDeleteCard"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import CardManage from '../CardManage/CardManage.vue'
import { ICardInformation } from '../../CardInformation/CardInformation.vue'
import DeleteCardConfirmPopup from '../../DeleteCard/DeleteCardConfirmPopup.vue'

export default defineComponent({
  setup() {},
  components: {
    CardManage,
    DeleteCardConfirmPopup
  },
  props: {
    card: {
      type: Object as PropType<ICardInformation>
    },
    isActive: {
      type: Boolean
    }
  },
  data() {
    const cardActions = ref([
      {
        id: 1,
        icon: 'src/assets/icons/freeze-card.svg',
        name: 'Freeze card',
        action: () => this.onToggleFreezedCard()
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
        action: () => this.onOpenConfirmDeleteCard()
      }
    ])
    return {
      actions: cardActions,
      isCardActive: false,
      isShowDeleteModal: false
    }
  },
  watch: {
    isActive(value) {
      this.actions = [...this.actions].map((item) => {
        if (item.id === 1) {
          return {
            ...item,
            name: value ? 'Freeze card' : 'Unfreeze card'
          }
        }
        return item
      })
    }
  },
  created() {
    this.isCardActive = !this.card?.is_card_freezed
    this.actions = [...this.actions].map((item) => {
      if (item.id === 1) {
        return {
          ...item,
          name: this.isCardActive ? 'Freeze card' : 'Unfreeze card'
        }
      }
      return item
    })
  },
  methods: {
    onOpenConfirmDeleteCard() {
      this.isShowDeleteModal = true
    },
    onCancelDeleteCard() {
      this.isShowDeleteModal = false
    },
    onDeleteCard() {
      this.$emit('delete-card', this.card.id)
      this.onCancelDeleteCard()
    },
    onToggleFreezedCard() {
      this.$emit('on-toggle-freezez-card', this.card.id)
    }
  }
})
</script>

<style scoped lang="scss">
.card-actions {
  background-color: #edf3ff;

  &__card-action-item {
    font-size: 13px;
  }
}
</style>