import { store } from  "../../../global.js";




export const musicpool = `
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 text-center">
      <p>This is a paragraph of text.</p>
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 text-center">
      <p>This is a paragraph of text.</p>
    </div>
  </div>
</div>

<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 text-center">
      <p>This is a paragraph of text.</p>
    </div>
  </div>
</div><div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 text-center">
      <p>This is a paragraph of text.</p>
    </div>
  </div>
</div><div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 text-center">
      <p>This is a paragraph of text.</p>
    </div>
  </div>
</div>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 text-center">
      <p>{{store['resources']['musicpool']}}  .</p>
      <input v-model="store['resources']['musicpool']['images']['albumCover2']" type="text" name="" id="" value="" />
    </div>
  </div>
</div>

  <!-- start section -->
  <section class="d-flex align-items-center p-0 full-screen overflow-hidden">
    <div class="sticky-image-distortion-wrapper">
      <nav class="menu fw-600">
      <img srcset="" :src="store['resources']['musicpool']['images']['albumCover2']" alt="Missing image">
        <div class="menu__link active" :data-img="${store['resources']['musicpool']['images']['albumCover2']}" data-bg="#e1dedb">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Collection I</a>
            <div class="sticky-category">
              <div class="category fs-16">Frith Hilton </div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">balenciaga</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d0dce5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Patagonia</a>
            <div class="sticky-category">
              <div class="category fs-16">Graphics</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">patagonia</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#cfd9ca">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Harmour</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">Harmour</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d7d7db">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Circoloco</a>
            <div class="sticky-category">
              <div class="category fs-16">eCommerce</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">circoloco</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#c6d5d5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Cooper</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">cooper</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d3d1cd">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Montana</a>
            <div class="sticky-category">
              <div class="category fs-16">Graphics</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">montana</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d1cbc5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Woodie</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">woodie</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#e1dedb">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Balenciaga</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">balenciaga</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d0dce5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Patagonia</a>
            <div class="sticky-category">
              <div class="category fs-16">Graphics</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">patagonia</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#cfd9ca">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Harmour</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">Harmour</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d7d7db">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Circoloco</a>
            <div class="sticky-category">
              <div class="category fs-16">eCommerce</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">circoloco</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#c6d5d5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Cooper</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">cooper</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d3d1cd">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Montana</a>
            <div class="sticky-category">
              <div class="category fs-16">Graphics</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">montana</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d1cbc5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Woodie</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">woodie</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#e1dedb">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Balenciaga</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">balenciaga</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d0dce5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Patagonia</a>
            <div class="sticky-category">
              <div class="category fs-16">Graphics</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">patagonia</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#cfd9ca">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Harmour</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">Harmour</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d7d7db">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Circoloco</a>
            <div class="sticky-category">
              <div class="category fs-16">eCommerce</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">circoloco</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#c6d5d5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Cooper</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">cooper</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d3d1cd">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Montana</a>
            <div class="sticky-category">
              <div class="category fs-16">Graphics</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">montana</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d1cbc5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Woodie</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">woodie</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#e1dedb">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Balenciaga</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">balenciaga</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d0dce5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Patagonia</a>
            <div class="sticky-category">
              <div class="category fs-16">Graphics</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">patagonia</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#cfd9ca">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Harmour</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">Harmour</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d7d7db">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Circoloco</a>
            <div class="sticky-category">
              <div class="category fs-16">eCommerce</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">circoloco</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#c6d5d5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Cooper</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">cooper</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d3d1cd">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Montana</a>
            <div class="sticky-category">
              <div class="category fs-16">Graphics</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">montana</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        <div class="menu__link" data-img="https://placehold.co/1200x1080" data-bg="#d1cbc5">
          <div class="sticky-image-title">
            <a href="#" class="fs-90 lg-fs-65 md-fs-50 ls-minus-4px md-ls-0px text-dark-gray-hover">Woodie</a>
            <div class="sticky-category">
              <div class="category fs-16">Branding</div>
            </div>
            <div class="title fs-180 xl-fs-160 lg-fs-140 md-fs-75 text-white ls-minus-8px">woodie</div>
          </div>
          <div class="svg-wrapper"></div>
        </div>
        
      </nav>
    </div>
  </section>
  <!-- end section -->


`;
