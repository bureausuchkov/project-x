<template>
  <transition name="fade">
    <div v-show="showLoader" class="fixed z-50 inset-0">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" class="w-full h-full">
        <path class="bluee" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>
    </div>
  </transition>
</template>

<script setup>
  const showLoader = ref(true);

  const { $gsap: gsap } = useNuxtApp();

  onMounted(() => {
    onNuxtReady(() => {
      let loader = gsap.timeline({ yoyo: true });

      loader
        .to(".bluee", {
          duration: 0.8,
          attr: { d: "M0 502S175 272 500 272s500 230 500 230V0H0Z" },
          ease: "power2.in",
        })
        .to(".bluee", {
          duration: 0.8,
          attr: { d: "M0 2S175 1 500 1s500 1 500 1V0H0Z" },
          ease: "power2.out",
        });
      setTimeout(() => {
        showLoader.value = false;
      }, 800);
    });
  });
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.8s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
