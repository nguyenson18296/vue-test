<template>
    <div class="account-balance">
        <h4 class="font-semibold">
            Account balance
        </h4>
        <div class="flex items-center mt-4">
            <div class="cash-icon rounded text-center font-bold">
                S$
            </div>
            <span class="balance text-2xl ml-2.5 font-bold">
                {{ total }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    setup() {},
    data() {
        return {
            total: 3000,
        }
    }
})
</script>

<style scoped>
.cash-icon {
    background-color: #01D167;
    width: 40px;
    height: 22px;
}
</style>