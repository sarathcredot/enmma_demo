import Link from "next/link";
import { getImageUrl } from "@/util/image-url-helper";
import { useTranslation } from "react-i18next";

export default function Servicesection({ services }) {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      <div className="row  pt-120">
        <div className="col-lg-8">
          <div className="section-title white-title mb-50 tg-heading-subheading animation-style3">
            <span style={{fontSize:"18px"}}  className="sub-title">{t('mainservice-subtitle')}</span>
            <h2 className="title tg-element-title col-lg-12">{t('mainservice-title')}</h2>
          </div>
        </div>
      </div>
      <div>
        <div className="dev-service-main">
          {services?.map((service) => {
            return <ServiceItem service={service} />
          })}
        </div>
      </div>
    </>
  );
}

export function ServiceItem({ service }) {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="dev-services-section">
      <div className=" col-xl-4 col-md-12 dev-fit-image  ">
        <img src={getImageUrl(service.imageUrl)} alt="" />
      </div>

      <div className="dev-service-content">
        <h1>{service.title}</h1>
        <p>
          {service.description}
        </p>
        <span>
          <Link href={`/services/${service.slug}`} className="btn">
            {t('read-more')}
          </Link>
        </span>
      </div>
    </div>
  );
}