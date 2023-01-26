import Head from 'next/head';

const Meta = ({ title, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content={keywords}
      />
    </Head>
  );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
  title: 'The Knowledge Shak | Writing & Content',
};
