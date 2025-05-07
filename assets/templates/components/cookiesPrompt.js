export const cookiesPrompt = `
  <!--========== 
    Start of  cookie modal notification section ==========-->
  <div class="modal-subscribe">
    <!-- Modal -->
    <div class="modal fade" data-bs-backdrop="static" id="myModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog ">
        <div class="modal-content">
          <div class="modal-body p-0 bg-secondary rounded">
            <div class="p-5 text-center">
              <img class="img-fluid px-5" src="images/svg/cookie.svg" alt="">
              <h3>Cookies</h3>
              <p class="text-dark"><b>Hilton</b> uses cookies to
                enhance user experience</p>
              <a href="cookies.html" class="text-primary-gradient
                    fw-bold">Our policy</a>
              <div class="d-grid mt-5">
                <button type="button" class="btn btn-white rounded" data-bs-dismiss="modal" @click="store.acceptCookieUse()">Accept</button>
                <p class="text-dark mt-4">Coupled with
                  <svg class="logo" viewBox="0 0 128 128" width="24" height="24" data-v-53ccc107="">
                    <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-53ccc107=""></path>
                    <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-53ccc107="">
                    </path>
                  </svg>
                  <a href="https://github.com/vuejs/petite-vue" target="_blank" style="color: #42b883;"><b>petite-vue</b></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--========== 
          End of cookie modal notification section ==========-->
`;