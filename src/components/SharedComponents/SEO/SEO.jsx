import { Helmet } from "react-helmet-async"
import { useLanguageContext } from "../../../hooks/useLanguageContext"

const SEO = ({title, description, name, type, keywords} ) => {
    let { language } = useLanguageContext();
    return (
        <Helmet>
            { /* Standard metadata tags */ }
            <title>{title}</title>
            <meta name='description' content={description} />
            { /* End standard metadata tags */ }
            <meta name="keywords" content={`${keywords.join(", ")}`}/>
            <meta name="robots" content="index, follow"/>
            <meta http-equiv="content-language" content={language} />
            { /* Facebook tags */ }
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            { /* End Facebook tags */ }
            { /* Twitter tags */ }
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            { /* End Twitter tags */ }
        </Helmet>
    )
}

export default SEO