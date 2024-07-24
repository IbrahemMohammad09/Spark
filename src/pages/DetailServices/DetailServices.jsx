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
import generateAlt from "../../utils/GenerateImageAlt";
import img from "../../images/StudentServices/a.jpg";

const DetailServices = () => {
  const [serviceData, setServiceData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const { language } = useLanguageContext();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(null);
  const getServiceData = async () => {
    setIsLoading(true);
    try {
      const res = await Axios.get("/rest/service_list_web/");

      const service = res.data?.services.find((e) => e.pk == id);
      if (!service) {
        setIsLoading(false);
        setError(`Service with ID ${id} not found.`);
        navigate("/error-page");
      } else {
        setIsLoading(false);
        setServiceData(service);
      }
    } catch (error) {
      setError("Error fetching services.");
    }
  };

  useEffect(() => {
    getServiceData();
  }, [id]);

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });

  return (
    <section
      id="services"
      ref={ref}
      className={`${inView ? "fade-in-bottom " : ""} service-details`}
    >
      <SEO
        title={"Spark | Service details"}
        description={serviceData?.service_description["EN"]}
        name={"Spark"}
        type={"website"}
        keywords={[
          "software service",
          "engineering service",
          serviceData?.name["EN"],
        ]}
      />
      {isLoading && <div className="center-loading"><Loading color={'#2fb0cd'}/></div>}
      <Container>
        <div className="details">
          <div className="img-cover">
            {isLoading && <Loading color="#2fb0cd" />}
            <img
              className="detail-img"
              src={`${BaseURL}/${serviceData?.service_picture_web}`}
              alt={serviceData?.service_picture_web}
              loading="lazy"
              style={{ display: isLoading ? "none" : "block" }}
            />
          </div>
          <div>
            <h2 style={{ textAlign: "center" }}>What, Why and How?</h2>
            <p>{serviceData?.service_description["EN"]}</p>
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
