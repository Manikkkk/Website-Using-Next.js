import { config } from 'dotenv';
config({ path: '.env.local' });

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { products } from './schema';

const seedProducts = [
  {
    title: 'Brand Identity Design',
    description: 'Complete branding package — logo, colors, typography & guidelines',
    category: 'Branding',
    imageUrl: null,
    link: null,
  },
  {
    title: 'Custom Web Development',
    description: 'Scalable, fast and modern websites built with Next.js & Tailwind',
    category: 'Web Dev',
    imageUrl: null,
    link: null,
  },
  {
    title: 'UI/UX Design System',
    description: 'User-centered design systems that improve product experience',
    category: 'UI/UX',
    imageUrl: null,
    link: null,
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for iOS and Android using React Native',
    category: 'Mobile',
    imageUrl: null,
    link: null,
  },
  {
    title: 'AI Integration Services',
    description: 'Integrate AI & automation into your existing business workflows',
    category: 'AI',
    imageUrl: null,
    link: null,
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Data-driven SEO strategies that grow your organic traffic',
    category: 'SEO',
    imageUrl: null,
    link: null,
  },
];

async function seed() {
  const db = drizzle(neon(process.env.DATABASE_URL!));
  console.log('Seeding products...');
  await db.insert(products).values(seedProducts);
  console.log(`✓ Inserted ${seedProducts.length} products`);
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
