<template>
 <NavigationButton /> 
  <div v-animation-run="0" class="portfolio-item-b">
            
            
            <!-- CONTAINER FLUID -->
            <div class="container-fluid">

               
                <h1 class="scroll-animated-from-bottom">{{projectData[0].name}}</h1>
          
                
                <h4 class="scroll-animated-from-bottom">{{projectData[0].heading}}</h4>
                
                <p class="scroll-animated-from-bottom">{{projectData[0].description}}</p>
                
            
            </div>
            <!-- CONTAINER FLUID -->
            

        </div>
</template>


<script>
import NavigationButton from '@/components/NavigationButton'
import PortfolioTemplate from '@/components/PortfolioTemplate'

export default {
  name: 'ProjectView',
  components: {
    NavigationButton
  },
  props: ['slug'],
  computed: {
  projectData() {
    const currentSlug = this.slug.replace('-', ''); 

    console.log(PortfolioTemplate.data().portfolio[currentSlug]);
    
    return PortfolioTemplate.data().portfolio[currentSlug]
  }
}

}

</script>


<style>


.portfolio-item-b
{
    margin: 20rem 0 0 0;
}

.portfolio-item-b .container-fluid
{
  max-width: 900px;
    padding: 0 30px;
    margin: 0 auto;
}

.portfolio-item-b h1
{
    margin-bottom: .25em;
}

.portfolio-item-b h4
{
    margin-bottom: 1.8em;
}

.portfolio-item-b p
{
    line-height: 2.4em;

    margin-bottom: 4em;
}

.portfolio-item-b img
{
    margin-bottom: 8rem;

    border: 5px solid #fff;
}

.portfolio-item-b img:last-child
{
    margin-bottom: 0;
}

.run-animation {
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
</style>