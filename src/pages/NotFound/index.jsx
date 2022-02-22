import { Title } from "solid-meta";
import { Link } from "solid-app-router";

import logo from "../../assets/logo.png";

const About = () => {
  return (
    <div class="bg-sky-500 h-screen flex justify-center items-center px-6">
      <Title>Halaman tidak ditemukan | Alumni Sakura</Title>
      <div className="text-center">
        <img src={logo} class="mb-6 mx-auto" alt="logo" />
        <div class="bg-orange-50 text-center rounded-xl px-6 py-4 max-w-xl mb-6">
          <p class="text-gray-800">
            Halaman tidak ditemukan
          </p>
        </div>
        <Link href="/">
          <p class="text-lg font-semibold">&#8656; Kembali</p>
        </Link>
      </div>
    </div>
  );
}

export default About;
