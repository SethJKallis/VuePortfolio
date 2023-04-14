<template>
    <div id="work" class="content-container">
        <div class="section-height work-section col-11 col-sm-11 col-md mx-auto">
                  <h3 class="display-4 fw-bold text-center">Work</h3>
                  <dl class="row">

                    <div class="hoverLoopContainer">
                      <div v-for="job in work" :key="job" class="box col-12 mb-1 text-center d-flex flex-column justify-content-center align-content-center" data-aos="fade-in">
                        <dt class="fw-bold fs-3">{{ job.jobTitle }} <br><span class="nowrap">|{{ job.year }}</span></dt>
                        <dd class="lead fs-4">{{ job.description }}</dd>
                      </div>
                    </div>
                  </dl>
                  </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AOS from 'aos';
AOS.init();

export default {
    name: "workComponent",
    computed: {
      ...mapGetters(["work"])
    },
    methods: {
      ...mapActions(["fetchWork"])
    },
    created(){
      this.fetchWork();
    }
}
</script>