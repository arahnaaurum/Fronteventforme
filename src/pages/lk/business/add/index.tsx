import { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import { BusinessTypes, Paths } from '@/constant';
import styles from '@/styles/lk/Lk.module.scss';
import withAuth from '@/hoc/withAuth';
import { useBreadcrumbs } from '@/components/context/useBreadcrumbs';

function AddBusiness() {
  const [business, setBusiness] = useState<string>('');
  let { setIsShown } = useBreadcrumbs();

  useEffect(() => {
    setIsShown(true);
  }, []);

  function handleRadio(e: ChangeEvent<HTMLInputElement>) {
    setBusiness(e.target.value);
  }

  function renderRadios(array: typeof BusinessTypes) {
    return array.map((el, i) => (
      <Form.Check
        key={i}
        id={el.name}
        type="radio"
        value={el.name}
        label={el.name}
        checked={business === el.name}
        onChange={handleRadio}
        className="mb-2"
      />
    ));
  }

  return (
    <Container className="px-5">
      <h2>Добавление бизнеса</h2>
      <div className={styles.lk__header}>
        <i className="fi-grid" /> <h3>Категория</h3>
      </div>

      <Form.Group
        as={Row}
        className="border-bottom pb-3 mt-2 mb-4"
        controlId="info-is_company"
      >
        <Form.Label>
          <p className={styles.lk__text}>Выберите специальность бизнеса:</p>
        </Form.Label>
        <Col>{renderRadios(BusinessTypes.slice(0, 6))}</Col>

        <Col>{renderRadios(BusinessTypes.slice(7, 13))}</Col>

        <Col>{renderRadios(BusinessTypes.slice(14, 20))}</Col>

        <Col>{renderRadios(BusinessTypes.slice(21))}</Col>
      </Form.Group>

      <Button
        // @ts-ignore: bootstrap bag
        as={Link}
        href={business === 'Площадки' ? Paths.AddPlace : Paths.AddBusiness}
        disabled={business === ''}
        className={`${styles.lk__business_btn} mt-4`}
      >
        <div>
          Следующий шаг
          <i className="fi-chevron-right" />
        </div>
      </Button>
    </Container>
  );
}

export default withAuth(AddBusiness);
