<template>
  <div>
    <article id="about" class="section-height mb-4 mb-lg-0">
      <h2 class="display-4 fw-bold">About</h2>
      <div class="container-fluid px-3 mb-2">
        <div
          class="row d-flex justify-content-center align-content-center mb-3">
          <h3 class="display-6 fw-bold text-center">Aspirations</h3>
          <div
            class="aspirations col-sm col-lg-8 p-2">
            <p class="lead text-center">
              I am an aspiring developer looking to make waves in the
              programming world. I hope to someday create and own my very own
              company focused on web and app development in South Africa.
            </p>
          </div>
        </div>
        <div class="row gap-1 mb-1">
          <h3 class="display-6 text-center fw-bold">Skills</h3>
          <div class="html-skill col-sm-12 col-md p-4">
            <h3 class="display-6 fw-bold">HTML</h3>
            <p class="lead nowrap">(In progress)</p>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 95%"
              ></div>
            </div>
          </div>

          <div class="css-skill col-sm-12 col-md p-4">
            <h3 class="display-6 fw-bold">CSS</h3>
            <p class="lead nowrap">(In progress)</p>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-info progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%"
              ></div>
            </div>
          </div>
        </div>
        <div class="row gap-1 mb-1">
          <div class="bootstrap-skill col-sm-12 col-md p-4">
            <h3 class="display-6 fw-bold">Bootstrap</h3>
            <p class="lead nowrap">(In progress)</p>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 75%"
              ></div>
            </div>
          </div>

          <div class="javascript-skill col-sm-12 col-md p-4">
            <h3 class="display-6 fw-bold">JavaScript</h3>
            <p class="lead nowrap">(In progress)</p>
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 65%"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "aboutComponent",
};
</script>
