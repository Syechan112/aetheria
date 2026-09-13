<script setup lang="ts">
import { RouterLink } from "vue-router";

interface ServiceItem {
  id: string;
  number: string;
  tag: string;
  badge?: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

const featuredServices: ServiceItem[] = [
  {
    id: "commercial-cleaning",
    number: "01",
    tag: "Corporate",
    badge: "Most Requested",
    title: "Commercial & Office Care",
    description:
      "Comprehensive facility sanitation designed for modern corporate headquarters, creative studios, and high-density commercial spaces.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Customized daily or after-hours schedule",
      "Green Seal certified bio-formulations",
      "Dedicated on-site supervisor & digital audits",
    ],
  },
  {
    id: "eco-sanitization",
    number: "02",
    tag: "Sanitation",
    badge: "Eco-Grade",
    title: "Deep Eco-Sanitization",
    description:
      "Hospital-grade pathogen neutralization using cold-fogging and non-corrosive, non-toxic bio-disinfectants safe for occupants and food prep areas.",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "99.99% viral & bacterial elimination rate",
      "Zero harsh chemical residue or scent",
      "Official hygiene compliance certification",
    ],
  },
  {
    id: "post-construction",
    number: "03",
    tag: "Specialized",
    title: "Post-Construction Detailing",
    description:
      "Precision handover detailing for architectural builds and luxury fit-outs, lifting microscopic concrete dust, paint specks, and residue.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Industrial multi-stage HEPA H14 vacuuming",
      "Delicate glass, fixture, & joinery detailing",
      "100% defect-free handover guarantee",
    ],
  },
  {
    id: "floor-restoration",
    number: "04",
    tag: "Restoration",
    title: "Surface & Stone Restoration",
    description:
      "Multi-stage diamond polishing and crystallization for Italian marble, terrazzo, granite, and architectural hardwoods.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Diamond abrasive micro-pad refinishing",
      "Breathable, slip-resistant protective sealants",
      "Preserves natural stone pores and luster",
    ],
  },
  {
    id: "iaq-air-purification",
    number: "05",
    tag: "Air Quality",
    title: "HVAC & Indoor Air Purification",
    description:
      "Complete duct decontamination, evaporator coil cleansing, and airborne microbial extraction to improve Indoor Air Quality (IAQ).",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "Microbial spore & allergen extraction",
      "HVAC system airflow & thermal efficiency boost",
      "Compliant with international IAQ standards",
    ],
  },
  {
    id: "industrial-facility",
    number: "06",
    tag: "Industrial",
    title: "Industrial Facility Solutions",
    description:
      "Heavy-duty degreasing, high-structure dust removal, and plant cleaning strictly adhering to OSHA, HSE, and workplace safety protocols.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    highlights: [
      "High-pressure hot water degreasing",
      "Certified high-reach rope access teams",
      "Full OSHA & HSE regulatory compliance",
    ],
  },
];
</script>

<template>
  <section
    id="featured-services"
    class="relative z-20 bg-white py-24 sm:py-32 lg:py-36 dark:bg-[#0c0d0e]"
    aria-labelledby="featured-services-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              Featured Solutions
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Engineered procedures, certified specialists, and responsible chemistry tailored to elevate your environment.
          </p>

          <RouterLink
            to="/services"
            class="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-950 transition-colors duration-300 hover:text-zinc-500 dark:text-white dark:hover:text-zinc-400">
            <span>Explore all services</span>
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
            id="featured-services-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Specialized solutions for
            <span class="text-zinc-400 dark:text-zinc-500">
              demanding architectural spaces.
            </span>
          </h2>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            From routine corporate stewardship to high-precision sterile decontamination, our services guarantee pristine aesthetics, surface longevity, and occupant well-being.
          </p>
        </div>
      </div>

            <div
        class="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in featuredServices"
          :key="service.id"
          class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-950/40 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:border-zinc-800/80 dark:bg-zinc-900/40 dark:hover:border-white/30 dark:hover:bg-zinc-900 dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div>
                        <div class="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <img
                :src="service.image"
                :alt="service.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <span
                class="absolute top-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-zinc-900 shadow-xs backdrop-blur-md dark:bg-zinc-950/90 dark:text-white">
                {{ service.tag }}
              </span>

              <span
                v-if="service.badge"
                class="absolute top-3 right-3 rounded-md bg-zinc-950/80 px-2.5 py-1 text-[10px] font-medium text-white shadow-xs backdrop-blur-md dark:bg-white/90 dark:text-zinc-950">
                {{ service.badge }}
              </span>
            </div>

                        <div class="mt-6 flex items-center gap-2.5">
              <span class="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                {{ service.number }}
              </span>
              <span class="h-2.5 w-px bg-zinc-300 dark:bg-zinc-700" />
              <span class="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                Verified Protocol
              </span>
            </div>

            <h3
              class="mt-2 text-xl font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
              {{ service.title }}
            </h3>

            <p
              class="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              {{ service.description }}
            </p>

                        <div class="mt-6 border-t border-zinc-200/80 pt-5 dark:border-zinc-800/80">
              <ul class="space-y-2">
                <li
                  v-for="(highlight, idx) in service.highlights"
                  :key="idx"
                  class="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-white"
                    aria-hidden="true" />
                  <span class="leading-relaxed">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

                    <div class="mt-8 border-t border-zinc-200/60 pt-4 dark:border-zinc-800/60">
            <RouterLink
              :to="{ path: '/services', hash: `#${service.id}` }"
              class="group/link inline-flex items-center gap-2 text-xs font-semibold text-zinc-950 transition-colors duration-200 hover:text-zinc-500 dark:text-white dark:hover:text-zinc-400">
              <span>Inquire about this service</span>
              <svg
                class="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-1"
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
        </article>
      </div>

            <div
        class="mt-16 rounded-3xl bg-zinc-950 p-8 sm:p-12 lg:flex lg:items-center lg:justify-between dark:bg-zinc-900 border border-white/10">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3">
            <span class="h-px w-6 bg-white/60" />
            <span
              class="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80">
              Enterprise Partnership
            </span>
          </div>

          <h3
            class="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Require a custom SLA or comprehensive multi-site contract?
          </h3>

          <p class="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            Our enterprise operations team provides tailored facility assessments, structured service level agreements, and dedicated supervisory staff.
          </p>
        </div>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
          <RouterLink
            to="/contact"
            class="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-zinc-100 active:scale-[0.98]">
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

          <RouterLink
            to="/services"
            class="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-[0.98]">
            View Service Specs
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
