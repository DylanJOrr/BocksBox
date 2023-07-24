import { useTranslation } from "react-i18next";

const Footer = () => {
     const {t} = useTranslation();
	return (
		<div className="mx-5">
			<footer className="pt-5">
				<div className="row">
					<div className="col-6 col-md-2 mb-3">
						<h5>{t('foot_sec_h')}</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_home')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_features')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_pricing')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_FAQ')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_about')}
								</a>
							</li>
						</ul>
					</div>

                         <div className="col-6 col-md-2 mb-3">
						<h5>{t('foot_sec_h')}</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_home')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_features')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_pricing')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_FAQ')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_about')}
								</a>
							</li>
						</ul>
					</div>

                         <div className="col-6 col-md-2 mb-3">
						<h5>{t('foot_sec_h')}</h5>
						<ul className="nav flex-column">
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_home')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_features')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_pricing')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_FAQ')}
								</a>
							</li>
							<li className="nav-item mb-2">
								<a href="#" className="nav-link p-0 text-muted">
									{t('foot_sec_about')}
								</a>
							</li>
						</ul>
					</div>
					

					<div className="col-md-5 offset-md-1 mb-3">
						<form>
							<h5>{t('foot_newsletter_h')}</h5>
							<p>{t('foot_newsletter')}</p>
							<div className="d-flex flex-column flex-sm-row w-100 gap-2 me-3">
								<label htmlFor="newsletter1" className="visually-hidden">
									{t('foot_email')}
								</label>
								<input id="newsletter1" type="text" className="form-control" placeholder={t('foot_email')} />
								<button className="btn btn-primary" type="button">
									{t('foot_subscribe')}
								</button>
							</div>
						</form>
					</div>
				</div>

				<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
					<p>© 2023 BocksBox, Inc. {t('foot_copyright')} </p>
					<ul className="list-unstyled d-flex">
						<li className="ms-3">
							<a className="link-dark" href="#">
								<svg className="bi" width="24" height="24">
									<use href="#twitter"></use>
								</svg>
							</a>
						</li>
						<li className="ms-3">
							<a className="link-dark" href="#">
								<svg className="bi" width="24" height="24">
									<use href="#instagram"></use>
								</svg>
							</a>
						</li>
						<li className="ms-3">
							<a className="link-dark" href="#">
								<svg className="bi" width="24" height="24">
									<use href="#facebook"></use>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
