import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Home from '@/views/Home.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Home.vue', () => {
  let store;
  beforeEach(() => {
    store = new Vuex.Store({});
  });

  it('render home', () => {
    const wrapper = shallowMount(Home, { store, localVue });
    expect(wrapper.element).toMatchSnapshot();
  });
});
