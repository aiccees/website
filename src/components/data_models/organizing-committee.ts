export interface OrganizingCommitteeMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  image?: string;
}

// AICCEES 2027 Organising Team, in the same order as the Information Booklet.
// Former members' photos are still in public/images/organizing-cttee if needed again.
export const organizingCommitteeMembers: OrganizingCommitteeMember[] = [
  {
    id: "1",
    name: "Professor Abam Fidelis",
    role: "Conference Co-Chair",
    affiliation: "Faculty of Engineering and Technology, University of Calabar, Cross River State, Nigeria",
    image: "/images/conference-chairs/abam.jpg"
  },
  {
    id: "2",
    name: "Professor Ogheneruona Diemuodeke",
    role: "Conference Chair",
    affiliation: "Director of Energy Technology Institute, University of Port Harcourt, Rivers State, Nigeria",
    image: "/images/conference-chairs/ruona.jpg"
  },
  {
    id: "3",
    name: "Professor Sunday Oyedepo",
    role: "Conference Co-Chair",
    affiliation: "Faculty of Engineering, Bells University of Technology, Ogun State, Nigeria",
    image: "/images/conference-chairs/oyedepo.jpg"
  },
  {
    id: "4",
    name: "Professor Charles Mbohwa",
    role: "Conference Co-Chair",
    affiliation: "College of Science, Engineering and Technology, University of South Africa",
    image: "/images/conference-chairs/charles-mbohwa.jpg"
  },
  {
    id: "5",
    name: "Dr. Joseph Asare",
    role: "Conference Co-Chair",
    affiliation: "Department of Physics, University of Ghana, Legon, Ghana",
    image: "/images/conference-chairs/asare.jpg"
  },
  {
    id: "6",
    name: "Professor Nnamdi V. Ogueke",
    role: "Conference Co-Chair",
    affiliation: "Department of Mechanical Engineering, Federal University of Technology, Owerri",
    image: "/images/conference-chairs/ogueke.jpg"
  },
  {
    id: "7",
    name: "Engr. Anthony Akpasoh",
    role: "Convener, AICCEES",
    affiliation: "COO, Tovero Energy Ltd",
    image: "/images/organizing-cttee/anthony.jpg"
  },
  {
    id: "8",
    name: "Dr. Veronica Akpasoh",
    role: "Chairman, Organising Committee",
    affiliation: "CEO, Tovero Energy Ltd",
    image: "/images/conference-chairs/verro.jpg"
  },
  {
    id: "9",
    name: "Peace Monday",
    role: "Conference Manager",
    affiliation: "Tovero Energy",
    image: "/images/organizing-cttee/peace-monday.jpg"
  }
];
