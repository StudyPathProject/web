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

  methods: {
    getImg(x: string | unknown): string | null {
      if (typeof x != "string") return null;
      const env = useRuntimeConfig();
      const route =
        (env.app.API_UPLOADS! as string)?.replace("/graphql", "") +
        x.replace("/uploads", "");
      console.log("ACA", route);
      return route;
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
        :src="
          getImg(
            curso.attributes?.banner?.data?.attributes?.formats?.thumbnail?.url
          ) ?? '/dist/assets/img/curso-ejemplo.png'
        "
        class="h-full w-full"
        alt="Curso"
      />
    </figure>

    <div class="card-body">
      <h2 class="card-title">{{ curso.attributes.name }}</h2>
      <p class="truncate">
        {{ curso.attributes.description }}
      </p>
      <div class="card-actions justify-end">
        <NuxtLink :to="'/cursos/'">
          <!-- + curso.id -->
          <button
            class="btn btn-primary bg-main border-none text-main hover:bg-main-mute"
          >
            Ver mas
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
