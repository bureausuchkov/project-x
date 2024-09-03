<template>
  <client-only>
    <div class="relative overflow-hidden font-benzin md:px-0 px-2.5 xl:mb-0 mb-10" id="value">
      <div class="md:hidden text-[2.125rem] leading-[90%] tracking-tighter mb-[1.625rem] uppercase">
        <div>харизмы</div>
        <div class="text-orange ml-7">в цифрах</div>
      </div>
      <div class="relative z-20 numbers flex items-center will-change-transform" ref="scrollNumbers">
        <div class="md:flex md:flex-nowrap 2xl:py-25">
          <div class="number-point-1 shrink-0 md:max-w-none md:w-auto md:pl-10">
            <div class="z-10 md:max-w-[27.875rem] md:min-w-[14rem]">
              <div class="md:pb-5 pb-2.5 pd:text-sm text-[0.625rem]">{ 1 }</div>
              <div class="pb-2.5 md:text-lg text-sm uppercase font-medium">133 балла</div>
              <span class="md:block inline md:font-normal font-medium pb-2.5 md:text-[1.25rem] md:font-petrov"
                >средний IQ сотрудников компании,</span
              >
              <span class="md:block inline md:font-normal font-medium md:font-petrov md:text-[1.25rem]">
                сообразительность и креативность - наш конек
              </span>
            </div>
            <div class="md:hidden mt-6 mb-10">
              <img
                class="block"
                width="445"
                height="269"
                src="/images/points/point-3.png"
                alt="Здание"
                loading="lazy"
              />
            </div>
          </div>
          <div class="number-point-1 shrink-0 md:max-w-none md:w-auto xl:pl-[9.375rem] md:pl-[5rem]">
            <div class="z-10 2xl:mt-20 xl:mr-[10rem] md:mr-[5rem]">
              <div class="mb-2">
                <div class="md:pb-5 pb-2.5 pd:text-sm text-[0.625rem]">{ 2 }</div>
                <div class="pb-2.5 md:text-lg text-sm uppercase font-medium">1 000 футбольных полей</div>
                <div class="md:font-petrov md:text-[1.25rem] md:font-normal font-medium">
                  равен по площади наш земельный банк, <br class="md:block hidden" />
                  мы будем строить!
                </div>
              </div>
              <img
                class="hidden md:block 2xl:mb-[10.25rem] md:mb-[4.375rem] mb-10 min-w-[13.4375rem] md:w-[27.8125rem] w-[13.4375rem]"
                width="445"
                height="269"
                src="/images/points/point-3.png"
                alt="Здание"
                loading="lazy"
              />
              <div class="max-w-[28.875rem] min-w-[14rem] xl:ml-[7.5625rem] md:ml-[2.5rem] mb-5 mt-15">
                <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 3 }</p>
                <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">91% сотрудников</p>
                <p class="md:font-petrov md:text-[1.25rem] max-w-[27rem] md:ont-normal font-medium">
                  в хорошем настроении и высокой энергии по матрице эмоционального состояния Д.Карузо
                  <br class="md:block hidden" />
                  мы бодры, веселы...
                </p>
              </div>
              <div class="md:hidden">
                <img width="154" height="173" src="/images/points/number-s-m.jpg" alt="Здание" loading="lazy" />
              </div>
            </div>
          </div>
          <div class="number-point-1 shrink-0 md:max-w-none md:w-auto mt-10 mb-15 md:mt-0 md:mb-0">
            <div class="z-10">
              <div class="max-w-[26.875rem] min-w-[14rem]">
                <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 4 }</p>
                <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">516 лет</p>
                <p class="md:font-petrov md:text-[1.25rem] md:font-normal font-medium">
                  разницы между открытием Америки и нашим, <br />
                  но у нас тоже амбициозные планы
                </p>
              </div>
              <img
                class="hidden md:block md:mt-[8.4375rem] mt-[5rem] xl:ml-[12.0625rem] md:ml-[5.625rem] ml-[1.875rem] min-w-[13.4375rem] md:w-[27.8125rem] w-[13.4375rem]"
                width="445"
                height="269"
                src="/images/points/point-4.png"
                alt="Здание"
                loading="lazy"
              />
            </div>
          </div>
          <div class="number-point-1 shrink-0 md:max-w-none md:w-auto flex">
            <div class="flex flex-col flex-1">
              <div class="max-w-[26.875rem] min-w-[14rem] pr-5 mb-15 md:mb-0 xl:ml-[15.625rem] md:ml-25 md:mt-25">
                <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 5 }</p>
                <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">16 лет</p>
                <p class="md:font-petrov md:text-[1.25rem] md:font-normal font-medium">
                  мы назывались СБК <br class="md:block hidden" />
                  мы меняемся, не изменяя себе!
                </p>
              </div>
              <div class="md:pl-5 pl-0 max-w-[28.875rem] min-w-[14rem] pr-5 mb-5 mt-auto">
                <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 6 }</p>
                <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">37 лет</p>
                <p class="md:font-petrov md:text-[1.25rem] md:font-normal font-medium">
                  средний возраст соратников внутри коллектива, <br class="md:block hidden" />
                  все абсолютно молоды душой
                </p>
              </div>
              <div class="md:hidden">
                <img
                  class="w-full"
                  width="355"
                  height="215"
                  src="/images/points/number-m.jpg"
                  alt="Здание"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden numbers-words md:flex flex-nowrap items-center absolute pt-[14.375rem] md:pt-0 md:h-svh top-0 z-10 lg:text-[21.3125rem] md:text-[13.75rem] text-[8.5rem] text-orange uppercase pointer-events-none"
        ref="scrollNumbersWords"
      >
        <span class="number-word-1 block xl:pr-25 md:pr-20 pr-10 shrink-0 md:pt-20 md:pl-10 pl-2.5">в ци</span>
        <span class="number-word-1 block shrink-0 md:pt-20">фр</span>
        <span class="number-word-1 block xl:pl-25 md:pl-20 pl-10 md:pr-[3.125rem] pr-10 shrink-0 md:pt-20">ах</span>
      </div>
    </div>
  </client-only>
</template>

<script setup>
  import { useWindowSize } from "@vueuse/core";

  const { width } = useWindowSize();

  const { $gsap: gsap } = useNuxtApp();
  const scrollNumbers = ref(null);
  const scrollNumbersWords = ref(null);

  const windowSize = computed(() => {
    return width.value > 768 ? 2 : 1;
  });

  onMounted(() => {
    onNuxtReady(() => {
      if (width.value > 767) {
        let totalWordsWidth = 0;
        let totalPointsWidth = 0;
        const points = scrollNumbers.value.querySelectorAll(".number-point-1");
        const words = scrollNumbersWords.value.querySelectorAll(".number-word-1");
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

        gsap.to(points, {
          x: -totalPointsWidth,
          ease: "none",
          scrollTrigger: {
            trigger: scrollNumbers.value,
            pin: true,
            scrub: 3,
            span: 1 / (points.length - 1),
            end: "+=" + scrollNumbers.value.offsetWidth,
          },
        });

        gsap.to(scrollNumbersWords.value, {
          x: -totalWordsWidth,
          ease: "none",
          scrollTrigger: {
            trigger: scrollNumbersWords.value,
            pin: true,
            scrub: 3,
            span: 1 / (words.length - 1),
            end: "+=" + scrollNumbers.value.offsetWidth,
          },
        });
      }
    });
  });
</script>
