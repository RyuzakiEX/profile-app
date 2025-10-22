<template>
  <UCard class="flex justify-center">
    <div class="text-center mb-8">
      <h2 class="text-2xl font-bold mb-2">Contact Me</h2>
      <p class="text-gray-600 dark:text-gray-400">
        Have a question or want to work together? Feel free to reach out!
      </p>
    </div>
    <UForm
      :state="contactForm"
      :schema="contactSchema"
      class="flex justify-center flex-col gap-4 w-full"
      @submit="onSubmit"
    >
      <UFormField label="Name" name="name" required class="min-w-[400px]">
        <UInput
          v-model="contactForm.name"
          placeholder="Your name"
          class="min-w-[400px]"
        />
      </UFormField>
      <UFormField label="Email" name="email" required class="min-w-[400px]">
        <UInput
          v-model="contactForm.email"
          type="email"
          placeholder="your.email@example.com"
          class="min-w-[400px]"
        />
      </UFormField>
      <UFormField label="Subject" name="subject" required class="min-w-[400px]">
        <UInput
          v-model="contactForm.subject"
          placeholder="Subject"
          class="min-w-[400px]"
        />
      </UFormField>
      <UFormField label="Message" name="message" required class="min-w-[400px]">
        <UTextarea
          v-model="contactForm.message"
          placeholder="Your message..."
          :rows="5"
          class="min-w-[400px]"
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

<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactSchema = z.output<typeof contactSchema>;
const contactForm = reactive<Partial<ContactSchema>>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<ContactSchema>) {
  toast.add({
    title: "Success",
    description: "Message sent!",
    color: "success",
  });
}
</script>
