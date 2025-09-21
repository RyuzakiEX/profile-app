<template>
  <UApp>
    <UTabs :items="items" class="w-full">
      <template #about-me="{ item }">
        <UPageHeader
          :title="item.label"
          :description="profileDescription"
          class="mb-4"
        />
      </template>

      <template #experience="{ item }">
        <UPageHeader :title="item.label" class="mb-4" />

        <UCard>
          <div v-for="(exp, index) in experience" :key="index" class="mb-6">
            <h3 class="text-lg font-semibold">{{ exp.role }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ exp.company }} | {{ exp.duration }}
            </p>
            <ul class="list-disc list-inside mt-2 text-left">
              <li v-for="(desc, descIndex) in exp.description" :key="descIndex">
                {{ desc }}
              </li>
            </ul>
          </div>
        </UCard>
      </template>
    </UTabs>
  </UApp>
</template>

<script setup lang="ts">
import { ref } from "vue";

export type TabsItem = {
  label: string;
  icon: string;
  slot: "about-me" | "experience" | "projects" | "contact-me";
};

const items = ref<TabsItem[]>([
  {
    label: "About me",
    icon: "i-lucide-user",
    slot: "about-me",
  },
  {
    label: "Experience",
    icon: "i-lucide-briefcase-business",
    slot: "experience",
  },
  {
    label: "Projects",
    icon: "i-lucide-cpu",
    slot: "projects",
  },
  {
    label: "Contact Me",
    icon: "i-lucide-phone",
    slot: "contact-me",
  },
]);

const profileDescription = `Hello!I'm Jorge Gabriel Adrian M. Adanza, a passionate Software Developer/Engineer with a knack for crafting efficient and innovative solutions. With a strong foundation in various programming languages and frameworks, I thrive on turning complex problems into elegant code. My journey in the tech world has equipped me with skills in full-stack development, cloud computing, and agile methodologies. I'm always eager to learn new technologies and collaborate on exciting projects that push the boundaries of what's possible. Let's connect and create something amazing together!`;
const experience = [
  {
    company: "Miller Solutions Develoment Inc.",
    role: "Software Developer",
    duration: "June 2024- Present",
    description: [
      "Developed and maintained web applications using Vue.js and Node.js, improving user experience and performance.",
      "Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement.",
      "Optimized database queries and improved application performance, reducing load times by 30%.",
      "Participated in code reviews and provided constructive feedback to team members, enhancing code quality and maintainability.",
    ],
  },
  {
    company: "Kyocera Document Solutions Development Philippines Inc.",
    role: "Software Developer",
    duration: "March 2023- May 2024",
    description: [
      "Developed and maintained web applications using Vue.js and Node.js, improving user experience and performance.",
      "Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement.",
      "Optimized database queries and improved application performance, reducing load times by 30%.",
      "Participated in code reviews and provided constructive feedback to team members, enhancing code quality and maintainability.",
    ],
  },
];
</script>

<style scoped>
.text-left {
  text-align: left;
}
</style>
