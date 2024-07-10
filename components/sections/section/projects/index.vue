<template>
  <div class="overflow-hidden">
    <div
      class="md:grid grid-cols-8 md:pb-20 pb-10 2xl:text-2xl xl:text-xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] leading-[100%] ml-5 md:ml-0 uppercase"
      id="projects"
    >
      <p
        class="projects-title md:col-start-3 md:col-end-7 uppercase 2xl:text-2xl xl:text-xl text-[2.1875rem] tracking-[-0.07em] 2xl:leading-[7.3125rem] leading-[100%] md:pb-20 pb-10"
      >
        <span class="block">харизмы</span>
        <span class="block ml-7 md:ml-[14.5rem] text-orange text-nowrap">в проектах</span>
      </p>
    </div>

    <div class="md:px-10 px-2.5">
      <div class="projects flex items-center" ref="scrollProjects">
        <div class="flex flex-nowrap relative z-20 md:py-25 py-20">
          <div class="project-1 flex-shrink-0 flex w-screen md:w-auto md:min-w-[50%] justify-start">
            <div class="pr-[5%] md:pr-[14%] pb-[5%]">
              <div class="text-[0.625rem] md:text-[1.125rem]">{ 1 }</div>
              <div class="py-2.5 md:py-5">
                <img src="/images/projects/project-1.jpg" width="676" height="380" alt="Проект" />
              </div>
              <div>
                <div class="flex items-start justify-between pb-2.5">
                  <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none"> Novator </span>
                  <a href="https://мойноватор.рф/" target="_blank" aria-label="Модальное окно">
                    <img src="/images/icons/more.svg" width="51" height="51" alt="Подробнее" />
                  </a>
                </div>
                <div class="max-w-[17.125rem] font-manrope md:text-[1.125rem] text-[0.75rem]">
                  Жилой квартал с WOW опциями: собственный бульвар, концептуальные дворы, уникальные планировки, потолки
                  от&nbsp;2,88&nbsp;м.
                </div>
              </div>
            </div>
          </div>
          <div class="project-1 flex-shrink-0 flex w-screen md:w-auto md:min-w-[50%] justify-start">
            <div class="pr-[5%] md:pr-[14%] pb-[5%]">
              <div class="text-[0.625rem] md:text-[1.125rem]">{ 2 }</div>
              <div class="py-2.5 md:py-5">
                <img src="/images/projects/project-2.jpg" width="676" height="450" alt="Проект" />
              </div>
              <div>
                <div class="flex items-start justify-between pb-2.5">
                  <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none"> Акватория </span>
                  <a href="https://аквартиры.рф/" target="_blank" aria-label="Модальное окно">
                    <img src="/images/icons/more.svg" width="51" height="51" alt="Подробнее" />
                  </a>
                </div>
                <div class="max-w-[17.125rem] font-manrope md:text-[1.125rem] text-[0.75rem]">
                  Микрорайон, КРТ, 45 га. 8 очередей, в том числе введено в эксплуатацию 3 очереди
                </div>
              </div>
            </div>
          </div>
          <div class="project-1 flex-shrink-0 flex w-screen md:w-auto md:min-w-[50%] justify-start">
            <div class="pr-[5%] md:pr-[14%] pb-[5%]">
              <div class="text-[0.625rem] md:text-[1.125rem]">{ 3 }</div>
              <div class="py-2.5 md:py-5">
                <img src="/images/projects/project-3.jpg" width="558" height="402" alt="Проект" />
              </div>
              <div>
                <div class="flex items-start justify-between pb-2.5">
                  <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none"> Новые проекты </span>
                  <button @click="() => open()" aria-label="Модальное окно">
                    <img src="/images/icons/more.svg" width="51" height="51" alt="Подробнее" />
                  </button>
                </div>
                <div class="max-w-[17.125rem] font-manrope md:text-[1.125rem] text-[0.75rem]">
                  Впереди много новых уникальных проектов. Совсем скоро расскажем!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import SplitType from "split-type";
  import { ModalsContainer, useModal } from "vue-final-modal";
  import ModalForm from "~/components/forms/modals/header/index.vue";

  const { open, close } = useModal({
    component: ModalForm,
    attrs: {
      title: "Этот проект находится на стадии планирования, чтобы узнать подробнее, напишите нам.",
      teleportTo: "body",
      onClose() {
        close();
      },
      onConfirm() {
        close();
      },
    },
  });

  const app = useNuxtApp();
  const scrollProjects = ref(null);

  onMounted(() => {
    new SplitType(".projects-title", {
      types: "lines, words, chars",
      tagName: "span",
    });
    app.$gsap.from(".projects-title .word", {
      y: 20,
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.1,

      scrollTrigger: {
        trigger: ".projects-title",
        scrub: true,
      },
    });

    const projects = app.$gsap.utils.toArray(".project-1");

    app.$gsap.to(projects, {
      xPercent: -100 * (projects.length - 1),
      ease: "linear",
      scrollTrigger: {
        trigger: scrollProjects.value,
        pin: true,
        scrub: 3,
        span: 1 / (projects.length - 1),
        end: "+=" + scrollProjects.value.offsetWidth,
      },
    });
  });
</script>
