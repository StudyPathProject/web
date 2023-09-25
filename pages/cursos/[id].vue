<script setup lang="ts">
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionRoot,
    TransitionChild
} from '@headlessui/vue'
import { ref, Ref } from 'vue'
import { MinusCircleIcon, PlusCircleIcon, ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'
import { getCapitulos, getContenidos } from '~/middlewares/dao';
import { Capitulo, ContenidosResponse } from '~/types/cursos';

const { id } = useRoute().params

let contenido:Capitulo[] = []

const capitulos = await getCapitulos(id.toString())
    .then((res) => {
        res.curso.data.attributes.Capitulos.map(async (e) => {
            contenido.push(await getContenidos(id.toString(), e.name)
                .then((res) => res.curso.data.attributes.Capitulos))
        })
        return res.curso.data.attributes.Capitulos
    })
    .catch((err) => {console.log(err); return err;})

console.log(capitulos, contenido)
let showOptions: Ref<boolean> = ref(true)

</script>

<template>
    
</template>