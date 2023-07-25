export const ProductLayoutContainerSec = () => (
    <div className="layout-container">
      <div
        className="productcard-thumbnails-slider productcard-slider _gog-module-slider hide-when-content-is-expanded hide-on-small-screens ng-scope scrollbar-17 is-ready"
        gog-slider=""
        slider-event-bus-channel="galleryThumbnails"
        ng-controller="thumbnailsSlider as thumbnailsSlider"
      >
        <div className="productcard-thumbnails-slider__items-container productcard-slider__items-container _gog-module-slider__items-container">
          <div
            className="js-items-wrapper"
            style={{
              width: 3288,
              transition: "transform 333ms ease-in-out 0s",
              transform: "translateX(0px)"
            }}
          >
            <div className="productcard-thumbnails-slider__slide productcard-slider__slide _gog-slider__item js-item slider__item">
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(0)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/157bc2e99089840249fecaeb6d83b5a3a7c8c56b3236885d870c922dece66a1f_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/157bc2e99089840249fecaeb6d83b5a3a7c8c56b3236885d870c922dece66a1f_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/157bc2e99089840249fecaeb6d83b5a3a7c8c56b3236885d870c922dece66a1f_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/157bc2e99089840249fecaeb6d83b5a3a7c8c56b3236885d870c922dece66a1f_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/157bc2e99089840249fecaeb6d83b5a3a7c8c56b3236885d870c922dece66a1f_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/157bc2e99089840249fecaeb6d83b5a3a7c8c56b3236885d870c922dece66a1f_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/157bc2e99089840249fecaeb6d83b5a3a7c8c56b3236885d870c922dece66a1f_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(1)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/7e076aed20116ee913554fe6a1f0e2a8dfcef6b91b045c6c0f48d933fdbb9489_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/7e076aed20116ee913554fe6a1f0e2a8dfcef6b91b045c6c0f48d933fdbb9489_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/7e076aed20116ee913554fe6a1f0e2a8dfcef6b91b045c6c0f48d933fdbb9489_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/7e076aed20116ee913554fe6a1f0e2a8dfcef6b91b045c6c0f48d933fdbb9489_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/7e076aed20116ee913554fe6a1f0e2a8dfcef6b91b045c6c0f48d933fdbb9489_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/7e076aed20116ee913554fe6a1f0e2a8dfcef6b91b045c6c0f48d933fdbb9489_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/7e076aed20116ee913554fe6a1f0e2a8dfcef6b91b045c6c0f48d933fdbb9489_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(2)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/e6a5d51f5340e9c5f1489f0fd2e2055220734e927a89a3df753ca6d1c01d36e2_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/e6a5d51f5340e9c5f1489f0fd2e2055220734e927a89a3df753ca6d1c01d36e2_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/e6a5d51f5340e9c5f1489f0fd2e2055220734e927a89a3df753ca6d1c01d36e2_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/e6a5d51f5340e9c5f1489f0fd2e2055220734e927a89a3df753ca6d1c01d36e2_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/e6a5d51f5340e9c5f1489f0fd2e2055220734e927a89a3df753ca6d1c01d36e2_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/e6a5d51f5340e9c5f1489f0fd2e2055220734e927a89a3df753ca6d1c01d36e2_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/e6a5d51f5340e9c5f1489f0fd2e2055220734e927a89a3df753ca6d1c01d36e2_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(3)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/e3e3f725a0b69b2022e641ea873548338f2342f488536a5fd4fde5ab45b4cef5_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/e3e3f725a0b69b2022e641ea873548338f2342f488536a5fd4fde5ab45b4cef5_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/e3e3f725a0b69b2022e641ea873548338f2342f488536a5fd4fde5ab45b4cef5_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/e3e3f725a0b69b2022e641ea873548338f2342f488536a5fd4fde5ab45b4cef5_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/e3e3f725a0b69b2022e641ea873548338f2342f488536a5fd4fde5ab45b4cef5_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/e3e3f725a0b69b2022e641ea873548338f2342f488536a5fd4fde5ab45b4cef5_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/e3e3f725a0b69b2022e641ea873548338f2342f488536a5fd4fde5ab45b4cef5_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
            </div>
            <div className="productcard-thumbnails-slider__slide productcard-slider__slide _gog-slider__item js-item slider__item">
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(4)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/cd6c6bfcbfc327230f1c84b920f70897b228a61793ad2d93f07b3cb41888ba31_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/cd6c6bfcbfc327230f1c84b920f70897b228a61793ad2d93f07b3cb41888ba31_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/cd6c6bfcbfc327230f1c84b920f70897b228a61793ad2d93f07b3cb41888ba31_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/cd6c6bfcbfc327230f1c84b920f70897b228a61793ad2d93f07b3cb41888ba31_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/cd6c6bfcbfc327230f1c84b920f70897b228a61793ad2d93f07b3cb41888ba31_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/cd6c6bfcbfc327230f1c84b920f70897b228a61793ad2d93f07b3cb41888ba31_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/cd6c6bfcbfc327230f1c84b920f70897b228a61793ad2d93f07b3cb41888ba31_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(5)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/f4477bf395850d996986a4fc457961eee7f029c5483fce73a70698639522b282_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/f4477bf395850d996986a4fc457961eee7f029c5483fce73a70698639522b282_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/f4477bf395850d996986a4fc457961eee7f029c5483fce73a70698639522b282_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/f4477bf395850d996986a4fc457961eee7f029c5483fce73a70698639522b282_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/f4477bf395850d996986a4fc457961eee7f029c5483fce73a70698639522b282_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/f4477bf395850d996986a4fc457961eee7f029c5483fce73a70698639522b282_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/f4477bf395850d996986a4fc457961eee7f029c5483fce73a70698639522b282_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(6)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/adfed7268117f500603555fdb0155acb8b376562b73c9590c492253d0077c8de_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/adfed7268117f500603555fdb0155acb8b376562b73c9590c492253d0077c8de_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/adfed7268117f500603555fdb0155acb8b376562b73c9590c492253d0077c8de_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/adfed7268117f500603555fdb0155acb8b376562b73c9590c492253d0077c8de_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/adfed7268117f500603555fdb0155acb8b376562b73c9590c492253d0077c8de_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/adfed7268117f500603555fdb0155acb8b376562b73c9590c492253d0077c8de_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/adfed7268117f500603555fdb0155acb8b376562b73c9590c492253d0077c8de_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(7)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/a778dbd84e32e5d971fc9e7fa6c1d7aaa66724714aeef7f3763e34359e1fe68c_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/a778dbd84e32e5d971fc9e7fa6c1d7aaa66724714aeef7f3763e34359e1fe68c_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/a778dbd84e32e5d971fc9e7fa6c1d7aaa66724714aeef7f3763e34359e1fe68c_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/a778dbd84e32e5d971fc9e7fa6c1d7aaa66724714aeef7f3763e34359e1fe68c_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/a778dbd84e32e5d971fc9e7fa6c1d7aaa66724714aeef7f3763e34359e1fe68c_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/a778dbd84e32e5d971fc9e7fa6c1d7aaa66724714aeef7f3763e34359e1fe68c_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/a778dbd84e32e5d971fc9e7fa6c1d7aaa66724714aeef7f3763e34359e1fe68c_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
            </div>
            <div className="productcard-thumbnails-slider__slide productcard-slider__slide _gog-slider__item js-item slider__item">
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(8)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/13326c7e4de1dd8cd0ff8297e12578639155559fba1646556b892a72da0de2c3_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/13326c7e4de1dd8cd0ff8297e12578639155559fba1646556b892a72da0de2c3_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/13326c7e4de1dd8cd0ff8297e12578639155559fba1646556b892a72da0de2c3_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/13326c7e4de1dd8cd0ff8297e12578639155559fba1646556b892a72da0de2c3_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/13326c7e4de1dd8cd0ff8297e12578639155559fba1646556b892a72da0de2c3_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/13326c7e4de1dd8cd0ff8297e12578639155559fba1646556b892a72da0de2c3_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/13326c7e4de1dd8cd0ff8297e12578639155559fba1646556b892a72da0de2c3_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(9)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/5ff3d73145a436ad31464cb4d9cbe0424947eeb1db30fb2ccb0c34e04c059a5e_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/5ff3d73145a436ad31464cb4d9cbe0424947eeb1db30fb2ccb0c34e04c059a5e_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/5ff3d73145a436ad31464cb4d9cbe0424947eeb1db30fb2ccb0c34e04c059a5e_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/5ff3d73145a436ad31464cb4d9cbe0424947eeb1db30fb2ccb0c34e04c059a5e_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/5ff3d73145a436ad31464cb4d9cbe0424947eeb1db30fb2ccb0c34e04c059a5e_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/5ff3d73145a436ad31464cb4d9cbe0424947eeb1db30fb2ccb0c34e04c059a5e_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/5ff3d73145a436ad31464cb4d9cbe0424947eeb1db30fb2ccb0c34e04c059a5e_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(10)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/f163be8d9da2d567377c519877e98c0d615e06df61d3f3c5af0226c568d74947_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/f163be8d9da2d567377c519877e98c0d615e06df61d3f3c5af0226c568d74947_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/f163be8d9da2d567377c519877e98c0d615e06df61d3f3c5af0226c568d74947_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/f163be8d9da2d567377c519877e98c0d615e06df61d3f3c5af0226c568d74947_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/f163be8d9da2d567377c519877e98c0d615e06df61d3f3c5af0226c568d74947_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/f163be8d9da2d567377c519877e98c0d615e06df61d3f3c5af0226c568d74947_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/f163be8d9da2d567377c519877e98c0d615e06df61d3f3c5af0226c568d74947_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
              <div
                className="productcard-thumbnails-slider__slide-item"
                ng-click="thumbnailsSlider.show(11)"
              >
                <picture>
                  <source
                    media="(max-width: 450px)"
                    srcSet="https://images.gog-statics.com/4631b67edcee1e165192d9c7ab549647c469e9e41df0f50d3713d93010053236_product_card_v2_mobile_slider_450.jpg"
                  />
                  <source
                    media="(min-width: 451px) and (max-width: 639px)"
                    srcSet="https://images.gog-statics.com/4631b67edcee1e165192d9c7ab549647c469e9e41df0f50d3713d93010053236_product_card_v2_mobile_slider_639.jpg"
                  />
                  <source
                    media="(min-width: 640px) and (max-width: 755px)"
                    srcSet="https://images.gog-statics.com/4631b67edcee1e165192d9c7ab549647c469e9e41df0f50d3713d93010053236_product_card_v2_thumbnail_180.jpg , https://images.gog-statics.com/4631b67edcee1e165192d9c7ab549647c469e9e41df0f50d3713d93010053236_product_card_v2_thumbnail_360.jpg 2x"
                  />
                  <source
                    media="(min-width: 756px)"
                    srcSet="https://images.gog-statics.com/4631b67edcee1e165192d9c7ab549647c469e9e41df0f50d3713d93010053236_product_card_v2_thumbnail_271.jpg , https://images.gog-statics.com/4631b67edcee1e165192d9c7ab549647c469e9e41df0f50d3713d93010053236_product_card_v2_thumbnail_542.jpg 2x"
                  />
                  <img
                    className="productcard-thumbnails-slider__image"
                    src="https://images.gog-statics.com/4631b67edcee1e165192d9c7ab549647c469e9e41df0f50d3713d93010053236_product_card_v2_mobile_slider_639.jpg"
                    alt=""
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        {/* ngIf: thumbnailsSlider.galleryItems.length > slider.galleryItemsPerPage */}
        <div
          className="productcard-thumbnails-slider-nav-wrapper productcard-slider-nav-wrapper ng-scope"
          ng-if="thumbnailsSlider.galleryItems.length > slider.galleryItemsPerPage"
        >
          <a
            className="productcard-thumbnails-slider__nav productcard-slider__nav productcard-slider__nav--left ng-scope"
            ng-click="slider.prev()"
            gog-track-event="{eventAction: 'click', eventCategory: 'productPageGallery', eventLabel: 'GalleryPagination: 0'}"
          >
            <svg className="ic-svg productcard-thumbnails-slider__nav-icon productcard-slider__nav-icon">
              <use xlinkHref="#chevron-left" />
            </svg>
          </a>
          <div className="productcard-thumbnails-slider-pagination productcard-slider-pagination">
            {/* ngRepeat: n in slider.pages track by $index */}
            <a
              className="productcard-thumbnails-slider-pagination__page-marker productcard-slider-pagination__page-marker ng-scope is-selected"
              ng-repeat="n in slider.pages track by $index"
              ng-click="slider.goto($index)"
              ng-class="{
                'is-selected': slider.currentPage == $index
            }"
              gog-track-event="{eventAction: 'click', eventCategory: 'productPageGallery', eventLabel: 'GalleryPagination: 1'}"
            />
            {/* end ngRepeat: n in slider.pages track by $index */}
            <a
              className="productcard-thumbnails-slider-pagination__page-marker productcard-slider-pagination__page-marker ng-scope"
              ng-repeat="n in slider.pages track by $index"
              ng-click="slider.goto($index)"
              ng-class="{
                'is-selected': slider.currentPage == $index
            }"
              gog-track-event="{eventAction: 'click', eventCategory: 'productPageGallery', eventLabel: 'GalleryPagination: 2'}"
            />
            {/* end ngRepeat: n in slider.pages track by $index */}
            <a
              className="productcard-thumbnails-slider-pagination__page-marker productcard-slider-pagination__page-marker ng-scope"
              ng-repeat="n in slider.pages track by $index"
              ng-click="slider.goto($index)"
              ng-class="{
                'is-selected': slider.currentPage == $index
            }"
              gog-track-event="{eventAction: 'click', eventCategory: 'productPageGallery', eventLabel: 'GalleryPagination: 3'}"
            />
            {/* end ngRepeat: n in slider.pages track by $index */}
          </div>
          <a
            className="productcard-thumbnails-slider__nav productcard-slider__nav productcard-slider__nav--right ng-scope"
            ng-click="slider.next()"
            gog-track-event="{eventAction: 'click', eventCategory: 'productPageGallery', eventLabel: 'GalleryPagination: 2'}"
          >
            <svg className="ic-svg productcard-thumbnails-slider__nav-icon productcard-slider__nav-icon">
              <use xlinkHref="#chevron-right" />
            </svg>
          </a>
        </div>
        {/* end ngIf: thumbnailsSlider.galleryItems.length > slider.galleryItemsPerPage */}
      </div>
      <div
        className="content-summary ng-scope"
        content-summary=""
        ng-class="{
    'is-expanded': contentSummary.isExpanded
      }"
      >
        <div className="why-gog why-gog--mobile" why-gog="">
          <div className="title ">
            <div className="title__underline-text">Why buy on GOG.COM?</div>
            <div className="title__additional-options" />
          </div>
          <div className="why-gog__item">
            <svg className="why-gog__item-icon">
              <use xlinkHref="#tick" />
            </svg>
            <b>DRM FREE</b>. No activation or online connection required to play.
          </div>
          <div className="why-gog__item">
            <svg className="why-gog__item-icon">
              <use xlinkHref="#tick" />
            </svg>
            <a
              className="un ng-scope"
              href="https://support.gog.com/hc/en-us/articles/360006129837"
              gog-track-event="{eventAction: 'click', eventCategory: 'productPage', eventLabel: 'moneyBackGuarrant'}"
            >
              <b>Safety and satisfaction</b>
            </a>
            . Stellar support 24/7 and full refunds up to 30 days.
          </div>
        </div>
        <div
          className="content-summary-collapse"
          ng-click="contentSummary.collapseWithBack()"
        >
          <div
            className="title                 content-summary-collapse__title
        "
          >
            <div className="title__underline-text">
              <svg className="content-summary-collapse__icon">
                <use xlinkHref="#chevron-left" />
              </svg>
              Prince of Persia®: The Sands of Time{" "}
            </div>
            <div className="title__additional-options" />
          </div>
        </div>
        <div className="content-summary__list hide-when-content-is-expanded">
          <div
            className="content-summary-item"
            ng-click="contentSummary.expand('description')"
          >
            <div className="content-summary-item__title">
              Description
              <svg className="content-summary-item__icon">
                <use xlinkHref="#chevron-right" />
              </svg>
            </div>
            <div className="content-summary-item__description">
              The Prince returns to the exotic Persia. After his father invades
              the palace of the Maharajah, the Prince, tricked by a treacherous
              vizier, uses a magic dagger to release the dangerous Sands of Time
              from an ornate hourglass. With the aid of a beautiful, mysterious,
              and potentially untrustworthy ally...
            </div>
          </div>
          <div
            className="content-summary-item"
            ng-click="contentSummary.expand('reviews')"
          >
            <div className="content-summary-item__title">
              User reviews
              <div className="productcard-rating productcard-rating--inline">
                <div className="productcard-rating__star-icon-wrapper">
                  <svg className="ic-svg productcard-rating__star-icon">
                    <use xlinkHref="#star-full" />
                  </svg>
                </div>
                <div className="rating productcard-rating__score">4.5/5</div>
              </div>
              <svg className="content-summary-item__icon">
                <use xlinkHref="#chevron-right" />
              </svg>
            </div>
            <div className="content-summary-item__description">
              <div
                className="mobile-slider reviews-slider _gog-module-slider hide-when-content-is-expanded ng-scope scrollbar-17 ng-hide is-ready"
                gog-slider=""
                data-with-dynamic-content="true"
                data-page-offset={20}
                reviews-slider=""
                ng-hide="reviewsSlider.latestReviews.length == 0"
              >
                <div className="mobile-slider__items-container _gog-module-slider__items-container">
                  <div
                    className="js-items-wrapper mobile-slider__items-wrapper reviews-slider__items-wrapper"
                    style={{
                      transition: "transform 333ms ease-in-out 0s",
                      transform: "translateX(0px)"
                    }}
                  >
                    {/* ngRepeat: review in reviewsSlider.latestReviews track by $index */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="content-summary-item"
            ng-click="contentSummary.expand('productDetails')"
          >
            <div className="content-summary-item__title">
              Product details
              <svg className="content-summary-item__icon">
                <use xlinkHref="#chevron-right" />
              </svg>
            </div>
            <div className="content-summary-item__description">
              2003, Ubisoft, PEGI Rating: 12...
            </div>
          </div>
          <div
            className="content-summary-item"
            ng-click="contentSummary.expand('systemRequirements')"
          >
            <div className="content-summary-item__title">
              System requirements
              <svg className="content-summary-item__icon">
                <use xlinkHref="#chevron-right" />
              </svg>
            </div>
            <div className="content-summary-item__description">
              Windows 7, 8, 10, 1 GHz, 256 MB RAM, 3D graphics card compatible
              with DirectX 9.0c and Hardware T&amp;L...
            </div>
          </div>
        </div>
      </div>
      <div className="layout-main-col">
        <div
          className="content-summary-section content-summary-offset"
          content-summary-section-id="description"
        >
          <div className="title ">
            <div className="title__underline-text">Description</div>
            <div className="title__additional-options" />
          </div>
          <div className="description">
            The Prince returns to the exotic Persia. After his father invades the
            palace of the Maharajah, the Prince, tricked by a treacherous vizier,
            uses a magic dagger to release the dangerous Sands of Time from an
            ornate hourglass. With the aid of a beautiful, mysterious, and
            potentially untrustworthy ally, players guide the Prince to recapture
            the Sands of Time and restore peace to the land.
            <ul className="description__features">
              <li className="description__features-point">
                Gravity-defying acrobatics, ferocious combos and the ability to
                bend time to fulfill your destiny
              </li>
              <li className="description__features-point">
                Erase the past, behold the future, and freeze the present in
                real-time for unlimited gameplay variations
              </li>
              <li className="description__features-point">
                Uncover the mysteries of a world never before explored in
                action-adventure gaming
              </li>
            </ul>
            <p className="description__copyrights">
              © 2003 Ubisoft Entertainment. All Rights Reserved. Based on Prince
              of Persia® created by Jordan Mechner. Ubisoft, Ubi.com, and the
              Ubisoft logo are trademarks of Ubisoft Entertainment in the U.S.
              and/or other countries. Prince of Persia is a trademark of Jordan
              Mechner in the U.S. and/or other countries used under license by
              Ubisoft Entertainment.
            </p>
          </div>
          <div>
            <div className="title                     ">
              <div className="title__underline-text">Goodies</div>
              <div className="title__additional-options" />
            </div>
            <div className="goodies goodies--inline">
              <span className="goodies__item">
                <svg className="ic-svg goodies__icon goodies__icon--description">
                  <use xlinkHref="#manuals" />
                </svg>
                <span className="goodies__description-text">
                  manual (12 pages)
                </span>
              </span>
              <span className="goodies__item">
                <svg className="ic-svg goodies__icon goodies__icon--description">
                  <use xlinkHref="#wallpapers" />
                </svg>
                <span className="goodies__description-text">HD wallpapers</span>
              </span>
              <span className="goodies__item">
                <svg className="ic-svg goodies__icon goodies__icon--description">
                  <use xlinkHref="#game-add-ons" />
                </svg>
                <span className="goodies__description-text">
                  fighting animations
                </span>
              </span>
              <span className="goodies__item">
                <svg className="ic-svg goodies__icon goodies__icon--description">
                  <use xlinkHref="#audio" />
                </svg>
                <span className="goodies__description-text">soundtrack</span>
              </span>
              <span className="goodies__item">
                <svg className="ic-svg goodies__icon goodies__icon--description">
                  <use xlinkHref="#artworks" />
                </svg>
                <span className="goodies__description-text">artworks</span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="content-summary-section content-summary-offset"
          content-summary-section-id="systemRequirements"
        >
          <div
            ng-controller="systemRequirements as requirements"
            className="ng-scope"
          >
            <div className="title title--no-margin">
              <div className="title__underline-text">System requirements</div>
              <div className="title__additional-options">
                <div className="system-requirements-selector">
                  <a
                    className="system-requirements-selector__item system-requirements-selector__item--selected"
                    ng-click="requirements.selectOs('windows')"
                    ng-class="{
                            'system-requirements-selector__item--selected': requirements.selectedOsName == 'windows'
                        }"
                  >
                    <svg className="ic-svg system-requirements-selector__icon">
                      <use xlinkHref="#windows" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="system-requirements  table table--without-border">
              <div className="table-header">
                <div
                  className="system-requirements__minimum-header"
                  ng-show="requirements.hasMinimum"
                >
                  Minimum system requirements:
                </div>
                <div
                  className="system-requirements__recommended-header hide-on-small-screens ng-hide"
                  ng-show="requirements.hasRecommended"
                >
                  Recommended system requirements:
                </div>
              </div>
              {/* ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <div
                className="table__row ng-scope"
                ng-repeat="requirement in requirements.selectedOsRequirements track by $index"
                ng-show="!requirements.isEmpty(requirement)"
              >
                <div
                  className="table__row-label system-requirements__label ng-binding"
                  ng-bind="requirement.name"
                >
                  System:
                </div>
                <div
                  className="table__row-content system-requirements__minimum ng-binding"
                  ng-bind-html="requirement.minimum"
                >
                  Windows 7, 8, 10
                </div>
                <div
                  className="table__row-content system-requirements__recommended hide-on-small-screens ng-binding"
                  ng-bind-html="requirement.recommended"
                />
              </div>
              {/* end ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <div
                className="table__row ng-scope"
                ng-repeat="requirement in requirements.selectedOsRequirements track by $index"
                ng-show="!requirements.isEmpty(requirement)"
              >
                <div
                  className="table__row-label system-requirements__label ng-binding"
                  ng-bind="requirement.name"
                >
                  Processor:
                </div>
                <div
                  className="table__row-content system-requirements__minimum ng-binding"
                  ng-bind-html="requirement.minimum"
                >
                  1 GHz
                </div>
                <div
                  className="table__row-content system-requirements__recommended hide-on-small-screens ng-binding"
                  ng-bind-html="requirement.recommended"
                />
              </div>
              {/* end ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <div
                className="table__row ng-scope"
                ng-repeat="requirement in requirements.selectedOsRequirements track by $index"
                ng-show="!requirements.isEmpty(requirement)"
              >
                <div
                  className="table__row-label system-requirements__label ng-binding"
                  ng-bind="requirement.name"
                >
                  Memory:
                </div>
                <div
                  className="table__row-content system-requirements__minimum ng-binding"
                  ng-bind-html="requirement.minimum"
                >
                  256 MB RAM
                </div>
                <div
                  className="table__row-content system-requirements__recommended hide-on-small-screens ng-binding"
                  ng-bind-html="requirement.recommended"
                />
              </div>
              {/* end ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <div
                className="table__row ng-scope"
                ng-repeat="requirement in requirements.selectedOsRequirements track by $index"
                ng-show="!requirements.isEmpty(requirement)"
              >
                <div
                  className="table__row-label system-requirements__label ng-binding"
                  ng-bind="requirement.name"
                >
                  Graphics:
                </div>
                <div
                  className="table__row-content system-requirements__minimum ng-binding"
                  ng-bind-html="requirement.minimum"
                >
                  3D graphics card compatible with DirectX 9.0c and Hardware
                  T&amp;L
                </div>
                <div
                  className="table__row-content system-requirements__recommended hide-on-small-screens ng-binding"
                  ng-bind-html="requirement.recommended"
                />
              </div>
              {/* end ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <p className="system-requrements__additional-requirements">
                This game requires a graphics card that supports Hardware T&amp;L.
                Most Intel video devices dont support this feature. Click{" "}
                <a href="http://www.intel.com/support/graphics/sb/CS-011910.htm">
                  here
                </a>{" "}
                for details
              </p>
            </div>
            <div
              className="system-requirements  table table--without-border show-on-small-screens ng-hide"
              ng-show="requirements.hasRecommended"
            >
              <div className="table-header">
                <div className="system-requirements__recommended-header">
                  Recommended system requirements:
                </div>
              </div>
              {/* ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <div
                className="table__row ng-scope"
                ng-repeat="requirement in requirements.selectedOsRequirements track by $index"
                ng-show="!requirements.isEmpty(requirement)"
              >
                <div
                  className="table__row-label system-requirements__label ng-binding"
                  ng-bind="requirement.name"
                >
                  System:
                </div>
                <div
                  className="table__row-content system-requirements__recommended ng-binding"
                  ng-bind-html="requirement.recommended"
                />
              </div>
              {/* end ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <div
                className="table__row ng-scope"
                ng-repeat="requirement in requirements.selectedOsRequirements track by $index"
                ng-show="!requirements.isEmpty(requirement)"
              >
                <div
                  className="table__row-label system-requirements__label ng-binding"
                  ng-bind="requirement.name"
                >
                  Processor:
                </div>
                <div
                  className="table__row-content system-requirements__recommended ng-binding"
                  ng-bind-html="requirement.recommended"
                />
              </div>
              {/* end ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <div
                className="table__row ng-scope"
                ng-repeat="requirement in requirements.selectedOsRequirements track by $index"
                ng-show="!requirements.isEmpty(requirement)"
              >
                <div
                  className="table__row-label system-requirements__label ng-binding"
                  ng-bind="requirement.name"
                >
                  Memory:
                </div>
                <div
                  className="table__row-content system-requirements__recommended ng-binding"
                  ng-bind-html="requirement.recommended"
                />
              </div>
              {/* end ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <div
                className="table__row ng-scope"
                ng-repeat="requirement in requirements.selectedOsRequirements track by $index"
                ng-show="!requirements.isEmpty(requirement)"
              >
                <div
                  className="table__row-label system-requirements__label ng-binding"
                  ng-bind="requirement.name"
                >
                  Graphics:
                </div>
                <div
                  className="table__row-content system-requirements__recommended ng-binding"
                  ng-bind-html="requirement.recommended"
                />
              </div>
              {/* end ngRepeat: requirement in requirements.selectedOsRequirements track by $index */}
              <p className="system-requrements__additional-requirements">
                This game requires a graphics card that supports Hardware T&amp;L.
                Most Intel video devices dont support this feature. Click{" "}
                <a href="http://www.intel.com/support/graphics/sb/CS-011910.htm">
                  here
                </a>{" "}
                for details
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-side-col">
        <div
          className="content-summary-section content-summary-offset"
          content-summary-section-id="requiredGames"
        />
        <div className="why-gog hide-when-content-is-expanded" why-gog="">
          <div className="title ">
            <div className="title__underline-text">Why buy on GOG.COM?</div>
            <div className="title__additional-options" />
          </div>
          <div className="why-gog__item">
            <svg className="why-gog__item-icon">
              <use xlinkHref="#tick" />
            </svg>
            <b>DRM FREE</b>. No activation or online connection required to play.
          </div>
          <div className="why-gog__item">
            <svg className="why-gog__item-icon">
              <use xlinkHref="#tick" />
            </svg>
            <a
              className="un ng-scope"
              href="https://support.gog.com/hc/en-us/articles/360006129837"
              gog-track-event="{eventAction: 'click', eventCategory: 'productPage', eventLabel: 'moneyBackGuarrant'}"
            >
              <b>Safety and satisfaction</b>
            </a>
            . Stellar support 24/7 and full refunds up to 30 days.
          </div>
        </div>
        <div
          className="content-summary-section"
          content-summary-section-id="productDetails"
        >
          <div className="title title--no-margin">
            <div className="title__underline-text">Game details</div>
            <div className="title__additional-options" />
          </div>
          <div
            //details=""
            className="details table table--without-border ng-scope"
          >
            <div className="table__row details__row">
              <div className="details__category table__row-label">Genre:</div>
              <div className="details__content table__row-content">
                <a
                  href="/games/action"
                  className="details__link ng-scope"
                  gog-track-event="{eventAction: 'click', eventCategory: 'productPageGameDetails', eventLabel: 'CAT: Action'}"
                >
                  Action
                </a>
                -
                <a
                  href="/games/adventure"
                  className="details__link ng-scope"
                  gog-track-event="{eventAction: 'click', eventCategory: 'productPageGameDetails', eventLabel: 'CAT: Adventure'}"
                >
                  Adventure
                </a>
                -
                <a
                  href="/games?genres=fantasy"
                  className="details__link ng-scope"
                  gog-track-event="{eventAction: 'click', eventCategory: 'productPageGameDetails', eventLabel: 'CAT: Fantasy'}"
                >
                  Fantasy
                </a>
              </div>
            </div>
            <div className="table__row details__row">
              <div className="details__category table__row-label">Tags:</div>
              <div className="details__content table__row-content">
                <a
                  href="/games?tags=fantasy"
                  className="details__link details__link--tag"
                >
                  <span className="details__link-text">Fantasy</span>
                  <span>, </span>
                </a>
                <a
                  href="/games?tags=story-rich"
                  className="details__link details__link--tag"
                >
                  <span className="details__link-text">Story Rich</span>
                  <span>, </span>
                </a>
                <a
                  href="/games?tags=atmospheric"
                  className="details__link details__link--tag"
                >
                  <span className="details__link-text">Atmospheric</span>
                  <span>, </span>
                </a>
                <a
                  href="/games?tags=classic"
                  className="details__link details__link--tag"
                >
                  <span className="details__link-text">Classic</span>
                  <span>, </span>
                </a>
                <a
                  href="/games?tags=great-soundtrack"
                  className="details__link details__link--tag"
                >
                  <span className="details__link-text">Great Soundtrack</span>
                  <span>, </span>
                </a>
                <span
                  className="details__link"
                  ng-show="details.isHidden"
                  ng-click="details.onShowMoreClick()"
                >
                  show 5 more...
                </span>
                <a
                  href="/games?tags=platformer"
                  className="details__link details__link--tag ng-hide"
                  ng-hide="details.isHidden"
                >
                  <span className="details__link-text">Platformer</span>
                  <span>, </span>
                </a>
                <a
                  href="/games?tags=third-person"
                  className="details__link details__link--tag ng-hide"
                  ng-hide="details.isHidden"
                >
                  <span className="details__link-text">Third Person</span>
                  <span>, </span>
                </a>
                <a
                  href="/games?tags=hack-and-slash"
                  className="details__link details__link--tag ng-hide"
                  ng-hide="details.isHidden"
                >
                  <span className="details__link-text">Hack and Slash</span>
                  <span>, </span>
                </a>
                <a
                  href="/games?tags=puzzle-platformer"
                  className="details__link details__link--tag ng-hide"
                  ng-hide="details.isHidden"
                >
                  <span className="details__link-text">Puzzle Platformer</span>
                  <span>, </span>
                </a>
                <a
                  href="/games?tags=time-manipulation"
                  className="details__link details__link--tag ng-hide"
                  ng-hide="details.isHidden"
                >
                  <span className="details__link-text">Time Manipulation</span>
                </a>
              </div>
            </div>
            <div className="table__row details__rating details__row ">
              <div className="details__category table__row-label">Works on:</div>
              <div className="details__content table__row-content">
                Windows (7, 8, 10, 11)
              </div>
            </div>
            <div className="table__row details__rating details__row ">
              <div className="details__category table__row-label">
                Release date:
              </div>
              <div className="details__content table__row-content">
                <span className="ng-binding">December 2, 2003</span>
              </div>
            </div>
            <div className="table__row details__rating details__row ">
              <div className="details__category table__row-label">Company:</div>
              <div className="details__content table__row-content">
                <a
                  href="/games?developers=ubisoft"
                  className="details__link ng-scope"
                  gog-track-event="{eventAction: 'click', eventCategory: 'productPageGameDetails', eventLabel: 'Developer: Ubisoft'}"
                >
                  Ubisoft
                </a>
                /
                <a
                  href="/games?publishers=ubisoft"
                  className="details__link ng-scope"
                  gog-track-event="{eventAction: 'click', eventCategory: 'productPageGameDetails', eventLabel: 'Publisher: Ubisoft'}"
                >
                  Ubisoft
                </a>
              </div>
            </div>
            <div className="table__row details__rating details__row ">
              <div className="details__category table__row-label">Size:</div>
              <div className="details__content table__row-content">1.2 GB</div>
            </div>
            <div className="table__row details__rating details__row ">
              <div className="details__category table__row-label">Links:</div>
              <div className="details__content table__row-content">
                <a
                  href="https://www.gog.com/forum/prince_of_persia_series"
                  className="details__link"
                >
                  Forum discussion
                </a>
              </div>
            </div>
            <div className="table__row details__rating details__row ">
              <div className="details__category table__row-label">Rating:</div>
              <div className="details__content table__row-content">
                <div className="age-restrictions">
                  PEGI Rating: 12+ (Violence)
                  <svg className="age-restrictions__icon">
                    <use xlinkHref="#pegi_12" />
                  </svg>
                </div>
              </div>
            </div>
            <hr className="details__separator" />
            <div className="table__row details__rating details__row                          details__row--first                    ">
              <div className="details__category table__row-label">
                Game features
              </div>
              <div className="details__content table__row-content">
                <a
                  href="/games?features=controller_support"
                  className="details__feature ng-scope"
                  gog-track-event="{eventAction: 'click', eventCategory: 'productPageFeatures', eventLabel: 'Features'}"
                >
                  <svg className="details__feature-icon details__feature-icon--controller-support">
                    <use xlinkHref="#controller-support" />
                  </svg>
                  Controller support
                  <svg className="details__feature-chevron-icon">
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="table__row details__rating details__row                          details__row--without-label                    ">
              <div className="details__content table__row-content">
                <a
                  href="/games?features=single"
                  className="details__feature ng-scope"
                  gog-track-event="{eventAction: 'click', eventCategory: 'productPageFeatures', eventLabel: 'Features'}"
                >
                  <svg className="details__feature-icon details__feature-icon--single">
                    <use xlinkHref="#single" />
                  </svg>
                  Single-player
                  <svg className="details__feature-chevron-icon">
                    <use xlinkHref="#chevron-right" />
                  </svg>
                </a>
              </div>
            </div>
            <hr className="details__separator" />
            <div className="table__row details__row details__row--first">
              <div className="details__category table__row-label">Languages</div>
              <div className="details__content table__row-content details__languages-row">
                <div className="details__languages-row--cell details__languages-row--language-name">
                  English
                </div>
                <div className="details__languages-row--cell details__languages-row--audio-support">
                  <svg className="ic-svg details__languages-icon languages__icon--tick">
                    <use xlinkHref="#check_tick" />
                  </svg>
                  audio
                </div>
                <div className="details__languages-row--cell details__languages-row--text-support">
                  <svg className="ic-svg details__languages-icon details__languages-icon--tick">
                    <use xlinkHref="#check_tick" />
                  </svg>
                  text
                </div>
              </div>
            </div>
            <div className="table__row details__row details__row--without-label">
              <div className="details__content table__row-content details__languages-row">
                <div className="details__languages-row--cell details__languages-row--language-name">
                  Deutsch
                </div>
                <div className="details__languages-row--cell details__languages-row--audio-support">
                  <svg className="ic-svg details__languages-icon languages__icon--tick">
                    <use xlinkHref="#check_tick" />
                  </svg>
                  audio
                </div>
                <div className="details__languages-row--cell details__languages-row--text-support">
                  <svg className="ic-svg details__languages-icon details__languages-icon--tick">
                    <use xlinkHref="#check_tick" />
                  </svg>
                  text
                </div>
              </div>
            </div>
            <div className="table__row details__row details__row--without-label">
              <div className="details__content table__row-content details__languages-row">
                <div className="details__languages-row--cell details__languages-row--language-name">
                  français
                </div>
                <div className="details__languages-row--cell details__languages-row--audio-support">
                  <svg className="ic-svg details__languages-icon languages__icon--tick">
                    <use xlinkHref="#check_tick" />
                  </svg>
                  audio
                </div>
                <div className="details__languages-row--cell details__languages-row--text-support">
                  <svg className="ic-svg details__languages-icon details__languages-icon--tick">
                    <use xlinkHref="#check_tick" />
                  </svg>
                  text
                </div>
              </div>
            </div>
            <div className="table__row details__row details__row--without-label">
              <div className="details__content table__row-content details__languages-row">
                <div className="details__languages-row--cell details__languages-row--language-name">
                  русский
                </div>
                <div className="details__languages-row--cell details__languages-row--audio-support">
                  <svg className="ic-svg details__languages-icon languages__icon--tick">
                    <use xlinkHref="#check_tick" />
                  </svg>
                  audio
                </div>
                <div className="details__languages-row--cell details__languages-row--text-support">
                  <svg className="ic-svg details__languages-icon details__languages-icon--tick">
                    <use xlinkHref="#check_tick" />
                  </svg>
                  text
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
