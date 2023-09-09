<script setup lang="ts">
import {
  WalletIcon,
  ClockIcon,
  AcademicCapIcon,
  BookOpenIcon,
} from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="flex flex-col justify-between h-fit md:h-screen w-full">
    <div class="wave top-0 -translate-y-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 260"
        fill="none"
        style="flex-shrink: 0"
        class="flex flex-col justify-start w-full"
      >
        <path
          d="M1920 224L1840 234.7C1760 245 1600 267 1440 256C1280 245 1120 203 960 170.7C800 139 640 117 480 122.7C320 128 160 160 80 176L0 192V6.10352e-05H80C160 6.10352e-05 320 6.10352e-05 480 6.10352e-05C640 6.10352e-05 800 6.10352e-05 960 6.10352e-05C1120 6.10352e-05 1280 6.10352e-05 1440 6.10352e-05C1600 6.10352e-05 1760 6.10352e-05 1840 6.10352e-05H1920V224Z"
          fill="#26B89B"
        />
      </svg>
    </div>

    <div class="flex-1">
      <div class="w-full flex flex-col items-center mt-20">
        <span class="text-main-3 text-xl font-semibold"
          >Educación de Calidad</span
        >
        <h1 class="text-main-3 text-4xl font-bold mx-auto text-center">
          Una forma innovadora de de estudiar
        </h1>
      </div>

      <div class="flex flex-wrap md:flex-nowrap m-10 md:mt-20 justify-evenly">
        <div class="w-fit md:px-5">
          <ViewsHomeItem
            title="Accesible para todos"
            subTitle="Cursos gratuitos y opciones premium."
          >
            <WalletIcon />
          </ViewsHomeItem>

          <ViewsHomeItem
            class="mt-10"
            title="Enseñanza basada en la experiencia"
            subTitle="Cursos gratuitos y opciones premium."
          >
            <AcademicCapIcon />
          </ViewsHomeItem>
        </div>

        <div class="w-fit md:px-5 flex flex-col">
          <ViewsHomeItem
            title="Aprende a tu ritmo"
            subTitle="Flexibilidad horaria y acceso ilimitado."
          >
            <ClockIcon />
          </ViewsHomeItem>

          <ViewsHomeItem
            class="mt-10"
            title="Apoyo didáctico integral"
            subTitle="Recursos complementarios para facilitar el aprendizaje en todos nuestros cursos."
          >
            <BookOpenIcon />
          </ViewsHomeItem>
        </div>
      </div>
    </div>
  </div>
</template>
