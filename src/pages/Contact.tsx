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

  return <div className="h-screen w-screen container flex">aaa</div>;
}
