<script setup lang="ts">
import { ref, computed } from "vue";
import CategoryFilterSection, {
  type CategoryOption,
} from "./service/CategoryFilterSection.vue";
import ServiceGridSection, {
  type ServiceDetail,
} from "./service/ServiceGridSection.vue";
import OrderFlowSection from "./service/OrderFlowSection.vue";

const selectedCategory = ref<string>("all");

const rawServices: ServiceDetail[] = [
  {
    id: "commercial-cleaning",
    number: "01",
    category: "corporate",
    categoryLabel: "Commercial & Corporate",
    badge: "Most Requested",
    title: "Commercial & Corporate Office Care",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    functionSummary:
      "Daily and scheduled facility stewardship for enterprise towers, corporate suites, and collaborative studios to sustain pristine hygiene and executive presentation.",
    bestFor: "Corporate HQs, Financial Towers, Coworking Spaces, & Embassies",
    priceRange: "Starting from IDR 45,000 / m² or Monthly SLA Agreement",
    specifications: [
      "Daily janitorial management covering workstations, boardrooms, & sanitaries",
      "Green Seal certified non-toxic biodegradable chemistry",
      "Dedicated on-site supervisor with transparent digital audit checklists",
    ],
  },
  {
    id: "eco-sanitization",
    number: "02",
    category: "sanitation",
    categoryLabel: "Deep Sanitization",
    badge: "Eco-Grade",
    title: "Eco-Safe Deep Sanitization & Pathogen Misting",
    image:
      "https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=800&q=80",
    functionSummary:
      "Cold-fogging aerosol decontamination utilizing hospital-grade, food-safe bio-disinfectants that eliminate 99.99% of viral and bacterial pathogens with zero corrosive residue.",
    bestFor: "Public Facilities, Educational Campuses, Dining Venues, & Clinics",
    priceRange: "Starting from IDR 65,000 / m² (Volume scale discounts > 500 m²)",
    specifications: [
      "Eliminates 99.99% of pathogens including airborne spores",
      "Non-corrosive, completely safe for sensitive electronics and upholstery",
      "Official post-treatment hygiene report and safety sign-off",
    ],
  },
  {
    id: "post-construction",
    number: "03",
    category: "specialized",
    categoryLabel: "Specialized",
    badge: "Handover Ready",
    title: "Post-Construction & Fit-Out Detailing",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    functionSummary:
      "Intensive handover-readiness cleaning for architectural builds and luxury interior renovations, extracting micro-fine cement dust, adhesive residue, and paint marks.",
    bestFor: "New Architectural Builds, High-End Residences, & Retail Showrooms",
    priceRange: "Starting from IDR 60,000 / m²",
    specifications: [
      "Industrial multi-stage HEPA H14 micro-particulate vacuuming",
      "Scratch-free glass, millwork, joinery, and structural frame detailing",
      "100% defect-free handover certification guarantee",
    ],
  },
  {
    id: "floor-restoration",
    number: "04",
    category: "specialized",
    categoryLabel: "Restoration",
    title: "Floor Crystallization & Stone Restoration",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    functionSummary:
      "Deep diamond-abrasive restoration and chemical crystallization for Italian marble, granite, terrazzo, and architectural hardwoods, restoring factory natural luster.",
    bestFor: "Hotel Lobbies, Commercial Atriums, & Executive Suites",
    priceRange: "Starting from IDR 85,000 / m²",
    specifications: [
      "Progressive diamond-abrasive polishing sequence",
      "Breathable, non-slip protective nano-crystallization seal",
      "Preserves natural stone mineral pores and prevents liquid etching",
    ],
  },
  {
    id: "hvac-iaq-sanitization",
    number: "05",
    category: "sanitation",
    categoryLabel: "Air Quality",
    title: "HVAC & Indoor Air Quality (IAQ) Decontamination",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    functionSummary:
      "Air circulation system cleansing, evaporator coil decontamination, and duct sanitization to remove airborne mold spores, allergens, and optimize thermal airflow.",
    bestFor: "Boardrooms, Server Facilities, Treatment Rooms, & Sealed Buildings",
    priceRange: "Starting from IDR 350,000 / AC Unit or Duct Point",
    specifications: [
      "Evaporator coil deep cleanse and ductwork disinfection",
      "Odor neutralization and airborne biological allergen extraction",
      "Improves cooling thermal efficiency and reduces energy draw",
    ],
  },
  {
    id: "industrial-facility",
    number: "06",
    category: "industrial",
    categoryLabel: "Industrial",
    badge: "HSE Compliant",
    title: "Industrial Plant & Warehouse Sanitation",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    functionSummary:
      "Heavy-duty degreasing and high-structure dust removal for manufacturing plants, logistics centers, and workshops strictly adhering to HSE and OSHA standards.",
    bestFor: "Factories, Distribution Centers, Warehouses, & Assembly Workshops",
    priceRange: "Custom Quotation Based on Technical Site Assessment",
    specifications: [
      "Eco-friendly industrial hot water degreasing formulations",
      "Certified high-reach structural access and ceiling grid cleaning",
      "K3/HSE certified personnel with specialized safety apparatus",
    ],
  },
  {
    id: "facade-rope-access",
    number: "07",
    category: "corporate",
    categoryLabel: "Commercial & Corporate",
    title: "High-Rise Facade & Glass Rope Access Cleaning",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    functionSummary:
      "External architectural glass and ACP facade cleaning for multi-story towers utilizing international-standard industrial rope access techniques.",
    bestFor: "High-Rise Towers, Commercial Headquarters, & Luxury Hotels",
    priceRange: "Starting from IDR 55,000 / m² (Elevation scale dependent)",
    specifications: [
      "Certified IRATA & Kemenaker High-Altitude Rigging specialists",
      "UIAA and EN international certified safety rope systems",
      "Comprehensive Job Safety Analysis (JSA) and operational insurance",
    ],
  },
  {
    id: "sterile-healthcare",
    number: "08",
    category: "sanitation",
    categoryLabel: "Deep Sanitization",
    badge: "Clinical Grade",
    title: "Healthcare & Laboratory Sterile Environments",
    image:
      "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80",
    functionSummary:
      "Biosafety-compliant sanitization protocols for medical diagnostic clinics, cleanrooms, and pharmaceutical labs requiring strict microbiological controls.",
    bestFor: "Medical Clinics, Bio Laboratories, Cleanrooms, & Pharma Storage",
    priceRange: "Custom SLA Based on Bio-Safety Parameter Level",
    specifications: [
      "ATP bioluminescence swab validation post-decontamination",
      "High-potency sporicidal non-toxic disinfectant formulations",
      "Strict color-coded microfiber anti-cross-contamination protocols",
    ],
  },
];

const categories = computed<CategoryOption[]>(() => [
  {
    id: "all",
    name: "All Services",
    count: rawServices.length,
  },
  {
    id: "corporate",
    name: "Commercial & Corporate",
    count: rawServices.filter((s) => s.category === "corporate").length,
  },
  {
    id: "sanitation",
    name: "Deep Sanitization & Air",
    count: rawServices.filter((s) => s.category === "sanitation").length,
  },
  {
    id: "specialized",
    name: "Specialized & Restoration",
    count: rawServices.filter((s) => s.category === "specialized").length,
  },
  {
    id: "industrial",
    name: "Industrial & Warehouse",
    count: rawServices.filter((s) => s.category === "industrial").length,
  },
]);

const filteredServices = computed<ServiceDetail[]>(() => {
  if (selectedCategory.value === "all") {
    return rawServices;
  }
  return rawServices.filter((s) => s.category === selectedCategory.value);
});
</script>

<template>
  <div class="service-page">
    <CategoryFilterSection
      :categories="categories"
      v-model:selected-category="selectedCategory"
      :total-services="rawServices.length" />

    <ServiceGridSection
      :services="filteredServices"
      :selected-category="selectedCategory" />

    <OrderFlowSection />
  </div>
</template>
