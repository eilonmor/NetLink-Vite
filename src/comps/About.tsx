import { Footer } from "./Footer";
import { Header } from "./Header";
import { AboutTab } from "./about-comps/AboutTab";
import { Featurette } from "./about-comps/Featurette";
import { AboutCollective } from "./about-comps/aboutCollective";
export function About() {
  return (
      <>
          <Header />
          <main role="main" className="p-6 m-4">
              <div className="container marketing p-2">
                  <AboutCollective />
                  <Featurette
                      heading="Company partnerships"
                      subheading="More than xxx companys"
                      description="Peactures of Company partnerships"
                      imgSrc="./img/companyTemple.jpg"
                  />
                  <hr className="featurette-divider" />
                  <Featurette
                      heading="Influencers partnerships"
                      subheading="More than xxx influencers"
                      description="picture of influencers"
                      imgSrc="./img/influncer.jpg"
                  />
                  <hr className="featurette-divider" />
                  <Featurette
                      heading="Free search and reports"
                      subheading="Check this."
                      description="difrent Types of reports"
                      imgSrc="./img/reports.jpg"
                  />
              </div>
          </main>
      </>
  );
}