<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  facility: string;
  rating: number;
  quote: string;
  highlightTag: string;
}

interface ChatFeedback {
  id: string;
  sender: string;
  role: string;
  timestamp: string;
  channel: string;
  message: string;
}

const activeTab = ref<"reviews" | "chats">("reviews");

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Hendra Wijaya",
    role: "Head of Facility Management",
    company: "Menara Sudirman Corporate Tower",
    facility: "Grade-A Office (14,500 m²)",
    rating: 5,
    highlightTag: "Daily Corporate SLA",
    quote:
      "The single most noticeable difference since partnering with Aetheria has been the absolute consistency and zero complaints from our tenants. Their supervisors actively complete comprehensive checklists before business hours commence, and their bio-neutral chemicals leave zero harsh odor.",
  },
  {
    id: "t2",
    name: "Ratna Kartika, S.T.",
    role: "Senior Project Architect & Fit-Out Lead",
    company: "Studio Arsitektur Nusantara",
    facility: "Luxury Commercial Penthouse",
    rating: 5,
    highlightTag: "Post-Construction Detailing",
    quote:
      "Handover cleaning for luxury residential projects carries high risk if surface chemistry is mishandled. Aetheria extracted all sealant residue and micro-cement dust from imported travertine marble without a single micro-scratch. The key handover passed on the first inspection.",
  },
  {
    id: "t3",
    name: "dr. Andi Pratama, Sp.A",
    role: "Operational Director",
    company: "Specialized Pediatric & Maternity Clinic",
    facility: "Medical & Diagnostic Center",
    rating: 5,
    highlightTag: "Clinical Eco-Sanitization",
    quote:
      "Sterilization standards in healthcare environments cannot be compromised. We value Aetheria's food-safe non-toxic disinfectants and their quantitative post-treatment ATP swab reports. Both our medical staff and visiting patients feel completely safe.",
  },
  {
    id: "t4",
    name: "Bambang Santoso",
    role: "HSE & Facility Superintendent",
    company: "Cikarang Modern Logistics Park",
    facility: "Industrial Plant (28,000 m²)",
    rating: 5,
    highlightTag: "HSE & K3 Compliance",
    quote:
      "For heavy industrial floors with lubricant buildup, their degreasing capabilities and safety standards are unmatched. Every technician is fully certified for high-reach access, enabling us to clear our annual environmental audit with zero violations.",
  },
];

const chatFeedbacks: ChatFeedback[] = [
  {
    id: "c1",
    sender: "Maya Kusuma (Operations Lead)",
    role: "Tech Coworking Hub Jakarta",
    timestamp: "Yesterday, 09:14 AM",
    channel: "WhatsApp Business Direct",
    message:
      "Good morning team. Quick update: the carpet extraction and lobby stone crystallization completed last night look incredible! Tenants immediately noticed the clean scent and pristine floor sheen. Huge thanks to the night crew!",
  },
  {
    id: "c2",
    sender: "David Tan (Chief Building Engineer)",
    role: "Financial Tower SCBD",
    timestamp: "3 days ago, 06:30 PM",
    channel: "WhatsApp Project Coordination",
    message:
      "The site survey report and monthly SLA proposal for our 4 new expansion floors have been formally approved by the executive board. We are thrilled with the first-month performance. Keep up the high standards.",
  },
  {
    id: "c3",
    sender: "Cynthia Laurent (Interior Project Lead)",
    role: "Fit-Out Contractor Jakarta",
    timestamp: "Last week, 02:05 PM",
    channel: "WhatsApp Client Confirmation",
    message:
      "Unit handover to the property owner went through without a single inspection note. Micro-dust on the HVAC grilles and corner paint specks were completely eliminated. We will definitely partner on our next build.",
  },
];
</script>

