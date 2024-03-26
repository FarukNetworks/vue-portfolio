<template>
  <NavigationButton />
  <div v-animation-run="0" class="about">
            
            
            <!-- CONTAINER FLUID -->
            <div class="container-fluid">

               
                <h1 class="scroll-animated-from-bottom">Hi, my name is Faruk Delić.</h1>
                
                <h4 class="scroll-animated-from-bottom">I'm a Software Engineer specialized on creating and designing web applications.</h4>
                
                <p class="scroll-animated-from-bottom">Hey there, I'm Faruk, a passionate full-stack developer based in Sarajevo, BiLH. With a solid background in WordPress, PHP, HTML, CSS, and JavaScript, I craft creative solutions to bring digital ideas to life.</p>

                <p class="scroll-animated-from-bottom">I specialize in building dynamic and responsive web applications in frameworks like Vue.js, React, and Next.js. I use tools such as Photoshop, Adobe XD, and Figma, allowing me to create visually amazing and creative prototypes.</p>
                
                <!-- SOCIAL LINKS -->
                <ul class="scroll-animated-from-bottom social-links">
                   
        
                    <li><a target="_blank" href="https://www.instagram.com/farukdevelopment/">Instagram</a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/farukdeli%C4%8799s/">LinkedIn</a></li>
                  
                </ul>
                <!-- /SOCIAL LINKS -->
               
                <h6 class="scroll-animated-from-bottom">Get in touch with me via:</h6>
                <p class="scroll-animated-from-bottom"><a target="_blank" href="mailto:info@farukdevelopment.com">info@farukdevelopment.com</a></p>
            
            
            </div>
            <!-- CONTAINER FLUID -->
            

        </div>
</template>


<script>
import NavigationButton from '@/components/NavigationButton';

  export default {
    name: 'AboutView',
    components: {
      NavigationButton
    },
    props: {
        testitem: String,
        likes: Number
    }
  }
</script>


<style scoped>
.about.run-animation {
    opacity: 0;
    animation: fadeInUp 1.5s forwards;
}

@keyframes fadeInUp{
 0% {
    opacity: 0;
    transform: translateY(15%);
 }

 100% {
    opacity: 1;
    transform: translateY(0);
 }
}


.about
{
    margin: 20rem 0 5rem 0;
}

.about .container-fluid
{
    max-width: 900px;
    padding: 0 30px;
    margin: 0 auto;
}

.about h1
{
    margin-bottom: .6em;
}

.about h4
{
    margin-bottom: 1.4em;
}

.about p
{
    line-height: 2.4em;

    margin-bottom: 1.6em;
}

.about .social-links
{
    margin: 3rem 0 4rem 0;
    padding: 0;

    list-style: none;
}

.about .social-links li
{
    font-size: 2rem;

    display: inline-block;

    margin-right: 1em;
}

.about h6
{
    margin-bottom: .6em;
}


</style>