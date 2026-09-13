<script setup lang="ts">
import { RouterLink } from "vue-router";
import heroImage from "@/assets/pages/home/hero.webp";
</script>

<template>
  <section class="relative min-h-screen bg-zinc-950 [clip-path:inset(0)]">
    <div class="fixed inset-0 h-full w-full pointer-events-none z-0">
      <img
        :src="heroImage"
        alt="Clean and sustainable environment"
        class="h-full w-full object-cover object-center" />

      <div class="absolute inset-0 bg-zinc-950/50" />

      <div
        class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

      <div
        class="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-zinc-950/70 via-zinc-950/30 to-transparent" />
    </div>

    <div
      class="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:px-8 sm:pb-14 lg:px-10 lg:pb-16">
      <div class="max-w-4xl">
        <div class="mb-6 flex items-center gap-3">
          <span class="h-px w-8 bg-white/70" />

          <span
            class="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">
            Environmental Services
          </span>
        </div>

        <h1
          class="max-w-4xl text-[3rem] font-semibold leading-[1.06] tracking-[-0.035em] text-white sm:text-6xl lg:text-[5.2rem]">
          Cleaner spaces.
          <span class="block text-white/60"> A better environment. </span>
        </h1>

        <p
          class="mt-7 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
          Professional cleaning and environmental solutions designed to create
          healthier spaces and a cleaner, more sustainable future.
        </p>

        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <RouterLink
            to="/contact"
            class="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] active:scale-[0.98]">
            <span>Get in touch</span>

            <svg
              class="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
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

          <RouterLink
            to="/services"
            class="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/15 active:scale-[0.98]">
            Our services
          </RouterLink>
        </div>
      </div>

      <div class="mt-14 border-t border-white/15 pt-6">
        <div
          class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div class="max-w-md">
            <p class="text-sm font-medium text-white/95">
              Responsible care for the places people live and work.
            </p>

            <p class="mt-1 text-xs text-white/60">
              Professional. Responsible. Consistent.
            </p>
          </div>

          <div class="flex items-center gap-8 sm:gap-12">
            <div>
              <p class="text-2xl font-semibold tracking-tight text-white">
                10+
              </p>

              <p
                class="mt-1 text-[10px] uppercase tracking-wider text-white/60 font-medium">
                Years experience
              </p>
            </div>

            <div>
              <p class="text-2xl font-semibold tracking-tight text-white">
                200+
              </p>

              <p
                class="mt-1 text-[10px] uppercase tracking-wider text-white/60 font-medium">
                Clients served
              </p>
            </div>

            <div>
              <p class="text-2xl font-semibold tracking-tight text-white">
                24/7
              </p>

              <p
                class="mt-1 text-[10px] uppercase tracking-wider text-white/60 font-medium">
                Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
