<template>
  <div class="xl:pt-26 md:pt-[11.25rem] pt-25 xl:px-10 px-2.5">
    <di
      id="about"
      class="grid sm:grid-cols-8 grid-cols-2 text-nowrap 2xl:leading-[7.3125rem] leading-[100%] tracking-tighter 2xl:text-[8.125rem] xl:text-xl md:text-[3.25rem] text-[2.1875rem] uppercase"
    >
      <div class="sm:col-start-3 col-end-9" char>харизмы</div>
      <div class="sm:col-start-4 col-end-9 sm:ml-0 ml-8 text-orange" char>
        в том <br />
        что делаем
      </div>
    </di>
    <div class="grid sm:grid-cols-8 grid-cols-2">
      <div
        class="font-petrov md:text-[1.25rem] sm:col-start-3 col-end-9 xl:pt-24 pt-20 md:leading-[125%] leading-none sm:ml-0 max-w-[26.875rem]"
      >
        <div word>
          Мы верим, что истинная сила кроется в том, как мы делаем свою работу — с любовью, страстью и харизмой.
        </div>
        <div class="mt-5" word>
          Мы делаем все возможное, чтобы наша работа оставляла яркие следы в сердцах клиентов. Каждый проект — это
          возможность дать нечто большее, чем они ожидают.
        </div>
      </div>
      <div
        class="font-medium sm:col-start-4 col-end-9 xl:pt-24 pt-20 2xl:text-[2.75rem] md:text-[1.5rem] text-sm md:leading-[125%] leading-none sm:ml-0"
      >
        <div word>Наша команда — это союз</div>
        <div word>харизматичных людей, привносящих</div>
        <div word>в работу свою индивидуальность,</div>
        <div word>творчество и фанатизм к делу. Мы не</div>
        <div word>просто выполняем задачи, мы</div>
        <div word>создаем наследие для потомков.</div>
        <div word>Достойная цель, чтобы жить!</div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import SplitType from "split-type";

  const { $gsap: gsap } = useNuxtApp();

  onMounted(() => {
    new SplitType("[char]", {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from("[char] .char", {
      y: 200,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.05,

      scrollTrigger: {
        trigger: "[char]",
        start: "top bottom",
        end: "bottom top+=200px",
        scrub: true,
      },
    });

    new SplitType("[word]", {
      types: "lines, words, chars",
      tagName: "span",
    });

    gsap.from("[word] .word", {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.075,

      scrollTrigger: {
        trigger: "[word]",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
</script>
