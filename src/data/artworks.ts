export interface Artwork {
  title: string;
  year: string;
  medium: string;
  imageUrl: string;
  description: string;
}

export const artworks: Artwork[] = [
  {
    title: "L'Atelier",
    year: "1980",
    medium: "Photographie",
    imageUrl: "/images/atelier.jpg",
    description: "Vue de l'atelier d'Amy Torrilhon, montrant une collection éclectique de peintures cubistes et de sculptures, témoignant de la diversité de sa pratique artistique."
  },
  {
    title: "Méditation",
    year: "1975",
    medium: "Bronze",
    imageUrl: "/images/sculpture.jpg",
    description: "Cette sculpture en bronze représente une figure contemplative, fusionnant les influences cubistes avec une sensibilité moderniste distinctive."
  },
  {
    title: "Les Élégantes",
    year: "1965",
    medium: "Huile sur toile",
    imageUrl: "/images/elegantes.jpg",
    description: "Une composition vibrante dépeignant un groupe de figures élégantes, caractéristique du style d'Amy Torrilhon mêlant expressionnisme et modernité."
  }
];