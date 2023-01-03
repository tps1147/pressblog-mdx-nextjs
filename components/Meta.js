import Head from 'next/head';

const Meta = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name='keywords'
        content='writing, content creation, programming, education'
      />
    </Head>
  );
};

export default Meta;

// let's set a default title
Meta.defaultProps = {
  title: 'The Knowledge Shak | Writing & Content',
};
