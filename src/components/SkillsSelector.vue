<template>
  <div class="columns">

    <div class="column">
      <div class="field">
        <div class="control has-icons-right">
          <input class="input is-primary is-fullwidth is-large"
                 type="text"
                 placeholder="NodeJs, Postgres, VueJs"
                 v-model="skills"
                 :class="{'is-danger': !isSkillsValid}">
          <span class="icon is-small is-right" v-if="!isSkillsValid">
            <i class="fa fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger" v-if="!isSkillsValid">
          Skills can be comma separated but must be 4 to 255 characters only
        </p>
      </div>
    </div>

    <div class="column">
      <div class="columns is-mobile">
        <div class="column is-three-fifths-mobile">
          <div class="select is-primary is-fullwidth is-large">
            <select v-model="experience">
              <option :value="null">Experience</option>
              <option v-for="(exp, index) in experiences"
                      :value="exp"
                      :key="index">{{exp}}
              </option>
            </select>
          </div>
        </div>

        <div class="column is-two-fifths-mobile">
          <button class="button is-fullwidth is-large"
                  @click="addSkill"
                  :disabled="!isValid">ADD SKILLS
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['isLoading']),
  },
  data() {
    return {
      isSkillsValid: true,
      isValid: false,
      skills: null,
      skillsArr: [],
      experience: null,
      experiences: [
        '< 1 year',
        '1 - 3 years',
        '3 - 5 years',
        '5 - 7 years',
        '7+ years',
      ],
    };
  },
  methods: {
    // map skills with experience and emit event with data
    // to let the parent component know
    addSkill() {
      const skills = this.skillsArr.map(skill => ({
        name: skill,
        experience: this.experience,
      }));
      this.$emit('addSkill', skills);
      this.skills = null;
      this.experience = null;
    },
    // check if the skill added is a valid skill or not
    // and whether an experience level is selected or not
    // before being able to add the skill
    checkIsValid() {
      this.isSkillsValid = this.skillsArr
        .reduce((isValid, skill) => isValid && skill.length >= 4 && skill.length <= 255, true);
      this.isValid = this.isSkillsValid && this.experience;
    },
  },
  // watch for changes and enable/disable add skills button
  watch: {
    skills(val) {
      this.skillsArr = val ? val.split(',').map(s => s.trim()) : [];
      this.checkIsValid();
    },
    experience() {
      this.checkIsValid();
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/variables";

  select {
    color: $primary-color;
    font-weight: bold;
  }

  button {
    background-color: $primary-color;
    color: $primary-text-color;

    &:hover {
      background-color: $primary-hover-color;
      color: $primary-text-color;
    }

    &:disabled {
      background-color: $primary-disabled-color;
      color: $primary-disabled-text-color;
    }
  }
</style>
