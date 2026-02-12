export const getConsistentMetadata = (id: string) => {
  // 1. Ubah string ID menjadi angka (seed)
  const seed = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

  // 2. Hitung harga (misal rentang 15rb - 50rb)
  const price = ((seed % 36) + 15) * 1000;

  // 3. Tentukan status buka (misal ID genap = buka)
  const isOpen = seed % 2 === 0;

  return { price, isOpen };
};
