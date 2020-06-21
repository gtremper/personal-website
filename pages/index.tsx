import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  color: palevioletred;
  font-size: 64px;
  text-align: center;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Graham's Website</title>
      </Head>
      <Title>Graham's Website</Title>
    </>
  );
}
