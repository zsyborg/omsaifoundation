import PageBanner from "../../components/PageBanner";
import { ProgressBar3 } from "../../components/ProgressBar";
import TekprofLayout from "../../layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout
    header={5}
      footer={3}>
      <PageBanner pageName="Team" />
      <section className="team-page-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div
                className="team-page-left-content rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>
                    Mr. Ajeet Singh - Director & Founder
                  </h2>
                </div>
                <p>
                “Combined with its core knowledge and devoted doctors, “🕉️ Sai Kirpa Foundation” has been effectively able to transform the lives of addicted patients. Menace of Alcohol consumption in our society does not only ruin the drunkard’s house but also spreads badness around the society. With the objective of eradicating such dreadful disease, we serve the people with our helping hands to lead a happy life after getting rid of addiction of Gutkha, Smoking, Alcohol, Ganja/ Charas/ Afim, and Injection/ Drugs.Till now, large numbers of addicted people are benefited with our dedicated efforts.
</p>
<p>
  
With its dedicated and experienced doctor, main goal of “🕉️ Sai Kirpa Foundation” is rehabilitation and reformation of the addicted people. Our objective is to be nation’s foremost nasha mukti centre by providing round-the-clock product deliveries and featured services to our patients. We believe in offering a convenient and safe shopping experience for the betterment of the society
                </p>
                
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="team-page-right-image mb-30"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="/ajeet.png" alt="Team" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-area pb-80 rpb-50 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-70 rmb-50"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="sub-title color-primary mb-10">
                  Meet Our Team
                </span>
                {/* <h2>Experience Technical Team</h2> */}
              </div>
            </div>
          </div>
          <div className="row gap-70">
            <div className="col-lg-6">
              <div
                className="team-item-two"
                data-aos="fade-up"
                data-aos-delay={100}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="">
                </div>
                <div className="content">
                  <h3 className="name">
                    <Link href="team-details">Mr. Gautam Sachdeva</Link>
                  </h3>
                  <span className="designation">Director Of Management</span>
                  <div className="">
                  <img src="/gautam.jpeg" className="img-fluid" alt="Team Member" />
                    <p>
                    Extensive experience in mental health diagnosis and treatment. For thirteen years, he has specialized in the prevention and treatment of chemical dependency as a, lead counselor, addictions therapist, and substance abuse specialist.
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="team-item-two"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="image">
                </div>
                <div className="content">
                  <h3 className="name">
                    <Link href="team-details">Dr. Rashmi Chandiwal</Link>
                  </h3>
                  <span className="designation">Psychiatrist</span>
                  <div className="" style={{justifyContent:'center'}}>
                  <img src="/rashmi.jpeg" width="200px" style={{width:"400px"}} alt="Team Member" /><br/>
                  <img src="/certi.jpeg" width="200px" style={{width:"400px"}} alt="Team Member" />
                    <p>
                    Pursued and completed her degree from school of mental health vihmans and has expertise in understanding human behaviiour and mental health working with us from past 6 years and has a great 10 years in this feild
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};
export default page;
