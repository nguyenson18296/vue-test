<template>
    <div class="adding-card flex items-center">
        <img :src="cardIcon" />
        <span class="new-card font-bold ml-1.5">
            New card
        </span>
    </div>
</template>

<script setup lang="ts">
import cardIcon from '../../assets/icons/add-card.svg';

</script>

<style>
.new-card {
    color: #23CEFD;
}
</style>