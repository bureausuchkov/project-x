<template>
  <div class="md:px-10 px-2.5 xl:py-26 py-25">
    <div
      class="md:grid grid-cols-8 md:mb-20 mb-10 2xl:text-2xl xl:text-xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] ml-5 md:ml-0"
      id="peoples"
    >
      <p
        class="peoples-title md:col-start-3 md:col-end-7 uppercase 2xl:text-2xl xl:text-xl text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] md:pb-20 pb-10"
      >
        <span class="block">харизмы</span>
        <span class="block ml-7 md:ml-[14.5rem] text-orange text-nowrap">в людях</span>
      </p>
    </div>

    <div class="xl:grid xl:grid-cols-8 gap-5">
      <div
        class="xl:col-start-1 xl:col-end-5 max-w-[15.625rem] md:max-w-[46.5625rem] xl:ml-0 ml-auto sm:ml-0 xl:mb-0 mb-[3.75rem]"
      >
        <div class="flex md:flex-row flex-col gap-5 pr-5">
          <div>
            <!--<span class="block md:hidden mb-3 text-[0.625rem]"> { 1 } </span>-->
            <div class="people-image overflow-hidden">
              <img
                class="object-cover xl:max-w-none min-w-[15.5625rem] 2xl:w-[27.8125rem] xl:w-[21.75rem] w-auto"
                src="/images/peoples/people-1.jpg"
                alt="Ильяс Койносов"
                width="445"
                height="728"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <!--<span class="hidden md:block mb-5"> { 1 } </span>-->
            <p class="font-petrov mb-5 text-[0.875rem] md:text-[1.25rem]">
              «Наше единение, наши идеи и наша преданность своей профессии делают нас уникальной компанией»
            </p>
            <p class="font-medium md:text-lg text-sm mb-2 md:mb-2.5 mt-auto">
              Александр <br />
              Мильченко
            </p>
            <p class="font-petrov text-sm md:text-[1.25rem] mb-2.5">основатель</p>
            <p class="font-petrov text-sm md:text-[1.25rem]">покоритель Килиманджаро</p>
          </div>
        </div>
      </div>
      <div
        class="xl:row-start-2 xl:row-end-3 xl:col-start-5 xl:col-end-9 items-start row-span max-w-[16.0625rem] sm:ml-auto md:ml-0 md:max-w-[43.75rem] xl:max-w-none mb-[3.75rem] lx:mb-0"
      >
        <div class="flex md:flex-row flex-col gap-5 pr-5">
          <div>
            <!--<span class="block md:hidden mb-3 text-[0.625rem]"> { 2 } </span>-->
            <div class="people-image overflow-hidden">
              <img
                class="object-cover xl:max-w-none min-w-[15.5625rem] 2xl:w-[34.875rem] xl:w-[23.75rem] w-auto"
                src="/images/peoples/people-2.jpg"
                alt="Ильяс Койносов"
                width="558"
                height="744"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <!--<span class="hidden md:block mb-5"> { 2 } </span>-->
            <p class="font-petrov mb-5 text-[0.875rem] md:text-[1.25rem]">
              «Мы создаем команды единомышленников, а не коллег. Только так мы способны реализовывать цели, которые
              кажутся недостижимыми для других»
            </p>
            <p class="font-medium md:text-lg text-sm mb-2 md:mb-2.5 mt-auto">
              Александр <br />
              Перминов
            </p>
            <p class="font-petrov text-sm md:text-[1.25rem] mb-2.5">основатель</p>
            <p class="font-petrov text-sm md:text-[1.25rem]">спортсмен-триатлонист</p>
          </div>
        </div>
      </div>
      <div
        class="xl:row-start-3 xl:row-end-3 gap-5 xl:col-start-2 xl:col-end-6 2xl:mt-[10rem] xl:mt-[8.25rem] ml-[3.25rem] xl:ml-0 max-w-[19.5625rem] md:max-w-none"
      >
        <div class="flex md:flex-row flex-col gap-5 pr-5">
          <div>
            <!--<span class="block md:hidden mb-3 text-[0.625rem]"> { 3 } </span>-->
            <div class="people-image overflow-hidden">
              <img
                class="object-cover xl:max-w-none min-w-[15.5625rem] 2xl:w-[34.875rem] xl:w-[23.75rem] w-auto"
                src="/images/peoples/people-3.jpg"
                alt="Олег Кондрашин"
                width="558"
                height="911"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <!--<span class="hidden md:block mb-5">{ 3 }</span>-->
            <p class="font-petrov mb-5 text-[0.875rem] md:text-[1.25rem]">
              «Доброта - это лучший инструмент, чтобы предоставить нашим клиентам выдающийся сервис»
            </p>
            <p class="font-medium md:text-lg text-sm mb-2 md:mb-2.5 mt-auto">
              Максим <br />
              Замятин
            </p>
            <p class="font-petrov text-sm md:text-[1.25rem] mb-2.5">основатель</p>
            <p class="font-petrov text-sm md:text-[1.25rem]">заядлый мотоциклист</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SplitType from "split-type";

  const app = useNuxtApp();

  onMounted(() => {
    new SplitType(".peoples-title", {
      types: "lines, words, chars",
      tagName: "span",
    });
    app.$gsap.from(".peoples-title .word", {
      y: 20,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: ".peoples-title",
        scrub: true,
      },
    });

    let revealContainers = document.querySelectorAll(".people-image");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = app.$gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          start: "-150% bottom",
          end: "bottom 120%",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        yPercent: 100,
        ease: "power2.out",
      });
      tl.from(image, 1.5, {
        duration: 2,
        opacity: 0,
        scale: 1.3,
        delay: -1.5,
        ease: "power2.out",
      });
    });
  });
</script>
