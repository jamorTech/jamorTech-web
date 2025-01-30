import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedinIn, FaGithub, FaGlobe } from 'react-icons/fa'

export default function TechieCard({ techie }) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={techie.image || "/placeholder.svg"}
          alt={techie.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {techie.name}
        </h3>
        <p className="text-[#2E1065] font-medium mb-2">
          {techie.role}
        </p>
        <div className="flex items-center gap-3">
          {techie.linkIn && (
            <Link
              href={techie?.linkIn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#2E1065] hover:text-white transition-colors"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </Link>
          )}
          {techie?.gitHub && (
            <Link
              href={techie.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#2E1065] hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </Link>
          )}
          {techie?.portfolio && (
            <Link
              href={techie.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#2E1065] hover:text-white transition-colors"
            >
              <FaGlobe className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

