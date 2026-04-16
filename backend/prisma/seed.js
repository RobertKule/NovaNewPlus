const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');

  // 1. Create Default Users
  const adminPassword = await bcrypt.hash('Admin123!', 10);
  const clientPassword = await bcrypt.hash('Test123!', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@novaplus.com' },
    update: {},
    create: {
      email: 'admin@novaplus.com',
      password: adminPassword,
      name: 'Super Admin',
      role: 'ADMIN',
    },
  });

  const client = await prisma.user.upsert({
    where: { email: 'test@client.com' },
    update: {},
    create: {
      email: 'test@client.com',
      password: clientPassword,
      name: 'Test Client',
      role: 'USER',
    },
  });

  // 2. Create Offers
  const offers = [
    {
      name: 'Essentiel',
      speed: 30,
      quota: 200,
      price: 49.99,
      description: 'Idéal pour le surf et les emails.',
      isPopular: false,
    },
    {
      name: 'Populaire',
      speed: 200,
      quota: null,
      price: 99.99,
      description: 'Vitesse maximale, data illimitée.',
      isPopular: true,
    },
    {
      name: 'Famille',
      speed: 100,
      quota: null,
      price: 79.99,
      description: 'Parfait pour le streaming en famille.',
      isPopular: false,
    },
  ];

  for (const offer of offers) {
    await prisma.offer.create({ data: offer });
  }

  // 3. Create Coverage Zones
  const zones = [
    { name: 'Likasi Centre', quartier: 'Centre-Ville', latitude: -10.9833, longitude: 26.7333, level: 'GOOD' },
    { name: 'Kikula', quartier: 'Kikula', latitude: -10.97, longitude: 26.72, level: 'GOOD' },
    { name: 'Shituru', quartier: 'Shituru', latitude: -10.99, longitude: 26.75, level: 'PARTIAL' },
  ];

  for (const zone of zones) {
    await prisma.coverageZone.create({ data: zone });
  }

  // 4. Create Blog Articles
  await prisma.article.create({
    data: {
      title: 'Installation Satellite à Likasi',
      excerpt: 'Tout savoir sur le processus d\'installation de votre antenne NOVA+.',
      content: 'Le processus est simple : 1. Commande en ligne, 2. Paiement MoMo, 3. Visite du tech...',
      author: 'Equipe NOVA+',
    }
  });

  console.log('Seeding completed!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
