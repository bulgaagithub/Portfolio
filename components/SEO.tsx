import React from 'react'
import Head from 'next/head'

type Props = {
    title: string
    meta_name: string
    content: string
}

const SEO: React.FC<Props> = ({ title, meta_name, content }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name={meta_name} content={content} />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;700&display=swap" rel="stylesheet"/>
        </Head>
    )
}

export default SEO;
