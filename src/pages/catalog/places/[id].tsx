import Link from "next/link";
import { GetServerSideProps } from 'next';
import { Place } from '@/types/catalog';
import { URL } from '@/constant';
import { Breadcrumb } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import YaComments from "../../../components/catalog/catalogItem/yaComments/YaComments";
import AnchorBtns from "@/components/catalog/catalogItem/anchorBtns/AnchorBtns";
import { LocationPhotos } from "@/components/catalog/catalogItem/locationPhotos/locationsPhotos";
import styles from "@/styles/catalog/places/Places.module.scss";

type CatalogItemProps = {
  item?: Place,
}

export default function CatalogItem({ item }: CatalogItemProps) {

  return (
    <Container>
      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item linkAs={Link} href='/'>Главная</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href='/catalog'>Каталог</Breadcrumb.Item>
        <Breadcrumb.Item linkAs={Link} href='/catalog'>Площадки</Breadcrumb.Item>
        <Breadcrumb.Item active>{item?.title}</Breadcrumb.Item>
      </Breadcrumb>

      {!item ?
        <p>Loading...</p>
        :
        <>
          {/* тестовые данные для разных ситуаций, потом - удалить */}
          <LocationPhotos photoUrls={[
            'https://picsum.photos/369/224',
            'https://picsum.photos/369/224',
            'https://picsum.photos/369/224',
            'https://picsum.photos/369/224',
            'https://picsum.photos/369/224',
          ]} />

          <div className={styles.location__flex_container}>
            <h3>{item.title}</h3>
            <p>3 зала 2 веранды 2 шатра</p>
          </div>

          <div className={styles.location__flex_container}>
            <p>{item.address.full}</p>
            <Link href='#' className={styles.location__map}>
              <i className="fi-map" /> <p>На карте</p>
            </Link>
          </div>

        </>
      }

      <AnchorBtns />
      {/* все отсутстсвующие поля должны приходить с бэка */}
      <h3>Описание:</h3>
      <div className={styles.location__description_container}>
        <ul className={styles.location__description_container_ul}>
          <li className={styles.location__description_container_li}>Вместимость <span>{item?.capacity || 'нет информации'}</span></li>
          <li className={styles.location__description_container_li}>Расположение <span>{item?.placement || 'нет информации'}</span></li>
          <li className={styles.location__description_container_li}>Кухня <span>{item?.cuisine || 'нет информации'}</span></li>
          <li className={styles.location__description_container_li}>Время работы <span>{item?.hours || 'нет информации'}</span></li>
          <li className={styles.location__description_container_li}>Свой алкоголь <span>{item?.alcohol ? "Разрешено" : "Запрещено"}</span></li>
        </ul>
        <ul className={styles.location__description_container_ul}>
          <li className={styles.location__description_container_li}>Аренда <span>{item?.lease || 'нет информации'}</span></li>
          <li className={styles.location__description_container_li}>Средний чек <span>{item?.avg_price || 'нет информации'}</span></li>
          <li className={styles.location__description_container_li}>Пробковый сбор <span>{item?.fee || 'нет информации'}</span></li>
          <li className={styles.location__description_container_li}>Депозит <span>{item?.deposit || 'нет информации'}</span></li>
          <li className={styles.location__description_container_li}>Продление <span>{item?.continue || 'нет информации'}</span></li>
        </ul>
      </div>

      <h3>Подходит для:</h3>
      <ul>
        <li>Свадьба</li>
        <li>День рождения</li>
        <li>Новый год</li>
      </ul>
      <ul>
        <li>Фуршет</li>
        <li>Мальчишник</li>
        <li>Девичник</li>
      </ul>
      <ul>
        <li> Выпускной</li>
        <li> Корпоратив</li>
        <li> Праздничный банкет</li>
      </ul>
      <h3>Детали о кухне площадки:</h3>
      <p>Европейская, русская, кавказская кухня</p>
      <p>Есть детское меню</p>
      <div id="map">
        Здесь карта Яндекса с объектом
      </div>

      <div id="comments">
        <YaComments />
      </div>

    </Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const response = await fetch(`${URL}/places/${id}`);
  if (response.ok) {
    const result: Place = await response.json();

    if (!result) {
      return {
        notFound: true,
      }
    }

    return {
      props: { item: result },
    }
  }

  return {
    props: {},
  }
}
