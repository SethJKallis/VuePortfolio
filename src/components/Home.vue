<template>
  <div class="content-container">
    <article id="home" class="section-height">
      <div class="container text-center">
        <div class="row">
          <div class="col-lg">
            <h1 class="display-2 fw-bold" :fullName="fullName">
              Hello {{ fullName }}, I'm <span class="highlight">Seth Kallis</span>
            </h1>
            <p class="lead display-6">
              I am an intern developer and this is my Portfolio.
            </p>
            <span class="nowrap">
              <a href="about" class="btn btn-brand me-3">Learn More</a>
            </span>
            
          </div>
        </div>
      </div>
    </article>
  </div>
</template>
+
<style scoped>
* {
  overflow: hidden;
}
</style>

<script>
export default {
  name: "homeComponent",
  data: function(){
    let fullName = JSON.parse(localStorage.getItem('fullName'))
    return {
      fullName
    }
    
  }
}
</script>
