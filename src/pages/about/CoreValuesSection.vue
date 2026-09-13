<script setup lang="ts">
interface ValueItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

const coreValues: ValueItem[] = [
  {
    number: "01",
    title: "Uncompromising Integrity",
    subtitle: "Transparency & Governance",
    description:
      "We uphold complete clarity in technical audit reports, transparent fixed pricing without hidden fees, and absolute fidelity to our operational protocols.",
  },
  {
    number: "02",
    title: "Precision & Craft",
    subtitle: "Detail-Obsessed Quality",
    description:
      "Every architectural surface, micro-crevice, and high-touch zone is treated with meticulous care to deliver verifiably sterile, pristine results.",
  },
  {
    number: "03",
    title: "Punctuality & Reliability",
    subtitle: "Operational Dependability",
    description:
      "Honoring client scheduling with strict arrival discipline, seamless 24/7 emergency readiness, and sustained long-term performance consistency.",
  },
  {
    number: "04",
    title: "Environmental Stewardship",
    subtitle: "Ecological Responsibility",
    description:
      "Ensuring all utilized agents are biodegradable, non-toxic, and non-corrosive, protecting occupant respiratory wellness and the environment.",
  },
  {
    number: "05",
    title: "Human-Centric Safety",
    subtitle: "Zero-Incident HSE Culture",
    description:
      "Prioritizing the physical well-being of on-site technicians and facility occupants through continuous safety gear enforcement and standard protocols.",
  },
  {
    number: "06",
    title: "Continuous Innovation",
    subtitle: "Modern Methodology",
    description:
      "Continuously integrating multi-stage HEPA filtration, closed-loop water reduction steam systems, and data-driven cleanliness monitoring.",
  },
];
</script>

<template>
  <section
    id="core-values"
    class="relative z-20 bg-white py-24 sm:py-32 lg:py-36 dark:bg-[#0c0d0e]"
    aria-labelledby="core-values-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              03 / Core Principles
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            The foundational principles that guide every client interaction, technical decision, and operational assignment.
          </p>
        </div>

        <div>
          <h2
            id="core-values-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Values that shape
            <span class="text-zinc-400 dark:text-zinc-500">
              our everyday conduct.
            </span>
          </h2>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            Our values are not mere slogans, but rigorous performance criteria manifested across every commercial engagement and specialized architectural maintenance project.
          </p>
        </div>
      </div>

      <div class="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div
          v-for="val in coreValues"
          :key="val.number"
          class="group rounded-2xl border border-zinc-200/80 bg-zinc-50/50 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-950/40 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:hover:border-white/30 dark:hover:bg-zinc-900 dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <span
            class="text-xs font-semibold tracking-wider text-zinc-400 dark:text-zinc-500">
            {{ val.number }}
          </span>

          <h3
            class="mt-5 text-xl font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
            {{ val.title }}
          </h3>

          <p class="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
            {{ val.subtitle }}
          </p>

          <p class="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {{ val.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
