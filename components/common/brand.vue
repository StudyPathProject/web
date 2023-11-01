<template>
    <NuxtLink to="/" class="pl-2 flex flex-shrink-0 items-center capitalize">
        <img class="h-8 w-auto pr-4" src="~/assets/img/logo.png" alt="logo" v-if="logo" />
        <div :class="size" class="-ml-2">
            <span class="text-white pr-1 font-bold">STUDY</span>
            <span class="text-main font-bold">PATH</span>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    props: {
        logo: {
            type: Boolean,
            required: true
        },
        size: {
            type: String,
            required: false
        }
    }
}
</script>