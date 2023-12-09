<template>
    <div>
        <h4 class="text-sm mb-4">
            Account balance
        </h4>
        <div class="flex items-center justify-between px-6">
            <AccountBalance />
            <AddingCard />
        </div>
        <ManageCard />
    </div>
</template>

<script setup>
import AccountBalance from "../AccountBalance/AccountBalance.vue";
import AddingCard from "../AddingCard/AddingCard.vue";
import ManageCard from "../ManageCard/ManageCard.vue";

</script>