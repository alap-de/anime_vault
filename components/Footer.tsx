import Image from "next/image";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@{year} EpicAnimeVault</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="logo tiktok"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          alt="logo instagram"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="logo twitter"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
