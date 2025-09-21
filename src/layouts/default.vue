<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <div class="flex flex-1 min-h-0">
      <aside class="w-64 border-r h-full flex-shrink-0">
        <Sidebar />
      </aside>
      <main class="flex-1 p-6 bg-gray-50 dark:bg-gray-900 overflow-auto">
        <div>
          <NuxtPage />
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
