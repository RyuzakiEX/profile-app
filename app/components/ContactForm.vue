<script setup lang="ts">
import * as z from "zod";
import type { FormSubmitEvent } from "@nuxt/ui";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
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
const isSubmitting = ref(false);

async function onSubmit(event: FormSubmitEvent<ContactSchema>) {
  isSubmitting.value = true;

  try {
    const response = await $fetch("/api/contact", {
      method: "POST",
      body: event.data,
    });

    toast.add({
      title: "Success",
      description: "Message sent successfully!",
      color: "success",
    });

    // Clear the form
    contactForm.name = "";
    contactForm.email = "";
    contactForm.subject = "";
    contactForm.message = "";
  } catch (error: any) {
    toast.add({
      title: "Error",
      description:
        error.data?.statusMessage ||
        "Failed to send message. Please try again.",
      color: "error",
    });
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <UCard
    class="flex justify-center w-full max-w-[95%] sm:max-w-[85%] md:max-w-[600px] mx-auto"
  >
    <div class="text-center mb-6 sm:mb-8">
      <h2 class="text-xl sm:text-2xl font-bold mb-2">Contact Me</h2>
      <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base px-4">
        Have a question or want to work together? Feel free to reach out!
      </p>
    </div>
    <UForm
      :state="contactForm"
      :schema="contactSchema"
      class="flex justify-center flex-col gap-4 w-full"
      @submit="onSubmit"
    >
      <UFormField label="Name" name="name" required class="w-full">
        <UInput
          v-model="contactForm.name"
          placeholder="Your name"
          :disabled="isSubmitting"
          class="w-full"
        />
      </UFormField>
      <UFormField label="Email" name="email" required class="w-full">
        <UInput
          v-model="contactForm.email"
          type="email"
          placeholder="your.email@example.com"
          :disabled="isSubmitting"
          class="w-full"
        />
      </UFormField>
      <UFormField label="Subject" name="subject" required class="w-full">
        <UInput
          v-model="contactForm.subject"
          placeholder="Subject"
          :disabled="isSubmitting"
          class="w-full"
        />
      </UFormField>
      <UFormField label="Message" name="message" required class="w-full">
        <UTextarea
          v-model="contactForm.message"
          placeholder="Your message..."
          :rows="5"
          :disabled="isSubmitting"
          class="w-full"
        />
      </UFormField>
      <UButton
        :label="isSubmitting ? 'Sending...' : 'Send Message'"
        type="submit"
        variant="soft"
        :loading="isSubmitting"
        :disabled="isSubmitting"
        class="self-end"
      />
    </UForm>
  </UCard>
</template>
