import Head from "next/head";

const Header = () => {
  return (
    <div>
      <Head>
        <title>TestNext</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
    </div>
  );
};

export default Header;
