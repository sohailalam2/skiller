import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from '@/App.vue';

const localVue = createLocalVue();
const router = new VueRouter();

localVue.use(VueRouter);
localVue.use(Vuex);

describe('App.vue', () => {
  const storeProps = {
    actions: { doInitialize: jest.fn() },
  };
  let store;
  beforeEach(() => {
    store = new Vuex.Store(storeProps);
  });

  it('render the app', () => {
    const wrapper = shallowMount(App, { localVue, router, store });
    expect(storeProps.actions.doInitialize).toHaveBeenCalled();
    expect(wrapper.element).toMatchSnapshot();
  });
});
