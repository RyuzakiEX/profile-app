<template>
  <NuxtImg
    src="/profile.jpeg"
    alt="Profile Picture"
    width="200"
    height="200"
    class="rounded-full mx-auto my-10 w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px]"
  />

  <div class="text-center mb-4">
    <h2 class="text-xl sm:text-3xl md:text-4xl font-semibold px-4">
      Jorge Gabriel Adrian M. Adanza
    </h2>
    <p class="text-gray-500 text-sm sm:text-md md:text-lg">
      Software Developer/ Engineer
    </p>
  </div>

  <div class="flex gap-4 justify-center items-center">
    <UButton
      v-for="link in socialLinks"
      :key="link.label"
      :icon="link.icon"
      variant="ghost"
      size="xl"
      square
      :href="link.href"
      :target="link.target"
      :external="link.external"
      :aria-label="link.label"
    />
  </div>

  <UPageHero
    :description="profileDescription"
    :links="aboutLinks"
    class="mb-4"
    :ui="{
      container: 'py-0',
      description: 'text-justify',
    }"
  />
  <UMarquee
    class="my-15 sm:my-20 md:my-24"
    pause-on-hover
    :ui="{ root: '[--gap:--spacing(5)]' }"
  >
    <UIcon
      v-for="icon in marqueeIcons"
      :key="icon"
      :name="icon"
      :class="'size-8 sm:size-9 md:size-10 shrink-0 bg-purple-600'"
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
    external: true,
  },
]);

const socialLinks = ref([
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    href: "https://github.com/RyuzakiEX",
    target: "_blank",
    external: true,
  },
  {
    label: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    href: "https://www.linkedin.com/in/jorge-gabriel-adrian-adanza-770656193/",
    target: "_blank",
    external: true,
  },
]);

const marqueeIcons = [
  "i-simple-icons-python",
  "i-simple-icons-nuxtdotjs",
  "i-simple-icons-vuedotjs",
  "i-simple-icons-databricks",
  "i-simple-icons-tensorflow",
  "i-simple-icons-cplusplus",
  "i-simple-icons-javascript",
  "i-simple-icons-typescript",
  "i-simple-icons-roboflow",
  "i-simple-icons-ultralytics",
  "i-simple-icons-nodedotjs",
  "i-simple-icons-resend",
];
</script>
