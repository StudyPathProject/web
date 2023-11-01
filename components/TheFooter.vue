<template>
  <div class="w-full bg-main flex text-white">
    <div class="w-11/12 mx-auto pt-12">
      <div class="w-full flex flex-direction-col">
        <div class="left flex-1">
          <CommonBrand :logo="false" size="text-2xl" />
          <p class="text-white/90">Una nueva forma de aprender.</p>

          <div class="flex mt-3">
            <div v-for="red in redes" :key="red.svg">
              <a :href="red.href" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" :fill="iconColor" x="0px" y="0px" width="40" height="40"
                  viewBox="0 0 24 24">
                  <path :d="red.svg">
                  </path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="right flex-1">
          <h2 class="font-bold text-white">Productos</h2>
          <NuxtLink
            class="font-semibold hover:underline underline-offset-4 transition-all text-gray-100/90 hover:text-white"
            v-for="p in products" :to="p.to">{{ p.name }}</NuxtLink>
        </div>
      </div>

      <div class="copy mt-10 pb-10 pt-6 w-full border-t-[0.2px] border-main-mute">
        <p class="mx-auto w-fit text-white/90">&copy; {{ new Date().getFullYear() }} StudyPath. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const iconColor = "#333"

const products = [
  {
    name: "Cursos",
    to: "/cursos"
  }
]

const redes = [
  {
    svg: "M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z",
    href: "https://www.instagram.com/studypathonline/"
  },
  {
    svg: "M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"
  },
  {
    svg: "M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"
  }
]
</script>