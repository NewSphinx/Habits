<template>
  <div>
    <input type="checkbox" id="unchecked" class="cbx hidden" @click="flipTheme" />
    <label for="unchecked" class="lbl"></label>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'themeSelector',
  methods: {
    ...mapMutations({
      flipTheme: 'flipDarkTheme',
    }),
  },
  computed: {
    darkTheme() {
      return this.$store.state.darkTheme;
    },
  },
};
</script>

<style>
.lbl {
  position: relative;
  display: block;
  height: 21px;
  width: 34px;
  background: #caf1bb;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lbl:after {
  position: absolute;
  left: 4px;
  top: 2px;
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 100px;
  background: #fff9a0;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.25);
  content: '';
  transition: all 0.5s ease;
}

.lbl:active:after {
  transform: scale(1.1, 0.9);
}

.cbx:checked ~ label {
  background: #383838;
}

.cbx:checked ~ label:after {
  left: 7px;
  background: #383838;
  box-shadow: 6px 0px 0px 0px #eee;
}

.cbx:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}

.cbx:disabled ~ label:after {
  background: #bcbdbc;
}

.hidden {
  display: none;
}
</style>
