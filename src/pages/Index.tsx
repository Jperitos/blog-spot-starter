import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="ml-20 md:ml-64 max-w-2xl">
        <Feed />
      </div>
    </div>
  );
};

export default Index;
