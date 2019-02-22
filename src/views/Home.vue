<template>
  <div class="home">
    <h1 class="is-size-2 has-text-weight-bold is-hidden-mobile">ADD YOUR SKILLS</h1>

    <div class="columns">
      <SkillsSelector @addSkill="doAddSkills" class="column home__skills-selector"/>
    </div>

    <div class="columns is-multiline home__skills">
      <Skill v-for="(s, index) in skills"
             :id="s.id"
             :index="index + 1"
             :key="index"
             :name="s.name"
             :experience="s.experience"
             @deleteSkill="doDeleteSkill"
             class="column"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import SkillsSelector from '../components/SkillsSelector.vue';
import Skill from '../components/Skill.vue';

export default {
  name: 'home',
  components: {
    SkillsSelector,
    Skill,
  },
  computed: {
    ...mapState(['skills']),
  },
  methods: {
    ...mapActions(['doAddSkills', 'doDeleteSkill']),
  },
};
</script>

<style lang="scss" scoped>
  .home {
    margin: 4rem;
    @media (max-width: 780px) {
      margin: 2rem;
    }

    &__skills-selector {
      margin-bottom: 1rem;
      @media (max-width: 780px) {
        padding: 0;
      }
    }

    &__skills {
      background: #F4F5F6;
    }
  }
</style>
