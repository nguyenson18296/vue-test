import { expect, it } from 'vitest'
import { mount } from '@vue/test-utils';

import CardTabs from "./CardTabs.vue";
import { describe } from 'node:test';

const wrapper = mount(CardTabs);

describe('CardTabs', () => {
    it('Should render active tab', () => {
      expect(wrapper.find('.active').exists()).toBe(true)
    })
})