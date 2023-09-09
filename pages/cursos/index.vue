<script lang="ts" setup>
import { getCursos } from '@/middlewares/dao';

const data = await getCursos()

console.log(data)
const cursos = data.cursos.data
const page = data.cursos.meta.pagination.page
</script>

<template>
  <ViewsContent>
    <CommonPageTitle>
      Nuestros cursos
    </CommonPageTitle>

    <div class="w-full border-b border-gray-300 py-3 mt-6">
      <p>Filtros</p>
    </div>

    <div class="min-h-[50vh] w-full flex flex-wrap gap-4 mb-14 justify-evenly">
      <CursoCard v-for="c in cursos" :curso="c" :key="c.id" />
    </div>

    <UPagination v-if="cursos && cursos.length >= 20" :model-value="page || 1" class="mx-auto mb-10" size="md"
      :page-count="page" :total="cursos.length" :inactive-button="{ color: 'white' }" />

    <!-- <CommonPagination class="w-full" /> -->
  </ViewsContent>
</template>