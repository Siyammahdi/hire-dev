const AboutUs = () => {
  return (
    <>
      <section className="container flex flex-wrap items-center py-10">
        <div className="w-full lg:w-1/2 pr-4">
          <p className="text-5xl  font-bold">About </p>
          <p className="text-2xl py-5 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            magnam tempore maxime nobis corrupti exercitationem facere iusto
            cumque velit rerum?
          </p>
          <p className="text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            consequatur cumque quasi aliquam vero possimus odio expedita eius
            earum ut.
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            tempore sed dolorum odio, qui esse. Tenetur ab voluptate culpa sit.
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, id.
            <br /> <br />
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="w-full lg:w-1/2 pl-4">
          <p className="text-xl font-light relative pl-6 inline-block">
            {" "}
            <span className="text-6xl absolute left-0 -top-1">“</span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            voluptatem soluta totam recusandae! Possimus facere ut harum saepe
            corporis fuga. <span className="text-6xl absolute">”</span>
          </p>
          <p className="text-sm pt-2">Kamrul Hasan</p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
