import Oracle from "../assets/companylogo/oracle.png";
import Morph from "../assets/companylogo/morph.png";
import Samsung from "../assets/companylogo/samsung.png";
import Monday from "../assets/companylogo/monday.png";
import Segment from "../assets/companylogo/segment.png";

export default function TrustedCompanies() {
  const clients = [
    { name: "Oracle", logo: Oracle },
    { name: "Morph1", logo: Morph },
    { name: "Morph2", logo: Morph },
    { name: "Samsung", logo: Samsung },
    { name: "Monday", logo: Monday },
    { name: "Segment", logo: Segment },
  ];

  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Trusted By Over 100+ Startups and freelance business
          </h1>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-200"
            >
              <div className="relative w-32 h-12">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
