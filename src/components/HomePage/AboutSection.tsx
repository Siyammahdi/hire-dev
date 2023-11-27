import { howWorks } from "../Data";

const WeWork = () => {
  return (
    <section className='pt-[250px] relative py-[150px] bg-[#fff] backdrop-blur-[10px]'>
      <div className="container ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className=" md:w-6/12">
                  <p className="text-[64px] font-bold  text-[#51565652] absolute top-[125px]">
                      About Us
                  </p>
                  <div className="flex flex-wrap justify-center gap-5 text-gray-500 text-sm">
                      <b>UQIDEV, a software development company based in Dhaka, Bangladesh, offers end-to-end development services across various technologies and  serving clients in the United States and Europe.</b>
                      We prioritize client results and ongoing learning in this competitive field. Our focus extends beyond code quality to the long-term value of the products we create. We embrace Agile methodologies and tailor our approach to each project.
                      As software partners, we aim to enhance business value and provide nimble solutions. Our approach fosters relationships, and our software drives impact.
                  </div>
              </div>

              <div className="md:w-6/12">
                  {/*<img src="/innovation.svg" alt="" />*/}

                  <div className="flex gap-1 flex-wrap">
                      <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">
                          <p>Certified Experienced Engineers</p>
                      </div>
                      <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">
                          <p>Cost Optimization</p>
                      </div>
                      <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">
                          <p>Expert Consultation</p>
                      </div>
                      <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">
                          <p>DevOps</p>
                      </div>
                      <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">
                          <p>Quality</p>
                      </div>
                      <div className="bg-amber-900 flex h-20 items-end p-3 text text-xs uppercase w-40 leading-[11px] text-[#b89e7f]">
                          <p>Accountability</p>
                      </div>

                  </div>

              </div>
          </div>

      </div>
    </section>
  );
};

export default WeWork;
