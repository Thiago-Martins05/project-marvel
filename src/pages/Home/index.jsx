import "./style.css";
import { CiSearch } from "react-icons/ci";

function Home() {
  return (
    <div className="flex justify-center items-center bg-white opacity-80 w-10/12 justify-center items-center m-auto mt-20 mb-6 p-8 rounded">

      <div className="flex justify-start items-center w-4/5 text-xl bg-[#000000] opacity-95 w-full py-1 px-4 gap-2 rounded-2xl	">

        <CiSearch className="bg-transparent opacity-70 h-7 w-7 " />
        <input placeholder="Pesquisar heróis da Marvel..." type="text" className="bg-transparent w-4/5 outline-none text-white" />

      </div>
    </div>
  );
}

export default Home;
