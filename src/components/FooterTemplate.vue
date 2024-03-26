<template>
  <div class="footer">
            
            
            <!-- FOOTER INNER -->
            <div class="footer-inner scroll-animated-from-bottom">

                <p>© 2024 Developer Portfolio by <a href="https://farukdevelopment.com">Faruk Development</a></p>
                <i @click="scrollToTop()" class="fa fa-angle-double-up scroll-top" aria-hidden="true"></i>
            
            </div>
            <!-- /FOOTER INNER -->
            

        </div>
</template>

<script>
export default {
  name: 'FooterTemplate',
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

<style>

.footer
{
    overflow: hidden;

    padding: 10rem 0;

    text-align: center;
}

.footer p
{
    font-size: 1.4rem;

    display: inline-block;

    margin: 0;
    margin-right: 1.4em;

    vertical-align: middle;
    letter-spacing: .05em;

    opacity: .85;
}

.footer i
{
    font-size: 2.6rem;
    line-height: 2.4em;

    display: inline-block;

    width: 2.4em;

    cursor: pointer;
    vertical-align: middle;

    color: #111;
    border-radius: 100%;
    background: #fff;
}

.footer p a
{
    font-weight: bold;
}
</style>