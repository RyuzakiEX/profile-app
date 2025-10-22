<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
  <UFooter class="mt-10 fixed bottom-0 w-full">
    <UMarquee
      class="mb-4"
      pause-on-hover="true"
      :ui="{ root: '[--gap:--spacing(1)]' }"
    >
      <UIcon name="i-simple-icons-python" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-nuxtdotjs" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-vuedotjs" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-databricks" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-tensorflow" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-cplusplus" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-javascript" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-typescript" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-roboflow" class="size-10 shrink-0" />
      <UIcon name="i-simple-icons-ultralytics" class="size-10 shrink-0" />
    </UMarquee>
  </UFooter>
</template>
