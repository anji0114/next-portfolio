import { Mv } from "@/components/Home/Mv";
import { About } from "@/components/Home/About";
import { Works } from "@/components/Home/Works";

export default function Home() {
  return (
    <div className="p-index">
      <Mv />
      <About />
      <Works />
    </div>
  );
}
