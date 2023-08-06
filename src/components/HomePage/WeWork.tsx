import { howWorks } from "../Data";

const WeWork = () => {
  return (
    <>
      <section className="container py-[150px]">
        <p className="text-[30px] font-bold text-center pb-10 text-[#8F8688]">
          HOW WE WORK
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {howWorks.map((item, index) => {
            return (
              <div className=" min-w-[250px]" key={index}>
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
                  <p className={`font-bold mb-2    text-center`}>
                    {item.title}
                  </p>
                  <p className="leading-5 mb-0 text-[#43406d] text-center text-sm">
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
