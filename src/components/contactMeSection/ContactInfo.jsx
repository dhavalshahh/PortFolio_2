import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="dhaval1504shah@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="9424080565" Image={FiPhone} />
      <SingleInfo text="Medicaps, Indore" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;