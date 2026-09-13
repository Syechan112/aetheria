<script setup lang="ts">
import { ref, computed } from "vue";

interface ProjectItem {
  id: string;
  title: string;
  category: "corporate" | "industrial" | "healthcare" | "specialized";
  categoryLabel: string;
  client: string;
  location: string;
  area: string;
  year: string;
  image: string;
  scope: string[];
  metrics: string;
  description: string;
}

const activeCategory = ref<string>("all");

const projects: ProjectItem[] = [
  {
    id: "menara-astra-hq",
    title: "Menara Sudirman Corporate Suites",
    category: "corporate",
    categoryLabel: "Commercial & Corporate",
    client: "Financial & Tech Conglomerate",
    location: "Central Jakarta",
    area: "14,500 m² (8 Floors)",
    year: "2024 - Present",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    scope: [
      "Daily Integrated Facility Maintenance",
      "Green Seal Bio-Sanitization",
      "High-Traffic Marble Crystallization",
    ],
    metrics: "99.8% SLA Fulfillment Score",
    description:
      "End-to-end daily janitorial stewardship and stone restoration for enterprise offices, executive boardrooms, and collaborative lounges under dedicated on-site supervision.",
  },
  {
    id: "post-construction-fitout",
    title: "Pacific Place Penthouse & Boutique Offices",
    category: "specialized",
    categoryLabel: "Architectural Fit-Out",
    client: "Private Real Estate Developer",
    location: "SCBD, South Jakarta",
    area: "4,200 m²",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    scope: [
      "Post-Construction Residue Removal",
      "HEPA H14 Fine Dust Filtration",
      "Delicate Glass & Fixture Detailing",
    ],
    metrics: "100% Defect-Free Handover on Schedule",
    description:
      "Precision post-renovation detailing lifting microscopic cement particulates, adhesive sealant residue, and restoring imported Italian travertine marble prior to key handover.",
  },
  {
    id: "mega-logistics-plant",
    title: "Cikarang Modern Logistics & Distribution Hub",
    category: "industrial",
    categoryLabel: "Industrial Facility",
    client: "Global Logistics Enterprise",
    location: "Cikarang, West Java",
    area: "28,000 m²",
    year: "2023 - Present",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    scope: [
      "Heavy Floor Degreasing & Scrubbing",
      "High-Reach Ceiling Structure Access",
      "HSE & K3 Protocol Implementation",
    ],
    metrics: "Zero Workplace Incidents in 24 Months",
    description:
      "Industrial high-pressure hot water degreasing for heavy-traffic distribution warehouse floors and high-reach structural truss cleaning under strict HSE protocols.",
  },
  {
    id: "siloam-sterile-clinic",
    title: "Specialized Medical Diagnostic & Lab Center",
    category: "healthcare",
    categoryLabel: "Healthcare & Laboratory",
    client: "Healthcare Network",
    location: "West Jakarta",
    area: "3,800 m²",
    year: "2024 - Present",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80",
    scope: [
      "Sporicidal Bio-Decontamination",
      "IAQ HVAC Airway Sterilization",
      "ATP Swab Hygiene Verification",
    ],
    metrics: "Zero Microbial Contamination Rate",
    description:
      "Biosafety Level-2 compliant sanitization protocols for clinical laboratories, sampling bays, and sterile surgical suites with quantitative ATP bioluminescence verification.",
  },
  {
    id: "surabaya-tech-park",
    title: "Surabaya Innovation & Coworking Hub",
    category: "corporate",
    categoryLabel: "Commercial & Corporate",
    client: "Digital Ecosystem Partner",
    location: "Surabaya, East Java",
    area: "6,500 m²",
    year: "2023 - Present",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    scope: [
      "Routine Eco-Cleaning Maintenance",
      "Carpet & Upholstery Deep Extraction",
      "IAQ Monitoring & Odor Elimination",
    ],
    metrics: "Over 1,200 Occupants Served Daily",
    description:
      "Daily maintenance of communal creative spaces, broadcast studios, and tech incubators using non-irritating, fragrance-neutral bio-chemistries.",
  },
  {
    id: "heritage-stone-restoration",
    title: "Menteng Heritage Gallery & Private Residence",
    category: "specialized",
    categoryLabel: "Surface Restoration",
    client: "Cultural Foundation",
    location: "Menteng, Central Jakarta",
    area: "1,800 m²",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    scope: [
      "Italian Travertine Diamond Polishing",
      "Breathable Anti-Stain Impregnation",
      "Historic Woodwork Gentle Treatment",
    ],
    metrics: "Preserved Original 1930s Stone Luster",
    description:
      "Sequential diamond-abrasive micro-polishing of heritage natural stone surfaces to revive original depth and color without abrasive damage to historic mineral pores.",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "corporate", label: "Commercial & Corporate" },
  { id: "specialized", label: "Fit-Out & Restoration" },
  { id: "industrial", label: "Industrial & Warehouse" },
  { id: "healthcare", label: "Healthcare & Lab" },
];

