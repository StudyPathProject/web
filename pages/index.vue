<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center align-center items-center bg-gradient-to-b from-[#26B89B] to-black h-[40rem] w-full">
    <div class="absolute z-20 h-full top-5 w-full flex flex-row justify-center items-center">
      <img src="~/assets/img/home-img.png" class="h-[80%] ml-10" />
      <div class="bg-black/10 backdrop-blur-[2px] backdrop-brightness-[1.0] rounded-3xl absolute h-[80%] w-[60%] z-20">
      </div>
    </div>
    <div class="text-center mb-10 z-20">
      <div class="text-[50px] text-center font-semibold mb-4 drop-shadow-[0_70px_75px_rgba(0,0,0,0.05)]">
        <p class="text-white">Una nueva herramienta</p>
        <p class="text-white">para aprender.</p>
      </div>
      <span class="text-md font-light">Cursos de electronica.</span>

      <div class="w-full flex flex-row justify-center gap-10 mt-10">
        <button class="bg-[#58BCA8] text-[#3D5B89] w-32 h-12 rounded-xl font-bold shadow-lg">Ver cursos</button>
        <button class="bg-[#3D5B89] text-[#58BCA8] w-32 h-12 rounded-xl font-bold shadow-lg">Más info</button>
      </div>
    </div>
  </div>
</template>
