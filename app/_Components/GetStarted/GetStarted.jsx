import Image from "next/image";
import React from "react";

export default function GetStarted() {
  const products = [
    {
      id: 1,
      tag: "RIFLEX RUNTIME",
      title: "For manufacturers",
      description:
        "Configure and run any robot in an industrial environment – eliminating complexity of traditional robot programming through a highly intuitive interface.",
      points: [
        "Simple to use",
        "Fast to configure",
        "One interface for everything",
      ],
      note: "Subscription or lifetime model",
      button: "Request Quote",
      color: "#FB3EFF",
    },
    {
      id: 2,
      tag: "RIFLEX DEVELOPER",
      title: "For integrators",
      description:
        "The complete development platform – enabling professionals to connect and coordinate multiple interfaces and robots using one standard.",
      points: ["Connect hardware easily", "Simulate and sell", "Deploy faster"],
      note: "Launching soon",
      button: "Join Beta",
      color: "#00D1FF",
    },
  ];

  return (
    <section className="section__top">
      <div>
        <section>
          <div className="text-center">
            <h2 className="heading_two mb-5">Get started with RiACT.</h2>
            <p className="base__text">
              Crafted for operators and integrators, fueled by robust OEM
              partnerships.
            </p>
          </div>

          <div className="xl:px-16">
            <section className="r__get__container">
              {/* Card 1 */}
              <div className="r__get__card__parent p-8">
                <p className="border border-dashed border-[#FB3EFF] inline-block px-3 py-1 text-xs mb-4 rounded">
                  RIFLEX RUNTIME
                </p>
                <h3 className="heading__four mb-4">
                  For <span className="text-[#FB3EFF]">manufacturers</span>
                </h3>
                <p className="base__text mb-6">
                  Configure and run any robot in an industrial environment –
                  eliminating complexity of traditional robot programming
                  through a highly intuitive interface.
                </p>
                <ul className="space-y-2 mb-6 base__text">
                  <li className="r__get__list__parent">
                    <span>✔️</span> Simple to use
                  </li>
                  <li className="r__get__list__parent">
                    <span>✔️</span> Fast to configure
                  </li>
                  <li className="r__get__list__parent">
                    <span>✔️</span> One interface for everything
                  </li>
                </ul>
                <div className="r__get__card__bottom__parent">
                  <p className="text-gray-500  ">
                    Subscription or lifetime model
                  </p>
                  <button className="r__get__bottom__btn">
                    Request Quote
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="r__get__card__parent p-8">
                <p className=" text-white border border-dashed border-[#00D1FF] inline-block px-3 py-1 text-xs mb-4 rounded">
                  RIFLEX DEVELOPER
                </p>
                <h3 className="heading__four mb-4">
                  For <span className="text-[#00D1FF]">integrators</span>
                </h3>
                <p className="base__text mb-6">
                  The complete development platform – enabling professionals to
                  connect and coordinate multiple interfaces and robots using
                  one standard.
                </p>
                <ul className="space-y-2 mb-6 base__text">
                  <li className="r__get__list__parent">
                    <span>✔️</span> Connect hardware easily
                  </li>
                  <li className="r__get__list__parent">
                    <span>✔️</span> Simulate and sell
                  </li>
                  <li className="r__get__list__parent">
                    <span>✔️</span> Deploy faster
                  </li>
                </ul>

                <div className="r__get__card__bottom__parent">
                  <p className="r__get__bottom__btn__text  ">Launching soon</p>
                  <button className="r__get__bottom__btn">
                    Join Beta
                  </button>
                </div>
              </div>
            </section>
            {/* card 3 */}
            <div className="r__get__card__parent  ">
              <div className="grid lg:grid-cols-2 lg:gap-10 items-center">
                {/* Left side */}
                <div className="flex flex-col justify-between h-full  p-8">
                  <h2 className="text-white heading__three leading-tight max-w-xl">
                    Are you an OEM and interested to become part of our
                    ecosystem?
                  </h2>

                  <div className="hidden lg:block">
                    <div className="mt-8 flex lg:flex-row  items-center gap-4 border-t pt-10 border-white/10 ">
                      <p className="r__get__bottom__btn__text">
                        Let’s enable the future of robots
                      </p>
                      <button className="r__get__bottom__btn">
                        Book a call
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right side */}
                <div className="flex justify-center md:justify-end">
                  <Image
                    src="https://cdn.prod.website-files.com/64eda916ec10005d85a2aa19/64f0e08002b178fcbfa02b3f_robotarm_graphic.png"
                    alt="robot-arm"
                    width={800}
                    height={800}
                    className="object-contain object-center h-[30vh] md:h-[40vh]"
                  />
                </div>

                <div className="mt-8 flex flex-col lg:flex-row space-y-5 items-center gap-4 border-t p-10 border-white/10 lg:hidden">
                  <p className="r__get__bottom__btn__text">
                    Let’s enable the future of robots
                  </p>
                  <button className="r__get__bottom__btn">
                    Book a call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
