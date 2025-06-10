import { useParams } from "react-router-dom";

const notesResources: Record<string, { title: string; url: string }[]> = {
  "AUDITING & ETHICS": [
    { title: "Auditing - Paper 1", url: "/pdfs/auditing1.pdf" },
    { title: "Auditing - Paper 2", url: "/pdfs/auditing2.pdf" },
    // Add all 6 resources...
  ],
  "Advanced Accounting": [
    { title: "Accounting Notes 1", url: "/pdfs/UKG.pdf" },
    { title: "Accounting Notes 2", url: "/pdfs/I STD.pdf" },
    // Add all 8 resources...
  ],
  // Add other subjects similarly...
};

export default function NoteResources() {
  const { subject } = useParams();
  const resources = notesResources[subject || ""] || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#0B2C4D] mb-4">
        Resources for: {subject}
      </h1>

      {resources.length === 0 ? (
        <p>No resources available for this subject.</p>
      ) : (
        <ul className="space-y-4">
          {resources.map((res, idx) => (
            <li
              key={idx}
              className="border rounded-lg p-4 shadow-sm flex justify-between items-center"
            >
              <span className="text-[#0B2C4D] font-medium">{res.title}</span>
              <div className="space-x-2">
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View
                </a>
                <a
                  href={res.url}
                  download
                  className="text-green-600 underline"
                >
                  Download
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
