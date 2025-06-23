import PageBanner from "@/components/PageBanner";
import { ProgressBar3 } from "@/components/ProgressBar";
import TekprofLayout from "@/layout/TekprofLayout";
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
           
          </div>
        </div>
      </section>
     
    </TekprofLayout>
  );
};
export default page;
