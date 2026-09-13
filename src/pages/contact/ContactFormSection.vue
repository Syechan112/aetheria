<script setup lang="ts">
import { ref, reactive } from "vue";

interface FormState {
  fullName: string;
  contact: string; // Email or WhatsApp phone
  serviceType: string;
  facilityArea: string;
  location: string;
  message: string;
}

const form = reactive<FormState>({
  fullName: "",
  contact: "",
  serviceType: "commercial-office",
  facilityArea: "",
  location: "",
  message: "",
});

const isSubmitting = ref(false);
const isSubmitted = ref(false);
const errorMessage = ref("");

const serviceOptions = [
  { value: "commercial-office", label: "Commercial & Office Daily Care" },
  { value: "eco-sanitization", label: "Eco Deep Sanitization & Misting" },
  { value: "post-construction", label: "Post-Construction & Fit-Out Detailing" },
  { value: "floor-restoration", label: "Floor Crystallization & Marble Restoration" },
  { value: "hvac-iaq", label: "HVAC & Indoor Air Quality Sanitization" },
  { value: "industrial-facility", label: "Industrial & Plant Degreasing" },
  { value: "general-inquiry", label: "General Consulting / Custom Enterprise SLA" },
];

const handleSubmit = () => {
  errorMessage.value = "";

  if (!form.fullName.trim() || !form.contact.trim() || !form.message.trim()) {
    errorMessage.value = "Please provide your full name, contact information (email or phone), and project details.";
    return;
  }

  isSubmitting.value = true;

  // Simulate network request
  setTimeout(() => {
    isSubmitting.value = false;
    isSubmitted.value = true;
  }, 600);
};

const sendViaWhatsApp = () => {
  const selectedLabel =
    serviceOptions.find((o) => o.value === form.serviceType)?.label ||
    form.serviceType;

  const text = `*FACILITY INQUIRY & ASSESSMENT REQUEST*
Name: ${form.fullName || "-"}
Contact: ${form.contact || "-"}
Service: ${selectedLabel}
Estimated Area: ${form.facilityArea || "-"}
Location: ${form.location || "-"}

*Project Scope & Notes:*
${form.message || "-"}`;

  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/6281234567890?text=${encoded}`, "_blank", "noopener,noreferrer");
};

const resetForm = () => {
  form.fullName = "";
  form.contact = "";
  form.serviceType = "commercial-office";
  form.facilityArea = "";
  form.location = "";
  form.message = "";
  isSubmitted.value = false;
  errorMessage.value = "";
};
</script>

<template>
  <section
    id="contact-form-section"
    class="relative z-20 bg-zinc-50/70 py-20 sm:py-28 lg:py-36 dark:bg-[#090a0b]"
    aria-labelledby="form-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="grid gap-16 lg:grid-cols-12 lg:gap-16">
                <div class="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3">
              <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
              <span
                class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
                02 / Direct Inquiry
              </span>
            </div>

            <h2
              id="form-heading"
              class="mt-6 text-3xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-4xl lg:text-5xl dark:text-white">
              Send an inquiry
              <span class="text-zinc-400 dark:text-zinc-500">
                or request survey.
              </span>
            </h2>

            <p class="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
              Detail your operational requirements below. Our technical facility consultants will evaluate your request and respond in under 2 business hours.
            </p>

                        <div class="mt-8 space-y-3">
              <div class="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-300">
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Complimentary, no-obligation site technical survey</span>
              </div>
              <div class="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-300">
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Transparent quotation & comprehensive SLA breakdown</span>
              </div>
              <div class="flex items-start gap-3 text-xs text-zinc-600 dark:text-zinc-300">
                <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Strict Non-Disclosure (NDA) protection for enterprise facilities</span>
              </div>
            </div>
          </div>

          <div class="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950/60">
            <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Need Immediate Response?
            </span>
            <p class="mt-1.5 text-xs text-zinc-600 dark:text-zinc-400">
              Forward your parameters directly to our WhatsApp Business support desk for rapid assignment.
            </p>
          </div>
        </div>

                <div class="lg:col-span-7">
          <div
            class="rounded-3xl border border-zinc-200/90 bg-white p-8 sm:p-12 shadow-xs dark:border-zinc-800/90 dark:bg-zinc-950">
                        <div
              v-if="isSubmitted"
              class="py-12 text-center">
              <div
                class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                <svg
                  class="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3
                class="mt-5 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                Inquiry Successfully Transmitted
              </h3>

              <p
                class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                Thank you, {{ form.fullName }}. Our facility engineering team has received your project details and will follow up shortly via your provided contact.
              </p>

              <div class="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  @click="sendViaWhatsApp"
                  class="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500">
                  <span>Forward to WhatsApp</span>
                  <svg
                    class="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  type="button"
                  @click="resetForm"
                  class="rounded-xl border border-zinc-200 px-5 py-2.5 text-xs font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900">
                  Submit Another Inquiry
                </button>
              </div>
            </div>

                        <form
              v-else
              @submit.prevent="handleSubmit"
              class="space-y-6">
                            <div
                v-if="errorMessage"
                class="rounded-xl border border-red-200 bg-red-50 p-4 text-xs font-medium text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
                {{ errorMessage }}
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                                <div>
                  <label
                    for="full-name"
                    class="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                    Full Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="full-name"
                    v-model="form.fullName"
                    type="text"
                    required
                    placeholder="e.g. Jonathan Edwards"
                    class="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white dark:focus:ring-white" />
                </div>

                                <div>
                  <label
                    for="contact-info-input"
                    class="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                    Corporate Email / Phone <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-info-input"
                    v-model="form.contact"
                    type="text"
                    required
                    placeholder="e.g. j.edwards@enterprise.com"
                    class="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white dark:focus:ring-white" />
                </div>
              </div>

                            <div>
                <label
                  for="service-type"
                  class="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                  Service Category / Scope
                </label>
                <select
                  id="service-type"
                  v-model="form.serviceType"
                  class="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 focus:border-zinc-950 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:focus:border-white dark:focus:ring-white">
                  <option
                    v-for="opt in serviceOptions"
                    :key="opt.value"
                    :value="opt.value">
                    {{ opt.label }}
                  </option>
                </select>
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                                <div>
                  <label
                    for="facility-area"
                    class="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                    Estimated Floor Area (Optional)
                  </label>
                  <input
                    id="facility-area"
                    v-model="form.facilityArea"
                    type="text"
                    placeholder="e.g. 1,200 m² / 3 Levels"
                    class="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white dark:focus:ring-white" />
                </div>

                                <div>
                  <label
                    for="facility-location"
                    class="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                    Facility Location / City
                  </label>
                  <input
                    id="facility-location"
                    v-model="form.location"
                    type="text"
                    placeholder="e.g. South Jakarta, Surabaya, BSD City"
                    class="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white dark:focus:ring-white" />
                </div>
              </div>

                            <div>
                <label
                  for="message-body"
                  class="block text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                  Project Specifications & Special Requirements <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message-body"
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="Outline your facility requirements, sanitation challenges, or desired assessment dates..."
                  class="mt-2 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-950 focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white dark:focus:ring-white" />
              </div>

                            <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-zinc-950 px-8 text-sm font-semibold text-white transition-all duration-200 hover:bg-zinc-800 active:scale-95 disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200">
                  <span v-if="isSubmitting">Transmitting Request...</span>
                  <span v-else>Submit Inquiry Form</span>
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <button
                  type="button"
                  @click="sendViaWhatsApp"
                  class="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-5 text-xs font-semibold text-zinc-800 transition-colors hover:border-zinc-950 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-white">
                  <span>Or Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
