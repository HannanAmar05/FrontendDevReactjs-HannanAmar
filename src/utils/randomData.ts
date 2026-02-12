export const getConsistentMetadata = (id: string) => {
  const seed = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const categoryOptions = [
    "Jawa",
    "Bali",
    "Indonesia",
    "Modern",
    "Tradisional",
    "Sunda",
    "Internasional",
  ];

  const category = categoryOptions[seed % categoryOptions.length];
  const price = ((seed % 36) + 15) * 1000;
  const isOpen = seed % 2 === 0;

  return { price, isOpen, category };
};
