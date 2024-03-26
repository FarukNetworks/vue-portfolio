<template>
    <div class="portfolio" >  
            <!-- ITEM -->
            <div  v-for="(projectList, index) in portfolio" :key="index" >
            <a v-for="(project, index) in projectList" :key="index" class="item scroll-animated-from-bottom" 
            :class="project.name.replace(' ', '-').toLowerCase()"
            @click.prevent="$router.push({ name: 'project', params: { slug: project.slug } })">
        
               
                   <i class="fa fa-eye" aria-hidden="true"></i>
                <div :style="`background-image: url(${project.img});`" class="item-cover"></div>
                
            </a>
    </div>
</div>
</template>

<script>
export default {
  name: 'PortfolioTemplate',
  data() {
    return {
      portfolio: {
        mhauto: [{
          name: 'MH Auto',
          img: require('@/assets/mhauto.png'),
          slug: 'mh-auto',
          heading: 'Auto Electric and Repair Company',
          description: "MH Auto is a project showcasing my skills in WordPress development and design. It features a sleek and modern design, highlighting the company's services and expertise in auto electric and repair. The website provides a user-friendly experience, with easy navigation and informative content to engage visitors. Feel free to ask any questions if you need more details about this project!",
        }],
        blackjack: [{
          name: 'Blackjack',
          img: require('@/assets/Blackjack.png'),
          slug: 'blackjack',
          heading: 'JavaScript Game Development',
          description: 'Blackjack is one of my first projects in JavaScript, and it was quite challenging during the early days of my career. I love showcasing this project because it reflects my growth and skills from the beginning. Despite being one of my initial projects, it remains quite impressive, highlighting my dedication and passion for programming.',
        }],
        foodtrusty: [{
          name: 'Food Trusty',
          img: require('@/assets/food-trusty.png'),
          slug: 'food-trusty',
          heading: 'Web3 WordPress based APP',
          description: 'Food Trusty is a WordPress-based web3 platform that allows users to log in with their online wallet address. This innovative web app enables users to create products on the frontend and display them under their name.',
        }],
        todo: [{
          name: 'To-Do List',
          img: require('@/assets/to-do-list.png'),
          slug: 'to-do',
          heading: 'Simple To-Do List Without Any Distractions',
          description: "Designed for simplicity and efficiency, my to-do list web app offers a distraction-free experience. Built with Vanilla Vite, the app provides a clean interface for managing tasks seamlessly. Whether you're organizing daily chores or planning long-term projects, this intuitive tool helps you stay focused and productive. With its lightweight and fast performance, the to-do list web app ensures a smooth user experience, making task management a breeze.",
        }],
       
      }
    };
  },
  methods: {
    scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  }
};
</script>

<style>

.portfolio
{
    padding: 0 30px;
}

.portfolio .item
{
    position: relative;

    display: block;
    overflow: hidden;

    max-width: 990px;
    margin: 0 auto 10rem auto;

    border: 6px solid #fff;
}

.portfolio .item:before
{
    display: block;

    padding-top: 56.25%;

    content: '';
}

.portfolio > div:last-child
{
    margin-bottom: 0;
}

.portfolio .item .item-cover
{
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-position: center;
    background-size: cover;
}

.portfolio .item i
{
    font-size: 2.2rem;
    line-height: 3em;

    position: absolute;
    z-index: 10;
    top: 50%;
    right: 0;

    width: 3em;
    padding: 0;

    -webkit-transition: .25s ease;
         -o-transition: .25s ease;
            transition: .25s ease;
    -webkit-transform: translate(100%,-50%);
        -ms-transform: translate(100%,-50%);
            transform: translate(100%,-50%);
    text-align: center;

    opacity: 0;
    color: #111;
    background: #fff;
}

.portfolio .item:hover i
{
    -webkit-transform: translate(0,-50%);
        -ms-transform: translate(0,-50%);
            transform: translate(0,-50%);

    opacity: 1;
}



.portfolio-item-a
{
    margin: 20rem 0 0 0;
}

.portfolio-item-a .container-fluid
{
    max-width: 900px;
    padding: 0 30px;
}

.portfolio-item-a h1
{
    margin-bottom: .25em;
}

.portfolio-item-a h4
{
    margin-bottom: 1.8em;
}

.portfolio-item-a p
{
    line-height: 2.4em;

    margin-bottom: 1.6em;
}

.portfolio-item-a .image-carousel
{
    margin-top: 6rem;
}


.portfolio-item-a .image-carousel .owl-item
{
    border: 5px solid #fff;
    border-left: none;
}

.portfolio .blackjack .item-cover{
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #000;
}
</style>