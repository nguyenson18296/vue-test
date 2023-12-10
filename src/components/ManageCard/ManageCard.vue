<template>
    <div class="manage-card">
        <CardAction />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CardAction from "./CardActions/CardAction.vue";

export default defineComponent({
  setup() {},
  components: {
    CardAction
  },
})

</script>

<style scoped>
.manage-card {
    color: #0C365A;
}
</style>
