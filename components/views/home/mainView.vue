<template>
  <div class="flex justify-center align-center items-center h-screen w-full bg-gradient-to-b from-[#26B89B] to-[#0E3A32]">
    <div class="absolute flex flex-row z-20 h-full w-full pb-20 justify-center items-center">
      <img src="@/assets/img/home-img.png" class="h-[80%] ml-10" />
      <div class="bg-black/10 backdrop-blur-[2px] backdrop-brightness-[1.0] rounded-3xl absolute h-[80%] w-[60%] z-20">
      </div>
    </div>
    <div class="text-center mb-10 z-20">
      <div class="text-6xl text-center font-semibold mb-4 drop-shadow-[0_70px_75px_rgba(0,0,0,0.05)]">
        <p class="text-white">Una nueva herramienta</p>
        <p class="text-white mt-2">para aprender.</p>
      </div>
      <span class="text-md font-light text-gray-200 text-xl">Cursos de electronica.</span>

      <div class="w-full flex flex-row justify-center gap-10 mt-10">
        <CommonButton variant="main" to="/cursos">Ver cursos</CommonButton>
        <CommonButton variant="main-2">Mas info</CommonButton>
      </div>
    </div>
  </div>
</template>