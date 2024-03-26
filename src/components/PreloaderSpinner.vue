<template>
  <div class="preloader" ref="preloader">
    <div class="spinner">
      <div class="bounce-1"></div>
      <div class="bounce-2"></div>
      <div class="bounce-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PreloaderSpinner',
  mounted() {
    setTimeout(() => {
      // Add a class to the preloader element after 1 second
      this.$refs.preloader.classList.add('preloader-hidden');
    }, 400);
  }
}
</script>

<style>

.preloader
{
    position: fixed;
    z-index: 100000;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: #111;
}

.preloader.preloader-hidden
{
    height: 0;
    
    -webkit-transition: .5s ease .3s;
         -o-transition: .5s ease .3s;
            transition: .5s ease .3s;
}

.preloader .spinner
{
    position: absolute;
    top: 50%;

    width: 100%;

    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
    text-align: center;
    opacity: 1;
}

.preloader.preloader-hidden .spinner
{
    opacity: 0;
    
    -webkit-transition: .3s ease;
         -o-transition: .3s ease;
            transition: .3s ease;
}

.preloader .spinner > div
{
    display: inline-block;

    width: 18px;
    height: 18px;
    margin: 0 6px;

    -webkit-animation: spinner-bounce 1.4s infinite ease-in-out both;
            animation: spinner-bounce 1.4s infinite ease-in-out both;

    border-radius: 100%;
    background-color: #fff;
}

.preloader .spinner .bounce-1
{
    -webkit-animation-delay: -.32s;
            animation-delay: -.32s;
}

.preloader .spinner .bounce-2
{
    -webkit-animation-delay: -.16s;
            animation-delay: -.16s;
}

@-webkit-keyframes spinner-bounce
{
    0%,
    80%,
    100%
    {
        -webkit-transform: scale(0);
    }
    40%
    {
        -webkit-transform: scale(1.0);
    }
}

@keyframes spinner-bounce
{
    0%,
    80%,
    100%
    {
        -webkit-transform: scale(0);
                transform: scale(0);
    }

    40%
    {
        -webkit-transform: scale(1.0);
                transform: scale(1.0);
    }
}

</style>
