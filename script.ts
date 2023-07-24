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

async function main() {
    /* const user = await prisma.product.createMany({
        data: [{
            name: "Turkish-Style Spiced Chicken",
            desc_sm: "with Almond Rice and Yogurt Sauce",
            desc_lg: "Ethically Sourced 2% Skim Milk from Canadian Dairy farmers.",
            rating: 4.5,
            cookTime: "30 min",
            facts: "Quick Prep;",
            tags: "turkey;turkish;meat;chicken;rice"
        },
        {
            name: "Zesty Tomato Penne Al Forno",
            desc_sm: "with Bocconcini and Olives",
            desc_lg: "Ethically Sourced 2% Skim Milk from Canadian Dairy farmers.",
            rating: 4.2,
            cookTime: "25 min",
            facts: "Spicy;Veggie;Low CO2",
            tags: "italy;italian;noodle;pasta;vegetarian"
        },
        {
            name: "Charred Corn and Jalapeño Pork Tacos",
            desc_sm: "with Lime Crema and Cheddar",
            desc_lg: "Ethically Sourced 2% Skim Milk from Canadian Dairy farmers.",
            rating: 3.8,
            cookTime: "45 min",
            facts: "Spicy;Quick",
            tags: "mexicon;mexican;taco;pork;meat;corn"
        },
        ]
    });
    console.log(user); */
    const product = await prisma.product.findMany({
        where: {
            rating: { gt: 4 },
        }
    })
    console.log(product.length);
}

main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })


