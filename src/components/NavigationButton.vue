<template>
   <div class="navigation-button">

    <router-link v-if="isHome" to="/about" @click="scrollToTop"><p>About</p></router-link>

<router-link v-else @click="scrollToTop" to="/"><p>Back</p></router-link>


</div>
</template>

<script>
export default {
  name: 'NavigationButton',
  computed: {
    isHome() {
        return this.$route.path === '/';
    }
  },
  methods: {
    scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  }
}
</script>


<style >
.navigation-button
{
    position: fixed;
    z-index: 10;
    top: 10%;
    right: 0;

    cursor: pointer;
    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
}

.navigation-button p
{
    font-size: 2.2rem;
    font-weight: 400;

    margin: 0;
    padding: .6em 3em .6em 1.8em;

    -webkit-transition: .15s ease;
         -o-transition: .15s ease;
            transition: .15s ease;
    letter-spacing: .01em;

    color: #111;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    background: #fff;
}

.navigation-button:hover p
{
    padding: .6em 4em .6em 1.8em;
}
</style>

