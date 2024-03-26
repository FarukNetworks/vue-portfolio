<template>
  <div>
    <NavigationButton/>
    <HeroSection ref="hero"/>
    <PortfolioTemplate />
    <FooterTemplate />
  </div>
</template>

<script>
// @ is an alias to /src

import NavigationButton from '@/components/NavigationButton';
import HeroSection from '@/components/HeroSection';
import PortfolioTemplate from '@/components/PortfolioTemplate';
import FooterTemplate from '@/components/FooterTemplate';

export default {
  name: 'HomeView',
  components: {
    NavigationButton,
    HeroSection,
    PortfolioTemplate,
    FooterTemplate
  },
  mounted() {
      // HERO/BUTTON ON SCROLL ANIMATING

  // this.onScrollAnimating();
        window.addEventListener('scroll', () => {
          const heroRef = this.$refs.hero; 

          if(heroRef) {
  this.onScrollAnimating();
          }
});
  },
   methods: {
     onScrollAnimating() {
  var windowHeight = document.querySelector(".hero").offsetHeight,
      frontContent = document.querySelector(".hero .front-content"),
      backContent = document.querySelector(".hero .background-content"),
      navigationButton = document.querySelector(".navigation-button"),
      scrollOffset,
      calculatedOpacityFrontContent,
      calculatedScaleFrontContent,
      calculatedTranslateHeader,
      calculatedOpacityBackground;

  function navigationButtonHide() {
    if (calculatedTranslateHeader <= 200) {
      navigationButton.style.transform = "translateX(" + calculatedTranslateHeader + "%) translateY(-50%)";
    } else if (scrollOffset > windowHeight) {
      navigationButton.style.transform = "translateX(200%) translateY(-50%)";
    }
  }

  function frontContentMargin() {
    if (scrollOffset <= windowHeight) {
      frontContent.style.marginTop = scrollOffset + "px";
    } else if (scrollOffset > windowHeight) {
      frontContent.style.marginTop = windowHeight + "px";
    }
  }

  function frontContentOpacity() {
    if (calculatedOpacityFrontContent >= 0) {
      frontContent.style.opacity = calculatedOpacityFrontContent;
    } else if (scrollOffset > windowHeight) {
      frontContent.style.opacity = "0";
    }
  }

  function frontContentScale() {
    if (calculatedScaleFrontContent >= 0.4) {
      frontContent.style.transform = "scale(" + calculatedScaleFrontContent + ")";
    } else if (scrollOffset > windowHeight) {
      frontContent.style.transform = "scale(0.6)";
    }
  }

  function backgroundOpacity() {
    if (calculatedOpacityBackground >= 0) {
      backContent.style.opacity = calculatedOpacityBackground;
    } else if (scrollOffset > windowHeight) {
      backContent.style.opacity = "0";
    }
  }

  function runStep() {
    scrollOffset = window.scrollY;

    if (windowHeight > scrollOffset && scrollOffset >= 0) {
      calculatedTranslateHeader = (scrollOffset / windowHeight) * 650;
      calculatedOpacityFrontContent = 1 - (scrollOffset / windowHeight) * 4.2;
      calculatedScaleFrontContent = 1 - (scrollOffset / windowHeight) * 1.2;
      calculatedOpacityBackground = 1 - (scrollOffset / windowHeight) * 1.4;

      navigationButtonHide();
      frontContentMargin();
      frontContentOpacity();
      frontContentScale();
      backgroundOpacity();
    }
  }

  // window.addEventListener('resize', function() {
  //   windowHeight = document.querySelector(".hero").offsetHeight;
  // });

  // window.addEventListener('scroll', function() {
  //   runStep();
  // });

  runStep();
}
}
};
</script>
