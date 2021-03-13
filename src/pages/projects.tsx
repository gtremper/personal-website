import Head from "next/head";
import Kitten from "components/kitten";
import Layout from "components/Layout";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Graham Tremper - Projects</title>
      </Head>
      <h2>Projects</h2>
      <p>Under construction.</p>
      <Kitten width={430} height={430} />
    </Layout>
  );
}
