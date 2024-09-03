<template>
  <client-only>
    <div class="overflow-hidden md:mt-0 mt-20">
      <div
        class="font-benzin md:grid grid-cols-8 xl:pb-20 md:pb-10 2xl:text-2xl xl:text-xl md:text-[4.5rem] text-[2.1875rem] tracking-[-0.07em] leading-[100%] ml-5 md:ml-0 uppercase"
        id="projects"
      >
        <p
          class="projects-title md:col-start-3 md:col-end-7 font-benzin 2xl:leading-[7.3125rem] leading-none tracking-tighter 2xl:text-[8.125rem] xl:text-xl md:text-[3.25rem] text-[2.1875rem] uppercase xl:pb-20 md:pb-10"
        >
          <span class="block whitespace-nowrap">харизмы</span>
          <span class="block whitespace-nowrap ml-7 md:ml-[14.5rem] text-orange text-nowrap">в проектах</span>
        </p>
      </div>

      <div class="md:px-10 px-2.5">
        <div class="projects flex items-center font-benzin" ref="scrollProjects">
          <div class="md:flex flex-nowrap relative z-20 lg:py-25 py-10">
            <div
              class="project-1 flex-shrink-0 flex w-screen md:w-auto md:min-w-[50%] justify-start will-change-transform"
            >
              <div class="pr-[5%] md:pr-[14%] pb-[5%] text-left">
                <a class="block" href="https://мойноватор.рф/" target="_blank">
                  <div class="text-[0.625rem] md:text-[1.125rem]">{ 1 }</div>
                  <div class="py-2.5 md:py-5">
                    <img src="/images/projects/project-1.jpg" width="676" height="380" alt="Проект" loading="lazy" />
                  </div>
                  <div>
                    <div class="flex md:items-start items-center justify-between pb-2.5">
                      <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none"> Novator </span>
                      <span>
                        <img
                          src="/images/icons/more.svg"
                          class="md:w-[3.1875rem] w-[1.75rem]"
                          width="51"
                          height="51"
                          alt="Подробнее"
                        />
                      </span>
                    </div>
                    <div class="max-w-[17.125rem] font-manrope md:text-[1.125rem] text-[0.75rem]">
                      Жилой квартал с WOW опциями: собственный бульвар, концептуальные дворы, уникальные планировки,
                      потолки от&nbsp;2,88&nbsp;м.
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              class="project-1 flex-shrink-0 flex w-screen md:w-auto md:min-w-[50%] justify-start will-change-transform"
            >
              <div class="pr-[5%] md:pr-[14%] pb-[5%] text-left">
                <a class="block" href="https://аквартиры.рф/" target="_blank">
                  <div class="text-[0.625rem] md:text-[1.125rem]">{ 2 }</div>
                  <div class="py-2.5 md:py-5">
                    <img src="/images/projects/project-2.jpg" width="676" height="450" alt="Проект" loading="lazy" />
                  </div>
                  <div>
                    <div class="flex md:items-start items-center justify-between pb-2.5">
                      <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none"> Акватория </span>
                      <span>
                        <img
                          src="/images/icons/more.svg"
                          class="md:w-[3.1875rem] w-[1.75rem]"
                          width="51"
                          height="51"
                          alt="Подробнее"
                        />
                      </span>
                    </div>
                    <div class="max-w-[310px] font-manrope md:text-[1.125rem] text-[0.75rem]">
                      Макрорайон, КРТ, 45 га. <br />
                      8 очередей, в том числе введено в эксплуатацию 3 очереди
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div
              class="project-1 flex-shrink-0 flex w-screen md:w-auto md:min-w-[50%] justify-start will-change-transform"
            >
              <div class="pr-[5%] md:pr-[14%] text-left">
                <button class="block" aria-label="Модальное окно" @click="() => open()">
                  <div class="text-[0.625rem] md:text-[1.125rem]">{ 3 }</div>
                  <div class="py-2.5 md:py-5">
                    <img src="/images/projects/project-3.jpg" width="558" height="402" alt="Проект" loading="lazy" />
                  </div>
                  <div>
                    <div class="flex md:items-start items-center justify-between pb-2.5">
                      <span class="text-sm md:text-lg mr-5 font-medium uppercase leading-none"> Новые проекты </span>
                      <span>
                        <img
                          src="/images/icons/more.svg"
                          class="md:w-[3.1875rem] w-[1.75rem]"
                          width="51"
                          height="51"
                          alt="Подробнее"
                        />
                      </span>
                    </div>
                    <div class="max-w-[17.125rem] font-manrope md:text-[1.125rem] text-[0.75rem] text-left">
                      Впереди много новых уникальных проектов. Совсем скоро расскажем!
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup>
  import { useWindowSize } from "@vueuse/core";
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

  const { width } = useWindowSize();
  const { $gsap: gsap } = useNuxtApp();
  const scrollProjects = ref(null);

  const windowSize = computed(() => {
    return width.value > 768 ? 2 : 1;
  });

  onMounted(() => {
    onNuxtReady(() => {
      if (width.value > 767) {
        let totalProjectsWidth = 0;
        const projects = scrollProjects.value.querySelectorAll(".project-1");

        projects.forEach((element, index) => {
          if (index < projects.length - windowSize.value && element.offsetWidth) {
            totalProjectsWidth += element.offsetWidth;
          }
        });

        gsap.to(projects, {
          x: -totalProjectsWidth,
          ease: "none",
          scrollTrigger: {
            trigger: scrollProjects.value,
            pin: true,
            scrub: 3,
            span: 1 / (projects.length - 1),
            end: "+=" + scrollProjects.value.offsetWidth,
          },
        });

        new SplitType(".projects-title", {
          types: "chars",
          tagName: "span",
        });
        gsap.from(".projects-title .char", {
          y: 20,
          opacity: 0,
          duration: 2,
          ease: "none",
          stagger: 0.1,

          scrollTrigger: {
            trigger: ".projects-title",
            scrub: true,
          },
        });
      }
    });
  });
</script>