<template>
  <section
    id="testimonials"
    class="relative z-20 bg-white py-24 sm:py-32 lg:py-36 dark:bg-[#0c0d0e]"
    aria-labelledby="testimonials-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              03 / Client Feedback
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Real feedback from facility directors, project architects, and property executives who entrust their environments to us.
          </p>
        </div>

        <div>
          <h2
            id="testimonials-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            What our partners
            <span class="text-zinc-400 dark:text-zinc-500">
              say about our standard.
            </span>
          </h2>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            Our reputation is built on dependable execution, rapid emergency responsiveness, and sustained client satisfaction across every space we manage.
          </p>
        </div>
      </div>

            <div class="mt-16 flex items-center gap-2 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
        <button
          type="button"
          @click="activeTab = 'reviews'"
          class="rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-200"
          :class="
            activeTab === 'reviews'
              ? 'bg-zinc-950 text-white shadow-xs dark:bg-white dark:text-zinc-950'
              : 'border border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-950 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-white'
          ">
          Executive Reviews
        </button>

        <button
          type="button"
          @click="activeTab = 'chats'"
          class="rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-200"
          :class="
            activeTab === 'chats'
              ? 'bg-zinc-950 text-white shadow-xs dark:bg-white dark:text-zinc-950'
              : 'border border-zinc-200 bg-zinc-50 text-zinc-600 hover:border-zinc-950 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-white'
          ">
          Direct Client Communications
        </button>
      </div>

            <div
        v-if="activeTab === 'reviews'"
        class="mt-10 grid gap-8 md:grid-cols-2">
        <div
          v-for="item in testimonials"
          :key="item.id"
          class="group flex flex-col justify-between rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-8 sm:p-10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-950/40 hover:bg-white hover:shadow-[0_20px_45px_rgba(0,0,0,0.04)] dark:border-zinc-800/80 dark:bg-zinc-900/30 dark:hover:border-white/30 dark:hover:bg-zinc-900 dark:hover:shadow-[0_20px_45px_rgba(0,0,0,0.3)]">
          <div>
            <div class="flex items-center justify-between">
              <span
                class="rounded-md bg-zinc-950/5 px-2.5 py-0.5 text-[10px] font-semibold text-zinc-800 dark:bg-white/10 dark:text-zinc-200">
                {{ item.highlightTag }}
              </span>

              <div class="flex items-center gap-1 text-xs text-amber-500">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <p class="mt-6 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              "{{ item.quote }}"
            </p>
          </div>

          <div class="mt-8 border-t border-zinc-200/80 pt-6 dark:border-zinc-800/80">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-sm font-semibold tracking-tight text-zinc-950 dark:text-white">
                  {{ item.name }}
                </h4>
                <p class="text-xs text-zinc-500 dark:text-zinc-400">
                  {{ item.role }} — {{ item.company }}
                </p>
              </div>

              <span class="text-[10px] font-medium text-zinc-400 dark:text-zinc-500">
                {{ item.facility }}
              </span>
            </div>
          </div>
        </div>
      </div>

            <div
        v-else
        class="mt-10 grid gap-6 md:grid-cols-3">
        <div
          v-for="chat in chatFeedbacks"
          :key="chat.id"
          class="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900/40">
          <div>
            <div class="flex items-center justify-between border-b border-zinc-200 pb-3 dark:border-zinc-800">
              <div class="flex items-center gap-2">
                <span class="h-2 w-2 rounded-full bg-emerald-500" />
                <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {{ chat.channel }}
                </span>
              </div>
              <span class="text-[10px] text-zinc-400">
                {{ chat.timestamp }}
              </span>
            </div>

            <div class="mt-4 rounded-xl bg-white p-4 text-xs leading-relaxed text-zinc-700 shadow-xs dark:bg-zinc-800/80 dark:text-zinc-200">
              "{{ chat.message }}"
            </div>
          </div>

          <div class="mt-5 border-t border-zinc-200 pt-3 dark:border-zinc-800">
            <p class="text-xs font-semibold text-zinc-950 dark:text-white">
              {{ chat.sender }}
            </p>
            <p class="text-[10px] text-zinc-500 dark:text-zinc-400">
              {{ chat.role }}
            </p>
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
              Partner With Us
            </span>
          </div>

          <h3
            class="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
            Ready to experience professional environmental stewardship?
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-white/70">
            Connect with our operations directors to structure an enterprise SLA tailored to your property.
          </p>
        </div>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
          <RouterLink
            to="/contact"
            class="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-white px-7 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:bg-zinc-100 active:scale-[0.98]">
            <span>Consult With Us</span>
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
