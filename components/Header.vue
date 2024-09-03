<template>
  <header
    ref="header"
    class="font-benzin flex items-center justify-between z-40 fixed left-0 top-0 w-screen text-center lg:px-10 p-2.5 lg:py-5 duration-500 bg-white transition translate"
    :class="{ '-translate-y-full': translateHeader }"
  >
    <nuxt-link class="relative z-10" to="/">
      <img class="md:w-[4.9375rem] w-[3.9375rem]" src="/images/logo.svg" alt="Логотип" width="67" height="32" />
    </nuxt-link>
    <div
      class="flex-1 flex md:flex-row flex-col items-center overflow-auto md:overflow-visible justify-between absolute md:static transition-all h-svh md:h-auto w-full md:w-auto -translate-y-full md:translate-y-0 duration-500 left-0 top-0 md:py-0 py-10"
      :class="{ 'block translate-y-0 bg-white': isOpenMenu }"
    >
      <nav class="mx-auto md:mt-0 mt-10">
        <ul class="md:flex gap-2.5 md:gap-5 uppercase">
          <li class="md:mb-0 mb-10" @click="closeMenu">
            <span class="block text-[0.625rem] mb-2.5 md:hidden"> { 1 } </span>
            <a
              class="header-link relative font-medium transition text-color text-nowrap overflow-hidden py-0.5"
              href="#about"
              @mouseover="$emit('mouseover')"
              @mouseleave="$emit('mouseleave')"
            >
              о нас
            </a>
          </li>
          <li class="md:mb-0 mb-10" @click="closeMenu">
            <span class="block text-[0.625rem] mb-2.5 md:hidden"> { 2 } </span>
            <a
              class="header-link relative font-medium transition text-color overflow-hidden py-0.5"
              href="#value"
              @mouseover="$emit('mouseover')"
              @mouseleave="$emit('mouseleave')"
            >
              ценности
            </a>
          </li>
          <li class="md:mb-0 mb-10" @click="closeMenu">
            <span class="block text-[0.625rem] mb-2.5 md:hidden"> { 3 } </span>
            <a
              class="header-link relative font-medium transition text-color overflow-hidden py-0.5"
              href="#peoples"
              @mouseover="$emit('mouseover')"
              @mouseleave="$emit('mouseleave')"
            >
              основатели
            </a>
          </li>
          <li @click="closeMenu">
            <span class="block text-[0.625rem] mb-2.5 md:hidden"> { 4 } </span>
            <a
              class="header-link relative font-medium transition text-color overflow-hidden py-0.5"
              href="#projects"
              @mouseover="$emit('mouseover')"
              @mouseleave="$emit('mouseleave')"
            >
              проекты
            </a>
          </li>
        </ul>
      </nav>
      <button class="relative uppercase font-medium group ml-5 md:mt-0 mt-5" @click="() => open()">
        связаться
        <span
          class="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition duration-300 origin-right scale-x-100 group-hover:scale-x-0"
        ></span>
        <span
          class="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition delay-300 duration-300 origin-left scale-x-0 group-hover:scale-x-100"
        ></span>
      </button>
    </div>
    <button class="relative w-10 h-10 cursor-pointer ml-5 md:hidden" aria-label="Навигационное меню" @click="openMenu">
      <span
        class="w-full absolute h-0.5 left-1/2 top-4 bg-black -translate-x-1/2 transition-all"
        :class="{ '-rotate-45 !top-1/2 -translate-y-1/2': isOpenMenu }"
      ></span>
      <span
        class="w-full absolute h-0.5 left-1/2 top-6 bg-black -translate-x-1/2 transition-all"
        :class="{ 'rotate-45 !top-1/2 -translate-y-1/2': isOpenMenu }"
      ></span>
    </button>
    <ModalsContainer />
  </header>
</template>

<script setup>
  import { ModalsContainer, useModal } from "vue-final-modal";
  import ModalForm from "~/components/forms/modals/header/index.vue";
  const emit = defineEmits(['click'])

  const { open, close } = useModal({
    component: ModalForm,
    attrs: {
      teleportTo: "body",
      onClose() {
        close();
      },
      onConfirm() {
        close();
      },
    },
  });

  const header = ref(null);
  const translateHeader = ref(false);
  const isOpenMenu = ref(false);

  function openMenu() {
    isOpenMenu.value = !isOpenMenu.value;
  }
  function closeMenu() {
    isOpenMenu.value = false;
    emit('close')
  }

  onMounted(() => {
    let prevScrollpos = window.scrollY;
    let headerBottom = header.offsetTop + header.offsetHeight;

    window.addEventListener("scroll", function (e) {
      let currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
        translateHeader.value = false;
      } else {
        translateHeader.value = true;
      }
      prevScrollpos = currentScrollPos;
    });
  });
</script>

<style scoped>
  .header-link {
    position: relative;
    display: block;
  }
  .header-link::before {
    cursor: pointer;
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    pointer-events: none;
    pointer-events: none;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s ease, fill 0.2s ease-out;
    background: black;
  }

  @media (any-hover: hover) {
    .header-link:hover::before,
    .header-link:focus::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
</style>
