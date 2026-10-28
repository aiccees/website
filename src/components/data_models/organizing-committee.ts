export interface OrganizingCommitteeMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  image?: string;
}

// AICCEES 2027 Organising Committee, in the same order as the Information Booklet.
// (The Conference Chair and Co-Chairs have their own section on the About page.)
// Former members' photos are still in public/images/organizing-cttee if needed again.
export const organizingCommitteeMembers: OrganizingCommitteeMember[] = [
  {
    id: "1",
    name: "Engr. Anthony Akpasoh",
    role: "Convener, AICCEES",
    affiliation: "COO, Tovero Energy Ltd",
    image: "/images/organizing-cttee/anthony.jpg"
  },
  {
    id: "2",
    name: "Dr. Veronica Akpasoh",
    role: "Chairman, Organising Committee",
    affiliation: "CEO, Tovero Energy Ltd",
    image: "/images/conference-chairs/verro.jpg"
  },
  {
    id: "3",
    name: "Peace Monday",
    role: "Conference Manager",
    affiliation: "Tovero Energy",
    image: "/images/organizing-cttee/peace-monday.jpg"
  }
];
