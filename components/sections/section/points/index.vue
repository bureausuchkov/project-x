<template>
  <div class="points-block relative overflow-hidden md:px-10 px-2.5" id="value">
    <div
      class="font-benzin words flex flex-nowrap items-center absolute md:h-svh top-0 md:pt-0 pt-[40%] lg:text-[21.3125rem] md:text-[13.75rem] text-[8.5rem] text-orange uppercase"
      ref="scrollPointsWords"
    >
      <span class="word-1 block xl:pr-25 shrink-0 mr-5">ха</span>
      <span class="word-1 block xl:pr-25 shrink-0 text-center mr-5"> риз </span>
      <span class="word-1 block">мы</span>
    </div>
    <div class="font-benzin points flex items-center" ref="scrollPoints">
      <div class="flex flex-nowrap relative z-20 md:py-25 py-20">
        <div class="point-1 shrink-0 max-w-[16.5rem] md:max-w-none">
          <div class="z-10 max-w-[28.125rem] min-w-[14rem] xl:mr-[9.375rem] md:mr-[5rem] mr-[1.6875rem]">
            <div class="md:pb-5 pb-2.5 md:text-sm text-[0.625rem]">{ 1 }</div>
            <div class="pb-2.5 md:text-lg text-sm uppercase font-medium">МЫ</div>
            <div class="font-petrov md:text-[1.25rem] text-[0.75rem]">
              Всегда делаем больше, ожидают от нас клиенты, получая истинное удовлетворение от этого. Изменение среды
              меняет жизни и это наполняет смыслом нашу работу.
            </div>
          </div>
        </div>
        <div class="point-1 shrink-0 max-w-[16.5rem] md:max-w-none">
          <div class="z-10 pt-20 xl:mr-25 mr-10">
            <div class="xl:pb-[10.25rem] md:pb-[5.625rem] pb-[3.5625rem]">
              <img
                class="block min-w-[13.4375rem] md:w-[27.8125rem] w-[13.4375rem]"
                width="445"
                height="269"
                src="/images/points/point-1.png"
                alt="Здание"
                loading="lazy"
              />
            </div>
            <div class="max-w-[28.125rem] min-w-[14rem] xl:ml-[7.5625rem] md:ml-[2.5rem] ml-[1.25rem] pb-5">
              <p class="md:pb-5 pb-2.5 md:text-sm text-[0.625rem]">{ 2 }</p>
              <p class="pb-2.5 md:text-lg text-sm uppercase font-medium">МЫ</p>
              <p class="font-petrov md:text-[1.25rem] text-[0.75rem]">
                Ориентир в нашей страсти и увлеченности своим делом. Делаем все для максимального результата, ищем новые
                способы добиться его быстрее.
              </p>
            </div>
          </div>
        </div>
        <div class="point-1 shrink-0 max-w-[16.5rem] md:max-w-none">
          <div class="z-10">
            <div class="max-w-[28.125rem] min-w-[14rem]">
              <p class="md:pb-5 pb-2.5 md:text-sm text-[0.625rem]">{ 3 }</p>
              <p class="pb-2.5 md:text-lg text-sm uppercase font-medium">МЫ</p>
              <p class="font-petrov md:text-[1.25rem] text-[0.75rem]">
                Меняем себя через обучение и новый опыт. Развиваем друг друга, вместе реализуем свой потенциал и вместе
                обогащаем город нашими проектами.
              </p>
            </div>
            <div class="md:pt-[8.4375rem] pt-[5rem] xl:ml-26 md:ml-25 ml-[1.875rem]">
              <img
                class="block min-w-[13.4375rem] md:w-[27.8125rem] w-[13.4375rem]"
                width="445"
                height="410"
                src="/images/points/point-2.png"
                alt="Здание"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <!--<div class="point-1 shrink-0 max-w-[16.5rem] md:max-w-none flex items-end">
          <div class="relative z-20 max-w-[33.125rem] min-w-[14rem] xl:ml-25 ml-20 pr-5 mt-auto pb-5">
            <p class="md:pb-5 pb-2.5 md:text-sm text-[0.625rem]">{ 4 }</p>
            <p class="pb-2.5 md:text-lg text-sm uppercase font-medium">Эффективность</p>
            <p class="font-petrov md:text-[1.25rem] text-[0.75rem]">
              Получение максимального результата с приложением максимальных усилий
            </p>
          </div>
        </div>-->
      </div>
    </div>
    <div class="font-benzin md:pt-25 md:pb-26 sm:pb-25 pb-10">
      <div class="md:min-h-[24.25rem] min-h-[7.125rem]">
        <div
          class="font-medium points-text max-w-[75rem] 2xl:text-[2.75rem] md:text-[1.5rem] text-sm md:leading-[125%] ml-auto"
        >
          Наша команда — это союз харизматичных людей, привносящих в работу свою индивидуальность, творчество и фанатизм
          к делу. Мы не просто выполняем задачи, мы создаем наследие для потомков. Достойная цель, чтобы жить!
        </div>
      </div>
    </div>
    <!-- Возможно что это из-за кастомного шрифта, можно попробовать подключить как нужно через модули или просто использовать другой, возможно это поможет -->
  </div>
</template>

<script setup>
  import { useWindowSize } from "@vueuse/core";
  import SplitType from "split-type";

  const { width } = useWindowSize();
  const app = useNuxtApp();
  const scrollPoints = ref(null);
  const scrollPointsWords = ref(null);

  // onNuxtReady ||
  onMounted(() => {
    const words = app.$gsap.utils.toArray(".word-1");
    const points = app.$gsap.utils.toArray(".point-1");
    app.$gsap.to(points, {
      xPercent: width.value > 768 ? -20 * (points.length - 1) : -100 * (points.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollPoints.value,
        pin: true,
        scrub: 3,
        span: 1 / (points.length - 1),
        end: "+=" + scrollPoints.value.offsetWidth,
      },
    });
    app.$gsap.to(scrollPointsWords.value, {
      xPercent: width.value > 768 ? -50 : -70,
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

    app.$gsap.from(".points-text .word", {
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
  });
</script>
