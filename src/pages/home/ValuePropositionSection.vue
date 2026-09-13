<script setup lang="ts">
const values = [
  {
    number: "01",
    title: "Institutional Standards",
    description:
      "Every procedure is governed by verified operational protocols, comprehensive digital checklists, and measurable hygiene benchmarks.",
  },
  {
    number: "02",
    title: "Eco-Safe Chemistry",
    description:
      "We exclusively utilize biodegradable, non-toxic formulations that safeguard human respiratory health while preserving surface integrity.",
  },
  {
    number: "03",
    title: "Dependable Consistency",
    description:
      "Committed to rigorous scheduling, swift emergency mobilization, and dedicated supervision to ensure flawless long-term service delivery.",
  },
];
</script>

<template>
  <section
    id="value-proposition"
    class="relative z-20 bg-zinc-50/70 py-24 sm:py-32 lg:py-36 dark:bg-[#090a0b]"
    aria-labelledby="value-prop-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              Why Choose Us
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            More than surface aesthetics, we engineer dependable environmental care and responsible operational hygiene.
          </p>
        </div>

        <div>
          <h2
            id="value-prop-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            A higher benchmark of care
            <span class="text-zinc-400 dark:text-zinc-500">
              for every space we steward.
            </span>
          </h2>
        </div>
      </div>

            <div class="mt-20 border-t border-zinc-200 dark:border-zinc-800">
        <div
          v-for="value in values"
          :key="value.number"
          class="group grid gap-5 border-b border-zinc-200 py-8 transition-all duration-300 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-start sm:gap-8 lg:py-10 dark:border-zinc-800">
          <span
            class="text-xs font-semibold tracking-wider text-zinc-400 transition-colors duration-300 group-hover:text-zinc-950 dark:text-zinc-500 dark:group-hover:text-white">
            {{ value.number }}
          </span>

          <h3
            class="text-xl font-medium tracking-tight text-zinc-950 transition-transform duration-300 ease-out group-hover:translate-x-0.5 dark:text-white">
            {{ value.title }}
          </h3>

          <p
            class="max-w-lg text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {{ value.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
