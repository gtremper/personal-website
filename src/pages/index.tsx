import Head from "next/head";
import Kitten from "components/kitten";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Graham Tremper - Home</title>
      </Head>
      <h2>Home</h2>
      <p>Still working on this.</p>
      <Kitten width={420} height={420} />
    </Layout>
  );
}
