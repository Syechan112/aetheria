<script setup lang="ts">
interface MissionPillar {
  number: string;
  title: string;
  description: string;
}

const missionPillars: MissionPillar[] = [
  {
    number: "01",
    title: "100% Non-Hazardous Formulations",
    description:
      "Strictly applying certified biodegradable, eco-labeled cleaning compounds safe for personnel, indoor occupants, and municipal water systems.",
  },
  {
    number: "02",
    title: "Continuous Technical & HSE Certification",
    description:
      "Equipping all operational field personnel with rigorous occupational health and safety (OHS) credentials, material handling mastery, and professional ethics.",
  },
  {
    number: "03",
    title: "Data-Driven Quality Audits",
    description:
      "Delivering periodic transparency reporting and digital cleanliness audits to ensure every service level agreement (SLA) metric is flawlessly achieved.",
  },
  {
    number: "04",
    title: "Resource & Water Conservation",
    description:
      "Leveraging high-pressure precision steam extraction and closed-loop filtration mechanisms that conserve up to 60% of water usage versus legacy methods.",
  },
];
</script>

<template>
  <section
    id="vision-mission"
    class="relative z-20 bg-zinc-50/70 py-24 sm:py-32 lg:py-36 dark:bg-[#090a0b]"
    aria-labelledby="vision-mission-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="flex items-center gap-3">
        <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
        <span
          class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
          02 / Direction & Purpose
        </span>
      </div>

      <div class="mt-8 grid gap-16 lg:grid-cols-12 lg:gap-16">
                <div class="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span
              class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
              Our Vision
            </span>

            <h2
              id="vision-mission-heading"
              class="mt-4 text-3xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-4xl lg:text-5xl dark:text-white">
              To be the benchmark in
              <span class="text-zinc-400 dark:text-zinc-500">
                sustainable facility stewardship.
              </span>
            </h2>

            <p class="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              Serving as the premier strategic facility care partner, uniting operational excellence with uncompromising ecological responsibility for high-demand environments.
            </p>
          </div>

          <div class="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950/60">
            <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Long-term Commitment
            </span>
            <p class="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              Targeting zero-chemical hazard footprint across 100% of managed commercial facilities and specialized fit-outs by 2030.
            </p>
          </div>
        </div>

                <div class="lg:col-span-7">
          <span
            class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            Our Mission & Concrete Commitments
          </span>

          <div class="mt-6 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            <div
              v-for="pillar in missionPillars"
              :key="pillar.number"
              class="group grid gap-4 py-7 transition-all duration-300 sm:grid-cols-[70px_1fr] sm:items-start lg:py-8">
              <span
                class="text-xs font-semibold tracking-wider text-zinc-400 transition-colors duration-200 group-hover:text-zinc-950 dark:text-zinc-500 dark:group-hover:text-white">
                {{ pillar.number }}
              </span>

              <div>
                <h3
                  class="text-lg font-semibold tracking-tight text-zinc-950 transition-transform duration-200 ease-out group-hover:translate-x-0.5 dark:text-white sm:text-xl">
                  {{ pillar.title }}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {{ pillar.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
