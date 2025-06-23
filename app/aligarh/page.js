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
      <PageBanner pageName="Aligarh Branch" />
      {/* About Page About Area Start */}
      <section className="about-page-about-area pt-130 rpt-100 pb-110 rpb-80">
        <div className="container-fluid">
          <div className="row align-items-start">
            <div className="col-xl-7">
              <div className="about-page-about-left-content">
                <div
                  className="section-title mb-70 rmb-50"
                  data-aos="fade-up"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <span className="sub-title color-primary mb-10">
                  De-addiction Center in Aligarh Uttar Pradesh
                  </span>
                  <h4>
                  A rehabilitation centre is probably the last resort for a person who has either been through an emotional turmoil or any other mental problem, which lead to a severe psychiatric condition or extreme physical illness. It is also meant for people who have been on psychoactive drugs like cocaine and alcohol. Rehab is a recovery phase of patients who have stopped functioning properly in one way or the other; it focuses on rebuilding their confidence and their abilities to achieve their optimal functional levels. 
                  </h4>
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
                    When an addict suffers the consequences of his substance abuse, it is only natural that he will need professional help, along with the support of his family and friends to enable him to start over and stay clean. Rehabilitation is a vital step towards attaining this goal, which is why a specialized facility is required. Drug rehabilitation centers are specialized facilities catering to the needs of those who are in need of professional help in addictions, which include drug and alcohol dependence. This facility ensures that patients undergoing rehabilitation are well supervised by trained medical professionals, making sure that they undergo a safe period of rehabilitation and treatment. Rehabilitation varies from one individual to another which is why drug rehabilitation centers caters to a variety of patients needing individualized form of intervention. Clients may vary from troubled teen agers to adults, as well as convicted criminals who have committed drug related crimes. While the management for these clients varies, one goal remains the same: To help patients heal inside out and enable them to get the most out of life.
                    </p>
                  </div>
                  <div
                    className="col-lg-6"
                    data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={200}
                    data-aos-offset={50}
                  >
                    <p>
                    Drug rehabilitation can also be outside a drug facility centre. Patients undergoing treatment outside the facility can undergo treatments by regularly attending counselling. During these sessions, the patients can openly discuss how they cope with their problems and their issues regarding drug and alcohol abuse. They can also learn from other patients through interactive communication, sharing experiences and empathy. The treatment is usually lifelong and never ending and sessions are always open for those who need it be it those who are going through rehabilitation once or for those who have undergone relapses. Family members and friends are also encouraged to join the counselling since drug addiction and alcohol abuse affects personal relationships. Counselåling the patient's significant others will enable healthy coping mechanisms and mutual support vital to recovery. These therapy sessions for family members also varies since families are unique from one another. The interventions that drug facilities can give to patients are very important. A well-maintained facility can serve as a second home to many troubled individuals who have decided to seek help. Many who have complied and have successfully completed treatment have claimed that rehabilitation helped them become productive which is why they are proud of what they have accomplished. Once treatment is completed, patients are set free into society well equipped with the knowledge and self - confidence to start over a new life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div
                className=""
              >
                <img src="/aligarh/1.jpeg" className="img-fluid" />
                <img src="/aligarh/2.jpeg" className="img-fluid" />
                <img src="/aligarh/3.jpeg" className="img-fluid" />
                <img src="/aligarh/4.jpeg" className="img-fluid" />
                <img src="/aligarh/5.jpeg" className="img-fluid" />
                <img src="/aligarh/6.jpeg" className="img-fluid" />
                <img src="/aligarh/7.jpeg" className="img-fluid" />
                <img src="/aligarh/8.jpeg" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Page About Area End */}
      
    </TekprofLayout>
  );
};
export default page;
