<template>
  <div class="relative overflow-hidden md:px-10 px-2.5 font-benzin" id="value">
    <div class="relative z-20 numbers flex items-center" ref="scrollNumbers">
      <div class="flex flex-nowrap 2xl:py-25 py-20">
        <div class="number-point-1 shrink-0 max-w-[16.5rem] md:max-w-none md:w-auto w-screen">
          <div class="z-10 max-w-[27.875rem] min-w-[14rem] xl:mr-[9.375rem] md:mr-[5rem] mr-[1.6875rem]">
            <div class="md:pb-5 pb-2.5 pd:text-sm text-[0.625rem]">{ 1 }</div>
            <div class="pb-2.5 md:text-lg text-sm uppercase font-medium">133 балла</div>
            <div class="pb-2.5 md:text-[1.25rem] text-sm font-petrov">средний IQ сотрудников компании,</div>
            <div class="font-petrov md:text-[1.25rem] text-[0.75rem]">сообразительность и креативность - наш конек</div>
          </div>
        </div>
        <div class="number-point-1 shrink-0 max-w-[16.5rem] md:max-w-none md:w-auto w-screen">
          <div class="z-10 2xl:mt-20 mt-10 xl:mr-[10rem] md:mr-[5rem] mr-[2rem]">
            <div class="mb-2">
              <div class="md:pb-5 pb-2.5 pd:text-sm text-[0.625rem]">{ 2 }</div>
              <div class="pb-2.5 md:text-lg text-sm uppercase font-medium">1 000 футбольных полей</div>
              <div class="font-petrov md:text-[1.25rem] text-[0.75rem]">
                равен по площади наш земельный банк, <br class="md:block hidden" />
                мы будем строить!
              </div>
            </div>
            <img
              class="block 2xl:mb-[10.25rem] md:mb-[4.375rem] mb-10 min-w-[13.4375rem] md:w-[27.8125rem] w-[13.4375rem]"
              width="445"
              height="269"
              src="/images/points/point-3.png"
              alt="Здание"
              loading="lazy"
            />
            <div class="max-w-[28.875rem] min-w-[14rem] xl:ml-[7.5625rem] md:ml-[2.5rem] ml-[1.25rem] mb-5">
              <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 3 }</p>
              <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">91% сотрудников</p>
              <p class="font-petrov md:text-[1.25rem] text-[0.75rem] max-w-[27rem]">
                в хорошем настроении и высокой энергии по матрице эмоционального состояния Д.Карузо
                <br class="md:block hidden" />
                мы бодры, веселы...
              </p>
            </div>
          </div>
        </div>
        <div class="number-point-1 shrink-0 max-w-[16.5rem] md:max-w-none md:w-auto w-screen">
          <div class="z-10">
            <div class="max-w-[26.875rem] min-w-[14rem]">
              <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 4 }</p>
              <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">516 лет</p>
              <p class="font-petrov md:text-[1.25rem] text-[0.75rem]">
                разницы между открытием Америки и нашим, <br />
                но у нас тоже амбициозные планы
              </p>
            </div>
            <img
              class="block md:mt-[8.4375rem] mt-[5rem] xl:ml-[12.0625rem] md:ml-[5.625rem] ml-[1.875rem] min-w-[13.4375rem] md:w-[27.8125rem] w-[13.4375rem]"
              width="445"
              height="269"
              src="/images/points/point-4.png"
              alt="Здание"
              loading="lazy"
            />
          </div>
        </div>
        <div class="number-point-1 shrink-0 max-w-[16.5rem] md:max-w-none md:w-auto w-screen flex">
          <div class="flex flex-col flex-1">
            <div class="max-w-[26.875rem] min-w-[14rem] pr-5 mb-5 xl:ml-[15.625rem] ml-25 mt-25">
              <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 5 }</p>
              <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">16 лет</p>
              <p class="font-petrov md:text-[1.25rem] text-[0.75rem]">
                мы назывались СБК <br class="md:block hidden" />
                мы меняемся, не изменяя себе!
              </p>
            </div>
            <div class="max-w-[28.875rem] min-w-[14rem] pr-5 mb-5 mt-auto">
              <p class="md:mb-5 mb-2.5 md:text-sm text-[0.625rem]">{ 6 }</p>
              <p class="mb-2.5 md:text-lg text-sm uppercase font-medium">37 лет</p>
              <p class="font-petrov md:text-[1.25rem] text-[0.75rem]">
                средний возраст соратников внутри коллектива, <br class="md:block hidden" />
                все абсолютно молоды душой
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="numbers-words flex flex-nowrap items-center absolute h-svh top-0 z-10 lg:text-[21.3125rem] md:text-[13.75rem] text-[8.5rem] text-orange uppercase pointer-events-none"
      ref="scrollNumbersWords"
    >
      <span class="number-word-1 block xl:pr-25 md:pr-20 pr-10 shrink-0 md:pt-20">в ци</span>
      <span class="number-word-1 block xl:pr-25 md:pr-20 pr-10 shrink-0 md:pt-20">фр</span>
      <span class="number-word-1 block md:pr-[3.125rem] pr-10 shrink-0 md:pt-20">ах</span>
    </div>
  </div>
</template>

<script setup>
  import { useWindowSize } from "@vueuse/core";

  const { width } = useWindowSize();

  const app = useNuxtApp();
  const scrollNumbers = ref(null);
  const scrollNumbersWords = ref(null);

  onMounted(() => {
    const words = app.$gsap.utils.toArray(".number-word-1");
    const numbers = app.$gsap.utils.toArray(".number-point-1");

    app.$gsap.to(numbers, {
      xPercent: width.value > 768 ? -70 * (numbers.length - 1) : -100 * (numbers.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollNumbers.value,
        pin: true,
        scrub: 3,
        span: 1 / (numbers.length - 1),
        end: "+=" + scrollNumbers.value.offsetWidth,
      },
    });

    app.$gsap.to(scrollNumbersWords.value, {
      xPercent: width.value > 768 ? -70 : -90,
      ease: "none",
      scrollTrigger: {
        trigger: scrollNumbersWords.value,
        pin: true,
        scrub: 3,
        span: 1 / (words.length - 1),
        end: "+=" + scrollNumbers.value.offsetWidth,
      },
    });
  });
</script>
