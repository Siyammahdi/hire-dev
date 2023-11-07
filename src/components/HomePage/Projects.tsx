const Projects = () => {
  return (
    <section className="bg-white">
      <div className="container py-[90px]">
        <p className="text-[30px] font-bold pb-10 text-[#8F8688]">
          We served
        </p>
        <div className="flex gap-1 items-center">
          <div className="flex min-w-[108px]"><img src="/hurraayy.png" alt="hurraayy"/></div>
          <div className="flex min-w-[108px]"><img src="/bistro.jpeg" alt="bistro central"/></div>
          <div className="flex w-[92px] max-h-[92px] p-2 bg-[#0f0f0f]"><img src="/next.jpeg" alt="next ventures"/></div>
          <div className="flex min-w-[108px]"><img src="/khaasfood.png" alt="khaasfood"/></div>
          <div className="flex min-w-[108px]"><img src="/shikho-logo.svg" alt="shikho"/></div>
          <div className="flex min-w-[108px] h-12"><img src="/soncharon.png" alt="soncharon"/></div>
          <div className="flex px-2"><img src="/likho.svg" alt="Likho site"/></div>
          {/*<div className="flex w-20 p-6"><img src="/olearnin.svg" alt="Olearnin"/></div>*/}
        </div>
      </div>
    </section>
  );
};

export default Projects;
