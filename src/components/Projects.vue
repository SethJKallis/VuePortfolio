<template>
<div v-if="loadingItems" class="spinnerContainer loader-container">
    <LoadingScreen loadingItems/>
</div>

    <div v-else class="section-height">
        <article id="projects" class="content-container mt-5 mt-lg-0">
              <h2 class="display-4 fw-bold">Projects</h2>
              <div class="container-fluid px-3 pb-1">
                <div class="row text-center gap-1 d-flex justify-content-center align">
                  <div v-for="project in projects" :key="project" :class="project.class" class="col col-sm-12 col-lg d-flex flex-column justify-content-between" data-aos="fade-in">
                        <h3 class="fw-bold g-0 px-0 fs-3 mt-2">{{ project.projectName }}</h3>
                        <figure>
                          <img class="img-thumbnail mx-auto" :src="project.imageUrl" :alt="project.imageAlt" loading="lazy">
                        </figure>
                        <div class="btn-group w-50 mb-3 align-self-center">
                        <a :href="project.githubLink" class="btn" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg><br>GitHub</a>
                        <a :href="project.netlifyLink" class="btn" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-broadcast" viewBox="0 0 16 16">
                          <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                        </svg><br>Live</a>
                        </div>
                  </div>
                </div>
              </div>
            </article>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import LoadingScreen from '@/components/LoadingScreen.vue';
import AOS from 'aos';
AOS.init();
export default {
    name: "projectsComponent",
    components: {
    LoadingScreen
    },
    computed: {
        ...mapGetters(["projects"])
    },
    methods: {
        ...mapActions(["fetchProjects"])
    },
  data: function(){
      return{
        loadingItems:true
      }
    },
    mounted(){
    setTimeout(() =>{
      this.loadingItems = false
    }, 1000)
  },
    
    created() {
        this.fetchProjects();
    },
  
}
</script>