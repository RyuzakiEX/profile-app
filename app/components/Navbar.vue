<template>
  <UHeader
    :ui="{
      container: 'px-0 max-w-full w-full', // remove default padding and width limit
      left: 'flex items-center',
      right: 'flex items-center ml-auto',
    }"
  >
    <template #left>
      <img src="/logo.jpg" alt="Logo" class="h-8 w-8" />
      <span class="ml-2 font-bold">Profile App</span>
    </template>
  </UHeader>
</template>
