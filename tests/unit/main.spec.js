import vue from 'vue';
import main from '@/main';

describe('main.js', () => {
  it('should export a vue instance', () => {
    expect(main).toBeInstanceOf(vue);
  });
});
