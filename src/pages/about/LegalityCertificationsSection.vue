<script setup lang="ts">
interface LegalDocument {
  category: string;
  number: string;
  name: string;
  authority: string;
  status: string;
}

interface Certification {
  code: string;
  name: string;
  scope: string;
  year: string;
}

const legalDocs: LegalDocument[] = [
  {
    category: "Business Entity Registration",
    number: "0120202518491",
    name: "Business Identification Number (NIB)",
    authority: "Ministry of Investment / BKPM RI",
    status: "Active & Verified",
  },
  {
    category: "Operational License",
    number: "440/128/KESLING/2023",
    name: "Environmental Sanitation Operational Permit",
    authority: "Health & Environmental Control Agency",
    status: "Official Standard",
  },
  {
    category: "Labor & HSE Governance",
    number: "SMK3/DEPNAKER/IX-2022",
    name: "Occupational Safety & Health Management System",
    authority: "Ministry of Manpower RI",
    status: "HSE Audit Passed",
  },
  {
    category: "Tax Compliance",
    number: "81.928.374.1-014.000",
    name: "Corporate Tax ID & VAT Registered Entity (PKP)",
    authority: "Directorate General of Taxes",
    status: "Registered & Good Standing",
  },
];

const certifications: Certification[] = [
  {
    code: "ISO 9001:2015",
    name: "Quality Management System",
    scope: "Operational excellence standards and consistent client satisfaction protocols for commercial facility maintenance.",
    year: "Valid Thru 2027",
  },
  {
    code: "ISO 14001:2015",
    name: "Environmental Management",
    scope: "Audited waste segregation, water conservation parameters, and certified non-hazardous ecological formulations.",
    year: "Valid Thru 2027",
  },
  {
    code: "LEED & Green Seal",
    name: "Eco-Chemical Alignment",
    scope: "Compliance with international Green Building Council criteria for sustainable sanitation and Indoor Air Quality (IAQ).",
    year: "Active Compliance",
  },
  {
    code: "HSE & First-Aid",
    name: "Occupational Safety",
    scope: "All site supervisors and technicians hold certified credentials in high-elevation safety and emergency first aid.",
    year: "Certified Standard",
  },
];
</script>

<template>
  <section
    id="legality-certifications"
    class="relative z-20 bg-zinc-50/70 py-24 sm:py-32 lg:py-36 dark:bg-[#090a0b]"
    aria-labelledby="legality-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
      <div class="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              04 / Compliance & Accreditation
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            Comprehensive legal standing and verified regulatory compliance to guarantee confidence in your enterprise partnerships.
          </p>
        </div>

        <div>
          <h2
            id="legality-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Officially verified, certified,
            <span class="text-zinc-400 dark:text-zinc-500">
              and strictly compliant.
            </span>
          </h2>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            We operate with complete corporate legal registration, international ISO quality certifications, and stringent occupational health protocols open for audit verification at any stage.
          </p>
        </div>
      </div>

      <div class="mt-20">
        <span
          class="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
          Official Certifications & Global Standards
        </span>

        <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="cert in certifications"
            :key="cert.code"
            class="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-zinc-950/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60 dark:hover:border-white/30">
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span
                  class="rounded-md bg-zinc-950/5 px-2.5 py-1 text-[11px] font-semibold tracking-wider text-zinc-950 dark:bg-white/10 dark:text-white">
                  {{ cert.code }}
                </span>
                <span
                  class="rounded-full bg-zinc-100 px-2.5 py-0.5 text-[9px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {{ cert.year }}
                </span>
              </div>

              <h3
                class="mt-4 text-base font-semibold leading-snug tracking-tight text-zinc-950 dark:text-white">
                {{ cert.name }}
              </h3>

              <p
                class="mt-2.5 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {{ cert.scope }}
              </p>
            </div>

            <div class="mt-6 flex items-center gap-2 border-t border-zinc-100 pt-4 dark:border-zinc-800">
              <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span class="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400">
                Verified Accreditation
              </span>
            </div>
          </div>
        </div>
      </div>

            <div class="mt-16 rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 dark:border-zinc-800 dark:bg-zinc-950/50">
        <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 class="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              Corporate Legal Entity & Official Licensing
            </h3>
            <p class="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Legitimate registration records and operational licenses under Indonesian regulatory framework.
            </p>
          </div>

          <span class="w-fit rounded-full border border-zinc-200 px-3 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
            Incorporated Enterprise (PT)
          </span>
        </div>

        <div class="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
          <div
            v-for="doc in legalDocs"
            :key="doc.number"
            class="grid gap-3 py-5 sm:grid-cols-12 sm:items-center sm:gap-6">
            <div class="sm:col-span-3">
              <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                {{ doc.category }}
              </span>
              <p class="mt-0.5 text-sm font-semibold text-zinc-950 dark:text-white">
                {{ doc.name }}
              </p>
            </div>

            <div class="sm:col-span-4">
              <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Registration / Permit ID
              </span>
              <p class="mt-0.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                {{ doc.number }}
              </p>
            </div>

            <div class="sm:col-span-3">
              <span class="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                Issuing Regulatory Body
              </span>
              <p class="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                {{ doc.authority }}
              </p>
            </div>

            <div class="sm:col-span-2 sm:text-right">
              <span class="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-900 dark:text-zinc-100">
                <span class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {{ doc.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
