export default function Card({ headline, text }) {
  return (
    <div className="bg-white p-4 rounded-md border-2 border-gray-400">
      <div className="bg-customPurple text-white font-arimoFont rounded-2xl px-3 py-2 text-base sm:text-lg text-center font-normal">
        {headline}
      </div>
      <div className="font-normal text-sm sm:text-base text-justify text-black mt-4">
        {text}
      </div>
    </div>
  );
}
