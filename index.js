let heroi = { nome: `Gilberto Stark`, xp: 10000};
if (heroi.xp < 1000) {
  console.log(`${heroi.nome} Você é um herói de nível Ferro!`);
} else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
  console.log(`${heroi.nome} Você é um herói de nível Bronze!`);
} else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
  console.log(`${heroi.nome} Você é um herói de nível Prata Ouro!`);
} else if (heroi.xp >= 5001 && heroi.xp <= 8000) {
    console.log(`${heroi.nome} Você é um herói de nível Platina Diamante!`);	
    } else if (heroi.xp >= 8001 && heroi.xp <= 10000) {
      console.log(`${heroi.nome} Você é um herói de nível Ascendente!`);
    } else {
      console.log(`${heroi.nome} Você é um herói de nível Lendário!`);	
    }