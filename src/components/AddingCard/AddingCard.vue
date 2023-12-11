<template>
  <div class="adding-card flex items-center">
    <img src="/src/assets/icons/add-card.svg" alt="add-card" />
    <span class="new-card font-bold ml-1.5" @click="isShowForm = true"> New card </span>
    <AddingCardPopup :open="isShowForm" :onCloseModal="onCloseModal" @add-card="addCard" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddingCardPopup from './AddingCardPopup.vue'

export default defineComponent({
  setup() {},
  props: {
    addCard: {
      type: Function
    }
  },
  data() {
    return {
      isShowForm: false
    }
  },
  components: {
    AddingCardPopup
  },
  methods: {
    onCloseModal() {
      this.isShowForm = false
    }
  }
})
</script>

<style>
.new-card {
  color: #23cefd;
}
</style>
