<script lang="ts">
import { Curso } from "~/types/cursos";
// const cursos = [
//   {
//     id: "das87-d8asdas-d89as-d0as",
//     title: "Introducción a la Electrónica",
//     desc: "Curso basico de electrónica con arduino y programación en C++",
//     chapters: 5,
//     duration: 120,
//   },
// ]
export default {
  props: {
    curso: {
      type: Object as () => Curso,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="card flex-1 min-w-[250px] h-fit bg-gray-200 px-0 mix-h-42 shadow-x mt-10 max-w-[380px]"
  >
    <figure class="max-h-[150px] object-cover w-full px-0">
      <img
        :src="curso.attributes?.banner ?? '/_nuxt/assets/img/curso-ejemplo.png'"
        class="h-full w-full"
        alt="Curso"
      />
    </figure>

        <div class="card-body">
            <h2 class="card-title">{{ curso.title }}</h2>
            <p>{{ curso.desc }}</p>
            <div class="card-actions justify-end">
                <NuxtLink :to="'/cursos/'">
                    <!-- + curso.id -->
                    <button class="btn btn-primary">Ver mas</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
