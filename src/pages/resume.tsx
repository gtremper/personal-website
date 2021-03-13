import Head from "next/head";
import Kitten from "components/kitten";
import Layout from "components/Layout";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Graham Tremper - Resume</title>
      </Head>
      <h2>Resume</h2>
      <p>Content coming soon.</p>
      <Kitten width={408} height={408} />
    </Layout>
  );
}
