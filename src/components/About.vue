<template>
  <div>
    <article id="about" class="section-height mb-4 mb-lg-0">
      <h2 class="display-6 fw-bolder text-center mt-5 mt-lg-2">ABOUT</h2>
      <div class="container-fluid w-50 mb-2 fs-4" data-aos="fade-right">
        <address class="py-1">
          <h3 class="fw-bold text-center">Address:</h3>
            
            33 Mathew Road,<br>
             Harfield Village,<br>
             Claremont,<br>
             Cape Town,<br>
             7708</address>
      </div>
        <div class="DOB mb-4 d-flex justify-content-center align-content-center flex-column w-50 py-1" data-aos="fade-left">
          <h3 class="fw-bold text-center mx-1">Date Of Birth:</h3>
          <p class="lead m-0 fs-4">27/06/2000</p>
        </div>
        <div class="DOB mb-4 d-flex justify-content-center align-content-center flex-column w-50 py-1" data-aos="fade-right">
          <h3 class="fw-bold text-center mx-2">Spoken Languages:</h3>
          <p class="lead m-0 fs-4">English</p>
          <p class="lead m-0 fs-4">Afrikaans</p>
        </div>
        <div class="DOB mb-4 d-flex justify-content-center align-content-center flex-column w-50 p-3" data-aos="fade-left" data-aos-offset="100">
          <h3 class="fw-bold text-center ">Hobbies:</h3>
          <ul>
            <li class="lead mb-3 fs-4">
              Watching JavaScript and other software development tutorials.
            </li>
            <li class="lead mb-3 fs-4">
              Building projects for family members and local companies.
            </li>
            <li class="lead mb-3 fs-4">
              Writing poetry.
            </li>
            <li class="lead mb-3 fs-4">
              Daily exercise and football/soccer on weekends.
            </li>
          </ul>
        </div>
        
        <div
           class="row d-flex justify-content-center align-content-center  mb-3">
           <div
           class="aspirations col-sm col-lg-8 p-2" data-aos="fade-up" data-aos-offset="200">
           <h3 class="fw-bold text-center">Aspirations:</h3>
             <p class="lead text-center fs-4">
               I am an aspiring developer looking to make waves in the
               programming world. I hope to someday create and own my very own
               company focused on web and app development in South Africa.
             </p>
           </div>
           <div class="DOB mb-4 d-flex justify-content-center align-content-center flex-column w-50 py-1 mt-5" data-aos="fade-up" data-aos-offset="200">
        <h3 class="fw-bold text-center mx-2">Awards/Special Mentions:</h3>
        <ul>
          <li class="lead mb-3 fs-4">Distinction in Business Studies.</li>
          
          <li class="lead m-0 fs-4">Certificate Of Excellence Issued by Life Choices Coding Academy.</li>
        </ul>
      </div>

        <div class="row gap-1 mb-1 px-5 d-flex justify-content-center align-content-center" >
          <h3 class="display-6 text-center fw-bold">Skills</h3>
          <div class="html-skill col-sm-5 col-md p-4" data-aos="fade-down-right" data-aos-offset="200">
            <h3 class="display-6 fw-bold">HTML</h3>
          </div>

          <div class="css-skill col-sm-5 col-md p-4" data-aos="fade-down-left" data-aos-offset="200">
            <h3 class="display-6 fw-bold">CSS</h3>
          </div>
        </div>
        <div class="row gap-1 mb-1 px-5 d-flex justify-content-center align-content-center" >
          <div class="bootstrap-skill col-sm-5 col-md p-4" data-aos="fade-right" data-aos-offset="100">
            <h3 class="display-6 fw-bold">Bootstrap</h3>
          </div>

          <div class="javascript-skill col-sm-5 col-md p-4" data-aos="fade-left" data-aos-offset="100">
            <h3 class="display-6 fw-bold">JavaScript</h3>
          </div>
        </div>
        <div class="row gap-1 mb-1 px-5 d-flex justify-content-center align-content-center">
          <div class="bootstrap-skill col-sm-5 col-md p-4" data-aos="fade-up-right" data-aos-offset="0">
            <h3 class="display-6 fw-bold">Vue JS</h3>
          </div>

          <div class="javascript-skill col-sm-5 col-md p-4" data-aos="fade-up-left" data-aos-offset="0">
            <h3 class="display-6 fw-bold">Node JS</h3>
          </div>
        </div>
        <div class="row gap-1 mb-1 px-5 d-flex justify-content-center align-content-center">
          <div class="bootstrap-skill col-sm-5 col-md p-4" data-aos="fade-up" data-aos-offset="50">
            <h3 class="display-6 fw-bold">MySQL</h3>
          </div>
          <div class="bootstrap-skill col-sm-5 col-md p-4" data-aos="fade-up" data-aos-offset="50">
            <h3 class="display-6 fw-bold">MS WORD</h3>
          </div>

        </div>
        <div class="row gap-1 mb-1 px-5 d-flex justify-content-center align-content-center">
          <div class="bootstrap-skill col-sm-5 col-md p-4" data-aos="fade-up" data-aos-offset="50">
            <h3 class="display-6 fw-bold">MS EXCEL</h3>
          </div>
          <div class="bootstrap-skill col-sm-5 col-md p-4" data-aos="fade-up" data-aos-offset="50">
            <h3 class="display-6 fw-bold">MS OFFICE</h3>
          </div>

        </div>
      </div>
      
      <div class="DOB mb-4 d-flex justify-content-center align-content-center flex-column w-50 py-1 mt-5" data-aos="fade-left" data-aos-offset="0">
        <h3 class="fw-bold text-center mx-2">Contact Information:</h3>
        <a href="mailto:" class="link-custom mb-3 d-flex flex-column fs-5"
                >Email Address: <span class="nowrap">kallisseth@gmail.com</span></a
              >
        <a href="tel:" class="link-custom mb-2 d-flex flex-column fs-5"
                >Phone Number: <span class="nowrap">064 933 8144</span></a
              >

      </div>
    </article>
  </div>
</template>

<script>
// import { onMounted } from 'vue';
import AOS from 'aos';
AOS.init();
export default {
  name: "aboutComponent",
  
};
</script>
