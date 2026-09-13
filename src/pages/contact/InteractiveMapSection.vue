<script setup lang="ts">
const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2737526226197!2d106.80628467586884!3d-6.227592460986708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d30079f01%3A0x2e23f03b22467d82!2sSudirman%20Central%20Business%20District!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid";

const googleMapsDirectUrl =
  "https://maps.google.com/?q=Sudirman+Central+Business+District+Jakarta";
</script>

<template>
  <section
    id="interactive-map"
    class="relative z-20 bg-white py-20 sm:py-28 lg:py-36 dark:bg-[#0c0d0e]"
    aria-labelledby="map-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              03 / Location & Facility
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Operations center, eco-chemical formulation workshop, and central facility management headquarters.
          </p>
        </div>

        <div>
          <h2
            id="map-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Visit our operational
            <span class="text-zinc-400 dark:text-zinc-500">
              headquarters & hub.
            </span>
          </h2>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            Strategically located in Jakarta’s prime financial and business corridor with rapid logistical access for corporate facility deployments across the region.
          </p>
        </div>
      </div>

            <div class="mt-16 overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
                <div class="relative h-[380px] w-full sm:h-[460px] lg:h-[500px]">
          <iframe
            :src="mapEmbedUrl"
            title="Google Maps Location of Operations Headquarters"
            class="h-full w-full border-0 grayscale contrast-[1.08] transition-all duration-700 ease-out hover:grayscale-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen />

                    <div
            class="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md rounded-2xl border border-zinc-200/90 bg-white/95 p-5 shadow-xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full bg-emerald-500" />
              <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Headquarters & Logistics Hub
              </span>
            </div>

            <p class="mt-1.5 text-sm font-semibold text-zinc-950 dark:text-white">
              Sudirman Central Business District (SCBD)
            </p>

            <p class="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
              Lot 28, Senayan, Kebayoran Baru, South Jakarta 12190
            </p>

            <div class="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
              <span class="text-[11px] text-zinc-500 dark:text-zinc-400">
                Dedicated Visitor Parking Available
              </span>

              <a
                :href="googleMapsDirectUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-950 transition-colors hover:text-emerald-600 dark:text-white dark:hover:text-emerald-400">
                <span>Open in Google Maps</span>
                <svg
                  class="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
