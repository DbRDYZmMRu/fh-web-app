import { store } from  "../../../global.js";

export const notFound = `
        <!-- start section -->  
        <section class="cover-background full-screen ipad-top-space-margin md-h-550px" style="background-image: url(images/404-bg.jpg);">
            <div class="container h-100">
                <div class="row align-items-center justify-content-center h-100">
                    <div class="col-12 col-xl-6 col-lg-7 col-md-9 text-center" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                        <h6 class="text-dark-gray fw-600 mb-5px text-uppercase">Ooops!</h6>
                        <h1 class="fs-200 sm-fs-170 text-dark-gray fw-700 ls-minus-8px">404</h1>
                        <h4 class="text-dark-gray fw-600 sm-fs-22 mb-10px ls-minus-1px">Page not found!</h4>
                        <p class="mb-30px lh-28 sm-mb-30px w-55 md-w-80 sm-w-95 mx-auto">The resource you are looking for doesn't exist or might have been removed.</p>
                        <span @click.prevent="store.directPath('/home')"  class="btn btn-large left-icon btn-rounded btn-dark-gray btn-box-shadow text-transform-none"><i class="fa-solid fa-arrow-left"></i>Back to homepage</span>
                    </div>
                </div>
            </div>
        </section>
        <!-- end section -->
`;