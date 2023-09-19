<script lang="ts" setup>
import { getCapitulos, getContenidos, getCursos } from "@/middlewares/dao";

const data = reactive({
  cursos: await getCursos(),
  capitulos: await getCapitulos("1"), //? parameter: curso id
  contenidos: await getContenidos("1", "1 - Introducción"), //? parameters: curso id, capitulo name
  page: 1,
});

</script>

<template>
  <ViewsContent>
    <CommonPageTitle> Nuestros cursos </CommonPageTitle>

    <div class="w-full border-b border-gray-300 py-3 mt-6">
      <p>Filtros</p>
    </div>

    <div v-if="data.cursos && data.page">
      <div
        class="min-h-[50vh] w-full flex flex-wrap gap-4 mb-14 justify-evenly"
      >
        <CursoCard
          v-for="c in data.cursos.cursos.data"
          :curso="c"
          :key="c.id"
        />
      </div>

      <UPagination
        v-if="data.cursos.cursos.data && data.cursos.cursos.data.length >= 20"
        :model-value="data.page || 1"
        class="mx-auto mb-10"
        size="md"
        :page-count="data.page"
        :total="data.cursos.cursos.data.length"
        :inactive-button="{ color: 'white' }"
      />
    </div>
  </ViewsContent>
</template>
