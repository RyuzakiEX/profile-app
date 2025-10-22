<template>
  <UContainer class="pt-10">
    <UTabs :items="items" class="w-full">
      <template #about-me>
        <ProfileSection />
      </template>
      <template #experience>
        <ExperienceSection />
      </template>
      <template #projects>
        <ProjectsSection />
      </template>
      <template #contact-me>
        <ContactForm />
      </template>
    </UTabs>
  </UContainer>
</template>

<script setup lang="ts">
const items = [
  { label: "About me", icon: "i-lucide-user", slot: "about-me" },
  {
    label: "Experience",
    icon: "i-lucide-briefcase-business",
    slot: "experience",
  },
  { label: "Projects", icon: "i-lucide-cpu", slot: "projects" },
  { label: "Contact Me", icon: "i-lucide-phone", slot: "contact-me" },
];
</script>
