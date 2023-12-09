<template>
    <div class="account-balance">
        <div class="flex items-center mt-4">
            <div class="cash-icon rounded text-center font-bold">
                S$
            </div>
            <span class="balance ml-2.5 font-bold">
                {{ total }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const total = ref(3000)
</script>

<style scoped>
.cash-icon {
    background-color: #01D167;
    width: 40px;
    height: 22px;
}
</style>