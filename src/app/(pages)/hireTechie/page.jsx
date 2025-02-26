"use client";
import { useState, useEffect } from "react";
import HeroSection from "./components/hero-section";
import TechieCard from "./components/techie-card";
import Loading from "@/app/components/Loading";
import { useUserStore } from "@/app/store/useUserStore";
import useAxiosPrivate from "@/app/hooks/useAxiosPrivate";
import Link from "next/link";

export default function Home() {
  const [techies, setTechies] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState(false); // Loading state
  const [errorMessage, setErrorMessage] = useState(""); // New error state
  const axiosPrivate = useAxiosPrivate();
  const { tokenRefreshed } = useUserStore(); // Used to trigger re-fetching when token is refreshed

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMessage(""); // Reset error state on new fetch
      try {
        const response = await axiosPrivate.get(`/users/approved-jobs`);
        setTechies(response.data);
      } catch (error) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          setErrorMessage(error.response.data.error);
        }else if (error.response?.status === 404) {
          setErrorMessage("Techies not found or something went wrong. Please try again later.");
        }else if (error.request) {
          setErrorMessage("No response from the server");
        }else {
          setErrorMessage(error.response.data.error || "Failed to fetch data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tokenRefreshed, axiosPrivate]);

  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Techies
            </h2>
            <p className="text-lg text-gray-600">
              Connect with our talented pool of tech professionals ready to bring value to your organization.
            </p>
          </div>

          {loading ? (
            <Loading />
          ) : errorMessage ? (
            <div className="p-4 bg-red-50 border border-red-500 rounded-lg text-red-600">
              {errorMessage}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {techies.map((techie, index) => (
                <TechieCard key={index} techie={techie} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#2E1065] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Hire Top Tech Talent?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch with us to learn more about our talented techies and how they can contribute to your organization's success.
          </p>
          <Link
            href="contact-us"
            className="bg-white text-[#2E1065] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
