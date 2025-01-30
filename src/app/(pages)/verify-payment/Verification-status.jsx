export default function VerificationStatus({ status, message }) {
    const statusConfig = {
      loading: {
        icon: '⏳',
        title: 'Verifying Payment',
        className: 'border-yellow-500 bg-yellow-50',
      },
      success: {
        icon: '✅',
        title: 'Payment Verified',
        className: 'border-green-500 bg-green-50',
      },
      error: {
        icon: '❌',
        title: 'Verification Failed',
        className: 'border-red-500 bg-red-50',
      },
    }
  
    const config = statusConfig[status]
  
    return (
      <div className={`rounded-lg border p-6 text-center ${config.className}`}>
        <div className="text-4xl mb-4">{config.icon}</div>
        <h2 className="text-xl font-semibold mb-2">{config.title}</h2>
        <p className="text-gray-600">{message}</p>
      </div>
    )
  }
  
  