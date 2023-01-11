<template>
      <div v-if="loadingItems" class="spinnerContainer loader-container">
    <LoadingScreen loadingItems/>
</div>
    <div v-else>
        <educationComponent/>
        <workComponent/>
    </div>
</template>

<script>
import educationComponent from "@/components/Education.vue"
import workComponent from "@/components/Work.vue"
import LoadingScreen from "@/components/LoadingScreen.vue";

export default{
    components: {
        educationComponent,
        workComponent,
        LoadingScreen
    },
    data: function(){
        return {
            loadingItems:true
        }
    },
    mounted(){
        setTimeout(() => {
            this.loadingItems = !this.loadingItems
        }, 1000)
    }
}
</script>