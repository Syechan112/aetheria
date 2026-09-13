<script setup lang="ts">
import { RouterLink } from "vue-router";

const currentYear = new Date().getFullYear();

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  { name: "Commercial & Office Care", path: "/services" },
  { name: "Deep Eco-Sanitization", path: "/services" },
  { name: "Post-Construction Detailing", path: "/services" },
  { name: "Floor & Surface Restoration", path: "/services" },
  { name: "Indoor Air & HVAC Purification", path: "/services" },
  { name: "Industrial Facility Solutions", path: "/services" },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <footer
    class="relative z-20 border-t border-zinc-200 bg-zinc-950 text-white dark:border-zinc-800"
    aria-label="Site Footer">
        <div class="border-b border-zinc-800/80">
      <div class="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div class="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-3xl">
            <div class="flex items-center gap-3">
              <span class="h-px w-8 bg-white/60" />
              <span
                class="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Work With Us
              </span>
            </div>

            <h2
              class="mt-5 text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Ready to elevate the standard
              <span class="text-white/50">of your environment?</span>
            </h2>

            <p class="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
              Connect with our operational specialists to design a customized facility care plan tailored to your specifications.
            </p>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <RouterLink
              to="/contact"
              class="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-white px-7 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] active:scale-[0.98]">
              <span>Start a conversation</span>
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

            <button
              type="button"
              @click="scrollToTop"
              class="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 active:scale-[0.98]">
              <span>Back to top</span>
              <svg
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

        <div class="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                <div class="lg:col-span-5">
          <RouterLink
            to="/"
            class="group/logo flex items-center gap-3.5">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-xs font-semibold text-zinc-950 transition-transform duration-300 group-hover:scale-105">
              A
            </div>

            <div class="leading-tight">
              <span
                class="block text-sm font-semibold tracking-tight text-white">
                Aetheria
              </span>
              <span
                class="block text-[9px] font-medium uppercase tracking-[0.2em] text-white/50">
                Facility & Care
              </span>
            </div>
          </RouterLink>

          <p
            class="mt-6 max-w-sm text-sm leading-6 text-white/60">
            Setting measurable benchmarks in commercial cleaning, eco-sanitization, and sustainable facility stewardship across Indonesia.
          </p>

                    <div class="mt-8 flex flex-wrap items-center gap-2">
            <span
              class="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/70">
              LEED & Green Seal Aligned
            </span>
            <span
              class="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white/70">
              ISO 9001 & 14001 Standards
            </span>
          </div>
        </div>

                <div class="lg:col-span-2">
          <span
            class="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Navigation
          </span>

          <ul class="mt-5 space-y-3">
            <li
              v-for="link in navigationLinks"
              :key="link.path">
              <RouterLink
                :to="link.path"
                class="text-sm text-white/70 transition-colors duration-200 hover:text-white">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

                <div class="lg:col-span-3">
          <span
            class="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Solutions
          </span>

          <ul class="mt-5 space-y-3">
            <li
              v-for="service in serviceLinks"
              :key="service.name">
              <RouterLink
                :to="service.path"
                class="text-sm text-white/70 transition-colors duration-200 hover:text-white">
                {{ service.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

                <div class="lg:col-span-2">
          <span
            class="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            Direct Line
          </span>

          <div class="mt-5 space-y-4 text-sm text-white/70">
            <div>
              <span class="block text-[11px] text-white/40">Operations</span>
              <p class="mt-0.5 font-medium text-white">Mon — Sat: 08:00 – 18:00</p>
              <p class="text-xs text-white/50">24/7 Emergency Response</p>
            </div>

            <div>
              <span class="block text-[11px] text-white/40">Direct Contact</span>
              <a
                href="mailto:contact@companyprofile.com"
                class="mt-0.5 block transition-colors hover:text-white">
                contact@companyprofile.com
              </a>
              <a
                href="tel:+6281234567890"
                class="block transition-colors hover:text-white">
                +62 (812) 3456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div class="border-t border-zinc-900 bg-black/40">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p class="text-xs text-white/40">
          &copy; {{ currentYear }} Aetheria Facility & Care. All rights reserved.
        </p>

        <div class="flex items-center gap-6 text-xs text-white/40">
          <RouterLink
            to="/contact"
            class="transition-colors hover:text-white/80">
            Privacy Policy
          </RouterLink>
          <RouterLink
            to="/contact"
            class="transition-colors hover:text-white/80">
            Terms of Service
          </RouterLink>
          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span class="text-[11px] text-white/60">Operations Active</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
