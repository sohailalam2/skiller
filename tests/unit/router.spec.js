import Router from 'vue-router';
import router from '@/router';

describe('router.js', () => {
  it('should export vue-router', () => {
    expect(router).toBeInstanceOf(Router);
  });
});
