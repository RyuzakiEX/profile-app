<template>
  <UContainer class="pt-10">
    <UTabs :items="items" class="w-full">
      <template #about-me="{ item }">
        <NuxtImg
          src="/profile.jpeg"
          alt="Profile Picture"
          width="200"
          height="200"
          class="rounded-full mx-auto mb-4"
        />

        <div class="text-center mb-4">
          <h2 class="text-xl font-semibold">Jorge Gabriel Adrian M. Adanza</h2>
          <p class="text-gray-500">Software Developer/ Engineer</p>
        </div>

        <UPageHero
          :description="profileDescription"
          :links="aboutLinks"
          class="mb-4"
          :ui="{
            container: '!py-0',
          }"
        />
      </template>

      <template #experience="{ item }">
        <UTimeline :items="experienceTimeline" class="w-full" />
      </template>

      <template #projects="{ item }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <UCard v-for="(project, index) in projects" :key="index">
            <template #header>
              <h3 class="text-lg font-semibold">{{ project.name }}</h3>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description }}
            </p>
            <div class="flex gap-2">
              <UBadge
                v-for="tech in project.technologies"
                :key="tech"
                variant="soft"
              >
                {{ tech }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </template>

      <template #contact-me="{ item }">
        <UCard>
          <UForm :state="contactForm" class="flex flex-col gap-4">
            <UFormField label="Name" name="name" required>
              <UInput v-model="contactForm.name" placeholder="Your name" />
            </UFormField>
            <UFormField label="Email" name="email" required>
              <UInput
                v-model="contactForm.email"
                type="email"
                placeholder="your.email@example.com"
              />
            </UFormField>
            <UFormField label="Message" name="message" required>
              <UTextarea
                v-model="contactForm.message"
                placeholder="Your message..."
                :rows="5"
              />
            </UFormField>
            <UButton
              label="Send Message"
              type="submit"
              variant="soft"
              class="self-end"
            />
          </UForm>
        </UCard>
      </template>
    </UTabs>
  </UContainer>
</template>

<script setup lang="ts">
import type { container } from "#build/ui";
import type { TabsItem, TimelineItem } from "@nuxt/ui";

const items = ref<TabsItem[]>([
  {
    label: "About me" as const,
    icon: "i-lucide-user",
    slot: "about-me" as const,
  },
  {
    label: "Experience",
    icon: "i-lucide-briefcase-business",
    slot: "experience" as const,
  },
  {
    label: "Projects",
    icon: "i-lucide-cpu",
    slot: "projects" as const,
  },
  {
    label: "Contact Me",
    icon: "i-lucide-phone",
    slot: "contact-me" as const,
  },
]);

const profileDescription = `Hello! I'm Jorge Gabriel Adrian M. Adanza, a passionate Software Developer/Engineer with a knack for crafting efficient and innovative solutions. With a strong foundation in various programming languages and frameworks, I thrive on turning complex problems into elegant code. My journey in the tech world has equipped me with skills in full-stack development, cloud computing, and agile methodologies. I'm always eager to learn new technologies and collaborate on exciting projects that push the boundaries of what's possible. Let's connect and create something amazing together!`;

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

const experience = [
  {
    company: "Miller Solutions Development Inc.",
    role: "Software Developer",
    duration: "June 2024 - Present",
    description: [
      "Developed and maintained web applications using Vue.js and Node.js, improving user experience and performance.",
      "Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement.",
      "Optimized database queries and improved application performance, reducing load times by 30%.",
      "Participated in code reviews and provided constructive feedback to team members, enhancing code quality and maintainability.",
    ],
  },
  {
    company: "Kyocera Document Solutions Development Philippines Inc.",
    role: "Software Engineer",
    duration: "March 2023 - May 2024",
    description: [
      "Developed and maintained web applications using Vue.js and Node.js, improving user experience and performance.",
      "Collaborated with cross-functional teams to design and implement new features, resulting in a 20% increase in user engagement.",
      "Optimized database queries and improved application performance, reducing load times by 30%.",
      "Participated in code reviews and provided constructive feedback to team members, enhancing code quality and maintainability.",
    ],
  },
];

const experienceTimeline = computed<TimelineItem[]>(() =>
  experience.map((exp) => ({
    date: exp.duration,
    title: exp.role,
    description: `${exp.company}\n\n${exp.description.join("\n")}`,
    icon: "i-lucide-briefcase-business",
  }))
);

const projects = ref([
  {
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration",
    technologies: ["Vue.js", "Node.js", "MongoDB"],
  },
  {
    name: "Task Management App",
    description: "Real-time collaborative task management application",
    technologies: ["Nuxt", "Firebase", "Tailwind CSS"],
  },
]);

const contactForm = reactive({
  name: "",
  email: "",
  message: "",
});
</script>
