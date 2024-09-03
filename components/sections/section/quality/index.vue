<template>
  <client-only>
    <div class="quality-block relative">
      <div
        class="relative z 20 font-benzin flex justify-between text-white md:px-10 px-2.5 pt-2.5 md:pt-10 pb-5 text-sm tracking-[-0.03em] uppercase"
      >
        <span class="quality-char">результат</span>
        <span class="quality-char">{</span>
        <span class="quality-char">{ баланс }</span>
        <span class="quality-char">эстетика</span>
        <span class="quality-char">}</span>
      </div>
      <div class="relative z 20 md:grid md:grid-cols-8 text-white px-2.5 md:px-10">
        <div
          class="font-benzin md:col-start-1 md:col-end-7 uppercase 2xl:text-2xl lg:text-xl text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] md:pb-20 pb-10"
        >
          <span class="quality-char block">увлеченная</span>
          <span class="quality-char block  md:ml-7 xl:ml-[14.5rem] text-nowrap">работа –</span>
          <span class="quality-char block  md:ml-7 xl:ml-[14.5rem] text-orange text-nowrap">это наш</span>
          <span class="quality-char block text-orange">успех</span>
        </div>
        <div
          class="quality-word font-benzin md:col-start-3 col-end-8 xl:min-h-[20.625rem] md:min-h-[13.125rem] min-h-[7.6875rem]"
        >
          <div
            class="font-medium 2xl:text-[2.75rem] md:text-[1.5rem] text-sm max-w-[26.875rem] md:max-w-none leading-tight"
          >
            Мы уверены, что великие компании строятся на страстных людях, увлеченных своим делом. Говорят, что наш
            энтузиазм заряжает всех вокруг, а наши идеи становятся искрами, зажигающими огонь инноваций.
          </div>
        </div>
        <div
          class="quality-word font-benzin md:col-start-4 md:col-end-9 mt-10 md:mt-25 md:max-w-none max-w-[20.1875rem] min-h-[6.0625rem] md:ml-0 ml-auto md:min-h-[8.75rem] xl:min-h-[15.75rem]"
        >
          <div class="font-medium 2xl:text-[2.75rem] md:text-[1.5rem] text-sm pr-10">
            Мы видим в работе не просто обязанность, а возможность воплощать смелые идеи, делая мир лучше, краше и
            интереснее в каждом дне, в каждом проекте.
          </div>
        </div>
      </div>
      <div class="relative z 20 sm:grid grid-cols-8 2xl:py-26 py-25 px-2.5 xl:px-10">
        <div class="col-start-1 xl:col-end-3 col-end-4">
          <div class="quality-image overflow-hidden">
            <img
              class="xs:max-w-[9.625rem] md:max-w-[15.625rem] xl:max-w-none"
              src="/images/quality/quality-1.png"
              alt="Жилой комплекс"
              width="443"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
        <div class="col-start-4 col-end-8 ml-[2rem] md:ml-0 xl:pt-[17.25rem] md:pt-[7.75rem] pt-[1.5rem]">
          <div class="quality-image overflow-hidden">
            <img src="/images/quality/quality-2.png" alt="Жилой комплекс" width="909" height="561" loading="lazy" />
          </div>
        </div>
        <div class="col-start-3 xl:col-end-5 col-end-7 md:pt-[10rem] pt-[3.75rem]">
          <div class="quality-image overflow-hidden">
            <img
              class="xs:max-w-[9.625rem] md:max-w-[15.625rem] xl:max-w-none mx-auto"
              src="/images/quality/quality-3.png"
              alt="Жилой комплекс"
              width="443"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="relative z 20 overflow-hidden">
        <div class="bg-quality relative">
          <div class="absolute bg-white-line w-full h-full bg-white"></div>
          <img
            class="block cols-start-3 col-end-5 object-cover"
            src="/images/quality/quality-bg.svg"
            alt="Декоративная картинка"
            width="1920"
            height="800"
            loading="lazy"
          />
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
  onMounted(() => {
    onNuxtReady(() => {
      if (width.value > 767) {
        new SplitType(".quality-char", {
          types: "chars",
          tagName: "span",
        });
        new SplitType(".quality-word", {
          types: "words",
          tagName: "span",
        });

        gsap.from(".quality-char .char", {
          y: 50,
          opacity: 0,
          duration: 2,
          ease: "sine.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".quality-char",
            scrub: true,
          },
        });
        gsap.from(".quality-word .word", {
          y: 50,
          opacity: 0,
          duration: 2,
          ease: "sine.out",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".quality-word",
            scrub: true,
          },
        });
      }
      gsap.from(".bg-white-line", {
        xPercent: 140,
        duration: 2,
        ease: "sine.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".bg-quality",
          scrub: true,
        },
      });

      let revealContainers = document.querySelectorAll(".quality-image");

      revealContainers.forEach((container) => {
        let image = container.querySelector("img");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            scrub: true,
            start: "top bottom",
            end: "bottom 80%",
          },
        });

        tl.set(container, { autoAlpha: 1 });
        tl.from(container, 1.5, {
          y: -100,
          yPercent: 100,
          ease: "power2.out",
        });
        tl.from(image, 1.5, {
          duration: 2,
          opacity: 0,
          yPercent: -100,
          scale: 1.3,
          delay: -1.5,
          ease: "power2.out",
        });
      });
    });
  });
</script>
