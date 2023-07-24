import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/* 
   id                 Int       @id @default(autoincrement())
   name               String
   desc_sm            String
   desc_lg            String
   rating             Float
   cookTime           String
   facts              Json
   tags               Json

*/

console.log("Hello World");
async function main() {
    prisma.product.deleteMany();
    prisma.product.create({
        data: {
            name: "Milk",
            desc_sm: "",
            desc_lg: "",
            rating: 1.3,
            cookTime: "25 min",
            facts: "Quick Spicy",
            tags: "turkey turkish meat chicken rice"
        }
    }); 
}

main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })

console.log(prisma.product.findFirst());

