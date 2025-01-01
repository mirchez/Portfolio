import { useState, useCallback } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCopy,
  FaWhatsapp,
  FaArrowLeft,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import useIsMobile from "@/hooks/useIsMobile";

// Function to detect if the device is iOS
function isIOS() {
  if (typeof navigator === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window)
  );
}

// Function that returns the link to open Gmail
function getGmailLink(isMobile: boolean) {
  if (isMobile) {
    if (isIOS()) {
      // On iOS, use the "googlegmail://" scheme
      return "googlegmail://co?to=mmirandasanchez16@gmail.com";
    } else {
      // On Android, use the Gmail intent
      return "intent://co?to=mmirandasanchez16@gmail.com.com#Intent;package=com.google.android.gm;scheme=googlegmail;end";
    }
  }
  // On PC, open the web version
  return "https://mail.google.com/mail";
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useIsMobile();

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate a 2-second loading period
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", formData);
    setIsLoading(false);
    // Here you can add the actual logic to send the form
  };

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText("mmirandasanchez16@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div className="h-screen w-screen container flex">
      <div className="max-w-2xl my-auto mx-auto p-8 bg-white rounded-lg shadow-none sm:shadow-lg">
        <div className="mb-6 flex items-center">
          <button
            onClick={() => navigate("/")}
            className="text-black hover:bg-gray-100 p-2 rounded-full transition duration-300"
          >
            <FaArrowLeft />
          </button>
          <h2 className="text-3xl font-bold ml-4 text-black">Contact Me</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={20} />
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/mirchez/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/mirchez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://wa.link/wfrq9d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition duration-300"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          {/* Email buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <div className="relative">
              <button
                onClick={copyEmail}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-black py-1 px-3 rounded-full transition duration-300"
              >
                <FaEnvelope className="text-lg" />
                <span className="text-sm">mmirandasanchez16@gmail.com</span>
                <FaCopy className="text-sm" />
              </button>
              {copied && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm px-2 py-1 rounded">
                  Copied!
                </div>
              )}
            </div>
            <a
              // For mobile users, open the Gmail app directly; for PC, open the web version
              href={getGmailLink(isMobile)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-black py-1 px-3 rounded-full transition duration-300"
            >
              <span className="text-sm">Go to Gmail</span>
              <FaExternalLinkAlt className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
