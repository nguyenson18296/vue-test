import { expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { describe } from 'node:test'

import AddCardPopup from '../AddingCardPopup.vue'

describe('AddCardPopup', () => {
  it('Should render error message when user input invalid card number format', async () => {
    const wrapper = mount(AddCardPopup, {
      props: {
        addCard: vi.fn(),
        onCloseModal: vi.fn(),
        open: true
      }
    })
    await wrapper.find('input[type="text"]').setValue('2213354212353asdc')
    expect(wrapper.find('.error-message').exists()).toBe(true)
    expect(wrapper.find('.error-message').text()).toBe('Please enter a valid number.')
  })

  it('Should render error message when user input invalid number card length', async () => {
    const wrapper = mount(AddCardPopup, {
      props: {
        addCard: vi.fn(),
        onCloseModal: vi.fn(),
        open: true
      }
    })
    await wrapper.find('input[type="text"]').setValue('12345543123')
    expect(wrapper.find('.error-message').exists()).toBe(true)
    expect(wrapper.find('.error-message').text()).toBe('The card number length is invalid')
  })

  it('Should not render error message when user input valid card number format', async () => {
    const wrapper = mount(AddCardPopup, {
      props: {
        addCard: vi.fn(),
        onCloseModal: vi.fn(),
        open: true
      }
    })
    await wrapper.find('input[type="text"]').setValue('1234554312345678')
    expect(wrapper.find('.error-message').exists()).toBe(false)
  })
})
