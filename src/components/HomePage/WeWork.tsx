import { howWorks } from "../Data";

const WeWork = () => {
  return (
    <>
      <section className="container py-10">
        <p className="text-xl text-center pb-3 text-[#8F8688]">HOW WE WORK</p>
        <div className="flex flex-wrap justify-center gap-5">
          {howWorks.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="border border-[#e6e6e7]  rounded-md relative p-8 ">
                  <div className="flex justify-center absolute top-0 left-0 w-full h-full">
                    <div className="w-3/4">
                      <div
                        className={`h-[1px] bg-gradient-to-r from-transparent ${
                          index === 0
                            ? "via-[#a259ff]"
                            : index === 1
                            ? "via-[#4ccfaf]"
                            : index === 2
                            ? "via-[#ff42c3]"
                            : "via-[#ff9f24]"
                        } to-transparent w-full`}
                      ></div>
                    </div>
                  </div>
                  <p
                    className={`font-bold mb-2 ${
                      index === 0
                        ? "text-[#a259ff]"
                        : index === 1
                        ? "text-[#4ccfaf]"
                        : index === 2
                        ? "text-[#ff42c3]"
                        : "text-[#ff9f24]"
                    } text-2xl md:text-3xl lg:text-4xl text-center`}
                  >
                    {item.title}
                  </p>
                  <p className="mb-0 leading-5 text-sm lg:text-base text-[#43406d] text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WeWork;
