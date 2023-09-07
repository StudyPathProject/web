<script lang="ts">
type Curso = {
    id: string;
    title: string;
    desc: string;
    chapters: number;
    duration: number;
}

// defineProps({
// })

export default {
    props: {
        curso: {
            type: Object as () => Curso,
            required: true
        }
    }
}
</script>

<template>
    <div class="card flex-1 min-w-[250px] h-fit bg-gray-200 px-0 mix-h-42 shadow-x mt-10">
        <figure class="max-h-[150px] object-cover w-full px-0">
            <img src="~/assets/img/curso-ejemplo.png" class="h-full w-full" alt="Curso" />
        </figure>

        <div class="card-body">
            <h2 class="card-title">{{ curso.title }}</h2>
            <p>{{ curso.desc }}</p>
            <div class="card-actions justify-end">
                <NuxtLink :to="'/cursos/'">
                    <!-- + curso.id -->
                    <button class="btn btn-primary">Ver mas</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>