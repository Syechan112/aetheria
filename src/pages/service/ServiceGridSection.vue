<script setup lang="ts">
import { RouterLink } from "vue-router";

export interface ServiceDetail {
  id: string;
  number: string;
  category: string;
  categoryLabel: string;
  badge?: string;
  title: string;
  image: string;
  functionSummary: string;
  priceRange: string;
  specifications: string[];
  bestFor: string;
}

defineProps<{
  services: ServiceDetail[];
  selectedCategory: string;
}>();
</script>

<template>
  <section
    id="service-grid"
    class="relative z-20 bg-white py-20 sm:py-28 dark:bg-[#0c0d0e]"
    aria-labelledby="service-grid-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="flex items-center justify-between">
        <div>
          <h2
            id="service-grid-heading"
            class="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
            Service Specifications & Catalog
          </h2>
          <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Displaying {{ services.length }} institutional-grade solutions
          </p>
        </div>
      </div>

            <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-10">
        <article
          v-for="service in services"
          :id="service.id"
          :key="service.id"
          class="group flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-950/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)] dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:hover:border-white/30 dark:hover:bg-zinc-900 dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.3)]">
          <div>
                        <div class="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <img
                :src="service.image"
                :alt="service.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span
                class="absolute top-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-zinc-900 shadow-xs backdrop-blur-md dark:bg-zinc-950/90 dark:text-white">
                {{ service.categoryLabel }}
              </span>

              <span
                v-if="service.badge"
                class="absolute top-3 right-3 rounded-md bg-zinc-950/80 px-2.5 py-1 text-[10px] font-medium text-white shadow-xs backdrop-blur-md dark:bg-white/90 dark:text-zinc-950">
                {{ service.badge }}
              </span>
            </div>

                        <div class="mt-6 flex items-center gap-3">
              <span
                class="text-xs font-semibold tracking-wider text-zinc-400 dark:text-zinc-500">
                {{ service.number }}
              </span>
              <span class="h-2.5 w-px bg-zinc-300 dark:bg-zinc-700" />
              <span
                class="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                {{ service.categoryLabel }}
              </span>
            </div>

            <h3
              class="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
              {{ service.title }}
            </h3>

                        <div class="mt-4">
              <span
                class="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Operational Scope & Function:
              </span>
              <p class="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {{ service.functionSummary }}
              </p>
            </div>

                        <div class="mt-5 rounded-xl border border-zinc-200/80 bg-white/80 p-3.5 dark:border-zinc-800/80 dark:bg-zinc-950/40">
              <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Ideal Facility Application:
              </span>
              <p class="mt-0.5 text-xs font-medium text-zinc-800 dark:text-zinc-200">
                {{ service.bestFor }}
              </p>
            </div>

                        <div class="mt-6 border-t border-zinc-200/80 pt-5 dark:border-zinc-800/80">
              <span
                class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Key Standards & Methodologies:
              </span>
              <ul class="mt-3 space-y-2">
                <li
                  v-for="(spec, idx) in service.specifications"
                  :key="idx"
                  class="flex items-start gap-2.5 text-xs text-zinc-600 dark:text-zinc-400">
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-white" />
                  <span class="leading-relaxed">{{ spec }}</span>
                </li>
              </ul>
            </div>
          </div>

                    <div class="mt-8 border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span class="block text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                  Investment Estimate
                </span>
                <p class="mt-0.5 text-sm font-semibold text-zinc-950 dark:text-white">
                  {{ service.priceRange }}
                </p>
              </div>

              <RouterLink
                :to="{ path: '/contact', query: { service: service.id } }"
                class="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-5 text-xs font-semibold text-white transition-all duration-200 hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
                <span>Inquire / Request Survey</span>
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
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
