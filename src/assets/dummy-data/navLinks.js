import { MdDashboard } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoCarSportSharp } from "react-icons/io5";
const navLinks = [
  {
    path: "/dashboard",
    icon: <MdDashboard />,
    display: "Dashboard",
  },
  {
    path: "/bookings",
    icon:<TbBrandBooking />,
    display: "Booking",
  },
  {
    path: "/addcars",
    icon: <IoCarSportSharp />,
    display: "Add Cars",
  },

];

export default navLinks;
