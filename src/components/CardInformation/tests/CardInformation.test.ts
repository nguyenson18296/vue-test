import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { describe } from 'node:test'

import CardInformation from '../CardInformation.vue'

const mockedCard = {
  id: 'ea631202-5108-4831-84dc-45ec925d772d',
  card_number: '1234 1234 1234 1234',
  expired_date: '12/23',
  cvv: '555',
  is_card_freezed: false
}

describe('CardTabs', () => {
  it('Should not blur card when card is active', () => {
    const wrapper = mount(CardInformation, {
      props: {
        card: mockedCard,
        isActive: true
      }
    })
    expect(wrapper.find('.opacity-50').exists()).toBe(false)
  })
  it('Should blur card when card is inactive', () => {
    const wrapper = mount(CardInformation, {
      props: {
        card: mockedCard,
        isActive: false
      }
    })
    expect(wrapper.find('.opacity-50').exists()).toBe(true)
  })
})
