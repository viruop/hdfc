import BlogSection from "@/components/BlogSection";
import ConciergeServices from "@/components/ConciergeServices";
import ExclusiveServices from "@/components/ExclusiveServices";
import GiftsSection from "@/components/GiftsSection";
import UniquePrivileges from "@/components/UniquePrivileges";

export default function Page() {
  return (
    <div className="">
      <ExclusiveServices />
      <UniquePrivileges />
      <ConciergeServices />
      <GiftsSection />
      <BlogSection />
    </div>
  );
}
