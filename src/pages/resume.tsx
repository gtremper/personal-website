import Head from "next/head";
import Kitten from "components/kitten";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Graham Tremper - Resume</title>
      </Head>
      <h2>Resume</h2>
      <p>Content coming soon.</p>
      <Kitten width={408} height={408} />
    </>
  );
}
