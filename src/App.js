import { useContext } from "react";

import Buttons from "./components/Buttons";
import Output from "./components/Output";
import Loading from "./components/Loading";

import { AppContext } from "./contexts/AppContextProvider";

export default function App() {
  const { loading } = useContext(AppContext);

  return (
    <div className="w-screen h-screen grid place-items-center py-10 px-6">
      <div className="min-w-[300px] w-1/2 max-w-[350px]">
        <Buttons />
        {!loading && <Output />}
        {loading && <Loading />}
      </div>
    </div>
  );
}
