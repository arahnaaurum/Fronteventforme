import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'
import Preview from '@/components/addProperty/preview/Preview'
import ProgressSideBar from '@/components/addProperty/progressSideBar/ProgressSideBar';
import ContactsForm from '@/components/addProperty/contactsForm/ContactsForm';
import FileUploader from '@/components/addProperty/fileUploader/FileUploader';
import LocationForm from '@/components/addProperty/locationForm/LocationForm';
import BasicForm from '@/components/addProperty/basicForm/BasicForm';
import AreaForm from '@/components/addProperty/areaForm/AreaForm';

const AddPropertyPage = () => {
    // Превью
    const [previewShow, setPreviewShow] = useState(false);
    const handlePreviewClose = () => setPreviewShow(false);
    const handlePreviewShow = () => setPreviewShow(true);
    // Загрузка картинок
    const [gallery, setGallery] = useState<string[]>([]);
    // Базовая информация
    const [title, setTitle] = useState<string>('');
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }
    // Локация
    const [city, setCity] = useState<string>('Москва');
    const [address, setAddress] = useState<string>('');
    // Площадки
    const [areaQuantity, setAreaQuantity] = useState<number>(1);


    return (<>
        {/* Модальное окно превью */}
        <Preview previewShow={previewShow} handlePreviewClose={handlePreviewClose} />

        <Container className='py-5'>
            <Row>
                {/* Основное содержание */}
                <Col lg={8}>
                    <div className='mb-4'>
                        <h1 className='h2 mb-0'>Добавить площадку</h1>
                        <div className='d-lg-none pt-3 mb-2'>65% content filled</div>
                        <ProgressBar variant='warning' now={65} style={{ height: '.25rem' }} className='d-lg-none mb-4' />
                    </div>

                    {/* Базовая информация */}
                    <section id='basic-info' className='card card-body border-0 shadow-sm p-4 mb-4'>
                        <h2 className='h4 mb-4'>
                            <i className='fi-info-circle text-primary fs-5 mt-n1 me-2'></i>
                            Базовая информация
                        </h2>
                        <BasicForm title={title} handleChange={handleChange} location />
                    </section>

                    {/* Локация */}
                    <LocationForm setCity={setCity} setAddress={setAddress} address={address} />

                    {/* Заливка фотографий*/}
                    <FileUploader gallery={gallery} setGallery={setGallery} />

                    {/* Площадки */}
                    <AreaForm index={areaQuantity}/>

                    {/* Контактная информация */}
                    < ContactsForm />

                    {/* Action buttons */}
                    <section className='d-sm-flex justify-content-between pt-2'>
                        <Button size='lg' variant='outline-primary d-block w-100 w-sm-auto mb-3 mb-sm-2' onClick={handlePreviewShow}>
                            <i className='fi-eye-on ms-n1 me-2'></i>
                            Preview
                        </Button>
                        <Link href='/real-estate/property-promotion' passHref>
                            <Button size='lg' variant='primary d-block w-100 w-sm-auto mb-2'>Save and continue</Button>
                        </Link>
                    </section>
                </Col>

                {/* Боковая панель с прогрессом заполнения */}
                <Col lg={{ span: 3, offset: 1 }} className='d-none d-lg-block'>
                    <ProgressSideBar />
                </Col>
            </Row>
        </Container>
    </>
    )
}

export default AddPropertyPage
