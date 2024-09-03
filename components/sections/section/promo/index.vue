<template>
  <client-only>
    <div class="pt-25 xl:px-10 px-2.5 md:pb-25">
      <div
        id="about"
        class="font-benzin grid sm:grid-cols-8 grid-cols-2 text-nowrap 2xl:leading-[7.3125rem] leading-none tracking-tighter 2xl:text-[8.125rem] xl:text-xl md:text-[3.25rem] text-[2.1875rem] uppercase"
      >
        <div class="whitespace-nowrap sm:col-start-3 col-end-9" char>харизмы</div>
        <div class="whitespace-nowrap sm:col-start-4 col-end-9 sm:ml-0 ml-8 text-orange" char>
          в том <br />
          что делаем
        </div>
      </div>
      <div class="font-benzin grid sm:grid-cols-8 grid-cols-2">
        <div class="font-medium sm:col-start-4 col-end-9 xl:pt-24 pt-20 sm:ml-0">
          <div class="promo-text min-h-[2.625rem] md:min-h-[5.625rem] xl:min-h-[10.3125rem]">
            <span class="2xl:text-xl md:text-[1.5rem] md:leading-tight leading-none">
              Мы верим, что истинная сила кроется в том, как мы делаем свою работу — с любовью, страстью и харизмой.
              <br />
            </span>
          </div>
          <div class="promo-text min-h-[5.25rem] xl:min-h-[20.625rem] md:min-h-[11.25rem]">
            <span class="2xl:text-xl md:text-[1.5rem] md:leading-tight leading-none">
              <br />
              Мы делаем все возможное, чтобы наша работа оставляла яркие следы в сердцах клиентов. Каждый проект — это
              возможность дать нечто большее, чем они ожидают.
            </span>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>
<script setup>
  import SplitType from "split-type";
  import { useWindowSize } from "@vueuse/core";

  const { $gsap: gsap } = useNuxtApp();
  const { width } = useWindowSize();

  const getWords = (element) => {};

  onMounted(() => {
    onNuxtReady(() => {
      new SplitType("[char]", {
        types: "chars, words",
        tagName: "span",
      });
      new SplitType(".promo-text", {
        types: "words",
        tagName: "span",
      });
      if (width.value > 767) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#about",
            scrub: width.value > 767 ? true : false,
          },
        });

        tl.from("[char] .char", {
          y: 50,
          opacity: 0,
          duration: width.value > 767 ? 2 : 1,
          ease: "sine.out",
          stagger: 0.05,
        });
        tl.from(".promo-text .word", {
          y: 50,
          opacity: 0,
          duration: width.value > 767 ? 2 : 1,
          ease: "sine.out",
          stagger: 0.05,
        });
      }
    });
  });
</script>
