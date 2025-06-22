import ClientLogo from "@/components/ClientLogo";
import Counter from "@/components/Counter";
import PageBanner from "@/components/PageBanner";
import Team from "@/components/Team";
import { Testimonials2 } from "@/components/testimonials/Testimonials2";
import TekprofLayout from "@/layout/TekprofLayout";
const page = () => {
  return (
    <TekprofLayout
    header={5}
    footer={3}>
      <PageBanner pageName="Hard Drugs" />
      {/* About Page About Area Start */}
      <section className="about-page-about-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container-fluid">
          <div className="row align-items-start">
            <div className="col-xl-12 col-lg-12">
              <div className="about-page-about-left-content">
                <div
                  className="section-title mb-70 rmb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <h2 className="section-title color-primary mb-10">
                        Hard Drugs
                  </h2>
                 
                </div>
                <div className="row gap-70">
                  <div
                    className="col-lg-12"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    data-aos-offset={50}
                  >
                    <p>
                    “Hard drugs” typically refer to substances that are considered to be particularly dangerous and addictive. These drugs often have a high potential for abuse and can lead to severe physical and psychological dependence. The term is used to distinguish these substances from “soft drugs,” which are perceived to have a lower risk of harm and addiction.<br/>
                    
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
            <div className="col-xl-12" 
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    data-aos-offset={50}
                    >
             <h3 className="text-center mt-40">Some Examples of Hard Drugs</h3>
             <ul className="list-style-three">
                <li>
                    Methamphetamine (crystal meth)
                <li>
                LSD (acid)

</li>
                </li>
                <li>
                PCP (phencyclidine)


                </li>
                <li>
                Fentanyl and other potent synthetic opioids
                </li>
                
             </ul>

            </div>
          </div>
        </div>
      </section>
      {/* About Page About Area End */}
      
    </TekprofLayout>
  );
};
export default page;
