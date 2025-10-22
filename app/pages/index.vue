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
            container: 'py-0!',
          }"
        />
        <UMarquee
          class="my-10"
          pause-on-hover
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
      </template>

      <template #experience="{ item }">
        <div class="space-y-8 mb-20 py-10">
          <UCard
            v-for="(exp, index) in experience"
            :key="index"
            :ui="{
              body: 'space-y-4',
            }"
          >
            <div
              class="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4"
            >
              <div class="flex-1">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ exp.company }}
                </h3>
                <p class="text-lg font-semibold text-primary mt-1">
                  {{ exp.role }}
                </p>
              </div>
              <UBadge size="lg" variant="subtle" class="shrink-0">
                <UIcon name="i-lucide-calendar" class="mr-1" />
                {{ exp.duration }}
              </UBadge>
            </div>

            <USeparator />

            <ul class="space-y-3">
              <li
                v-for="(item, idx) in exp.description"
                :key="idx"
                class="flex gap-3 text-gray-700 dark:text-gray-300"
              >
                <UIcon
                  name="i-lucide-check-circle"
                  class="shrink-0 mt-0.5 text-primary"
                />
                <span>{{ item }}</span>
              </li>
            </ul>

            <div v-if="exp.technologies" class="flex flex-wrap gap-2 pt-2">
              <UBadge
                v-for="tech in exp.technologies"
                :key="tech"
                color="primary"
                variant="soft"
                size="sm"
              >
                {{ tech }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </template>

      <template #projects="{ item }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NuxtLink
            v-for="(project, index) in projects"
            :key="index"
            :to="project.link"
            :external="true"
            target="_blank"
            class="block"
          >
            <UCard
              class="cursor-pointer hover:ring-2 hover:ring-primary transition-all h-full"
            >
              <template #header>
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold">{{ project.name }}</h3>
                  <UIcon
                    name="i-lucide-external-link"
                    class="size-5 text-gray-400"
                  />
                </div>
              </template>
              <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {{ project.description }}
              </p>
              <div class="flex gap-2 flex-wrap">
                <UBadge
                  v-for="tech in project.technologies"
                  :key="tech"
                  variant="soft"
                >
                  {{ tech }}
                </UBadge>
              </div>
            </UCard>
          </NuxtLink>
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
import type { TabsItem } from "@nuxt/ui";

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
    duration: "Jun 2024 - Present",
    description: [
      "Collaborating with various clients to deliver high-quality web applications tailored to their needs.",
      "Developing dynamic, user-friendly front-end interfaces using Vue.js, Nuxt.js, Nuxt UI, Prime Vue and Vuetify.",
      "Implementing Test-Driven Development (TDD) practices with Hapi.js to ensure code quality and reliability.",
      "Managing version control and collaboration via Git and Trello.",
      "Building and integrating RESTful APIs for seamless data exchange between frontend and backend systems.",
      "Developed an end-to-end object detection pipeline in Python using Roboflow and Ultralytics YOLO, and built a FastAPI backend served with Uvicorn for efficient model inference and API integration.",
    ],
    technologies: [
      "Vue.js",
      "Nuxt.js",
      "Nuxt UI",
      "Prime Vue",
      "Vuetify",
      "Hapi.js",
      "Python",
      "FastAPI",
      "YOLO",
      "Git",
      "Trello",
    ],
  },
  {
    company: "Kyocera Document Solutions Development Philippines Inc.",
    role: "Software Engineer",
    duration: "Mar 2023 - May 2024",
    description: [
      "Developed and maintained C/C++ applications, enhancing system reliability and functionality.",
      "Worked on SOAP API integration to facilitate communication with external systems and services, enabling seamless data exchange.",
      "Utilized Perforce for version control and code submissions.",
      "Employed MobaXterm for remote system access, build server and troubleshooting.",
      "Actively participated in project management using JIRA and Confluence to collaborate on tasks and documents.",
      "Debugging and testing of printer functionality using Simulator, Virtual Engines and Actual Target Model.",
    ],
    technologies: [
      "C/C++",
      "SOAP API",
      "Perforce",
      "MobaXterm",
      "JIRA",
      "Confluence",
    ],
  },
];

const projects = ref([
  {
    name: "Developer Profile App",
    description:
      "A Nuxt.js-powered portfolio site to showcase my background, development experience, selected projects, and contact information.",
    technologies: ["Vue.js", "Nuxt.js", "Node.js", "Typescript"],
    link: "/", // or just "/" for current site
  },
]);

const contactForm = reactive({
  name: "",
  email: "",
  message: "",
});
</script>
