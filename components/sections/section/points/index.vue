<template>
  <client-only>
    <div class="points-block relative overflow-hidden" id="value">
      <div
        class="font-benzin words md:pb-20 pb-6 md:px-0 px-2.5 md:flex md:flex-nowrap items-center md:absolute md:h-svh top-0 md:pt-0 pt-20 md:text-[21.3125rem] text-[2.125rem] text-orange uppercase will-change-transform"
        ref="scrollPointsWords"
      >
        <span class="word-1 md:block md:shrink-0 md:mr-0 will-change-transform md:pl-10">ха</span>
        <span class="word-1 md:block xl:px-25 md:shrink-0 md:text-center md:mr-0 will-change-transform">риз</span>
        <span class="word-1 md:block will-change-transform md:pr-10 pr-2.5">мы</span>
      </div>
      <div class="font-benzin points flex items-center" ref="scrollPoints">
        <div class="md:flex md:flex-nowrap relative z-20 2xl:py-25 xl:py-20 md:py-10 md:px-0 px-2.5">
          <div class="point-1 shrink-0 md:max-w-none will-change-transform md:pl-10 md:mb-0 mb-5">
            <div class="z-10 max-w-[28.125rem] min-w-[14rem]">
              <div class="md:pb-5 pb-2.5 md:text-sm text-[0.625rem]">{ 1 }</div>
              <div class="pb-2.5 md:text-lg text-sm uppercase font-medium">МЫ</div>
              <div class="md:font-petrov md:text-[1.25rem] font-medium md:font-normal">
                Всегда делаем больше, чем ожидают от нас клиенты, получая истинное удовлетворение от этого. Изменение
                среды меняет жизни и это наполняет смыслом нашу работу.
              </div>
            </div>
          </div>
          <div class="point-1 shrink-0 md:max-w-none will-change-transform">
            <div class="z-10 md:pt-20 xl:mr-25 xl:pl-[9.375rem] md:pl-[5rem]">
              <div class="2xl:pb-[10.25rem] md:pb-[5.625rem] md:mb-0 mb-[3.75rem]">
                <img
                  class="block min-w-[13.4375rem] md:w-[27.8125rem] w-full"
                  width="445"
                  height="269"
                  src="/images/points/point-1.png"
                  alt="Здание"
                  loading="lazy"
                />
              </div>
              <div class="max-w-[28.125rem] min-w-[14rem] xl:ml-[7.5625rem] md:ml-[2.5rem] mb-5 md:mb-0">
                <p class="md:pb-5 pb-2.5 md:text-sm text-[0.625rem]">{ 2 }</p>
                <p class="pb-2.5 md:text-lg text-sm uppercase font-medium">МЫ</p>
                <p class="md:font-petrov md:text-[1.25rem] font-medium md:font-normal">
                  Ориентир для коллег в нашей страсти и увелеченности своим делом. Делаем все для максимального
                  результата, ищем новые способы добиться его быстрее.
                </p>
              </div>
              <div class="mb-10 md:hidden">
                <img
                  class="block"
                  width="154"
                  height="173"
                  src="/images/points/point-m.jpg"
                  alt="Здание"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div class="point-1 shrink-0 md:max-w-none will-change-transform">
            <div class="z-10">
              <div class="max-w-[28.125rem] min-w-[14rem]">
                <p class="md:pb-5 pb-2.5 md:text-sm text-[0.625rem]">{ 3 }</p>
                <p class="pb-2.5 md:text-lg text-sm uppercase font-medium">МЫ</p>
                <p class="md:font-petrov md:text-[1.25rem] font-medium md:font-normal">
                  Меняем себя через обучение и новый опыт. Развиваем друг друга, вместе реализуем свой потенциал и
                  вместе обогащаем город нашими проектами.
                </p>
              </div>
              <div class="md:pt-[8.4375rem] xl:ml-26 md:ml-25 mb-10 mt-4">
                <img
                  class="block min-w-[13.4375rem] xl:w-[27.8125rem] md:w-[23.4375rem] w-full h-auto"
                  width="445"
                  height="410"
                  src="/images/points/point-2.png"
                  alt="Здание"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="font-benzin 2xl:pt-25 2xl:pb-26 sm:pb-25 pb-20 px-2.5">
        <div
          class="font-medium points-text max-w-[75rem] 2xl:text-[2.75rem] md:text-[1.5rem] md:leading-[125%] ml-auto min-h-[7.0625rem] md:min-h-[7.5rem] xl:min-h-[24.0625rem]"
        >
          Наша команда — это союз харизматичных людей, привносящих в работу свою индивидуальность, творчество и фанатизм
          к делу. Мы не просто выполняем задачи, мы создаем наследие для потомков. Достойная цель, чтобы жить!
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>
  import { useWindowSize } from "@vueuse/core";
  import SplitType from "split-type";

  const { width } = useWindowSize();
  const { $gsap: gsap } = useNuxtApp();
  const scrollPoints = ref(null);
  const scrollPointsWords = ref(null);

  const windowSize = computed(() => {
    return width.value > 768 ? 2 : 1;
  });

  // onNuxtReady ||
  onMounted(() => {
    onNuxtReady(() => {
      let totalWordsWidth = 0;
      let totalPointsWidth = 0;
      const words = scrollPointsWords.value.querySelectorAll(".word-1");
      const points = scrollPoints.value.querySelectorAll(".point-1");

      points.forEach((element, index) => {
        if (index < points.length - windowSize.value && element.offsetWidth) {
          totalPointsWidth += element.offsetWidth;
        }
      });

      words.forEach((element, index) => {
        if (index < words.length - windowSize.value && element.offsetWidth) {
          totalWordsWidth += element.offsetWidth;
        }
      });

      if (width.value > 767) {
        gsap.to(points, {
          x: -totalPointsWidth,
          ease: "none",
          scrollTrigger: {
            trigger: scrollPoints.value,
            pin: true,
            scrub: 3,
            span: 1 / (points.length - 1),
            end: "+=" + scrollPoints.value.offsetWidth,
          },
        });
        gsap.to(scrollPointsWords.value, {
          x: -totalWordsWidth * 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: scrollPointsWords.value,
            pin: true,
            scrub: 3,
            span: 1 / (words.length - 1),
            end: "+=" + scrollPoints.value.offsetWidth,
          },
        });
        new SplitType(".points-text", {
          types: "words",
          tagName: "span",
        });
  
        gsap.from(".points-text .word", {
          y: 100,
          opacity: 0,
          duration: 2,
          ease: "sine.out",
          stagger: 0.075,
  
          scrollTrigger: {
            trigger: ".points-text",
            scrub: true,
          },
        });
      }
    });
  });
</script>
