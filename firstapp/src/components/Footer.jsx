import FooterArticle from "./FooterArticle";

const Footer = () => {
  const articles = [
    {
      id: "01",
      title: "Reviving Retro PCs",
      description: "What happens when old PCs are given modern upgrades?",
      imgSrc: "./assets/images/image-retro-pcs.jpg",
    },
    {
      id: "02",
      title: "Top 10 Laptops of 2022",
      description: "Our best picks for various needs and budgets.",
      imgSrc: "./assets/images/image-top-laptops.jpg",
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      description: "How the pandemic has sparked fresh opportunities.",
      imgSrc: "./assets/images/image-gaming-growth.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6">
      {articles.map((v) => (
        <FooterArticle data={v} />
      ))}
    </div>
  );
};

export default Footer;
