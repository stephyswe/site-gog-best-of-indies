import { SliderButton } from "./slider-partials";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const dataSlideItems = [
  {
    image: {
      one: {
        srcSet: [
          {
            type: "image/webp",
            srcSet: "https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243.webp, https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243_2x.webp 2x",
          }, {
            type: "image/jpeg",
            srcSet: "https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243.jpg, https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243_2x.jpg 2x"
          }
        ]
      },
      two: {
        srcSet: [
          {
            type: "image/webp",
            srcSet: "https://images.gog-statics.com/79e3c5992b28ebc88c7979bfea2d18504f239c5da022f9549ac5dc0ea12dadfd_product_tile_extended_432x243.webp, https://images.gog-statics.com/79e3c5992b28ebc88c7979bfea2d18504f239c5da022f9549ac5dc0ea12dadfd_product_tile_extended_432x243_2x.webp 2x",
          }, {
            type: "image/jpeg",
            srcSet: "https://images.gog-statics.com/79e3c5992b28ebc88c7979bfea2d18504f239c5da022f9549ac5dc0ea12dadfd_product_tile_extended_432x243.jpg, https://images.gog-statics.com/79e3c5992b28ebc88c7979bfea2d18504f239c5da022f9549ac5dc0ea12dadfd_product_tile_extended_432x243_2x.jpg 2x"
          }
        ]
      }
    }
  },
  {
    image: {
      one: {
        srcSet: [
          {
            type: "image/webp",
            srcSet: "https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243.webp, https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243_2x.webp 2x",
          }, {
            type: "image/jpeg",
            srcSet: "https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243.jpg, https://images.gog-statics.com/37d4a208d1f5bb0e163da540ac894ba46a7d566ede31aaaefc74bbcd46ebd190_product_tile_extended_432x243_2x.jpg 2x"
          }
        ]
      },
      two: {
        srcSet: [
          {
            type: "image/webp",
            srcSet: "https://images.gog-statics.com/79e3c5992b28ebc88c7979bfea2d18504f239c5da022f9549ac5dc0ea12dadfd_product_tile_extended_432x243.webp, https://images.gog-statics.com/79e3c5992b28ebc88c7979bfea2d18504f239c5da022f9549ac5dc0ea12dadfd_product_tile_extended_432x243_2x.webp 2x",
          }, {
            type: "image/jpeg",
            srcSet: "https://images.gog-statics.com/79e3c5992b28ebc88c7979bfea2d18504f239c5da022f9549ac5dc0ea12dadfd_product_tile_extended_432x243.jpg, https://images.gog-statics.com/79e3c5992b28ebc88c7979bfea2d18504f239c5da022f9549ac5dc0ea12dadfd_product_tile_extended_432x243_2x.jpg 2x"
          }
        ]
      }
    }
  }
]

export const SlideItemSource = ({ data, blur, selId }: any) => (
  <div
    _ngcontent-gogcom-store-c31=""
    className="picture-slider__image-placeholder ng-star-inserted"
    _nghost-gogcom-store-c30=""
  >
    <picture
      _ngcontent-gogcom-store-c30=""
      className={`${blur ? "picture-slider--blur" : "picture-slider"}`}
    >
      {data.srcSet.map((item: any) => {
        return (
          <source
            key={item.srcSet}
            _ngcontent-gogcom-store-c30=""
            srcSet={item.srcSet}
            type={item.type}
            className="ng-star-inserted" />
        );
      })}
      {/**/}
      <img
        selenium-id={selId ? "" : null}
        _ngcontent-gogcom-store-c30=""
        className="ng-star-inserted" />
      {/**/}
    </picture>
  </div>
);


const SlideItem = ({ image }: any) => (
  <div
    data-swiper-slide-index={0}
    className="swiper-slide swiper-slide-active ng-star-inserted"
    style={{ width: 432 }}
    role="group"
    aria-label="1 / 11"
  >
    {/**/}
    <div
      _ngcontent-gogcom-store-c31=""
      className="picture-slider__image-wrapper ng-star-inserted"
    >
      <SlideItemSource data={image.one} blur />
      <SlideItemSource data={image.two} selId="SliderItem" />
      {/**/}
    </div>
    {/**/}
    {/**/}
    {/**/}
  </div>
)

// Container component
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      _ngcontent-gogcom-store-c47=""
      className="product-tile-extended__slider-wrapper ng-tns-c47-15"
    >
      <div
        _ngcontent-gogcom-store-c47=""
        className="product-tile-extended__slider ng-tns-c47-15"
      >
        <div
          _ngcontent-gogcom-store-c47=""
          className="ng-tns-c47-15"
          _nghost-gogcom-store-c31=""
          selenium-id="productTileExtendedSlider"
          style={{
            height: "100%",
            width: "100%"
          }}
        >
          <div _ngcontent-gogcom-store-c31="" _nghost-gogcom-store-c26="" style={{
            height: "100%",
            width: "100%"
          }}>
            <div
              _ngcontent-gogcom-store-c26=""
              className="swiper-container swiper-container-0d6866b3-3cdb-4b4e-8fc1-461c633d7bed stroked"
              style={{
                height: "100%",
                width: "100%"
              }}
            >
              <div _ngcontent-gogcom-store-c26="" className="swiper-content" style={{
                height: "100%",
                width: "100%"
              }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Using the Container component inside ProductExpandedSlider
export const ProductExpandedSlider = () => {
  return (
    <Container>
      <SwiperDemo />
    </Container>
  );
};

const SliderComponent = () => (
  <>
    <div
      _ngcontent-gogcom-store-c26=""
      selenium-id="SliderContent"
      className="swiper-component-0d6866b3-3cdb-4b4e-8fc1-461c633d7bed swiper-pagination-padding"
    >
      <div
        _ngcontent-gogcom-store-c31=""
        selenium-id="Slider"
        className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
      >
        {/**/}
        {/**/}
        {/**/}
        <div
          className="swiper-wrapper"
          id="swiper-wrapper-a312c108b4ccf796f"
          aria-live="off"
          style={{
            transform: "translate3d(-432px, 0px, 0px)",
            transitionDuration: "0ms",
          }}
        >
          <div
            data-swiper-slide-index={10}
            className="swiper-slide swiper-slide-duplicate swiper-slide-prev ng-star-inserted"
            style={{ width: 432 }}
            role="group"
            aria-label="11 / 11"
          >
            {/**/}
          </div>
          {/**/}
          {dataSlideItems.map((item, index) => (
            <SlideItem key={index} {...item} />
          ))}
          {/**/}
        </div>
        {/**/}
      </div>
    </div>
    <div _ngcontent-gogcom-store-c26="" className="tab-styles">
      <SliderButton direction="prev" />
      {/**/}
      <div
        _ngcontent-gogcom-store-c26=""
        className="swiper-pagination swiper-pagination-0d6866b3-3cdb-4b4e-8fc1-461c633d7bed" />
      <SliderButton direction="next" />
      {/**/}
    </div>
  </>
)

export const SwiperDemo = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="swiper-component-0d6866b3-3cdb-4b4e-8fc1-461c633d7bed swiper-pagination-padding"
      >
        {dataSlideItems.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideItemSource data={item.image.two} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

