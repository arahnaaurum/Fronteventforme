import Hero from '@/components/main/hero/Hero';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/store';
import { fetchUsers } from '@/store/user/userSlice';
import SupplierCard from '@/components/main/supplierCard/supplierCard';
import PlanWeddingCard from '@/components/main/planWeddingCard/planWeddingCard';
import { CardsLink, PersonServices, ConvenientCatalog } from '@/components/main';


export default function Home() {  
  // кастомизируем диспатч:
  const dispatch = useDispatch<AppDispatch>();

 //для примера - обычный запрос к API и диспатч юзеров в стор через useEffect
  //Все действия производятся на стороне клиента (браузера), в отличие от ssr (см. страницу catalog)
  useEffect(()=> {  
    dispatch(fetchUsers());
  }, [])

  return (
    <>
      <Hero/>
      <CardsLink/>
      <ConvenientCatalog />
      <PersonServices/>
      <SupplierCard/>
      <PlanWeddingCard/>
    </>
  )
}