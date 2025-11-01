// src/components/ContactCard.jsx
import { MapPin, Phone, Mail } from "lucide-react";

const icons = {
  office: <MapPin className="text-red-500 w-5 h-5" />,
  phone: <Phone className="text-red-500 w-5 h-5" />,
  email: <Mail className="text-red-500 w-5 h-5" />,
};

export default function ContactCard({ type, title, children }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition hover:shadow-lg w-full md:w-1/3">
      <div className="mb-3">{icons[type]}</div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <div className="text-gray-600 text-sm space-y-1">{children}</div>
    </div>
  );
}
