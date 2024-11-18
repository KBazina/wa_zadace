<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Proizvodi</h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          @click="onThePage(index)"
          class="group relative"
          v-for="(proizvod, index) in proizvodi"
          :key="index"
        >
          <img
            :src="proizvod.slike[0]"
            :alt="`Front of ${proizvod.naziv}`"
            class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
          />
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a href="#">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  {{ proizvod.naziv }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">
                Velicine: {{ proizvod.velicine }}
              </p>
            </div>
            <p class="text-sm font-medium text-gray-900">
              ${{ proizvod.cijena }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const router = useRouter();
let proizvodi = ref([
  {
    id: 0,
    naziv: "",
    cijena: 0,
    velicine: [],
    slike: [],
  },
]);
onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/proizvodi");
    proizvodi.value = response.data;
    console.log(proizvodi.value[1].cijena);
  } catch (error) {
    console.error("Greška u dohvatu podataka: ", error);
  }
});
const onThePage = (index) => {
  router.push(`/proizvod/${index + 1}`);
};
</script>
