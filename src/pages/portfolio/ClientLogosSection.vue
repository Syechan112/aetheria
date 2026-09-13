<script setup lang="ts">
interface ClientItem {
  name: string;
  category: string;
  badge: string;
  scope: string;
}

const clients: ClientItem[] = [
  {
    name: "Astra International Hub",
    category: "Corporate & Conglomerate",
    badge: "5+ Years Partnership",
    scope: "Multi-Floor Daily Facility Stewardship",
  },
  {
    name: "Mandiri Financial Tower",
    category: "Banking & Financial Services",
    badge: "Daily SLA Contract",
    scope: "Banking Hall & Executive Suite Care",
  },
  {
    name: "Siloam Healthcare Network",
    category: "Healthcare & Diagnostics",
    badge: "Sterile Grade Certified",
    scope: "Clinical Biosafety Decontamination",
  },
  {
    name: "Cikarang Mega Industrial Hub",
    category: "Industrial & Manufacturing",
    badge: "HSE Compliant",
    scope: "Warehouse Degreasing & Plant Care",
  },
  {
    name: "GoTo Ecosystem Hub",
    category: "Technology & Coworking",
    badge: "Eco-Chemical Protocol",
    scope: "Daily Collaborative Office Care",
  },
  {
    name: "Sequis Center Financial",
    category: "Property & High-Rise",
    badge: "Marble Care Specialist",
    scope: "Stone Restoration & Facade Access",
  },
  {
    name: "Pakuwon Mall & Residencies",
    category: "Commercial & Retail",
    badge: "Public Hygiene Standards",
    scope: "High-Traffic Surface Sanitization",
  },
  {
    name: "Sinarmas Land Development",
    category: "Architectural Fit-Out",
    badge: "Handover Partner",
    scope: "Post-Construction Handover Detailing",
  },
];
</script>

<template>
  <section
    id="client-partners"
    class="relative z-20 bg-zinc-50/70 py-24 sm:py-32 lg:py-36 dark:bg-[#090a0b]"
    aria-labelledby="clients-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              02 / Institutional Partners
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Dipercaya oleh institusi terkemuka, perbankan, jaringan fasilitas kesehatan, dan pengembang properti komersial nasional.
          </p>
        </div>

        <div>
          <h2
            id="clients-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Trusted by leading enterprises
            <span class="text-zinc-400 dark:text-zinc-500">
              and property managers.
            </span>
          </h2>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            Hubungan kerja sama jangka panjang yang dibangun atas dasar transparansi, keteraturan audit mutu, dan konsistensi hasil pengerjaan setiap hari.
          </p>
        </div>
      </div>

            <div class="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="client in clients"
          :key="client.name"
          class="group flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-zinc-950/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/50 dark:hover:border-white/30">
          <div>
            <div class="flex items-center justify-between">
              <span
                class="rounded-md bg-zinc-100 px-2.5 py-0.5 text-[9px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                {{ client.badge }}
              </span>
            </div>

            <h3
              class="mt-4 text-base font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300">
              {{ client.name }}
            </h3>

            <p class="mt-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              {{ client.category }}
            </p>
          </div>

          <div class="mt-6 border-t border-zinc-100 pt-3 dark:border-zinc-800/80">
            <span class="text-[11px] text-zinc-500 dark:text-zinc-400">
              {{ client.scope }}
            </span>
          </div>
        </div>
      </div>

            <div
        class="mt-16 rounded-3xl border border-zinc-200/80 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-950/60">
        <div class="grid gap-8 sm:grid-cols-3 text-center sm:text-left">
          <div>
            <p class="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              200+
            </p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Active Enterprise Accounts
            </p>
          </div>

          <div>
            <p class="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              5,000,000+ m²
            </p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Maintained Annually
            </p>
          </div>

          <div>
            <p class="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              100%
            </p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              SLA Audit Compliance
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
