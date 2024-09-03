<template>
  <div class="web-app overflow-hidden">
    <div>
      <Loader />
      <Header @mouseover="stopScroll" @mouseleave="startScroll" @close="startScroll" />
      <div class="w-screen" id="scene">
        <div class="bg-white relative z-10">
          <slot />
        </div>
        <div>
          <div class="fixed bottom-0 left-0 bg-white w-screen" ref="footer">
            <Footer />
          </div>
          <div class="pointer-events-none" :style="{height : `${footerHeight}px`}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useWindowSize } from "@vueuse/core";
  import Lenis from "@studio-freight/lenis";
  const footer = ref(null);
  const footerHeight = ref(0);
  const { $ScrollTrigger: ScrollTrigger } = useNuxtApp();
  const lenis = new Lenis({
    duration: 1.2,
    lerp: 0.05,
    smoothWheel: true,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  const { width } = useWindowSize();

  function stopScroll() {
    if(width.value > 1024) {
      lenis.stop();
    }
  }
  function startScroll() {
    if(width.value > 1024) {
      lenis.start();
    }
  }

  onMounted(() => {
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    footerHeight.value = footer.value.offsetHeight;
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const id = el.getAttribute("href")?.slice(1);
        if (!id) return;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
</script>

<style>
  /*html * {
    Для отладки 
    /*outline: 1px solid black; 
  }*/

  body {
    position: relative;
    min-height: 100svh;
  }
  /* 
  .web-app {
    width: 100%;
    overflow: hidden;
  }

  .screen {
    width: 100vw;
    overflow: hidden;
  }
    */
</style>
