import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.directive('animationRun', {
  mounted(el, binding) {
    const delay = binding.value;

    const preloader = document.querySelector('.preloader');

    let preDelay;

    if(preloader.classList.contains('preloader-hidden')) {
      preDelay = 0;
    } else {
      preDelay = 900
    }

      setTimeout(() => {
        el.classList.add('run-animation');
      }, preDelay + Number(delay));
     }
});

app.use(router).mount('#app');
