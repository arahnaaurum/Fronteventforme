import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import lottie from 'lottie-web/build/player/lottie_light';

export default function Error() {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      const animation = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/animation/city-guide-404.json',
      });

      return () => animation.destroy();
    }
  }, []);

  return (
    <>
      {/* Custom page title attribute */}
      <Head>
        <title>404 | Not Found</title>
      </Head>

      {/* Page content */}
      <main className="page-wrapper">
        <section className="d-flex align-items-center min-vh-100 py-5 bg-secondary">
          <Container className="d-flex justify-content-center text-center">
            <Col xs={12} md={10} lg={8} className="px-5">
              <div className="ratio ratio-16x9 mb-lg-5 mb-4">
                <div ref={animationContainer}></div>
              </div>
              <h1 className="h3 pt-lg-4">
                К сожалению, такой страницы не существует.
              </h1>
              <p className="lead mb-5 pb-lg-2">
                Вероятно, она была удалена или находится по другой ссылке.
              </p>
              <Button
                // @ts-expect-error
                as={Link}
                href="/"
                size="lg"
                variant="primary rounded-pill w-sm-auto w-100 mb-3"
              >
                Вернуться на главную
              </Button>
            </Col>
          </Container>
        </section>
      </main>
    </>
  );
}
