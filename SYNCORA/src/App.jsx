import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Index from "./Room/Room_main"
export default function App() {
  return (
    <header>
      <SignedOut>
        <div className="Main flex min-h-screen bg-red-400 ">
          <div className="mx-auto my-auto flex flex-col   login">
            <h2 className="pl-2 font-serif text-4xl pb-3">SYNCORA</h2>

            <button className="text-3xl bg-blue-500 rounded-xl w-[200px] h-[50px] font-mono font-extrabold border-red-300 border-spacing-6"><SignInButton /></button>
          </div>
        </div>


      </SignedOut>
      <SignedIn>
        <div className="user_btn ">
        <UserButton />
        </div>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/room/:id" element={<Index />} />
          </Routes>
        </>
      </SignedIn>
    </header>
  );
}
