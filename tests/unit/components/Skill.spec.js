import { shallowMount } from '@vue/test-utils';
import Skill from '@/components/Skill.vue';

describe('Skill.vue', () => {
  it('render skill', () => {
    const skill = {
      id: 1,
      index: 1,
      name: 'Skill Name',
      experience: 'Skill Exp',
    };
    const wrapper = shallowMount(Skill, {
      propsData: skill,
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
