<template>
  <div class="py-8">
    <div class="flex items-end justify-between px-6">
      <AccountBalance />
      <AddingCard :addCard="addCard" :isShowForm="isShowForm" />
    </div>
    <CardTabs />
    <swiper
      :slidesPerView="'auto'"
      :spaceBetween="30"
      :pagination="{
        clickable: true
      }"
      :modules="modules"
      @activeIndexChange="onChange"
    >
      <swiper-slide v-for="card in cards" :key="card.id">
        <CardInformation :card="card" :isActive="!activeCard.is_card_freezed" />
      </swiper-slide>
    </swiper>
    <div class="manage-card">
      <CardAction 
      :card="activeCard"
      :isActive="!activeCard.is_card_freezed"
      @delete-card="onDeleteCard" 
      @on-toggle-freezez-card="onToggleFreezeCard" 
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, isProxy, toRaw, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { v4 as uuidv4 } from 'uuid';

import AccountBalance from '../AccountBalance/AccountBalance.vue'
import AddingCard from '../AddingCard/AddingCard.vue'
import CardInformation, { ICardInformation } from '../CardInformation//CardInformation.vue'
import CardAction from '../ManageCard/CardActions/CardAction.vue'
import CardTabs from '../CardTabs/CardTabs.vue';
import { generateExpiredDate, generateCVV } from '../../utils/utils'

export default defineComponent({
  setup() {
    return {
      modules: [Pagination]
    }
  },
  data() {
    return {
      cards: [],
      activeIndex: 0,
      isShowForm: false,
      randomKey: 0,
      activeCard: {},
    }
  },
  components: {
    AccountBalance,
    AddingCard,
    CardAction,
    CardInformation,
    Swiper,
    SwiperSlide,
    CardTabs
  },
  async created() {
    const response = await fetch('src/mocks/cards.json')
    const data = await response.json()
    this.cards = data.response;
    this.activeCard = this.cards[this.activeIndex];
  },
  methods: {
    addCard(number: string) {
      const newCard: ICardInformation = {
        id: uuidv4(),
        card_number: number,
        expired_date: generateExpiredDate(),
        cvv: generateCVV().toString(),
        is_card_freezed: false
      }
      this.cards.push(newCard)
    },
    onChange(varuable) {
      if (isProxy(varuable)) {
        const rawObject = toRaw(varuable)
        this.activeIndex = rawObject?.activeIndex ?? 0
        this.activeCard = this.cards[this.activeIndex];
      }
    },
    onDeleteCard(id: number) {
        const newListCard = this.cards.filter(item => item.id !== id);
        this.cards = newListCard;
    },
    onToggleFreezeCard(id: number) {
        const updatedCardIndex = this.cards.findIndex(item => item.id === id);
    // Update the specific card in the cards array
    this.cards[updatedCardIndex] = reactive({
        ...this.cards[updatedCardIndex],
        is_card_freezed: !this.cards[updatedCardIndex].is_card_freezed
    });

    // Update the activeCard object directly (if it's supposed to be the same as the updated card)
    this.activeCard = reactive({
        ...this.activeCard,
        is_card_freezed: !this.activeCard.is_card_freezed
    });
    this.$forceUpdate();
    }
  },
})
</script>

<style scoped>
.manage-card {
  color: #0c365a;
}
</style>