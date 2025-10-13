<template>
  <UPageAside class="h-full flex justify-center">
    <UUser
      class="mt-2 align-center text-center"
      orientation="vertical"
      :name="profile.name"
      :description="profile.description"
    >
      <template #avatar>
        <div class="flex justify-center">
          <UAvatar
            class="profile-avatar"
            :src="profile.avatar.src"
            :icon="profile.avatar.icon"
          />
        </div>
      </template>
    </UUser>
  </UPageAside class="h-full flex justify-center">
>
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

<style scoped>
.profile-avatar {
  width: 110px;
  height: 110px;
  border-radius: 9999px;
  object-fit: cover;
}
</style>
