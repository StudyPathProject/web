<template>
  <div
    class="md:h-screen w-full bg-gradient-to-b from-[#0E3A32] to-black flex flex-col -translate-y-1"
  >
    <div
      class="flex-1 flex flex-col md:flex-row justify-between items-center gap-5"
    >
      <img
        src="@/assets/img/ellipse-img.png"
        class="w-[60%] md:w-[30%] self-start md:order-1 order-2 mb-10"
      />

      <div
        class="flex flex-col mr-5 md:mr-32 mt-10 items-end text-white order-1 md:order-2"
      >
        <h1 class="font-bold mb-10 text-4xl text-right text-white">
          Nuestra visión
        </h1>

        <p class="text-right font-regular text-lg leading-8 text-white">
          En StudyPath, nos apasiona la educación <b>inclusiva y equitativa.</b
          ><br />
          Creemos firmemente en reducir las desigualdades monetarias y brindar
          libertad<br />
          de elección en el aprendizaje.
        </p>

        <CommonButton class="mt-10" variant="main" to="/cursos"
          >Ver cursos</CommonButton
        >
      </div>
    </div>

    <div class="wave bottom-0 translate-y-5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 260"
        fill="none"
        style="flex-shrink: 0"
        class="flex flex-col justify-end w-full"
      >
        <path
          d="M0 36L80 25.3C160 15 320 -7.00001 480 3.99999C640 15 800 57 960 89.3C1120 121 1280 143 1440 137.3C1600 132 1760 100 1840 84L1920 68V260H1840C1760 260 1600 260 1440 260C1280 260 1120 260 960 260C800 260 640 260 480 260C320 260 160 260 80 260H0V36Z"
          fill="#26B89B"
        />
      </svg>
    </div>
  </div>
</template>
