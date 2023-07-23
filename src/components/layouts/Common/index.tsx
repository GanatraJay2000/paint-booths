import StickyNavbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <StickyNavbar />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
