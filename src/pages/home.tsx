import { FakeComments } from "../components/comments";
import { Donations } from "../components/donations";
import { Enclosures } from "../components/enclosure";
import { Header } from "../components/header";

export function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#D9C7B8]">
      <div>
        <Header />
      </div>

      <div className="mt-40 grid flex-1 grid-cols-1 gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-1 md:col-span-2 xl:col-span-2">
          <Enclosures />
        </div>
        <div className="col-span-1">
          <div className="mb-4">
            <FakeComments />
          </div>
          <Donations />
        </div>
      </div>
    </div>
  );
}
