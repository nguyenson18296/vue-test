<template>
  <div class="tabs mt-6 px-6 flex items-center">
    <div
      v-for="tab in tabs"
      :key="tab.id"
      class="tab text-[13px] first:ml-0 ml-8"
      :class="{
        'active font-bold border-b-2 border-[#23CEFD]': tab.id === activeTab
      }"
      @click="() => onChangeTab(tab.id)"
    >
      {{ tab.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const tabs = [
  {
    id: 1,
    name: 'My debit cards',
    value: 'debit'
  },
  {
    id: 2,
    name: 'All company cards',
    value: 'all_cards'
  }
]

export default defineComponent({
  setup() {},
  data() {
    return {
      activeTab: 1,
      tabs: tabs
    }
  },
  methods: {
    onChangeTab(id: number) {
      this.activeTab = id
    }
  }
})
</script>
