import { Container } from 'react-bootstrap';
import Hero from '@/components/main/hero/Hero';
import SupplierCard from '@/components/main/supplierCard/supplierCard';
import PlanWeddingCard from '@/components/main/planWeddingCard/planWeddingCard';
import SupplierSlider from '@/components/main/supplierSlider/supplierSlider';
import MoreServices from '@/components/main/moreServices/moreServices';
import ConvenientCatalog from '@/components/main/convenientCatalog/ConvenientCatalog';
import TopLocations from '@/components/main/topLocations/TopLocations';
import Articles from '@/components/main/articles/Articles';
import TopCards from '@/components/main/topCards/TopCards';
import { LocationCard } from '@/types/locationCard';
import { mockLocationCards } from '@/mocks/locationCards';


type HomeProps = {
  topLocations: LocationCard[];
};

export default function Home({ topLocations = mockLocationCards }: HomeProps) {
  return (
    <main>
      <Hero />
      <Container className="px-5">
        <TopCards />
        <ConvenientCatalog />
        <TopLocations
          locations={topLocations}
          title={'ТОП-5 площадок разных категорий г. Москва'}
        />
        <Articles />
        <MoreServices />
        <SupplierSlider />
        <TopLocations
          locations={topLocations}
          title={'Лучшие локации'}
          text="Показать все"
        />
      </Container>
      <SupplierCard />
      <Container>
        <PlanWeddingCard />
      </Container>
    </main>
  );
}

// Здесь должен быть запрос на URL с топовыми площадками.
// export const getServerSideProps = async () => {
//   const API = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_URL : URL;
//   const response = await fetch(`${API}`);
//   const result: LocationCard[] = await response.json();
//   const locations: LocationCard[] = result?.slice(0, 5);

//   if (!locations) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { topLocations: locations },
//   };
// };
