<script setup lang="ts">
import { RouterLink } from "vue-router";

interface FlowStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

const orderSteps: FlowStep[] = [
  {
    step: "01",
    title: "Consultation & Requirement Mapping",
    subtitle: "Initial Needs Discovery",
    description:
      "Initial discussion regarding facility typology, square footage, specific contamination challenges, and desired operational scheduling.",
    deliverables: [
      "Scope of work definition",
      "Tailored service recommendation",
      "Preliminary estimate & timeline",
    ],
  },
  {
    step: "02",
    title: "Site Assessment & Proposal SLA",
    subtitle: "On-Site Evaluation & Formal Agreement",
    description:
      "Our technical team conducts a physical on-site inspection to analyze surface materials, accessibility, and compile a transparent SLA proposal.",
    deliverables: [
      "Physical facility condition report",
      "Itemized transparent cost breakdown",
      "Guaranteed operational schedule",
    ],
  },
  {
    step: "03",
    title: "Structured Deployment & HSE Standards",
    subtitle: "Certified Operational Execution",
    description:
      "Deployment of certified technicians utilizing eco-neutral bio-chemistries, HEPA filtration gear, and strict safety procedures without disrupting your workday.",
    deliverables: [
      "Dedicated On-Site Supervisor",
      "Full PPE & K3/HSE compliance",
      "Advanced particulate extraction",
    ],
  },
  {
    step: "04",
    title: "Quality Audit & Handover Certification",
    subtitle: "Final Inspection & Sign-off",
    description:
      "Collaborative inspection with your facility manager, data-backed hygiene checklist verification, formal handover sign-off, and ongoing support.",
    deliverables: [
      "Comprehensive quality score checklist",
      "Post-treatment sanitation certificate",
      "Dedicated post-service follow-up",
    ],
  },
];
</script>

<template>
  <section
    id="order-flow"
    class="relative z-20 bg-zinc-50/70 py-24 sm:py-32 lg:py-36 dark:bg-[#090a0b]"
    aria-labelledby="order-flow-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              02 / Engagement Workflow
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            A structured, transparent, and dependable service process from initial contact to certified handover.
          </p>
        </div>

        <div>
          <h2
            id="order-flow-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Simple, transparent,
            <span class="text-zinc-400 dark:text-zinc-500">
              and structured process.
            </span>
          </h2>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            We ensure every stage of our service engagement is planned with absolute cost clarity, punctuality, and verifiable results.
          </p>
        </div>
      </div>

            <div class="mt-20 border-t border-zinc-200 dark:border-zinc-800">
        <div class="grid divide-y divide-zinc-200 sm:grid-cols-2 lg:grid-cols-4 sm:divide-x sm:divide-y-0 dark:divide-zinc-800">
          <div
            v-for="item in orderSteps"
            :key="item.step"
            class="group py-8 sm:p-8 lg:p-10 transition-colors duration-200 hover:bg-white/70 dark:hover:bg-zinc-950/40">
            <span
              class="text-sm font-semibold tracking-wider text-zinc-400 transition-colors duration-200 group-hover:text-zinc-950 dark:text-zinc-500 dark:group-hover:text-white">
              {{ item.step }}
            </span>

            <h3
              class="mt-5 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              {{ item.title }}
            </h3>

            <p class="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
              {{ item.subtitle }}
            </p>

            <p class="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {{ item.description }}
            </p>

                        <div class="mt-6 border-t border-zinc-200/80 pt-4 dark:border-zinc-800/80">
              <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Key Deliverables:
              </span>
              <ul class="mt-2.5 space-y-1.5">
                <li
                  v-for="(del, idx) in item.deliverables"
                  :key="idx"
                  class="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-white" />
                  <span>{{ del }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

            <div
        class="mt-16 rounded-3xl bg-zinc-950 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between dark:bg-zinc-950 border border-white/10">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3">
            <span class="h-px w-6 bg-white/60" />
            <span
              class="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
              Start Your Assessment
            </span>
          </div>

          <h3
            class="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            Ready to discuss your facility sanitation requirements?
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-white/70">
            Contact our operations team for a complimentary on-site assessment and itemized proposal without initial commitment.
          </p>
        </div>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
          <RouterLink
            to="/contact"
            class="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-white px-7 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-zinc-100 active:scale-[0.98]">
            <span>Schedule Site Assessment</span>
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
        </div>
      </div>
    </div>
  </section>
</template>
