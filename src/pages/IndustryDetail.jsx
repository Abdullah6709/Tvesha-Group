import { Link, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import realEstateImg from "../assets/realstate.jpeg";
import retailImg from "../assets/Retail.jpeg";
import advImg from "../assets/Adv.jpeg";
import chemImg from "../assets/chem.jpeg";
import engiImg from "../assets/Engi.jpeg";
import epcImg from "../assets/EPC.jpeg";
import fmcgImg from "../assets/FMCG.jpeg";
import infoImg from "../assets/Info.jpeg";
import pharmaImg from "../assets/pharma.jpeg";
import teleImg from "../assets/tele.jpeg";

const INDUSTRY_DETAILS = {
  "real-estate": {
    title: "Real Estate",
    description:
      "The Real Estate sector in India is largely divided into residential and commercial (retail, offices, and hospitality) categories. However, is largely unstructured, and has a long way to go to adopt the right recruitment policies and procedures needed in a growing and professional organization. By 2040, real estate market will grow to Rs. 65,000 crore (US$ 9.30 billion) from Rs. 12,000 crore (US$ 1.72 billion) in 2019. Real estate sector in India is expected to reach a market size of US$ 1 trillion by 2030 from US$ 120 billion in 2017 and contribute 13% to the country’s GDP by 2025. Our team of professionals possesses deep knowledge of this industry and provides a consistent, high-quality service which satisfies our clients’ needs.",
    image: realEstateImg,
  },

  "retail-e-commerce-internet": {
    title: "Retail & E-Commerce /Internet",
    description:
      "Indian Retail & E-commerce Industry is one of the fastest growing sectors – domestically as well as internationally. Both retail & E-commerce space in India has seen astounding growth in the past decade and continues to grow at an annual rate incomparable to the rest of the world, The retail market size in India was expected to amount to 1.7 trillion U.S. dollars by 2026, Research estimated employment within the market to be between 45 and 50 million. The Indian e-commerce industry is expected to cross the $200 bn mark by 2026. It so since with the launching of FDI in the retail sector, India has allowed global players to enter highly dynamic and fast-growing Indian markets. Tvesha Group has successfully filled a variety of retail positions, including Customer Relations, Market Analyst, sales, Business Development, Marketing, Logistics, Purchase, warehousing",
    image: retailImg,
  },

  "epc-engineering-procurement-construction": {
    title: "EPC (Engineering Procurement Construction)",
    description:
      "EPC (Engineering, Procurement & Construction) is a prominent form of contract used to undertake construction works by the private sector on large-scale and complex infrastructure projects. EPC industry are companies who are involved in executing projects involving multiple engineering disciplines. The EPC companies in India are evolving from multiple routes, with engineering companies, equipment suppliers, construction companies and project developers morphing in to EPC service providers by filling in the gaps. EPC Industry has categorized according to versatile segments.",
    image: epcImg, // ✅ fixed
    detailSections: [
      {
        emphasis: "engineering",
        suffix: "functions include;",
        items: [
          "Basic engineering",
          "Detailed engineering",
          "Planning",
          "Construction engineering",
        ],
      },
      {
        emphasis: "procurement",
        suffix: "functions include;",
        items: [
          "Logistics & transport",
          "Receiving",
          "Procurement",
          "Invoicing",
          "Purchasing",
        ],
      },
      {
        emphasis: "construction",
        suffix: "functions include;",
        items: [
          "Electrical installation",
          "Mechanical erection",
          "Civil engineering",
        ],
      },
      {
        emphasis: "commissioning",
        suffix: "functions include;",
        items: [
          "After-sales-service",
          "Testing & commissioning",
          "Modernization of plants",
        ],
      },
    ],
    outro:
      "At Tvesha Group, we understand need of this industry and provide our clients with the best manpower solutions in the areas of construction, Road & Highway, Water, geotechnical and environmental construction Railways, oil & gas, Energy (Solar, Hydro, Thermal) etc.",
  },

  "advertising-media": {
    title: "Advertising & Media",
    description:
      "The advertising industry is a global, multibillion-dollar business that serves as a conduit between manufacturers and consumers. The advertising industry creates and manages the connection between companies, products, and consumers, translating their clients’ messages into effective campaigns. Advertising can be achieved using various media like television, newspapers, radio, banners, pamphlets, websites etc. Advertising media is used for communicating a promotional message. Examples include online banners, radio spots, billboards, television advertisements or in print media, ads in newspapers. Tvesha Group, we understand dynamic of industry and hiring talent accordingly in Sales, Business Development, Public Relation, Client Services, customer Service, Key Account, Design Development, Editor, Content Marketing, Digital Marketing, Social Media Marketing etc. At Tvesha Group, we are well equipped to address the needs of the talent for our clients. We have been able to attract great talent across various roles of Production, Design, Analysis, Simulation, Software Development, Supply Chain, Sales, Business Development, Finance and Legal that have proved critical in their growth. We thus find ourselves as the most referred talent search service provider in this highly specialized sector in India",
    image: advImg, // ✅ fixed
  },

  "chemical-allied-industry": {
    title: "Chemical and Allied Industry",
    description:
      "India’s chemical industry is extremely diversified and can be broadly classified into bulk chemicals, specialty chemicals, agrochemicals, petrochemicals, polymers and fertilisers. Chemical & allied sector in India is poised for a phase of remarkable growth because of policies like the ‘Make in India’ campaign and higher limits on FDI in various sectors. The government is opening up the economy and attracting larger investments. These investments are largely aimed at improving manufacturing and setting up collateral industries in India. The rapid transformation will see consolidation in the market and an array of Greenfield projects across sectors, the demand for the skilled workforce is set to rise exponentially. Tvesha Group, our consultants are industry experts who have core understanding of industry across functions. They understand the ever-changing challenges of talent acquisition in this progressively complex environment. We have helped our clients in this sector recruit over 100 professionals in India two year in Greenfield, Brown field and commission and other functional hiring’s.",
    image: chemImg, // ✅ fixed
  },

  "pharma-life-sciences-devices-diagnostics": {
    title: "Pharma, Life sciences, Devices & Diagnostics",
    description:
      "Indian Pharmaceutical sector where the technological advancements have been taking inroads into the development, testing phases of various new drugs, disrupting the erstwhile processes to unfold innovations to create new opportunities and an evolved business model. India is a global leader in the pharmaceutical industry, and our pharma recruitment experts are prepared to deliver the best professionals to the right businesses at the right times. India is having growth opportunities in the medical devices industry and high-end diagnostic services with tremendous capital investment for advanced diagnostic facilities building vast opportunities in R&D. We understand the product development lifecycle and the talent needed to drive advancement in science and medicine. We are committed to providing time bound and high-quality value-added search solutions for a wide range of executive and managerial roles. We have filled few positions for CRO, Bioinformatics, Pharmaceutical Companies, GMP, R&D, Product Development, Regulatory, Clinical Research, Market Research, Etc",
    image: pharmaImg, // ✅ fixed
  },

  fmcg: {
    title: "FMCG",
    description:
      "Fast-moving consumer goods (FMCG) sector is India’s fourth largest sector with household and personal care accounting for 50% of FMCG sales in India. The Government has allowed 100% Foreign Direct Investment (FDI) in food processing and single-brand retail and 51% in multi-brand retail. This would bolster employment, supply chain and high visibility for FMCG brands across organised retail markets thereby bolstering consumer spending and encouraging more product launches. The market is highly fragmented with almost 50 per cent share with the unbranded, unpackaged home made products. Well established distribution networks, cheap operating costs, easy availability of raw materials, and the presence across the entire value chain are the factors highly supportive of the FMCG sector in India. The FMCG sector continues to face the war for talent, our highly qualified and experienced consultants have insight into this consumer industry which helps us in selecting the right candidates for our clients.",
    image: fmcgImg, // ✅ fixed
  },

  "information-technology": {
    title: "Information Technology",
    description:
      "India is the world’s second-largest telecommunications market with a subscriber base of 1.16 billion and has registered strong growth in the last decade. The total subscriber base in the country stood at 1,168.66 million with a tele-density of 86.22%, as of September 30, 2020. The Indian Telecom industry is in a phase of consolidation after witnessing tremendous growth over the past few decades. However, the Telecom sector is likely to create few lakhs new jobs on the back of technological advancements, deeper penetration of Smartphone’s, and entry of new players in the segment. Our domain experts who have been hiring in the telecom domain for years and filled Key job profiles include Big Data Architect, C/C++, Java/JavaScript, Cognos Developer, DFT Design, Enterprise Architect, Java with Hadoop, Physical Design-IC, Teradata Developer, UI/UX Designer, Verification-IC",
    image: infoImg, // ✅ fixed
  },

  telecommunications: {
    title: "Telecommunications",
    description:
      "India is the world’s second-largest telecommunications market with a subscriber base of 1.16 billion and has registered strong growth in the last decade. The total subscriber base in the country stood at 1,168.66 million with a tele-density of 86.22%, as of September 30, 2020. The Indian Telecom industry is in a phase of consolidation after witnessing tremendous growth over the past few decades. However, the Telecom sector is likely to create few lakhs new jobs on the back of technological advancements, deeper penetration of Smartphone’s, and entry of new players in the segment. Our domain experts who have been hiring in the telecom domain for years and filled Key job profiles include Big Data Architect, C/C++, Java/JavaScript, Cognos Developer, DFT Design, Enterprise Architect, Java with Hadoop, Physical Design-IC, Teradata Developer, UI/UX Designer, Verification-IC",
    image: teleImg, // ✅ fixed
  },

  "engineering-manufacturing-industry": {
    title: "Engineering & Manufacturing Industry",
    description:
      "By 2025 Engineering & Manufacturing Industry would be creating 90 million jobs, These developments will result in the need of skilled and talented leaders in the industry who can manage the growth. India has taken significant steps for the development of the engineering sector. Indian government has appointed the apex body Engineering Export Promotion Council as the apex body for the development of the sector.\n\nAt Tvesha Group, we are well equipped to address the needs of the talent for our clients. We have been able to attract great talent across various roles of Production, Design, Analysis, Simulation, Software Development, Supply Chain, Sales, Business Development, Finance and Legal that have proved critical in their growth. We thus find ourselves as the most referred talent search service provider in this highly specialized sector in India.",
    image: engiImg, // ✅ fixed
  },
};

export default function IndustryDetail() {
  const { industrySlug } = useParams();
  const detail =
    INDUSTRY_DETAILS[industrySlug] || INDUSTRY_DETAILS["real-estate"];

  return (
    <>
      <Navbar />

      <section className="about-page-hero">
        <div className="container about-page-hero-inner">
          <h1>{detail.title}</h1>
          <p className="about-page-watermark" aria-hidden="true">
            Industry Area
          </p>
          <div className="about-page-breadcrumb">
            <Link to="/">Home</Link>
            <span>|</span>
            <span>{detail.title}</span>
          </div>
        </div>
      </section>

      <section className="industry-detail section">
        <div className="container industry-detail-grid">
          <article>
            <h2>{detail.title}</h2>
            <p>{detail.description}</p>

            {detail.detailSections?.map((section) => (
              <div className="industry-detail-bullets" key={section.emphasis}>
                <p>
                  The <strong>{section.emphasis}</strong> {section.suffix}
                </p>
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {detail.outro ? (
              <p className="industry-detail-outro">{detail.outro}</p>
            ) : null}
          </article>
          <img src={detail.image} alt={detail.title} />
        </div>
      </section>

      <Footer />
    </>
  );
}
