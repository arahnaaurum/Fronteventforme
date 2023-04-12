import Sidebar from "@/components/catalog/sidebar/Sidebar";
import Link from "next/link";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


export default function Catalog() {

  return (
    <Container>

      <Breadcrumb className='breadcrumb'>
        <Breadcrumb.Item linkAs={Link} href='/'>Главная</Breadcrumb.Item>
        <Breadcrumb.Item active>Каталог</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Sidebar />
      </Row>
      

    </Container>
  )
}



//Это специальная функция next для запросов на стороне сервере. Ее наличие обеспечивает ssr:
export async function getServerSideProps() {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  // так можно обращаться к стору прямо из специальных функций Next, но это не рекомендуется
  //Лучше получать данные в компоненте через props и затем диспатчить их в стор из самого компонета.
  // store.dispatch(fetchUsers());

  return {
    props: {
      items: data
    },
  };
}