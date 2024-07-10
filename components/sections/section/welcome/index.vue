<template>
  <div class="md:px-10 px-2.5 md:pb-[11.25rem] pb-25 overflow-hidden">
    <p class="flex justify-between text-white pt-2.5 md:pt-10 pb-5 text-sm tracking-[-0.03em] uppercase">
      <span class="welcome-char">результат</span>
      <span class="welcome-char">{</span>
      <span class="welcome-char">{ баланс }</span>
      <span class="welcome-char">эстетика</span>
      <span class="welcome-char">}</span>
    </p>
    <div class="md:grid md:grid-cols-8 text-white pt-2.5 md:px-10">
      <p
        class="welcome-words md:col-start-1 md:col-end-7 uppercase 2xl:text-2xl xl:text-xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] md:pb-[4.375rem] pb-10"
      >
        <span class="block">приглашаем</span>
        <span class="block ml-5 md:ml-[4.5rem] lx:ml-[14.5rem] text-nowrap">стать частью </span>
        <span class="block ml-5 md:ml-[4.5rem] lx:ml-[14.5rem] text-orange text-nowrap">нашей</span>
        <span class="block text-orange">команды</span>
      </p>
    </div>

    <div class="md:grid md:grid-cols-8">
      <div class="welcome-form col-start-3 2xl:col-start-4 col-end-7 text-white">
        <forms-welcome />
      </div>
    </div>
  </div>
</template>

<script setup>
  import SplitType from "split-type";

  const { $gsap: gsap } = useNuxtApp();
  onMounted(() => {
    new SplitType(".welcome-char", {
      types: "lines, words, chars",
      tagName: "span",
    });
    new SplitType(".welcome-words", {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from(".welcome-char .char", {
      y: 20,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.05,

      scrollTrigger: {
        trigger: ".welcome-char",
        start: "top bottom",
        end: "bottom top+=400px",
        scrub: true,
      },
    });

    gsap.from(".welcome-words .word", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.4,

      scrollTrigger: {
        trigger: ".welcome-words",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from(".welcome-form", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.4,

      scrollTrigger: {
        trigger: ".welcome-form",
        start: "top bottom",
        end: "bottom +=400px",
        scrub: true,
      },
    });
  });
</script>
