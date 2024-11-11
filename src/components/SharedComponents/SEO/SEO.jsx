import { Helmet } from "react-helmet-async";
import { useLanguageContext } from "../../../hooks/useLanguageContext";

const SEO = ({ title, description, name, type, keywords = [] }) => {
    const { language } = useLanguageContext();

    return (
        <Helmet>
            {/* Standard SEO tags */}
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
            <meta name="robots" content="index, follow" />

            {/* Set language for content (consider setting lang on <html> element) */}
            {language && <meta http-equiv="content-language" content={language} />}

            {/* Open Graph / Facebook Meta Tags */}
            {type && <meta property="og:type" content={type} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}

            {/* Twitter Meta Tags */}
            {name && <meta name="twitter:creator" content={name} />}
            {type && <meta name="twitter:card" content={type} />}
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
        </Helmet>
    );
};

// Default props to ensure required fields have values
SEO.defaultProps = {
    title: "Spark",
    description: "At Spark Company, we're passionate about helping businesses like yours thrive in the digital landscape. Our team of experts offers a range of services, from web development and UI/UX design to marketing and branding. Whether you're looking to revamp your online presence or launch a new brand, we've got you covered",
    type: "website",
    keywords:[
        "software develpoment",
        "software engineer",
        "student services",
      ]
};

export default SEO;
