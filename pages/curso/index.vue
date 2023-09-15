<script setup lang="ts">
import { Curso } from '~/types/cursos'

defineProps({
    curso:{
        type: Object as () => Curso,
        required: true
    }
})
</script>

<template>
    <ViewsContent>
        {{ curso.id }}
    </ViewsContent>
</template>