
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="loader"></div>
        <p className="text-gray-600">Loading verification page...</p>
      </div>
    </div>
  )
}

