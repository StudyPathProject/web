<script lang="ts" setup>
export type Curso = {
    id: string;
    attributes: {
      name: string;
      description: string;
      public: boolean;
    };
  };
const cursos = [
  {
    id: "das87-d8asdas-d89as-d0as",
    attributes:{
      name: "Introducción a la Electrónica",
      description: "Curso basico de electrónica con arduino y programación en C++",
      chapters: 5,
      duration: 120,
    }
  },
  {
    id: "das87-d8asdas-d89as-d0as",
    attributes:{
      name: "Introducción a la Electrónica",
      description: "Curso basico de electrónica con arduino y programación en C++",
      chapters: 5,
      duration: 120,
    }
  },
  {
    id: "das87-d8asdas-d89as-d0as",
    attributes:{
      name: "Introducción a la Electrónica",
      description: "Curso basico de electrónica con arduino y programación en C++",
      chapters: 5,
      duration: 120,
    }
  }
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