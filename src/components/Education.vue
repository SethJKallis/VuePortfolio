<template>
    <div class="content-container mt-3 mt-md-0">
        <div class="section-height education-section col-11 col-sm-11 col-md mx-auto">
                  <h3 class="display-4 fw-bold text-center mt-5 mt-lg-1">Education</h3>
                  <dl class="row">

                  <div v-for="educate in education" :key="educate" class="box col-12 mb-1 text-center d-flex flex-column justify-content-center align-content-center" data-aos="fade-up">
                        <dt class="fw-bold fs-3">{{ educate.educationLevel }}<br><span class="nowrap">|{{ educate.year }}</span></dt>
                        <dd class="lead fs-4">{{ educate.description }}</dd>
                      </div>
                  </dl>
                  <div class="pt-2">
                    <a href="#work
                    "><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
    </svg>
    <p class="lead">Scroll</p>
  </a>
                  </div>
              </div>
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AOS from 'aos';
AOS.init();
export default {
    name: "educationComponent",
    computed: {
      ...mapGetters(["education"])
    },
    methods: {
      ...mapActions(["fetchEducation"])
    },
    async created(){
      this.fetchEducation();
    }
}
</script>