import { useEffect } from "react";
import tw from "tailwind-styled-components";
import { Map } from "./components";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>Start</ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;
const ActionItems = tw.div`
  flex-1
`;