const filteredProjects = computed(() => {
  if (activeCategory.value === "all") {
    return projects;
  }
  return projects.filter((p) => p.category === activeCategory.value);
});
</script>

<template>
  <section
    id="project-gallery"
    class="relative z-20 bg-white pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pb-36 dark:bg-[#0c0d0e]"
    aria-labelledby="portfolio-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              01 / Project Gallery
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            A documented record of commercial facilities, enterprise towers, and specialized restoration projects.
          </p>
        </div>

        <div>
          <h1
            id="portfolio-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Proven execution across
            <span class="text-zinc-400 dark:text-zinc-500">
              diverse architectural spaces.
            </span>
          </h1>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            Every project is delivered with disciplined planning, data-driven quality audits, and strict adherence to client SLAs.
          </p>
        </div>
      </div>

            <div class="mt-16 flex flex-wrap items-center gap-2 border-t border-zinc-200/80 pt-8 sm:gap-3 dark:border-zinc-800/80">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          @click="activeCategory = cat.id"
          class="rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200"
          :class="
            activeCategory === cat.id
              ? 'bg-zinc-950 text-white shadow-xs dark:bg-white dark:text-zinc-950'
              : 'border border-zinc-200/80 bg-zinc-50 text-zinc-600 hover:border-zinc-950 hover:bg-white hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-white/50 dark:hover:bg-zinc-900 dark:hover:text-white'
          ">
          {{ cat.label }}
        </button>
      </div>

            <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="group flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-950/40 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:hover:border-white/30 dark:hover:bg-zinc-900 dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div>
                        <div class="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
              <img
                :src="project.image"
                :alt="project.title"
                loading="lazy"
                class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />

              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span
                class="absolute top-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-zinc-900 shadow-xs backdrop-blur-md dark:bg-zinc-950/90 dark:text-white">
                {{ project.categoryLabel }}
              </span>

              <span
                class="absolute top-3 right-3 rounded-md bg-zinc-950/80 px-2.5 py-1 text-[10px] font-medium text-white shadow-xs backdrop-blur-md dark:bg-white/90 dark:text-zinc-950">
                {{ project.year }}
              </span>
            </div>

                        <h3
              class="mt-6 text-xl font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
              {{ project.title }}
            </h3>

                        <div class="mt-2.5 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
              <span>📍 {{ project.location }}</span>
              <span class="h-2.5 w-px bg-zinc-300 dark:bg-zinc-700" />
              <span>📐 {{ project.area }}</span>
            </div>

                        <p class="mt-4 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
              {{ project.description }}
            </p>

                        <div class="mt-6 border-t border-zinc-200/80 pt-4 dark:border-zinc-800/80">
              <span
                class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Scope of Work:
              </span>
              <ul class="mt-2.5 space-y-1.5">
                <li
                  v-for="(item, idx) in project.scope"
                  :key="idx"
                  class="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <span
                    class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-950 dark:bg-white" />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

                    <div class="mt-8 border-t border-zinc-200/80 pt-4 dark:border-zinc-800/80">
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-emerald-500" />
              <span class="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">
                {{ project.metrics }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
