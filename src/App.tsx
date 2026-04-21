import { Github, Mail, Twitter } from "lucide-react";

const navLinks = ["Homepage", "Gallery", "Buy NFT", "FAQ", "Contact"];

const socialLinks = [
  { icon: Mail, label: "Mail", href: "mailto:hello@orbis.nft" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Github, label: "Github", href: "https://github.com" },
];

const nftCards = [
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    score: "8.7/10",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    score: "9/10",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    score: "8.2/10",
  },
];

const introCopy =
  "A digital object fixed beyond time and place. An exploration of distance, form, and silence in space";

function SocialStack({
  mobile = false,
  column = true,
}: {
  mobile?: boolean;
  column?: boolean;
}) {
  return (
    <div
      className={[
        "z-10 flex gap-4",
        column ? "flex-col" : "flex-row",
        mobile ? "justify-center lg:hidden" : "hidden lg:flex",
      ].join(" ")}
    >
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          aria-label={label}
          href={href}
          className="liquid-glass flex h-14 w-14 items-center justify-center rounded-2xl transition hover:bg-white/10"
        >
          <Icon size={20} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}

function VerticalFooterSocials() {
  return (
    <div className="absolute bottom-[12%] left-[8%] z-10 hidden lg:block xl:bottom-[20%]">
      <div className="liquid-glass overflow-hidden rounded-[1.25rem]">
        {socialLinks.map(({ icon: Icon, href, label }, index) => (
          <a
            key={label}
            aria-label={label}
            href={href}
            className={[
              "flex items-center justify-center transition hover:bg-white/10",
              "h-[4.25rem] w-[14vw] sm:h-[5.5rem] sm:w-[14.375rem] md:h-[5rem] md:w-[10.78125rem] lg:h-[5.6rem] lg:w-[16.77rem]",
              index < socialLinks.length - 1 ? "border-b border-white/10" : "",
            ].join(" ")}
          >
            <Icon size={22} strokeWidth={1.8} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-space text-cream">
      <div className="texture-overlay" aria-hidden="true" />

      <section className="relative min-h-screen overflow-hidden rounded-b-[32px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-space/28" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-[1831px] flex-col px-5 pb-10 pt-5 sm:px-8 md:px-10 lg:px-12">
          <header className="flex items-start justify-between gap-6">
            <div className="font-grotesk text-base uppercase tracking-[0.04em]">Orbis.Nft</div>

            <nav className="liquid-glass hidden rounded-[28px] px-[52px] py-[24px] lg:block">
              <ul className="flex items-center gap-8 xl:gap-10">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-grotesk text-[13px] uppercase tracking-[0.04em] transition hover:text-neon"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="w-14 lg:w-[168px]">
              <div className="flex justify-end">
                <SocialStack />
              </div>
            </div>
          </header>

          <div className="relative flex flex-1 items-center py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="relative w-full lg:ml-32 lg:max-w-[780px]">
              <h1 className="font-grotesk text-[40px] uppercase leading-[1.05] sm:text-[60px] md:text-[75px] md:leading-[1] lg:text-[90px]">
                Beyond earth
                <br />
                and ( its ) familiar boundaries
              </h1>

              <span className="font-condiment pointer-events-none absolute -right-2 top-[20%] rotate-[-1deg] text-[24px] normal-case text-neon opacity-90 mix-blend-exclusion sm:text-[32px] md:-right-10 md:text-[40px] lg:-right-24 lg:text-[48px]">
                Nft collection
              </span>
            </div>
          </div>

          <SocialStack mobile column={false} />
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-space/24" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-[1831px] flex-col justify-between px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
            <div className="relative max-w-[520px]">
              <h2 className="font-grotesk text-[32px] uppercase leading-[1.02] sm:text-[44px] md:text-[52px] lg:text-[60px]">
                Hello!
                <br />I&apos;m orbis
              </h2>
              <span className="font-condiment pointer-events-none absolute bottom-0 right-0 translate-y-1/2 rotate-[-3deg] text-[36px] normal-case text-neon mix-blend-exclusion sm:text-[46px] md:text-[56px] lg:text-[68px]">
                Orbis
              </span>
            </div>

            <p className="max-w-[266px] font-mono text-[14px] uppercase leading-[1.7] tracking-[0.02em] text-cream sm:text-[16px]">
              {introCopy}
            </p>
          </div>

          <div className="flex justify-between gap-10 pt-10 lg:pt-16">
            <div className="max-w-[280px] space-y-10">
              <p className="font-mono text-[14px] uppercase leading-[1.7] tracking-[0.02em] text-[#010828] opacity-10 lg:text-cream/10">
                {introCopy}
              </p>
              <p className="font-mono text-[14px] uppercase leading-[1.7] tracking-[0.02em] text-[#010828] opacity-10 lg:text-cream/10">
                {introCopy}
              </p>
            </div>

            <div className="hidden max-w-[280px] space-y-10 lg:block">
              <p className="font-mono text-[14px] uppercase leading-[1.7] tracking-[0.02em] text-cream/10">
                {introCopy}
              </p>
              <p className="font-mono text-[14px] uppercase leading-[1.7] tracking-[0.02em] text-cream/10">
                {introCopy}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-space">
        <div className="mx-auto w-full max-w-[1831px] px-5 py-16 sm:px-8 sm:py-20 md:px-10 md:py-24 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="font-grotesk text-[32px] uppercase leading-[1.02] sm:text-[44px] md:text-[52px] lg:text-[60px]">
                Collection of
                <br />
                <span className="ml-12 inline-block sm:ml-24 md:ml-32">
                  <span className="font-condiment normal-case text-neon">Space</span> objects
                </span>
              </h2>
            </div>

            <button
              type="button"
              className="group inline-flex w-fit flex-col items-start text-left text-cream"
            >
              <span className="flex items-end gap-3 uppercase leading-none">
                <span className="font-grotesk text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]">
                  See
                </span>
                <span className="flex flex-col font-grotesk text-[20px] leading-[0.9] sm:text-[26px] md:text-[30px] lg:text-[36px]">
                  <span>All</span>
                  <span>Creators</span>
                </span>
              </span>
              <span className="mt-3 h-[6px] w-full bg-neon transition duration-300 group-hover:scale-x-95 sm:h-[8px] lg:h-[10px]" />
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nftCards.map((card) => (
              <article
                key={card.video}
                className="liquid-glass rounded-[32px] p-[18px] transition hover:bg-white/10"
              >
                <div className="relative overflow-hidden rounded-[24px] pb-[100%]">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={card.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>

                <div className="liquid-glass mt-5 flex items-center justify-between rounded-[20px] px-5 py-4">
                  <div className="space-y-1">
                    <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-cream/70">
                      Rarity score:
                    </p>
                    <p className="font-grotesk text-base uppercase">{card.score}</p>
                  </div>

                  <button
                    type="button"
                    aria-label="View NFT details"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 transition hover:scale-110"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                    >
                      <path
                        d="M8 5L15 12L8 19"
                        stroke="currentColor"
                        strokeWidth="2.1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <video
          className="block h-auto w-full"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-space/8" />

        <div className="absolute inset-0 mx-auto flex w-full max-w-[1831px] items-center px-5 sm:px-8 md:px-10 lg:px-12">
          <div className="ml-auto max-w-[980px] text-right lg:pl-[15%] lg:pr-[20%]">
            <div className="relative inline-block">
              <span className="font-condiment absolute -left-2 top-0 -translate-y-full text-[17px] normal-case text-neon mix-blend-exclusion sm:text-[32px] md:text-[48px] lg:text-[68px]">
                Go beyond
              </span>
              <h2 className="font-grotesk text-[16px] uppercase leading-[1.02] sm:text-[28px] md:text-[40px] lg:text-[60px]">
                <span className="mb-4 block sm:mb-8 md:mb-10 lg:mb-12">Join us.</span>
                <span className="block">Reveal what&apos;s hidden.</span>
                <span className="block">Define what&apos;s next.</span>
                <span className="block">Follow the signal.</span>
              </h2>
            </div>
          </div>
        </div>

        <VerticalFooterSocials />
      </section>
    </div>
  );
}
