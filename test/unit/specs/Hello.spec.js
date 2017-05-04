import Vue from 'vue'
import Hello from '@/components/Hello'

describe('Hello.vue', () => {
  it('set default formattedDate null', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#formatResult').textContent)
      .to.equal('')
  })

  it('set default validDate null', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#validateResult').textContent)
      .to.equal('')
  })

  it('purposely fail test', () => {
    expect('swag').to.equal('bruh')
  })
})
