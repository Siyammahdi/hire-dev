const Projects = () => {
  return (
    <section className="bg-white relative">
      <div className="container py-[90px]">
        <p className="text-[64px] font-bold  text-[#51565652] absolute top-[-46px]">
          We served
        </p>
        <div className="flex gap-5 items-center flex-wrap">
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
