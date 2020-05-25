<template>
  <div class="container">
    <div class="nav">
      <div class="logo">
        <h3>Habits</h3>
      </div>
      <div class="options">
        <plus-icon @click="flipShowAddNew" />
        <Modal :show="showAddNew" v-click-outside="clickOutside" class="add-modal">
          <h4>Create habit</h4>
          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Name</label>
          </div>
          <div class="group">
            <input type="text" required />
            <span class="highlight"></span>
            <span class="bar"></span>
            <label>Question</label>
          </div>
          <div class="repeat">
            <p>Repeat</p>
            <select name="repeat-select" id="repeat-select">
              <option value="7">Everyday</option>
              <option value="1">Every Week</option>
              <option value="2">Twice a week</option>
              <option value="4">4 times a week</option>
            </select>
          </div>
          <div class="reminder">
            <p>Reminder</p>
            <input value="off" />
          </div>
          <div class="button-group">
            <button>Discard</button>
            <button>Save</button>
          </div>
        </Modal>
        <filter-icon @click="flipShowFilterMenu" />
        <Modal :show="showFilterMenu" v-click-outside="clickOutside" class="filter-modal">
          <div>Hide archived</div>
          <div>Hide completed</div>
          <div>Sort</div>
        </Modal>
        <more-vertical-icon @click="flipShowSettings" />
        <Modal :show="showSettings" v-click-outside="clickOutside" class="setting-modal">
          <div class="dark-mode">
            <p>Dark Mode</p>
            <ThemeSwitch />
          </div>
          <p>Settings</p>
          <p>About</p>
          <p>Faq</p>
        </Modal>
      </div>
    </div>
    <HomeList />
  </div>
</template>

<script>
// eslint-disable-next-line
import { db, habitsCollection } from '@/firebase';
import Tick from '@/components/Tick.vue';
import Modal from '@/components/Modal.vue';
import HomeList from '@/components/HomeList.vue';
import { PlusIcon, MoreVerticalIcon, FilterIcon } from 'vue-feather-icons';
import vClickOutside from 'v-click-outside';
import ThemeSwitch from '@/components/Switch.vue';

export default {
  name: 'Home',
  data() {
    return {
      showSettings: false,
      showAddNew: false,
      showFilterMenu: false,
    };
  },
  methods: {
    flipShowSettings() {
      this.showSettings = !this.showSettings;
    },
    flipShowAddNew() {
      this.showAddNew = !this.showAddNew;
    },
    flipShowFilterMenu() {
      this.showFilterMenu = !this.showFilterMenu;
    },
    clickOutside() {
      this.showSettings = false;
      this.showAddNew = false;
      this.showFilterMenu = false;
    },
  },
  components: {
    // eslint-disable-next-line
    Tick,
    HomeList,
    Modal,
    ThemeSwitch,
    PlusIcon,
    MoreVerticalIcon,
    FilterIcon,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>

<style scoped lang="scss">
.container {
  .nav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    .logo {
      justify-self: start;
    }
    .options {
      justify-self: end;
      align-self: center;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      * {
        margin-left: 20px;
      }
    }
  }
}
.setting-modal {
  display: flex;
  flex-direction: column;
  .dark-mode {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    margin: 20px 0 11px 0;
    p {
      margin: 0;
      justify-self: end;
    }
  }
}
.add-modal {
  padding: 5px;
  h4 {
    text-align: start;
    margin-top: 10px;
  }
  .group {
    position: relative;
    margin-bottom: 45px;
  }
  input {
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 80%;
    border: none;
    border-bottom: 1px solid #757575;
  }
  input:focus {
    outline: none;
  }

  /* LABEL ======================================= */
  label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
  }

  /* active state */
  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264ae;
  }

  /* BOTTOM BARS ================================= */
  .bar {
    position: relative;
    display: block;
    width: 80%;
  }
  .bar:before,
  .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
  }
  .bar:before {
    left: 53%;
  }
  .bar:after {
    right: 46%;
  }

  /* active state */
  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 53%;
  }

  /* HIGHLIGHTER ================================== */
  .highlight {
    position: absolute;
    height: 60%;
    width: 80%;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  /* active state */
  input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  div.repeat,
  div.reminder {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
</style>
