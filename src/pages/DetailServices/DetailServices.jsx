import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Axios } from "../../api/axios";
import { Container } from "react-bootstrap";
import { BaseURL } from "../../utils/constants";
import MainButton from "../../components/SharedComponents/MainButton/MainButton";
import { useLanguageContext } from "../../hooks/useLanguageContext";
import { useInView } from "react-intersection-observer";
import "./DetailServices.css";
import TabTitle from "../../utils/TabTitle";

const DetailServices = () => {
  TabTitle("Spark | Service details");

  const [serviceData, setServiceData] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const { language } = useLanguageContext();

  const getServiceData = async () => {
    try {
      const res = await Axios.get("/rest/service_web/");

      const service = res.data?.services.find((e) => e.id == id);

      if (!service) {
        setError(`Service with ID ${id} not found.`);
      } else {
        setServiceData(service);
      }
      console.log(id, serviceData);
    } catch (error) {
      setError("Error fetching services.");
    }
  };

  useEffect(() => {
    getServiceData();
  }, [id]);

  // if (error) {
  //     return <div>{error}</div>;
  // }

  // if (!serviceData) {
  //     return <div>Loading...</div>;
  // }
  const { ref, inView, entry } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger animation when 50% of the item is visible
  });

  // Log values to console whenever inView or entry changes
  useEffect(() => {
    console.log("inView:", inView);
    console.log("entry:", entry);
  }, [inView, entry]);
  return (
    <section
      id="services"
      ref={ref}
      className={`${inView ? "fade-in-bottom " : ""} service-details`}
    >
      <Container>
        <div>
          <div className="img-cover">
            <img
              className="detail-img"
              src={`${BaseURL}/${serviceData?.service_picture}`}
              alt={serviceData?.service_picture}
              loading="lazy"
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
