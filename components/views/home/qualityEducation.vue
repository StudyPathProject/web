<script setup lang="ts">
import { WalletIcon, ClockIcon, AcademicCapIcon, BookOpenIcon } from "@heroicons/vue/24/solid"
</script>

<template>
  <div class="flex flex-col h-screen w-full">
    <div class="w-full flex flex-col items-center mt-20">
      <span class="text-main-3 text-xl font-semibold">Educación de Calidad</span>
      <h1 class="text-main-3 text-4xl font-bold">Una forma innovadora de de estudiar</h1>
    </div>

    <div class="flex flex-wrap m-10 mt-20 justify-evenly">
      <div class="w-fit px-5">
        <ViewsHomeItem title="Accesible para todos" subTitle="Cursos gratuitos y opciones premium.">
          <WalletIcon />
        </ViewsHomeItem>

        <ViewsHomeItem class="mt-10" title="Enseñanza basada en la experiencia" subTitle="Cursos gratuitos y opciones premium.">
          <AcademicCapIcon/>
        </ViewsHomeItem>
      </div>

      <div class="w-fit px-5">
        <ViewsHomeItem title="Aprende a tu ritmo" subTitle="Flexibilidad horaria y acceso ilimitado.">
          <ClockIcon />
        </ViewsHomeItem>

        <ViewsHomeItem class="mt-10" title="Apoyo didáctico integral"
          subTitle="Recursos complementarios para facilitar el aprendizaje en todos nuestros cursos." >
          <BookOpenIcon />
        </ViewsHomeItem>
      </div>
    </div>
  </div>
</template>