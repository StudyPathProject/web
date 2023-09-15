<script lang="ts" setup>
const cursos = [{
  id: 12,
  attributes: {
      name: "Conociendo la electronica",
      description: "Sarasa Sarasa Sarasa",
      public: true,
  },
},
{
  id: 13,
  attributes: {
      name: "Conociendo la electronica",
      description: "Sarasa Sarasa Sarasa",
      public: true,
  },
},
{
  id: 14,
  attributes: {
      name: "Conociendo la electronica",
      description: "Sarasa Sarasa Sarasa",
      public: true,
  },
},
{
  id: 15,
  attributes: {
      name: "Conociendo la electronica",
      description: "Sarasa Sarasa Sarasa",
      public: true,
  },
},
]

const page = ref(1)
</script>

<template>
  <ViewsContent>
    <CommonPageTitle>
      Nuestros cursos
    </CommonPageTitle>

    <div class="w-full border-b border-gray-300 py-3 mt-6">
      <p>Filtros</p>
    </div>

    <div class="min-h-[50vh] w-full flex flex-wrap gap-4 mb-14">
      <CursoCard v-for="c in cursos" :curso="c" :key="c.id" />
    </div>

    <UPagination v-if="cursos.length >= 20" :model-value="page" class="mx-auto mb-10" size="md" :page-count="page"
      :total="cursos.length" :inactive-button="{ color: 'white' }" />

    <!-- <CommonPagination class="w-full" /> -->
  </ViewsContent>
</template>