<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import FloatingWhatsAppCta from './pages/home/FloatingWhatsAppCta.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans antialiased overflow-x-hidden">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
    <FloatingWhatsAppCta />
  </div>
</template>


