import PageBanner from "../../components/PageBanner";
import { ProgressBar3 } from "../../components/ProgressBar";
import TekprofLayout from "../../layout/TekprofLayout";
import Link from "next/link";
const page = () => {
  return (
    <TekprofLayout
    header={5}
      footer={3}>
      <PageBanner pageName="Gallery" />
      <section className="team-page-area pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src='/1.jpeg' alt="image"/>
            </div>
            <div className="col-4">
              <img className="img-fluid" src='/2.jpeg' alt="image"/>
            </div>
            <div className="col-4">
              <img className="img-fluid" src='/3.jpeg' alt="image"/>
            </div>
            <div className="col-4">
              <img className="img-fluid" src='/4.jpeg' alt="image"/>
            </div>
            <div className="col-4">
              <img className="img-fluid" src='/5.jpeg' alt="image"/>
            </div>
            <div className="col-4">
              <img className="img-fluid" src='/6.jpeg' alt="image"/>
            </div>
            <div className="col-4">
              <img className="img-fluid" src='/7.jpeg' alt="image"/>
            </div>
            <div className="col-4">
              <img className="img-fluid" src='/8.jpeg' alt="image"/>
            </div>
            <div className="col-4">
              <img className="img-fluid" src='/9.jpeg' alt="image"/>
            </div>
            <div className="col-4">
              <img className="img-fluid" src='/10.jpeg' alt="image"/>
            </div>
          </div>
        </div>
      </section>
     
    </TekprofLayout>
  );
};
export default page;
