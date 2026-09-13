<script setup lang="ts">
interface ContactChannel {
  title: string;
  subtitle: string;
  value: string;
  actionText: string;
  actionHref: string;
  badge: string;
}

const channels: ContactChannel[] = [
  {
    title: "WhatsApp Business Direct",
    subtitle: "Rapid Response & Survey Booking",
    value: "+62 812-3456-7890",
    actionText: "Chat on WhatsApp",
    actionHref: "https://wa.me/6281234567890?text=Hello%20Aetheria%20Team,%20I%20would%20like%20to%20inquire%20about%20facility%20services.",
    badge: "Response < 5 Mins",
  },
  {
    title: "Official Corporate Email",
    subtitle: "RFP, Custom SLA & Tender Submissions",
    value: "contact@aetheriacare.com",
    actionText: "Send Corporate Email",
    actionHref: "mailto:contact@aetheriacare.com",
    badge: "Enterprise Inquiries",
  },
  {
    title: "Headquarters & Operations Hub",
    subtitle: "Facility Visit & Workshop Coordination",
    value: "Sudirman Central Business District (SCBD) Lot 28, Senayan, South Jakarta 12190",
    actionText: "View Interactive Map",
    actionHref: "#interactive-map",
    badge: "Operational Hub",
  },
];
</script>

<template>
  <section
    id="contact-info"
    class="relative z-20 bg-white pt-32 pb-16 sm:pt-40 sm:pb-20 dark:bg-[#0c0d0e]"
    aria-labelledby="contact-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              01 / Contact & Direct Line
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Our operational consulting team is ready to structure tailored sanitation and environmental maintenance solutions for your facility.
          </p>
        </div>

        <div>
          <h1
            id="contact-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Let's start a conversation
            <span class="text-zinc-400 dark:text-zinc-500">
              about your space.
            </span>
          </h1>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            Connect directly through our official channels below or submit an inquiry to arrange a complimentary on-site technical inspection.
          </p>
        </div>
      </div>

            <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="ch in channels"
          :key="ch.title"
          class="group flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-950/40 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:hover:border-white/30 dark:hover:bg-zinc-900 dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
          <div>
            <div class="flex items-center justify-between">
              <span
                class="rounded-md bg-zinc-950/5 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-800 dark:bg-white/10 dark:text-zinc-200">
                {{ ch.badge }}
              </span>
            </div>

            <h3
              class="mt-6 text-xl font-semibold tracking-tight text-zinc-950 transition-colors group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
              {{ ch.title }}
            </h3>

            <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {{ ch.subtitle }}
            </p>

            <p class="mt-5 text-sm font-semibold text-zinc-950 dark:text-white">
              {{ ch.value }}
            </p>
          </div>

          <div class="mt-8 border-t border-zinc-200/80 pt-5 dark:border-zinc-800/80">
            <a
              :href="ch.actionHref"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs font-semibold text-zinc-950 transition-colors hover:text-zinc-500 dark:text-white dark:hover:text-zinc-400">
              <span>{{ ch.actionText }}</span>
              <svg
                class="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

            <div
        class="mt-12 rounded-2xl border border-zinc-200/80 bg-zinc-50/70 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div class="grid gap-6 sm:grid-cols-3">
          <div>
            <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Office Operational Hours
            </span>
            <p class="mt-1 text-sm font-semibold text-zinc-950 dark:text-white">
              Monday — Saturday: 08:00 – 18:00 WIB
            </p>
          </div>

          <div>
            <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Emergency Response & Night Shifts
            </span>
            <p class="mt-1 text-sm font-semibold text-zinc-950 dark:text-white">
              24/7 On-Call for Enterprise SLAs
            </p>
          </div>

          <div>
            <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Site Assessment Deployment
            </span>
            <p class="mt-1 text-sm font-semibold text-zinc-950 dark:text-white">
              Within 24 Hours Post-Confirmation
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
