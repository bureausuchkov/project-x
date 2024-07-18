<template>
  <div class="flex items-center w-full md:h-svh">
    <video class="w-full h-full" muted loop ref="video" poster="/images/video-holder.png" playsinline src="/images/hero/screen.mp4">
      <source src="/images/hero/screen.webm" type="video/webm" />
      <source src="/images/hero/screen.mp4" type="video/mp4" />
      <track src="/images/hero/screen.mp4" kind="captions" srclang="ru" label="Описание" />
    </video>
  </div>
</template>

<script setup>
  const video = ref(null);
  onMounted(() => {
    nextTick(() => {
      const startVideo = async () => {
        try {
          await video.value.play();
          video.value.setAttribute("autoplay", true);
        } catch (err) {
          console.error(err);
        }
      };

      setTimeout(startVideo, 1000);
    });
  });
</script>
