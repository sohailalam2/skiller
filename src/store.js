/* eslint-disable no-param-reassign */
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [],
  },
  mutations: {
    addSkills(state, skills) {
      if (!Array.isArray(skills)) skills = [skills];
      skills.forEach(skill => state.skills.push(skill));
    },
    deleteSkill(state, id) {
      const found = state.skills.find(s => s.id === id);
      const foundIndex = state.skills.indexOf(found);
      state.skills.splice(foundIndex, 1);
    },
  },
  actions: {
    // --------------------------------------------
    // download all skills and initialize the store
    // --------------------------------------------
    async doInitialize({ commit }) {
      try {
        const { data } = await axios.get('/skills');
        commit('addSkills', data);
      } catch (err) {
        console.error(err);
      }
    },
    // --------------------------------------------
    // make api call to add skills
    // --------------------------------------------
    async doAddSkills({ commit }, skills) {
      try {
        const promises = skills.map(skill => axios.post('/skills', skill));
        const res = await Promise.all(promises);
        res.forEach(r => commit('addSkills', r.data));
      } catch (err) {
        console.error(err);
      }
    },
    // --------------------------------------------
    // make api call to delete a skill
    // --------------------------------------------
    async doDeleteSkill({ commit }, id) {
      try {
        await axios.delete(`/skills/${id}`);
        commit('deleteSkill', id);
      } catch (err) {
        console.error(err);
      }
    },
  },
});
