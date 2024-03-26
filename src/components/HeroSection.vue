<template>
  <!-- HERO -->
  <div ref="hero" class="hero">


<!-- FRONT CONTENT -->
<div class="front-content">


    <!-- CONTAINER MID -->
    <div class="container-mid">
        
        
        <!-- ANIMATION CONTAINER -->
        <div class="animation-container animation-fade-right" v-animation-run="0">
            
            <h1>{{hero[0].heading}}</h1>
            
        </div>
        <!-- /ANIMATION CONTAINER -->
        
        
        <!-- ANIMATION CONTAINER -->
        <div  class="animation-container animation-fade-left" v-animation-run="200"> 
           
            <p class="subline">{{ hero[0].subheading }}</p>
            
        </div>
        <!-- /ANIMATION CONTAINER -->
        

    </div>
    <!-- /CONTAINER MID -->


</div>
<!-- /FRONT CONTENT -->


<!-- BACKGROUND CONTENT -->
<div ref="parallaxOn" class="background-content parallax-on">
    
    
    <!-- BACKGROUND CONTENT INNER -->
    <div ref="parallaxInner" class="background-content-inner">

        <div class="background-overlay"></div>
        <div class="background-img layer" data-depth="0.05"></div>
    
    </div>
    <!-- /BACKGROUND CONTENT INNER -->
    
    
</div>
<!-- /BACKGROUND CONTENT -->


</div>
<!-- /HERO -->
</template>


<script>


export default {
  name: 'HeroSection',
  data() {
    return {
        hero: [{
        heading: 'Faruk Delic',
        subheading: 'Scroll Down To See My Latest Projects'
    }]
    };
  },
  mounted(){
    this.$nextTick(() => {
    window.addEventListener('mousemove', (e) => {
  const parallaxSection = this.$refs.parallaxOn;
  const parallaxInner = this.$refs.parallaxInner;

  if (parallaxSection && parallaxInner) {

  const rect = parallaxSection.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = e.clientX - centerX;
  const mouseY = e.clientY - centerY;

  const maxMovement = 35; // Adjust this value to control the maximum parallax movement

  // Calculate the new position based on mouse position
  const newX = (mouseX / rect.width) * maxMovement;
  const newY = (mouseY / rect.height) * maxMovement;

  // Apply the new position to the parallax inner element
  parallaxInner.style.transform = `translate(${newX}px, ${newY}px)`;
  }
    });   
  })
}
};
</script>

<style>

.hero
{
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
}

.hero .animation-container
{
    -webkit-transition: .5s ease;
         -o-transition: .5s ease;
            transition: .5s ease;
}

.hero .animation-container.animation-fade
{
    opacity: 0;
}

.hero .animation-container.animation-fade.run-animation
{
    opacity: 1;
}

.hero .animation-container.animation-fade-up
{
    -webkit-transform: translateY(10vh);
        -ms-transform: translateY(10vh);
            transform: translateY(10vh);

    opacity: 0;
}

.hero .animation-container.animation-fade-up.run-animation
{
    -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
            transform: translateY(0);

    opacity: 1;
}

.hero .animation-container.animation-fade-down
{
    -webkit-transform: translateY(-10vh);
        -ms-transform: translateY(-10vh);
            transform: translateY(-10vh);

    opacity: 0;
}

.hero .animation-container.animation-fade-down.run-animation
{
    -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
            transform: translateY(0);

    opacity: 1;
}

.hero .animation-container.animation-fade-left
{
    -webkit-transform: translateX(10vh);
        -ms-transform: translateX(10vh);
            transform: translateX(10vh);

    opacity: 0;
}

.hero .animation-container.animation-fade-left.run-animation
{
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);

    opacity: 1;
}

.hero .animation-container.animation-fade-right
{
    -webkit-transform: translateX(-10vh);
        -ms-transform: translateX(-10vh);
            transform: translateX(-10vh);

    opacity: 0;
}

.hero .animation-container.animation-fade-right.run-animation
{
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);

    opacity: 1;
}



/** 4. Hero --> Front Content 
*******************************************************************/

.hero .front-content
{
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
}

.hero .front-content .container-mid
{
    position: absolute;
    top: 50%;
    left: 0;

    width: 100%;
    padding: 0 30px;

    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
    text-align: center;
}

.hero .front-content .container-mid h1
{
    font-weight: bold;

    margin-top: 0;
    margin-bottom: .24em;
}

.hero .front-content .container-mid p.subline
{
    font-size: 3rem;

    letter-spacing: .025em;
}



/** 5. Hero --> Background Content 
*******************************************************************/

.hero .background-content
{
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;

    overflow: hidden;

    width: 100%;
    height: 100%;
}

.hero .background-content .background-content-inner
{
    position: absolute;
    z-index: 1;
    top: 0%;
    left: -5%;

    width: 100%;
    height: 100%;
    transition: all .3s ease-out;
}

.hero .background-content.parallax-on .background-content-inner
{
    width: 110%;
    height: 110%;
}

.hero .background-content .background-overlay
{
    position: absolute;
    z-index: 50;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    opacity: .6;
    background: #111;
}

.hero .background-content .background-img
{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: url(../assets/background.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

</style>