import React from "react";
import { Helmet } from "react-helmet";

const TitleComponent = ({ title, description }) => {
  const defaultTitle = "ЧП Джас - Производство бетонных изделий в Запорожье";
//   const defaultDescription =
    // "ЧП Джас - производитель тротуарной плитки, еврозабора, облицовочного блока, бетонных памятников в Запорожье и области";
  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
      <meta
        name="description"
        // content={description ? description : defaultDescription}
      />
    </Helmet>
  );
};

export default TitleComponent;
