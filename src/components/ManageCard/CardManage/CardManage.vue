<template>
  <div class="card-information w-full p-6">
    <CardDetails />
    <RecentTransactions />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import RecentTransactions from '../RecentTransactions/RecentTransactions.vue';
import CardDetails from '../CardDetails/CardDetails.vue';

export default defineComponent({
  components: {
    RecentTransactions,
    CardDetails
  }
})
</script>

<style scoped>
.card-information {
  background-color: #fff;
}
</style>