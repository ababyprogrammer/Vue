# Vue

Vue.js (commonly referred to as Vue; pronounced "view") is an open-source model–view–viewmodel front end JavaScript library for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.

# Overview

Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition. The core library is focused on the view layer only. Advanced features required for complex applications such as routing, state management and build tooling are offered via officially maintained supporting libraries and packages.

Vue.js allows for extending HTML with HTML attributes called directives. The directives offer functionality to HTML applications, and come as either built-in or user defined directives.

# History

Vue was created by Evan You after working for Google using AngularJS in several projects. He later summed up his thought process: "I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight." The first source code commit to the project was dated July 2013, and Vue was first publicly announced the following February, in 2014.

# Features

**Components**
Vue components extend basic HTML elements to encapsulate reusable code. At a high level, components are custom elements to which the Vue's compiler attaches behavior. In Vue, a component is essentially a Vue instance with pre-defined options.[38] The code snippet below contains an example of a Vue component. The component presents a button and prints the number of times the button is clicked:

``` text copy
<template>
  <div id="tuto">
    <button-clicked v-bind:initial-count="0"></button-clicked>
  </div>
</template>

<script>
Vue.component('button-clicked', {
  props: ['initialCount'],
  data: () => ({
    count: 0,
  }),
  template: '<button v-on:click="onClick">Clicked {{ count }} times</button>',
  computed: {
    countTimesTwo() {
      return this.count * 2;
    }
  },
  watch: {
    count(newValue, oldValue) {
      console.log(`The value of count is changed from ${oldValue} to ${newValue}.`);
    }
  },
  methods: {
    onClick() {
      this.count += 1;
    }
  },
  mounted() {
    this.count = this.initialCount;
  }
});

new Vue({
  el: '#tuto',
});
</script>
```

**A big hanks to you for read this type!**
