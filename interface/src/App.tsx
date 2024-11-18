import { WalletSelector } from "@aptos-labs/wallet-adapter-ant-design";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import "tailwindcss/tailwind.css"


const GameWrapper1 = () => {
  return (
    <div className="">
      <div>Connect Icon</div>
      <div className="h-screen flex justify-center align-middle">
        <h1 className="text-4xl font-semibold my-auto">
          Please connect your wallet to continue
        </h1>
      </div>
    </div>
  );
};

const GameWrapper2 = ()=>{
  return (
    <div>
      <div>
        Connect Wallet
      </div>
      <div className="h-screen flex justify-center align-middle">
        <div className="my-auto w-4/5">
        <div className="flex justify-center">
          <button className="bg-green-500 mx-auto px-6 py-2 rounded-xl text-white my-2">Start Game</button>
        </div>
        <div className=" p-5">
          <div className="flex gap-2">
            <div className="bg-white w-1/2 rounded-2xl p-5">
              <div>
              <div className="bg-gray-300 mx-auto px-6 py-4 rounded-xl text-black font-semibold text-xl text-center my-2">Select Your Move</div>
              </div>
              <div className="flex gap-2">
                <button className="bg-red-300 mx-auto px-8 py-4 text-xl rounded-xl my-2">Clear</button>
                <button className="bg-orange-300 mx-auto px-8 py-4 text-xl rounded-xl my-2">Rock</button>
                <button className="bg-orange-300 mx-auto px-8 py-4 text-xl rounded-xl my-2">Paper</button>
                <button className="bg-orange-300 mx-auto px-8 py-4 text-xl rounded-xl my-2">Scissors</button>
              </div>
            </div>
            <div className="bg-white w-1/2 rounded-2xl p-5">
              <div>
              <div className="bg-gray-300 mx-auto px-6 py-4 rounded-xl text-black font-semibold text-xl text-center my-2">Computer Move</div>
              </div>
              <div className="flex gap-2">
                <button className="bg-orange-300 mx-auto px-8 py-4 text-xl rounded-xl my-2">Rock</button>
                <button className="bg-orange-300 mx-auto px-8 py-4 text-xl rounded-xl my-2">Paper</button>
                <button className="bg-orange-300 mx-auto px-8 py-4 text-xl rounded-xl my-2">Scissors</button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="bg-green-500 w-3/5 mx-auto px-6 py-4 rounded-xl text-black font-semibold text-4xl text-center my-2">Game Results</div>
        </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const { account, connected, signAndSubmitTransaction } = useWallet();
  return (
    <>
      <div className="w-screen h-screen flex flex-col justify-center align-middle bg-neutral-100">
        <div className="absolute right-4 top-4 items-end">
            <WalletSelector />
        </div>
        {!connected ? GameWrapper1() : GameWrapper2()}
    </div>
    </>
  );
}

export default App;
