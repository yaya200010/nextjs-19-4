import Head from "next/head";

function Home() {
  let title = "Tech Design Exp 2023";

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{title}</h1>
      </main>
    </>
  );
}

export default Home;
