import ClientLogo from "../../components/ClientLogo";
import Counter from "../../components/Counter";
import PageBanner from "../../components/PageBanner";
import Team from "../../components/Team";
import { Testimonials2 } from "../../components/testimonials/Testimonials2";
import TekprofLayout from "../../layout/TekprofLayout";
const page = () => {
  return (
    <TekprofLayout
    header={5}
    footer={3}>
      <PageBanner pageName="Herbal Medicine Treatment" />
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
                        Herbal Medicine Treatment
                  </span>
                 
                </div>
                <div className="row gap-70">
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    data-aos-offset={50}
                  >
                    <p>
                    By utilizing our vast experience and in-depth knowledge, we have been able to setup ourselves as a trusted 🕉️ Sai Kirpa Foundation. Our dedicated and experienced doctors use their skills to provide effective treatment for all types of addiction. Herbal medicines offered by us are precisely formulated using high quality and effective herbs to enhance their quality.
                    </p>
                  </div>
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                    data-aos-offset={50}
                  >
<img src='/herbal.png' alt="Herbal" width={500} />
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
             <h3 className="text-center mt-40">Best Herbal Medicine Treatment</h3>
             <p>Our herbal medicines are very effective to treat those patients who are addicted for long time and take Alcohol, Gutka, Charas & others in more quantity. As the medicines are tasteless and colorless, these are easy to consume. Herbal medicines given by us work wonder and after its consumption patient does not wish of having alcohol & smoking. Owing to their effectiveness and reasonable price, our medicines are highly demanded by patients’ representatives/belongings.
                <br/>
                <br/>

Withdrawal Symptoms Being a prominent 🕉️ Sai Kirpa Foundation, we are actively engaged in providing complete treatment for withdrawal symptoms. Our medicines is a powerful and strong ayurvedic formula for the treatment of different type of drug addiction.It is completely safe herbal product.Our medicines are free from any kind of side-effects as these are prepared under the strict guidance of professional doctors. With our treatment, various kind of withdrawal symptoms have been reduced or even eliminated. Our medicines are very effective in the treatment for anyone who wants to stop drinking even after long-term abuse. We serve our patients with love and care to attain their maximum satisfaction. The cost and charges are not to be worried about as minimum charges are taken for this task.
             </p>


            </div>
          </div>
        </div>
      </section>
      {/* About Page About Area End */}
      
    </TekprofLayout>
  );
};
export default page;
