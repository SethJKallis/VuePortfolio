<template>
    <div>
        <educationComponent/>
        <workComponent/>
    </div>
</template>

<script>
import educationComponent from "@/components/Education.vue"
import workComponent from "@/components/Work.vue"
export default{
    components: {
        educationComponent,
        workComponent
    }
}
</script>