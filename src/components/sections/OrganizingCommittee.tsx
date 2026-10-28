"use client";

import { organizingCommitteeMembers } from "@/components/data_models/organizing-committee";

// Laid out like the "Organising Team" page of the AICCEES 2027 Information Booklet:
// a 3-column grid (one column on phones) with round photos, role in orange above the name.
export default function OrganizingCommittee() {
  return (
    <div className="mb-20">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl tracking-tighter sm:text-5xl font-bold mb-4">
          <span className="text-orange-500">Organising</span>{" "}
          <span className="text-green-800">Team</span>
        </h2>
        <div className="w-24 h-1 bg-red-600 mx-auto rounded-full mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet the dedicated team behind AICCEES, working tirelessly to bring you an exceptional conference experience.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {organizingCommitteeMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full p-1.5 bg-white border-4 border-gray-100 shadow-sm mb-5">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-3xl font-semibold text-gray-500">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-sm font-semibold text-orange-500 mb-1">{member.role}</p>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
