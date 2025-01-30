import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="relative bg-[#2E1065] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hire A Techie
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Our training programs are designed to not only educate but also empower individuals to achieve their professional goals.
          </p>
        </div>
      </div>
    </div>
  )
}

