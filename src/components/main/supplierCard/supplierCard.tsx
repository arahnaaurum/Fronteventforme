import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "@/styles/main/Main.module.scss";


function SupplierCard() {

    return (
        <section className={styles.supplier_card__container + ' bg-secondary'}>
            <Container as='section'>
                <Row className='align-items-center'>
                    <Col md={7} xxl={6} className='text-md-start text-center'>
                        <h2>Стань нашим исполнителем</h2>
                        <p className='pb-3 fs-lg'>Длинная подпись предоставляемой услуги на несколько небольших строчек</p>
                        <Button size='lg' onClick={() => { }}>
                            <Link href='#' className={styles.btn__link}>
                                {'Регистрация\u00A0'}<img src='/img/arrow.png' />
                            </Link>
                        </Button>
                    </Col>
                    <Col md={5}>
                        <div className='d-flex justify-content-center mb-md-0 mb-4'>
                            <Image
                                src='/img/photo.jpg'
                                width={416}
                                height={400}
                                alt='Photo'
                            />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default SupplierCard;