<script setup lang="ts">
export interface CategoryOption {
  id: string;
  name: string;
  count: number;
}

defineProps<{
  categories: CategoryOption[];
  selectedCategory: string;
  totalServices: number;
}>();

const emit = defineEmits<{
  (e: "update:selectedCategory", id: string): void;
}>();

const selectCategory = (id: string) => {
  emit("update:selectedCategory", id);
};
</script>

<template>
  <section
    id="service-categories"
    class="relative z-20 border-b border-zinc-200/80 bg-white pt-32 pb-12 sm:pt-40 sm:pb-16 dark:border-zinc-800/80 dark:bg-[#0c0d0e]"
    aria-labelledby="service-header-heading">
    <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div class="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
        <div>
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-zinc-950 dark:bg-white" />
            <span
              class="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-900 dark:text-zinc-200">
              01 / Service Catalog
            </span>
          </div>

          <p
            class="mt-7 max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            A comprehensive suite of institutional-grade environmental and facility solutions designed to ensure long-term hygiene and surface preservation.
          </p>
        </div>

        <div>
          <h1
            id="service-header-heading"
            class="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-[4rem] dark:text-white">
            Engineered solutions for
            <span class="text-zinc-400 dark:text-zinc-500">
              every environment.
            </span>
          </h1>

          <p
            class="mt-8 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            Explore our specialized service portfolio. Filter by operational sector below to view detailed specifications, scope of work, and investment estimates.
          </p>
        </div>
      </div>

            <div class="mt-16 flex flex-wrap items-center gap-2 sm:gap-3 border-t border-zinc-200/80 pt-8 dark:border-zinc-800/80">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          @click="selectCategory(cat.id)"
          class="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200"
          :class="
            selectedCategory === cat.id
              ? 'bg-zinc-950 text-white shadow-xs dark:bg-white dark:text-zinc-950'
              : 'border border-zinc-200/80 bg-zinc-50 text-zinc-600 hover:border-zinc-950 hover:bg-white hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400 dark:hover:border-white/50 dark:hover:bg-zinc-900 dark:hover:text-white'
          ">
          <span>{{ cat.name }}</span>
          <span
            class="rounded-md px-1.5 py-0.5 text-[10px] font-semibold transition-colors"
            :class="
              selectedCategory === cat.id
                ? 'bg-white/20 text-white dark:bg-zinc-950/20 dark:text-zinc-950'
                : 'bg-zinc-200/60 text-zinc-500 group-hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400'
            ">
            {{ cat.count }}
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
