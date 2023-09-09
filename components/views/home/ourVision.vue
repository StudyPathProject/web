<template>
    <div
        class="flex flex-row justify-between items-center h-screen w-full bg-gradient-to-b from-[#0E3A32] to-black pb-20 gap-5">
        <img src="@/assets/img/ellipse-img.png" class="h-[90%]">

        <div class="flex flex-col mr-20 mt-10 items-end text-white">
            <h1 class="font-bold mb-10 text-6xl text-right text-white">Nuestra visión</h1>

            <p class="text-right font-regular leading-8 text-white">En StudyPath, nos apasiona la
                educación
                <b>inclusiva y equitativa.</b><br>
                Creemos firmemente en reducir las
                desigualdades monetarias y brindar libertad<br> de elección en el aprendizaje.
            </p>

            <CommonButton class="mt-10" variant="main" to="/cursos">Ver cursos</CommonButton>
        </div>
    </div>
</template>