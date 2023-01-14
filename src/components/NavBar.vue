<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top p-1">  
            <div class="container-fluid d-lg-flex flex-lg-column g-0">
              <a class="navbar-brand p-0 mx-lg-auto mb-lg-4" href="/">
                <span class="h4 fw-bold d-block d-lg-none my-auto">
                  <figure class="m-0">
                  <img class="siteLogo rounded-circle img-fluid" src="https://i.postimg.cc/7PWJjb4C/real-estate-logo-600w-1615688014.webp" alt="SiteLogo" style="width: 2.5rem;">
                </figure>
              </span>
                <figure class="container-fluid d-none d-lg-block">
                    <img src="https://i.postimg.cc/vZLnwR9f/Seth-JKallis.jpg" alt="SiteLogo" class="profilePicture img-thumbnail rounded-c d-none d-lg-block" loading="eager">
                </figure>
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0 ms-auto d-flex flex-lg-column text-center">
                  <li class="nav-item">
                    <router-link to="/" class="routerLink">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/resume" class="routerLink">Resume</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/projects" class="routerLink">Projects</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonials" class="routerLink">Testimonials</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact" class="routerLink">Contact</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="routerLink">About</router-link>
                  </li>
                </ul>
                \
              </div>
            </div>
          </nav>
</template>

<script>
export default {
  name: 'NavBarComponent',
}
</script>