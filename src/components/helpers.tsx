import { Card } from 'react-bootstrap';
import { Dispatch, SetStateAction } from 'react';

export function renderCardText(title: string, description: string) {
  return (
    <Card.Text className="d-flex align-items-center justify-content-between fs-6">
      <span className="m-0">{title}</span>
      <span className="m-0 text-end">
        <strong>{description}</strong>
      </span>
    </Card.Text>
  );
}

//Показать еще
export function showMoreRender(
  description: string,
  length: number,
  isDetailsOpen: boolean,
  setIsDetailsOpen: Dispatch<SetStateAction<boolean>>
): JSX.Element {
  const new_description = description.slice(0, length) + '...';
  return (
    <>
      {description.length < length ? (
        <p>{description}</p>
      ) : (
        <>
          <p style={isDetailsOpen ? { display: 'none' } : {}}>
            {new_description}
          </p>
          <p style={!isDetailsOpen ? { display: 'none' } : {}}>{description}</p>
          <p
            onClick={() => setIsDetailsOpen((prev) => !prev)}
            className="mb-0 text-primary cursor-pointer fs-base"
            style={{ fontWeight: '500' }}
          >
            {isDetailsOpen ? 'Свернуть' : 'Показать еще'}
          </p>
        </>
      )}
    </>
  );
}

type SlidesCountProps = {
  currentSlide: number;
  totalSlides: number;
};

export const SlidesCount = ({
  currentSlide,
  totalSlides,
}: SlidesCountProps) => (
  <div className="swiper-slides-count text-dark bg-light rounded-2 p-1">
    <i className="fi-image fs-lg me-2"></i>
    <div className="fs-6 fw-bold ps-1 me-2">
      <span>{currentSlide}</span>
      <span>/</span>
      <span>{totalSlides}</span>
    </div>
  </div>
);

// Единый Вид Названия
export function capitalize(str: string) {
  return str.replace(/(^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}
