<template>
    <div class="content-container">
        <div class="section-height work-section col-11 col-sm-11 col-md mx-auto">
                  <h3 class="display-6 fw-bold text-center">Work</h3>
                  <dl class="row me-md-1">

                        <div v-for="job in work" :key="job" class="box col-12 col-12 mb-1 text-center">
                          <dt class="fw-bold">{{ job.jobTitle }} <br><span class="nowrap">|{{ job.year }}</span></dt>
                          <dd class="lead">{{ job.description }}</dd>
                        </div>
                  </dl>
                  </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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