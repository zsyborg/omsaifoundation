import Preloader from "../layout/Preloader";
import "./globals.css";

import "../public/assets/css/aos.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/flaticon.min.css";
import "../public/assets/css/fontawesome-5.14.0.min.css";
import "../public/assets/css/magnific-popup.min.css";
import "../public/assets/css/nice-select.min.css";
import "../public/assets/css/slick.min.css";
import "../public/assets/css/style.css";

export const metadata = {
  title: "Om Sai Kripa Foundation",
  description: "De-Addiction & Rehabilitation Wellness Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
