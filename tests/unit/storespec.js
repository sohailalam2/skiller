import vuex from 'vuex';
import store from '@/store';

describe('store.js', () => {
  it('should export vuex store', () => {
    expect(store).toBeInstanceOf(vuex);
  });
});
