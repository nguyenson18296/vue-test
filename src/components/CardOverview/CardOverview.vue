<template>
  <div>
    <h4 class="text-sm mb-4"></h4>
    <div class="flex items-center justify-between px-6">
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
      @slideChange="changeSwiperIndex"
      ref="mySwiper"
    >
      <swiper-slide v-for="card in cards" :key="card.id">
        <CardInformation :card="card" />
      </swiper-slide>
    </swiper>
    <div class="manage-card">
      <CardAction :card="activeCard" @delete-card="onDeleteCard" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, isProxy, toRaw } from 'vue'

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
      console.log(varuable)
      if (isProxy(varuable)) {
        const rawObject = toRaw(varuable)
        this.activeIndex = rawObject?.activeIndex ?? 0
        this.activeCard = this.cards[this.activeIndex];
      }
    },
    onDeleteCard(id: number) {
        const newListCard = this.cards.filter(item => item.id !== id);
        this.cards = newListCard;
        console.log("this.cards", this.cards);
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  }
})
</script>

<style scoped>
.manage-card {
  color: #0c365a;
}
</style>