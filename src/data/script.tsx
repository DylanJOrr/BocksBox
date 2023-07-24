import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    prisma.product.createMany({
        data: [
            {
                id: 1,
                name: "Zesty Tomato Penne Al Forno",
                desc_sm: "with Lime Crema and Cheddar",
                desc_lg: "Ethically Sourced 2% Skim Milk from Canadian Dairy farmers.",
                rating: 1.4,
                cookTime: "45 min",
                facts: "Spicy",
                tags: "italian"
            }, {
                id: 2,
                name: "Charred Corn and Jalapeño Pork Tacos",
                desc_sm: "with Bocconcini and Olives",
                desc_lg: "Ethically Sourced 2% Skim Milk from Canadian Dairy farmers.",
                rating: 4.5,
                cookTime: "1.5 hrs",
                facts: "Low CO2",
                tags: "meat"
            }, {
                id: 3,
                name: "Turkish-Style Spiced Chicken",
                desc_sm: "with Almond Rice and Yogurt Sauce",
                desc_lg: "Ethically Sourced 2% Skim Milk from Canadian Dairy farmers.",
                rating: 1.6,
                cookTime: "1.5 hrs",
                facts: "Quick",
                tags: "italy"
            }, {
                id: 4,
                name: "Charred Corn and Jalapeño Pork Tacos",
                desc_sm: "with Lime Crema and Cheddar",
                desc_lg: "Ethically Sourced 2% Skim Milk from Canadian Dairy farmers.",
                rating: 0.8,
                cookTime: "1.5 hrs",
                facts: "Veggie",
                tags: "italian"
            }, {
                id: 5,
                name: "Charred Corn and Jalapeño Pork Tacos",
                desc_sm: "with Bocconcini and Olives",
                desc_lg: "Ethically Sourced 2% Skim Milk from Canadian Dairy farmers.",
                rating: 3.1,
                cookTime: "15 min",
                facts: "Quick Prep",
                tags: "noodle"
            }
        ]
    });
}



main()
    .catch(e => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })
