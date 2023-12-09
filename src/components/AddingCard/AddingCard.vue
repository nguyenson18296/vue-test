<template>
  <div class="adding-card flex items-center">
    <img src="/src/assets/icons/add-card.svg" alt="add-card" />
    <span class="new-card font-bold ml-1.5" @click="isShowForm = true"> New card </span>
    <div v-if="isShowForm">
      <AddingCardModal :onCloseForm="onCloseForm" @add-card="addCard" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddingCardModal from './AddingCardModal.vue'

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
    AddingCardModal
  },
  methods: {
    onCloseForm() {
      this.isShowForm = false;
    }
  },
  watch: {
    isShowForm(value) {
      console.log("value", value);
    }
  }
})
</script>

<style>
.new-card {
  color: #23cefd;
}
</style>