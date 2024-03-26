<template>
    <div ref="appBody" :class="isHome ? 'contains-hero main-page' : ''">
        <PreloaderSpinner ref="preloader" />
        <router-view />
    </div>
</template>

<script>
import PreloaderSpinner from '@/components/PreloaderSpinner';

export default {
  name: 'App',
  components: {
    PreloaderSpinner
  },
  computed: {
    isHome() {
        return this.$route.path === '/';
    },
},
};
</script>

<style>
@import "~@fortawesome/fontawesome-free/css/all.css";


html
{
    font-size: 10px !important;
}

body
{
    font-family: 'Playfair Display', serif;
    font-weight: 300;
    font-style: normal;

    color: #fff;
    background: #0c0c0c;

    -webkit-font-smoothing: antialiased;
}

.contains-hero
{
    padding-top: 100vh;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a
{
    font-family: 'Playfair Display', serif;
    font-weight: normal;

    color: #fff;
}

h1
{
    font-size: 10rem;
}

h2
{
    font-size: 5rem;
}

h3
{
    font-size: 4rem;
}

h4
{
    font-size: 3rem;
}

h5
{
    font-size: 2rem;
}

h6
{
    font-size: 1.8rem;
}

p
{
    font-size: 1.6rem;
}

a,
a:hover,
a:focus
{
    cursor: pointer;
    -webkit-transition: all 300ms ease;
         -o-transition: all 300ms ease;
            transition: all 300ms ease;
    text-decoration: none;
}

a:hover
{
    color: #fff;
}




@media (max-width:700px)
{
    html
    {
        font-size: 8px !important;
    }
}

@media (max-width:500px)
{
    html
    {
        font-size: 6px !important;
    }
}

@media (orientation:landscape) and (max-height:420px)
{
    html
    {
        font-size: 8px !important;
    }
}


</style>
