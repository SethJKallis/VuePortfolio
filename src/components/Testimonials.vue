<template>
  <div class="content-container">
    <article id="testimonials" class="section-height">
      <h2 class="display-4 fw-bold">Testimonials</h2>
      <div
        id="carousel"
        class="carousel slide text-center w-100"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div v-for="testimonial in testimonials" v-bind:key="testimonial"
            class="carousel-item" :class="testimonial.class"
            data-bs-interval="5000"
          >
            <div
              class="container d-flex justify-content-center"
              data-bs-interval="5000"
            >
              <div class="flip-card">
                <figure class="flip-card-inner">
                  <div class="flip-card-front">
                    <img v-bind:src="testimonial.imageUrl" :alt="testimonial.imageAlt" />
                  </div>
                  <div class="flip-card-back">
                    <p>{{ testimonial.comment }}</p>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "testimonialsComponent",
  computed: {
    ...mapGetters(["testimonials"])
  },
  methods: {
    ...mapActions(["fetchTestimonials"]),
  },
  created(){
    this.fetchTestimonials();
  }
};
</script>
