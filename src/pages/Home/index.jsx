import { Title } from "solid-meta";
import { Link } from "solid-app-router";

import logo from "../../assets/logo.svg";

function App() {
  return (
    <div class="bg-sky-500 h-screen flex justify-center items-center px-6">
    <Title>Alumni Sakura</Title>
    <div className="text-center">
      <img src={logo} class="mb-6 mx-auto w-48 sm:w-96" alt="logo" />
      <h1 class="text-4xl sm:text-6xl font-semibold mb-8">Alumni Sakura</h1>
      <div class="bg-orange-50 text-center rounded-xl px-6 py-4 max-w-xl mb-6">
        <p class="text-gray-800">
          Situs saat ini dalam tahap pembaharuan
        </p>
      </div>
      <Link href="/tentang">
        <p class="text-lg font-semibold">Tentang</p>
      </Link>
    </div>
  </div>
  );
}

export default App;
