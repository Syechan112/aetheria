<script setup lang="ts">
interface Milestone {
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2016",
    title: "The Inception",
    description:
      "Founded with a singular vision: eliminate toxic industrial cleaning agents and introduce certified bio-neutral, hospital-grade formulations to commercial properties.",
  },
  {
    year: "2019",
    title: "Corporate Facility Expansion",
    description:
      "Scaled operations across major metropolitan financial towers, stewarding over 500,000 sq ft of Grade-A office facilities daily.",
  },
  {
    year: "2022",
    title: "ISO & Green Standards",
    description:
      "Formally awarded ISO 9001 and ISO 14001 accreditations, codifying structured audit methodologies and LEED-aligned environmental compliance.",
  },
  {
    year: "Present",
    title: "Integrated Environmental Stewardship",
    description:
      "Partnering with leading enterprise, industrial, and healthcare networks with quantitative hygiene reporting and comprehensive care.",
  },
];
</script>

<template>
  <section
    id="our-story"
    class="relative z-20 bg-white pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pb-36 dark:bg-[#0c0d0e]"
    aria-labelledby="story-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              01 / Our Story
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            A journey rooted in responsibility, scientific discipline, and genuine care for the spaces people inhabit every day.
          </p>
        </div>

        <div>
          <h1
            id="story-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Built on the belief that
            <span class="text-zinc-400 dark:text-zinc-500">
              cleanliness should never cost the environment.
            </span>
          </h1>

          <div class="mt-8 space-y-6 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            <p>
              Our journey began with a simple but profound conviction: traditional commercial cleaning relies excessively on harsh, corrosive chemicals that compromise worker respiratory safety and degrade Indoor Air Quality (IAQ).
            </p>
            <p>
              We established Aetheria to redefine industry standards by uniting non-toxic bio-chemistries, multi-stage HEPA filtration technologies, and professionally certified technical personnel trained under rigorous workplace safety (HSE) protocols.
            </p>
          </div>
        </div>
      </div>

            <div class="mt-20 border-t border-zinc-200 dark:border-zinc-800">
        <div class="grid divide-y divide-zinc-200 sm:grid-cols-2 lg:grid-cols-4 sm:divide-x sm:divide-y-0 dark:divide-zinc-800">
          <div
            v-for="milestone in milestones"
            :key="milestone.year"
            class="group py-8 sm:p-8 lg:p-10 transition-colors duration-200 hover:bg-zinc-50/70 dark:hover:bg-zinc-900/30">
            <span
              class="text-sm font-semibold tracking-wider text-zinc-400 transition-colors duration-200 group-hover:text-zinc-950 dark:text-zinc-500 dark:group-hover:text-white">
              {{ milestone.year }}
            </span>

            <h3
              class="mt-4 text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">
              {{ milestone.title }}
            </h3>

            <p
              class="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {{ milestone.description }}
            </p>
          </div>
        </div>
      </div>

            <div
        class="mt-16 rounded-3xl border border-zinc-200/80 bg-zinc-50/70 p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-900/30">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p class="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              10+
            </p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Years of Dedicated Operation
            </p>
          </div>

          <div>
            <p class="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              200+
            </p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Corporate & Industrial Clients
            </p>
          </div>

          <div>
            <p class="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              99.8%
            </p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Contract Retention Rate
            </p>
          </div>

          <div>
            <p class="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              100%
            </p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Eco-Safe Bio Chemistries
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
