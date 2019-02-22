import { shallowMount } from '@vue/test-utils';
import SkillsSelector from '@/components/SkillsSelector.vue';

describe('SkillsSelector.vue', () => {
  it('render skills-selector', () => {
    const wrapper = shallowMount(SkillsSelector);
    expect(wrapper.element).toMatchSnapshot();
  });
});
