<template>
  <UAside class="h-full">
    <UUser
      :name="profile.name"
      :description="profile.description"
      :avatar="{
        src: profile.avatar.src,
        icon: profile.avatar.icon,
      }"
    />
  </UAside>
</template>

<script setup lang="ts">
const profile = {
  name: "Jorge Gabriel Adrian M. Adanza",
  description: "Software Developer/Engineer",
  avatar: {
    src: "/profile.jpeg",
    icon: "i-lucide-image",
  },
};
</script>
