<template>
  <div class="py-8">
    <div class="flex items-end justify-between px-6">
      <AccountBalance />
      <AddingCard :addCard="addCard" :isShowForm="isShowForm" />
    </div>
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

import AccountBalance from '../AccountBalance/AccountBalance.vue'
import AddingCard from '../AddingCard/AddingCard.vue'
import CardInformation, { ICardInformation } from '../CardInformation//CardInformation.vue'
import CardAction from '../ManageCard/CardActions/CardAction.vue'
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
    SwiperSlide
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
        id: 2,
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
  watch: {
    activeCard: {
        handler(newValue, oldValue) {
            this.$forceUpdate();
        // Note: `newValue` will be equal to `oldValue` here
        // on nested mutations as long as the object itself
        // hasn't been replaced.
      },
      deep: true
    }
  }
})
</script>

<style scoped>
.manage-card {
  color: #0c365a;
}
</style>