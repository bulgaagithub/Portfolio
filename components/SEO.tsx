import React from "react";
import Head from "next/head";

type Props = {
  title: string;
  meta_name: string;
  content: string;
};

const SEO: React.FC<Props> = ({ title, meta_name, content }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name={meta_name} content={content} />
      <link rel="icon" href="/favicon.ico" />
      <script
        defer
        src="https://analytics.us.umami.is/script.js"
        data-website-id="332e042f-27ed-4850-a4fe-cad8619322ed"
      ></script>
    </Head>
  );
};

export default SEO;
