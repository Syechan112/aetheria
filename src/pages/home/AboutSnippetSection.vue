<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <section
    id="about-snippet"
    class="relative z-20 flex min-h-[80dvh] items-center bg-white py-24 sm:py-32 lg:py-36 dark:bg-[#0e1012]"
    aria-labelledby="about-snippet-heading">
    <div
      class="mx-auto flex w-full max-w-7xl flex-col justify-between px-5 sm:px-8 lg:px-10">
            <div class="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div class="flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3">
              <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
              <span
                class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
                About Us
              </span>
            </div>

            <p
              class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              We are committed to creating cleaner, healthier, and more
              responsible spaces through professional environmental services.
            </p>
          </div>

          <RouterLink
            to="/about"
            class="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-950 transition-colors duration-300 hover:text-zinc-500 dark:text-white dark:hover:text-zinc-400">
            <span>Discover our story</span>
            <svg
              class="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </RouterLink>
        </div>

        <div>
          <h2
            id="about-snippet-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Clean spaces are only
            <span class="text-zinc-400 dark:text-zinc-500">
              the beginning.
            </span>
          </h2>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            We believe professional cleanliness should do more than make a space
            look good. It should contribute to healthier surroundings, better
            experiences, and a more responsible relationship with the
            environment.
          </p>
        </div>
      </div>

            <div class="mt-20 border-t border-zinc-200 dark:border-zinc-800">
        <div
          class="grid divide-y divide-zinc-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-zinc-800">
          <div class="py-8 sm:pr-8 lg:py-10">
            <span
              class="text-xs font-semibold tracking-wider text-zinc-400 dark:text-zinc-500">
              01 / Philosophy
            </span>

            <h3
              class="mt-4 text-xl font-medium tracking-tight text-zinc-950 dark:text-white">
              Care in every detail.
            </h3>

            <p
              class="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Quality begins with attention, responsibility, and genuine care
              for every space we serve.
            </p>
          </div>

          <div class="py-8 sm:px-8 lg:py-10">
            <span
              class="text-xs font-semibold tracking-wider text-zinc-400 dark:text-zinc-500">
              02 / Responsibility
            </span>

            <h3
              class="mt-4 text-xl font-medium tracking-tight text-zinc-950 dark:text-white">
              Better for our environment.
            </h3>

            <p
              class="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              We pursue practical solutions that balance effective service with
              environmental responsibility.
            </p>
          </div>

          <div class="py-8 sm:pl-8 lg:py-10">
            <span
              class="text-xs font-semibold tracking-wider text-zinc-400 dark:text-zinc-500">
              03 / Commitment
            </span>

            <h3
              class="mt-4 text-xl font-medium tracking-tight text-zinc-950 dark:text-white">
              Consistency you can trust.
            </h3>

            <p
              class="mt-3 max-w-sm text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Reliable processes and consistent standards keep our service
              dependable over time.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
