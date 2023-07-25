import CorporateClient from "./CorporateClient";
import SchoolClients from "./SchoolClients";

const Clients = () => {
  return (
    <div className="bg-[#f1f8ff] py-[59px] px-[30px] w-[100%]">
      <SchoolClients />
      <CorporateClient />
    </div>
  );
};

export default Clients;
