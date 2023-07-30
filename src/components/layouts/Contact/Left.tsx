import { IoChatbubblesOutline, IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

function Left({ className }: { className: string }) {
  return (
    <div className={`${className}`}>
      <p className="text-deep-orange-500 font-semibold text-xl">Contact</p>
      <p className="font-bold text-6xl mb-5">
        Looking to find great equipments?
      </p>
      <p className="text-xl">
        Whats next for many of us is Lorem ipsum dolor sit amet consectetur
        adipisicing elit. exercitationem illo saepe iste sunt excepturi
        accusamus laborum molestias?
      </p>
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex items-top gap-4 mt-10">
          <IoChatbubblesOutline className="text-3xl mt-2 text-deep-orange-500" />
          <div className="text-left">
            <p>Our team is here to help</p>
            <a href="mailto:sales@sunstarequipments.com" className="font-bold">
              sales@sunstarequipments.com
            </a>
          </div>
        </div>
        <div className="flex items-top gap-4 mt-10">
          <FiPhoneCall className="text-3xl mt-2 text-deep-orange-500" />
          <div className="text-left">
            <p>Mon-Fri from 9am-5pm.</p>
            <a href="tel:+1123-456-7890" className="font-bold">
              +1 (123) 456-7890
            </a>
          </div>
        </div>
        <div className="flex items-top gap-4 mt-10">
          <IoLocationOutline className="text-3xl mt-2 text-deep-orange-500" />
          <div className="text-left">
            <p>Come say hello at our office</p>
            <a href="tel:+1123-456-7890" className="font-semibold">
              100 Smith St, Austin, TX 78701
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
