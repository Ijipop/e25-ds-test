const saluer = (nom) => {
  console.log(`Bonjour ${nom}`);
};
const saluerAvecSurnom = (nom, surnom) => {
  console.log(`Bonjour ${nom}, aussi connu sous le nom de ${surnom}`);
};

saluer("John"); // Output: Bonjour John
saluerAvecSurnom("John", "Johnny"); // Output: Bonjour John, aussi connu sous le nom de Johnny
