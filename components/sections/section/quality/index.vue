<template>
  <div
    class="flex justify-between text-white md:px-10 px-2.5 pt-2.5 md:pt-10 pb-5 text-sm tracking-[-0.03em] uppercase"
  >
    <span qualityChar>результат</span>
    <span qualityChar>{</span>
    <span qualityChar>{ баланс }</span>
    <span qualityChar>эстетика</span>
    <span qualityChar>}</span>
  </div>
  <div class="md:grid md:grid-cols-8 text-white px-2.5 md:px-10">
    <div
      class="md:col-start-1 md:col-end-7 uppercase 2xl:text-2xl xl:text-xl text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] md:pb-20 pb-10"
    >
      <span qualityWord class="block">увлеченная</span>
      <span qualityWord class="block ml-7 md:ml-[14.5rem] text-nowrap">работа –</span>
      <span qualityWord class="block ml-7 md:ml-[14.5rem] text-orange text-nowrap">это наш</span>
      <span qualityWord class="block text-orange">успех</span>
    </div>
    <div
      qualityDescr
      class="md:col-start-3 md:col-end-7 lg:col-end-5 font-petrov md:text-[1.25rem] max-w-[26.875rem] md:max-w-none leading-tight"
    >
      Мы уверены, что великие компании строятся на
    </div>
    <div
      qualityDescr
      class="md:col-start-3 md:col-end-7 lg:col-end-5 font-petrov md:text-[1.25rem] max-w-[26.875rem] md:max-w-none leading-tight"
    >
      страстных людях, увлеченных своим делом.
    </div>
    <div
      qualityDescr
      class="md:col-start-3 md:col-end-7 lg:col-end-5 font-petrov md:text-[1.25rem] max-w-[26.875rem] md:max-w-none leading-tight"
    >
      Говорят, что наш энтузиазм заряжает всех
    </div>
    <div
      qualityDescr
      class="md:col-start-3 md:col-end-7 lg:col-end-5 font-petrov md:text-[1.25rem] max-w-[26.875rem] md:max-w-none leading-tight"
    >
      вокруг, а наши идеи становятся искрами,
    </div>
    <div
      qualityDescr
      class="md:col-start-3 md:col-end-7 lg:col-end-5 font-petrov md:text-[1.25rem] max-w-[26.875rem] md:max-w-none leading-tight"
    >
      зажигающими огонь инноваций.
    </div>
    <div
      class="md:col-start-4 md:col-end-9 xl:text-[2.75rem] md:text-28 text-[1rem] mt-[3.75rem] md:mt-[10rem] pr-10 md:max-w-none max-w-[20.1875rem] md:ml-0 ml-auto"
      qualityText
    >
      Мы видим в работе не просто
    </div>
    <div
      class="md:col-start-4 md:col-end-9 xl:text-[2.75rem] md:text-28 text-[1rem] pr-10 md:max-w-none max-w-[20.1875rem] md:ml-0 ml-auto"
      qualityText
    >
      обязанность, а возможность
    </div>
    <div
      class="md:col-start-4 md:col-end-9 xl:text-[2.75rem] md:text-28 text-[1rem] pr-10 md:max-w-none max-w-[20.1875rem] md:ml-0 ml-auto"
      qualityText
    >
      воплощать смелые идеи, делая мир
    </div>
    <div
      class="md:col-start-4 md:col-end-9 xl:text-[2.75rem] md:text-28 text-[1rem] pr-10 md:max-w-none max-w-[20.1875rem] md:ml-0 ml-auto"
      qualityText
    >
      лучше, краше и интереснее в
    </div>
    <div
      class="md:col-start-4 md:col-end-9 xl:text-[2.75rem] md:text-28 text-[1rem] pr-10 md:max-w-none max-w-[20.1875rem] md:ml-0 ml-auto"
      qualityText
    >
      каждом дне, в каждом проекте.
    </div>
  </div>
  <div class="sm:grid grid-cols-8 xl:my-26 my-25 px-2.5 md:px-10">
    <div class="col-start-1 col-end-3">
      <div class="quality-image overflow-hidden">
        <img
          class="xs:max-w-[9.625rem] md:max-w-[15.625rem] xl:max-w-none"
          src="/images/quality/quality-1.png"
          alt="Жилой комплекс"
          width="443"
          height="500"
        />
      </div>
    </div>
    <div class="col-start-4 col-end-8 ml-[2rem] md:ml-0 xl:mt-[17.25rem] md:mt-[7.75rem] mt-[1.5rem]">
      <div class="quality-image overflow-hidden">
        <img src="/images/quality/quality-2.png" alt="Жилой комплекс" width="909" height="561" />
      </div>
    </div>
    <div class="col-start-3 col-end-5 md:mt-[10rem] mt-[3.75rem]">
      <div class="quality-image overflow-hidden">
        <img
          class="xs:max-w-[9.625rem] md:max-w-[15.625rem] xl:max-w-none mx-auto"
          src="/images/quality/quality-3.png"
          alt="Жилой комплекс"
          width="443"
          height="500"
        />
      </div>
    </div>
  </div>
  <div class="overflow-hidden">
    <div class="relative">
      <img
        class="block cols-start-3 col-end-5 object-cover"
        src="/images/quality/quality-bg.svg"
        alt="Декоративная картинка"
        width="1903"
        height="660"
      />
      <div class="quality-white-line absolute inset-0 bg-white"></div>
    </div>
  </div>
</template>

<script setup>
  import SplitType from "split-type";

  const { $gsap: gsap } = useNuxtApp();

  onMounted(() => {
    new SplitType("[qualityChar]", {
      types: "lines, words, chars",
      tagName: "span",
    });
    new SplitType("[qualityDescr]", {
      types: "lines, words, chars",
      tagName: "span",
    });
    new SplitType("[qualityText]", {
      types: "lines, words, chars",
      tagName: "span",
    });
    new SplitType("[qualityWord]", {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from("[qualityChar] .char", {
      y: 20,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.05,

      scrollTrigger: {
        trigger: "[qualityChar]",
        start: "top bottom",
        end: "bottom top+=400px",
        scrub: true,
      },
    });

    gsap.from("[qualityWord] .word", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.4,

      scrollTrigger: {
        trigger: "[qualityWord]",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from("[qualityDescr] .word", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.04,

      scrollTrigger: {
        trigger: "[qualityDescr]",
        start: "top bottom",
        end: "bottom top+=200px",
        scrub: true,
      },
    });

    gsap.from("[qualityText] .word", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.15,

      scrollTrigger: {
        trigger: "[qualityText]",
        start: "top bottom",
        end: "bottom top+=400px",
        scrub: true,
      },
    });

    gsap.from(".quality-white-line", {
      xPercent: 140,
      duration: 2,
      ease: "sine.out",
      stagger: 0.15,

      scrollTrigger: {
        trigger: ".quality-white-line",
        start: "top bottom",
        end: "bottom -25%",
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
</script>
