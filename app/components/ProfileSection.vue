<template>
  <NuxtImg
    src="/profile.jpeg"
    alt="Profile Picture"
    width="200"
    height="200"
    class="rounded-full mx-auto mb-4 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
  />

  <div class="text-center mb-4">
    <h2 class="text-lg sm:text-xl md:text-2xl font-semibold px-4">
      Jorge Gabriel Adrian M. Adanza
    </h2>
    <p class="text-gray-500 text-sm sm:text-base">
      Software Developer/ Engineer
    </p>
  </div>

  <UPageHero
    :description="profileDescription"
    :links="aboutLinks"
    class="mb-4"
    :ui="{
      container: 'py-0!',
    }"
  />
  <UMarquee
    class="my-6 sm:my-8 md:my-10"
    pause-on-hover
    :ui="{ root: '[--gap:--spacing(1)]' }"
  >
    <UIcon
      name="i-simple-icons-python"
      class="size-8 sm:size-9 md:size-10 shrink-0 bg-purple-600"
    />
    <UIcon
      name="i-simple-icons-nuxtdotjs"
      class="size-10 shrink-0 bg-purple-600"
    />
    <UIcon
      name="i-simple-icons-vuedotjs"
      class="size-10 shrink-0 bg-purple-600"
    />
    <UIcon
      name="i-simple-icons-databricks"
      class="size-10 shrink-0 bg-purple-600"
    />
    <UIcon
      name="i-simple-icons-tensorflow"
      class="size-10 shrink-0 bg-purple-600"
    />
    <UIcon
      name="i-simple-icons-cplusplus"
      class="size-10 shrink-0 bg-purple-600"
    />
    <UIcon
      name="i-simple-icons-javascript"
      class="size-10 shrink-0 bg-purple-600"
    />
    <UIcon
      name="i-simple-icons-typescript"
      class="size-10 shrink-0 bg-purple-600"
    />
    <UIcon
      name="i-simple-icons-roboflow"
      class="size-10 shrink-0 bg-purple-600"
    />
    <UIcon
      name="i-simple-icons-ultralytics"
      class="size-10 shrink-0 bg-purple-600"
    />
  </UMarquee>
</template>

<script setup lang="ts">
const profileDescription = `I'm a versatile Software Developer with experience in full-stack web development and system-level programming. I build responsive front-end interfaces using Vue.js and Nuxt.js, and implement reliable backends with FastAPI and Hapi.js following TDD practices. I also have a background in C/C++ development, SOAP API integration, and printer system debugging. Passionate about clean, scalable code and always eager to learn, I recently developed an object detection pipeline using YOLO and Roboflow.`;

const aboutLinks = ref([
  {
    label: "Download CV",
    icon: "i-lucide-download",
    variant: "soft" as const,
    to: "/Jorge-Adanza-CV.pdf",
    download: "Jorge-Adanza-CV.pdf",
    target: "_blank",
  },
]);
</script>
