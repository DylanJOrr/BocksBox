import { Button, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './section.css';

const HomePage = () => {
    const { t } = useTranslation();
	return (
		<div className="HomePage d-flex flex-column">
               <section className="build">
                <div className="d-flex flex-row justify-content-evenly m-5">
                    <Image className="w-50" src="src/img/sushi.png" fluid />
                    <i className="divider-top">1</i>
                    <div className="d-flex flex-column justify-content-center align-items-end m-5">
                        <h2 className="header text-end">{t('h_catch')}</h2>
                        <Button variant="primary" size="lg" href="build">{t('btn_catch')}</Button>
                    </div>
                </div>
			</section>
			<section className="discover bg-primary-subtle">
                <div className="d-flex flex-row justify-content-between m-5">
                    <div className="d-flex flex-column ms-5 justify-content-center align-items-start">
                        <h2 className="header text-start">{t('h_find')}</h2>
                        <Button variant="primary" size="lg" href="build">{t('btn_find')}</Button>
                    </div>
                    <i className="divider">2</i>
                    <Image className="section-img ms-5 my-5" src="src/img/fooditems.png" />
                </div>
		    </section>
			<section className="build bg-light">
                <div className="d-flex flex-row justify-content-between m-5">
                    <Image className="w-50 me-5" src="src/img/foodbox.png" />
                    <i className="divider">3</i>
                    <div className="d-flex flex-column justify-content-center align-items-end m-5">
                        <h2 className="header text-end">{t('h_build')}</h2>
                        <Button variant="primary" size="lg" href="build">{t('btn_build')}</Button>
                    </div>
                </div>
			</section>
			<section className="order bg-primary-subtle">
                <div className="d-flex flex-row justify-content-between m-5">
                    <div className="d-flex flex-column justify-content-center align-items-start m-5">
                        <h2 className="header text-start">{t('h_order')}</h2>
                        <Button variant="primary" size="lg" href="build">{t('btn_order')}</Button>
                    </div>
                    <i className="divider-bottom">4</i>
                    <Image className="section-img m-5" src="src/img/order.png" fluid />
                </div>
			</section>
		</div>
	);
};

export default HomePage;
