import Footer from "@/components/footer";
import Header from "@/components/header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
