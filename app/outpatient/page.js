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
      <PageBanner pageName="OUTPATIENT RELAPSE PREVENTION" />
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
                  <span className="sub-title color-primary mb-10">
                    OUTPATIENT RELAPSE PREVENTION
                  </span>
                 
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
                    This program has been designed in a way that supports patients so that they can reintegrate into society by following the Inpatient Rehabilitation Program. Outpatient relapse is a golden key to promote long-term sobriety and prevent sudden relapse. Visiting the program without breaking the chain is a hard nut to crack but it prevents patients from making an entry into the harmful behaviours that were responsible for underpinning their addictions.
                    The program is a comprehensive model of care that is practiced in other stages of treatment, addressing the physical, emotional, psychological, social, and spiritual impacts of addiction.
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
             <h3 className="text-center mt-40">BEST OUTPATIENT RELAPSE PREVENTION</h3>
             <p>These two are important elements of the program:
             </p>



    <ul className="list-style-three">
        <li>
<p style={{fontWeight:'bold'}}>TRANSITIONAL HOUSING - &nbsp;</p><br/>
Under this, the patients are offered a safe, secure, and supported space to reside as if they have reentered society, freedom from addiction.
        </li>
        <li>
        <p style={{fontWeight:'bold'}}>INTENSIVE OUTPATIENTS - &nbsp;</p><br/>
Here, patients can visit the previous programs and therapies, which also include peer support and individual counseling.
            
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
