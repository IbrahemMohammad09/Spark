import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../api/axios";
import { Container } from "react-bootstrap";
import { BaseURL } from "../../utils/constants";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import { useLanguageContext } from "../../hooks/useLanguageContext";
import { useInView } from "react-intersection-observer";
import "./DetailServices.css";
import TabTitle from "../../utils/TabTitle";
import { Loading } from "../../components/Loading/Loading";
import SEO from "../../components/SharedComponents/SEO/SEO";

const DetailServices = () => {
  const [serviceData, setServiceData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const { language } = useLanguageContext();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const getServiceData = async () => {
    try {
      const res = await Axios.get("/rest/service_web/");

      const service = res.data?.services.find((e) => e.id == id);

      if (!service) {
        setError(`Service with ID ${id} not found.`);
        navigate("/error-page");
      } else {
        setServiceData(service);
      }
    } catch (error) {
      setError("Error fetching services.");
    }
  };

  useEffect(() => {
    getServiceData();
  }, [id]);

  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });

  return (
    <section
      id="services"
      ref={ref}
      className={`${inView ? "fade-in-bottom " : ""} service-details`}>
      <SEO title={'Spark | Service details'} description={''} name={'Spark'} type={'website'} keywords={["software develpoment", "software engineer", "student services"]} />
      <Container>
        <div>
          <div className="img-cover">
            {isLoading && <Loading color="#2fb0cd" />}
            <img
              className="detail-img"
              src={`${BaseURL}/${serviceData?.service_picture_web}`}
              alt={serviceData?.service_picture_web}
              loading="lazy"
              style={{ display: isLoading ? "none" : "block" }}
              onLoad={() => setIsLoading(false)}
            />
          </div>
          <div>
            <p>{serviceData?.service_description[language]}</p>
            <h2>What, Why and How?</h2>
            <MainButton
              title={"Service Request"}
              url={`/company-request/${id}`}
              addStyle="service-details-button"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DetailServices;
