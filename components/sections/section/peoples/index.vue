<template>
  <div class="md:px-10 px-2.5 2xl:py-26 py-25 overflow-hidden">
    <div
      class="font-benzin scroll-m-[4.375rem] md:grid grid-cols-8 md:pb-20 pb-10 2xl:text-2xl xl:text-xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] ml-5 md:ml-0"
      id="peoples"
    >
      <p
        class="md:col-start-3 md:col-end-7 uppercase 2xl:text-2xl xl:text-xl text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] md:pb-20 pb-10"
      >
        <span class="peoples-title block whitespace-nowrap">харизмы</span>
        <span class="peoples-title block whitespace-nowrap ml-7 md:ml-[14.5rem] text-orange text-nowrap">в людях</span>
      </p>
    </div>

    <div class="xl:grid xl:grid-cols-8 gap-5">
      <div
        class="xl:col-start-1 xl:col-end-5 xl:ml-0 ml-auto sm:ml-0 xl:pb-0 pb-[3.75rem] max-w-[16.0625rem] md:max-w-none"
      >
        <div class="flex md:flex-row flex-col gap-5">
          <div>
            <div class="people-image overflow-hidden">
              <img
                class="object-cover xl:max-w-none"
                src="/images/peoples/people-1.png"
                alt="Александр Мильченко"
                width="445"
                height="728"
                loading="lazy"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <p class="font-benzin font-medium pb-5 md:text-lg text-sm">
              «Наше единение, наши идеи и наша преданность своей профессии делают нас уникальной компанией»
            </p>
            <div class="font-petrov mt-auto md:text-[1.375rem] text-sm">
              <p class="pb-2.5">Александр Мильченко</p>
              <p>основатель</p>
              <p>покоритель Килиманджаро</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="xl:row-start-2 xl:row-end-3 xl:col-start-4 2xl:col-start-5 xl:col-end-9 items-start row-span max-w-[16.0625rem] sm:ml-auto md:ml-0 md:max-w-[43.75rem] xl:max-w-none pb-[3.75rem] lx:pb-0"
      >
        <div class="flex md:flex-row flex-col gap-5">
          <div>
            <div class="people-image overflow-hidden">
              <img
                class="object-cover xl:max-w-none"
                src="/images/peoples/people-2.png"
                alt="Александр Перминов"
                width="445"
                height="728"
                loading="lazy"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <p class="font-benzin font-medium pb-5 md:text-lg text-sm">
              «Мы создаем команды единомышленников, а не коллег. Только так мы способны реализовывать цели, которые
              кажутся недостижимыми для других»
            </p>
            <div class="font-petrov mt-auto md:text-[1.375rem] text-sm">
              <p class="pb-2.5">Александр Перминов</p>
              <p>основатель</p>
              <p>спортсмен-триатлонист</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="xl:row-start-3 xl:row-end-3 gap-5 xl:col-start-1 xl:col-end-6 2xl:col-end-5 ml-[3.25rem] xl:ml-0 max-w-[19.5625rem] md:max-w-none"
      >
        <div class="flex md:flex-row flex-col gap-5 pr-5">
          <div>
            <div class="people-image overflow-hidden">
              <img
                class="object-cover xl:max-w-none"
                src="/images/peoples/people-3.png"
                alt="Максим Замятин"
                width="445"
                height="728"
                loading="lazy"
              />
            </div>
          </div>

          <div class="flex flex-col">
            <p class="font-benzin font-medium pb-5 md:text-lg text-sm">
              «Доброта - это лучший инструмент, чтобы предоставить нашим клиентам выдающийся сервис»
            </p>
            <div class="font-petrov mt-auto md:text-[1.375rem] text-sm">
              <p class="pb-2.5">Максим Замятин</p>
              <p>основатель</p>
              <p>заядлый мотоциклист</p>
            </div>
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
      types: "chars",
      tagName: "span",
    });

    app.$gsap.from(".peoples-title .char", {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.075,
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
