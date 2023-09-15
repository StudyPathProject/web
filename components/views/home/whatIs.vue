<template>
  <div
    class="flex flex-col md:flex-row justify-between items-center pt-10 h-fit md:h-[70vh] min-h-[700px] w-full bg-main pb-20 gap-5"
  >
    <div
      class="flex flex-col mx-0 text-center md:ml-32 md:mr-10 mt-10 items-start text-white"
    >
      <h1
        class="font-bold mb-10 text-4xl w-full  text-left text-main"
      >
        ¿Que es StudyPath?
      </h1>
      <p
        class="text-left md:ml-0 w-full text-lg text-main font-regular leading-8 md:mr-20 max-w-sm sm:max-w-2xl" 
      >
        Nuestra plataforma en línea ofrece cursos
        <b>asequibles, becas y opciones de pago flexibles</b> para garantizar
        que todos tengan acceso a una <b>educación de calidad.</b> <br>
        Queremos que cada estudiante elija qué aprender, desde dónde y con
        quiénes, sin importar su situación financiera. Únete a nosotros en este
        viaje hacia una educación justa y empoderadora para todos
      </p>

      <CommonButton class="mt-10 " variant="main-2" to="/cursos"
        >Ver cursos</CommonButton
      >
    </div>

    <img
      src="@/assets/img/whatIs-img.png"
      class="w-[60%] md:w-[30%] self-end mt-10 md:mt-0 md:translate-y-10"
    />
  </div>
</template>
