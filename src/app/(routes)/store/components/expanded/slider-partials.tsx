import { NextSvg, PrevSvg } from "./partials-svg";

interface SliderButtonProps {
    direction: 'prev' | 'next';
}

export const SliderButton: React.FC<SliderButtonProps> = ({ direction }) => {
    const isPrev = direction === 'prev';

    const className = `swiper-button ${isPrev ? 'swiper-button-prev-0d6866b3-3cdb-4b4e-8fc1-461c633d7bed swiper-button__prev' : 'swiper-button-next-0d6866b3-3cdb-4b4e-8fc1-461c633d7bed swiper-button__next'} ng-star-inserted`;
    const ariaLabel = isPrev ? 'Previous slide' : 'Next slide';
    const seleniumId = isPrev ? 'SliderArrowPrev' : 'SliderArrowNext';
    const SvgIcon = isPrev ? <PrevSvg /> : <NextSvg />;

    return (
        <div
            _ngcontent-gogcom-store-c26=""
            className={className}
            selenium-id={seleniumId}
            tabIndex={0}
            role="button"
            aria-label={ariaLabel}
            aria-controls="swiper-wrapper-a312c108b4ccf796f"
            style={{}}
        >
            {SvgIcon}
            {/**/}
        </div>
    );
}

