const News = () => {
  return (
    <div className="bg-very-dark-blue text-off-white py-10 px-12 flex flex-col justify-between">
      <h2 className="text-5xl font-bold text-soft-orange">New</h2>
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg">Hydrogen VS Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg">The Downsides of AI Artistry</h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-lg">Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
};

export default News;
