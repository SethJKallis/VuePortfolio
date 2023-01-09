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
          <div
            class="carousel-item active itemOne position-relative"
            data-bs-interval="5000"
          >
            <div
              class="container d-flex justify-content-center"
              data-bs-interval="5000"
            >
              <div class="flip-card">
                <figure class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="https://i.postimg.cc/52Mzr9Hf/Camryn.jpg" alt="Camryn" />
                  </div>
                  <div class="flip-card-back">
                    <p>
                      "Seth Kallis is an exceptional person and colleague, very
                      down to earth. He grasps new ideas very quickly which
                      makes him a very valuable asset to any organization that
                      is lucky to have him." <br /><br />-Camryn Herandien
                    </p>
                  </div>
                </figure>
              </div>
            </div>
          </div>

          <div class="carousel-item itemTwo" data-bs-interval="5000">
            <div class="container d-flex justify-content-center">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <figure class="flip-card-front">
                    <img src="https://i.postimg.cc/ZR0vNCQx/Matthew.jpg" alt="Mathew Thomas" />
                  </figure>
                  <div class="flip-card-back">
                    <p>
                      "Seth is quite a creative and open minded colleague that
                      works well with the task at hand. He thinks of others
                      without compromising his ethical integrity." <br /><br />
                      -Matthew Thomas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item itemThree" data-bs-interval="5000">
            <div class="container d-flex justify-content-center">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <figure class="flip-card-front">
                    <img src="https://i.postimg.cc/76cGnq88/Lazola.jpg" alt="Lazola" />
                  </figure>
                  <div class="flip-card-back">
                    <p>
                      "Seth is a fast learner. He is always eager and inclined
                      to know more. He is a team player and can be a valuable
                      asset to your company." <br /><br />-Lazola Makubalo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item itemFour" data-bs-interval="5000">
            <div class="container d-flex justify-content-center">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <figure class="flip-card-front">
                    <img src="https://i.postimg.cc/TPtWhrtP/faeezy.jpg" alt="Faeezy" />
                  </figure>
                  <div class="flip-card-back">
                    <p>
                      "Seth is a hardworking person, is committed to the task at
                      hand and never let's anything get in his way. A
                      hard-working person focused on growth, knowledge and is
                      diligent worker." <br /><br />-Faeez Miller
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item itemFive" data-bs-interval="5000">
            <div class="container d-flex justify-content-center">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <figure class="flip-card-front">
                    <img
                      class="d-inline"
                      src="https://i.postimg.cc/xjwt3z2C/Joel-Profile.jpg"
                      alt="Joel"
                    />
                  </figure>
                  <div class="flip-card-back">
                    <p>
                      "Seth is a dedicated, creative, go-getter, and
                      well-behaved student. He enjoys working with his
                      classmates and works well on his project. He has gained
                      knowledge of web development, including Bootstrap 5. I
                      will be very delighted to see him get hired as a
                      developer." <br /><br />-Joel Mukanya
                    </p>
                  </div>
                </div>
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
export default {
  name: "testimonialsComponent",
};
</script>
