<template>
  <div class="bg-dark text-white">
    <!--Main content-->
    <main>
      <!--page-hero--->
      <section class="position-relative bg-secondary jarallax overflow-hidden" data-jarallax=".9">
        <!--Parallax image-->
        <img src="/assets/img/turntable2.jpeg" class="jarallax-img opacity-70" alt="" />
        <div class="position-absolute start-0 top-0 w-100 h-100 bg-gradient-dark"></div>
        <div class="container pt-11 pt-lg-14 pb-7 pb-lg-9 position-relative z-index-1">
          <div class="row pt-lg-12 pt-7 pb-lg-7">
            <div class="col-xl-8">
              <h1 class="display-1 mb-4 mb-lg-5">Welcome to Spyntax</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="position-relative" id="next">
        <div class="container py-7 py-lg-12">
          <div class="row mb-5 mb-lg-9 justify-content-between align-items-end">
            <div class="col-lg-7 mx-auto text-center">
              <h2 class="display-4 mb-0" data-aos="fade-up">
                An application for making real-time song requests to DJs.
              </h2>
            </div>
          </div>
          <div class="row pb-lg-7 justify-content-around">
            <!--Feature column-->
            <div class="col-12 col-md-6 col-xl-3 mb-5 mb-xl-0" data-aos="fade-up" data-aos-delay="150">
              <div class="text-center">
                <div
                  class="
                    mb-4
                    position-relative
                    size-70
                    bg-primary
                    text-white
                    rounded-circle
                    center-both
                    overflow-hidden
                  "
                >
                  <i class="bi bi-music-note-beamed fs-3 position-relative"></i>
                </div>
                <h5 class="mb-3">Take Live Requests</h5>
                <p class="mb-4">
                  Spyntax is designed to allow DJ's to take song requests, with the ability to approve or decline them,
                  all in real-time.
                </p>
              </div>
            </div>
            <!--Feature column-->
            <div class="col-12 col-md-6 col-xl-3 mb-5 mb-md-0" data-aos="fade-up" data-aos-delay="250">
              <div class="text-center">
                <div
                  class="
                    mb-4
                    position-relative
                    size-70
                    bg-primary
                    text-white
                    rounded-circle
                    center-both
                    overflow-hidden
                  "
                >
                  <i class="bi bi-shield-exclamation fs-3 position-relative"></i>
                </div>
                <h5 class="mb-3">Keep Your Equipment Safe</h5>
                <p class="mb-4">
                  Spyntax takes the hassle and risk out of human interaction for song requests. That means no more spilt
                  drinks on your equipment, and makes it easier to maintain social distancing.
                </p>
              </div>
            </div>
            <!--Feature column-->
            <div class="col-12 col-md-6 col-xl-3 mb-5 mb-xl-0" data-aos="fade-up" data-aos-delay="200">
              <div class="text-center">
                <div
                  class="
                    mb-4
                    position-relative
                    size-70
                    bg-primary
                    text-white
                    rounded-circle
                    center-both
                    overflow-hidden
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    class="bi bi-qr-code"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 1H1v4h4V1ZM1 11v4h4v-4H1ZM15 1h-4v4h4V1ZM5 0h1v6H0V0h5Zm0 10h1v6H0v-6h5Zm6-10h-1v6h6V0h-5ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Zm-2 4.5V12h1v3h4v1H7v-.5Zm9-1.5v2h-3v-1h2v-1h1ZM2 2h2v2H2V2Zm10 0h2v2h-2V2ZM4 12H2v2h2v-2Z"
                    />
                  </svg>
                </div>
                <h5 class="mb-3">Personal QR Code</h5>
                <p class="mb-4">
                  After creating an account, you'll automatically generate a QR code that patrons can scan to go right
                  to your requests page.
                </p>
              </div>
            </div>

            <!--Feature column-->
            <div class="col-12 col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="250">
              <div class="text-center">
                <div
                  class="
                    mb-4
                    position-relative
                    size-70
                    bg-primary
                    text-white
                    rounded-circle
                    center-both
                    overflow-hidden
                  "
                >
                  <i class="bi bi-currency-dollar fs-3 position-relative"></i>
                </div>
                <h5 class="mb-3">Social Media & Payment Links</h5>
                <p class="mb-4">
                  Inside of your profile you'll find places to add your social media links, as well as links to popular
                  payment apps like Venmo and CashApp. This allows you to build your brand and rake in some tips.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
.btn-primary {
  color: #fff;
  background-color: #23b8aa;
  border-color: #23b8aa;
  box-shadow: 0 0 0 rgba(255, 255, 255, 0), 0 0 0 transparent;
}
</style>

<script>
import { onMounted } from 'vue';

export default {
  setup() {
    onMounted(() => {
    });

    return {};
  },
};
</script>
