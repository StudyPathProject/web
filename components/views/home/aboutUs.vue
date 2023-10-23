<template>
  <section class="mx-auto p-4 text-center mt-10">
    <h2 class="text-4xl font-semibold mb-7 text-main-3">¿Quienes somos?</h2>

    <div class="flex flex-wrap my-16 mx-auto gap-14 justify-center sm:w-[90%] w-full">
      <div v-for="e in divs" class="bg-main rounded-xl shadow-md p-4 mx-0 w-full sm:max-w-[300px]">
        <!-- h-96 sm:h-80  w-96 sm:w-64 -->

        <div class="avatar" v-if="e.p">
          <div class="w-full rounded-full bg-neutral-focus text-neutral-content min-w-[120px] max-h-[150px]">
            <img :src="getImg(e.name, e.surname) || ''" class="object-cover h-full w-full" alt="">
          </div>
        </div>

        <div class="avatar placeholder" v-else>
          <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span class="text-3xl uppercase">{{ e.name[0] }}{{ e.surname[0] }}</span>

          </div>
        </div>

        <div class="mb-4">
          <h3 class="text-xl font-bold text-main-3 align-middle mt-5 mb-0 capitalize">{{ e.name }} {{ e.surname }}</h3>
          <p class="text-[#2E4B45] font-medium align-middle">{{ e.rol }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
function getImg(name: string, surname: string): string {
  return `https://firebasestorage.googleapis.com/v0/b/studypath-8db17.appspot.com/o/${name[0]}${surname.split(" ")[0]}.jpeg?alt=media`
}

function u(name: string, surname: string, rol: string, p: boolean) {
  return {
    name,
    surname,
    rol,
    p,
  }
}

const empleados = [
  u("lucio", "capezzuto", "Desarrollador", true),
  u("bautista", "d'hipolito", "Desarrollador", true),
  u("nicolas", "formichelli", "Desarrollador", true),
  u("bautista", "de suto nagy", "Producción", true),
  u("cristian", "pavia", "Producción", true),
  u("maximo", "quintana", "Recursos Humanos", true),
  u("fransisco", "vega", "Finanzas", true),
  u("abigail", "frias", "Marketing", true),

].sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
})

const divs = [
  u("nicolas", "bassin", "Director General", true),
  u("ramiro", "carnicer", "Vicedirector general", true),
  u("mateo", "diaz", "Director de Producción (web)", true),
  u("belen", "ramos", "Directora de Producción (cursos)", true),
  u("lorenzo", "pacheco", "Director de Recursos Humanos", true),
  u("santiago", "romero", "Director de finanzas", true),
  u("angelina", "zabalett", "Directora de Marketing", true),
].concat(empleados)
</script>