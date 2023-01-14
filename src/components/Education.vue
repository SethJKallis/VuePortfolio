<template>
    <div class="content-container">
        <div class="section-height education-section col-11 col-sm-11 col-md mx-auto">
                  <h3 class="display-6 fw-bold text-center">Education</h3>
                  <dl class="row">

                  <div v-for="educate in education" :key="educate" class="box col-12 mb-1 text-center d-flex flex-column justify-content-center align-content-center">
                        <dt class="fw-bold">{{ educate.educationLevel }}<br><span class="nowrap">|{{ educate.year }}</span></dt>
                        <dd class="lead">{{ educate.description }}</dd>
                      </div>
                  </dl>
              </div>
    </div>
    
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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