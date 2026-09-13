<script setup lang="ts">
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
const isMobileMenuOpen = ref(false);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
    <div class="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
      <div
        class="overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/85 shadow-[0_4px_24px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-950/85 dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
        <div class="flex h-16 items-center justify-between px-5 sm:px-6">
                    <RouterLink
            to="/"
            @click="closeMobileMenu"
            class="group flex items-center gap-3.5">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-xs font-semibold text-white transition-transform duration-300 group-hover:scale-105 dark:bg-white dark:text-zinc-950">
              A
            </div>

            <div class="leading-tight">
              <span
                class="block text-sm font-semibold tracking-tight text-zinc-950 dark:text-white">
                Aetheria
              </span>
              <span
                class="block text-[9px] font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                Facility & Care
              </span>
            </div>
          </RouterLink>

                    <nav class="hidden md:flex">
            <div
              class="flex items-center gap-1 rounded-xl border border-zinc-200/60 bg-zinc-100/50 p-1 dark:border-zinc-800/60 dark:bg-zinc-900/50">
              <RouterLink
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                class="rounded-lg px-4 py-1.5 text-xs font-medium transition-all duration-200"
                :class="
                  route.path === link.path
                    ? 'bg-white text-zinc-950 shadow-xs dark:bg-zinc-800 dark:text-white'
                    : 'text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                ">
                {{ link.name }}
              </RouterLink>
            </div>
          </nav>

                    <div class="hidden md:flex items-center gap-3">
            <RouterLink
              to="/contact"
              class="inline-flex h-9 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-4 text-xs font-semibold text-white transition-all duration-200 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              <span>Contact Us</span>
              <svg
                class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </RouterLink>
          </div>

                    <button
            type="button"
            @click="toggleMobileMenu"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle navigation menu"
            class="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 active:scale-95 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 md:hidden">
            <svg
              v-if="!isMobileMenuOpen"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              v-else
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

                <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2">
          <div
            v-if="isMobileMenuOpen"
            class="border-t border-zinc-200/80 px-4 pb-4 pt-3 dark:border-zinc-800/80 md:hidden">
            <nav class="space-y-1">
              <RouterLink
                v-for="link in navLinks"
                :key="link.path"
                :to="link.path"
                @click="closeMobileMenu"
                class="flex items-center justify-between rounded-xl px-4 py-2.5 text-xs font-medium transition-colors"
                :class="
                  route.path === link.path
                    ? 'bg-zinc-100 text-zinc-950 dark:bg-zinc-900 dark:text-white'
                    : 'text-zinc-600 hover:bg-zinc-50 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white'
                ">
                <span>{{ link.name }}</span>
                <span
                  class="h-1.5 w-1.5 rounded-full bg-zinc-950 dark:bg-white"
                  :class="route.path === link.path ? 'opacity-100' : 'opacity-0'" />
              </RouterLink>
            </nav>

            <RouterLink
              to="/contact"
              @click="closeMobileMenu"
              class="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
              <span>Contact Us</span>
              <svg
                class="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </RouterLink>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>
