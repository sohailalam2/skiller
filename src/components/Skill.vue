<template>
  <div class="columns is-mobile is-full-mobile skill"
       @mouseenter="() => showDelete = true"
       @mouseleave="() => showDelete = false">

    <div class="column is-one-fifth has-text-centered skill__id"
         :class="{skill__id_is_top: isTopSkill}">
      <span class="is-6">{{index}}</span>
    </div>

    <div class="column">
      <p class="is-2 has-text-weight-bold">{{name}}</p>
      <span class="is-4 has-text-weight-normal">{{experience}}</span>
    </div>

    <div class="column is-one-fifth has-text-centered skill__delete">
      <span class="is-6" @click="$emit('deleteSkill', id)" v-show="showDelete">
        <i class="fa fa-times"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // the unique id of the skill
    id: { type: Number, required: true },
    // the id to show on the ui
    index: { type: Number, required: true },
    // the skill name
    name: { type: String, required: true },
    // the skill experience
    experience: { type: String, required: true },
  },

  data() {
    return {
      showDelete: false,
    };
  },
  computed: {
    // whether its one of top skill or not
    isTopSkill() {
      return this.index <= 5;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/variables";

  .skill {
    background: $primary-text-color;
    padding: 0;
    margin: 20px;
    min-width: 200px;
    max-width: fit-content;
    max-height: 100px;

    @media (max-width: 780px) {
      max-width: 100%;
      margin: 0;
    }

    &:hover {
      box-shadow: 2px 2px $primary-disabled-color;
    }

    &:hover > &__id {
      background: #1A998E;
    }

    &__id {
      max-width: fit-content;
      background: #80878B;
      span {
        color: $primary-text-color;
      }
      &_is_top {
        background: #000;
      }
    }

    &__delete {
      max-width: fit-content;
      color: $primary-disabled-text-color;
      span {
        cursor: pointer;
      }
    }
  }
</style>
