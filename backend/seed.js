import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import Mongoose connection or use direct connection
const MONGO_URI = 'mongodb://127.0.0.1:27017/food-del';

// Define Food Schema exactly like the model
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, default: 5 }
});

const Food = mongoose.models.food || mongoose.model("food", foodSchema);

const foods = [
  {
    name: "Greek Salad",
    description: "A classic Mediterranean salad with juicy tomatoes, crisp cucumbers, red onions, olives, and premium feta cheese.",
    price: 12,
    category: "Salad",
    image: "food_Greek_Salad.png",
    rating: 5
  },
  {
    name: "Veg Salad",
    description: "A vibrant, vitamin-packed mix of fresh garden greens, tomatoes, carrots, and light balsamic vinaigrette.",
    price: 18,
    category: "Salad",
    image: "food_Veg_Salad.png",
    rating: 4
  },
  {
    name: "Clover Salad",
    description: "Nutritious clover sprouts combined with crispy cucumber slices, shredded radish, and green dressing.",
    price: 16,
    category: "Salad",
    image: "food_Clover_Salad.png",
    rating: 4
  },
  {
    name: "Chicken Salad",
    description: "Grilled tender chicken breast strips tossed with crisp Romaine lettuce, croutons, and Caesar dressing.",
    price: 24,
    category: "Salad",
    image: "food_Chicken_Salad.png",
    rating: 5
  },
  {
    name: "Lasagna Rolls",
    description: "Baked pasta rolls layered with seasoned ricotta, mozzarella, spinach, and savory marinara sauce.",
    price: 14,
    category: "Rolls",
    image: "food_Lasagna_Rolls.png",
    rating: 4
  },
  {
    name: "Peri Peri Rolls",
    description: "Spicy peri-peri marinated paneer/chicken rolled in soft flatbread with fresh peppers and onions.",
    price: 12,
    category: "Rolls",
    image: "food_Peri_Peri_Rolls.png",
    rating: 4
  },
  {
    name: "Chicken Rolls",
    description: "Juicy grilled chicken chunks wrapped in a warm tortilla with crunchy lettuce and cream sauce.",
    price: 20,
    category: "Rolls",
    image: "food_Chicken_Rolls.png",
    rating: 5
  },
  {
    name: "Veg Rolls",
    description: "A comforting wrap filled with spiced sautéed potatoes, bell peppers, carrots, and sweet chili.",
    price: 15,
    category: "Rolls",
    image: "food_Veg_Rolls.png",
    rating: 4
  },
  {
    name: "Ripple Ice Cream",
    description: "Creamy vanilla ice cream beautifully rippled with rich, dark chocolate sauce layers.",
    price: 14,
    category: "Desert",
    image: "food_Ripple_Ice_Cream.png",
    rating: 4
  },
  {
    name: "Fruit Ice Cream",
    description: "Refreshing dairy ice cream loaded with real chunks of mango, strawberry, and pineapple.",
    price: 22,
    category: "Desert",
    image: "food_Fruit_Ice_Cream.png",
    rating: 5
  },
  {
    name: "Jar Ice Cream",
    description: "An indulgent layered dessert jar containing layers of cake crumbs, cream, and fruit compote.",
    price: 10,
    category: "Desert",
    image: "food_Jar_Ice_Cream.png",
    rating: 4
  },
  {
    name: "Vanilla Ice Cream",
    description: "Classic rich vanilla bean ice cream, smooth and perfectly sweet.",
    price: 12,
    category: "Desert",
    image: "food__Vanilla_Ice_Cream.png",
    rating: 4
  },
  {
    name: "Chicken Sandwich",
    description: "Roasted chicken breast slices, melted cheese, lettuce, and mayonnaise on toasted sourdough.",
    price: 12,
    category: "Sandwich",
    image: "food_Chicken_Sandwich.png",
    rating: 4
  },
  {
    name: "Vegan Sandwich",
    description: "Hummus spread, sliced avocado, cucumbers, tomatoes, and spinach on whole-grain bread.",
    price: 18,
    category: "Sandwich",
    image: "food_Vegan_Sandwich.png",
    rating: 4
  },
  {
    name: "Grilled Sandwich",
    description: "Perfectly golden toasted bread filled with melted mozzarella, cheddar, and fresh basil pesto.",
    price: 16,
    category: "Sandwich",
    image: "food_Grilled_Sandwich.png",
    rating: 5
  },
  {
    name: "Bread Sandwich",
    description: "A simple, quick toast with butter and sliced fresh cucumbers and tomatoes.",
    price: 24,
    category: "Sandwich",
    image: "food_Bread_Sandwich.png",
    rating: 3
  },
  {
    name: "Cup Cake",
    description: "Moist vanilla cupcake topped with a swirl of rich, silky buttercream frosting.",
    price: 14,
    category: "Cake",
    image: "food_Cup_Cake.png",
    rating: 5
  },
  {
    name: "Vegan Cake",
    description: "A rich chocolate cake made entirely from plant-based ingredients, topped with dairy-free ganache.",
    price: 12,
    category: "Cake",
    image: "food_Vegan_Cake.png",
    rating: 4
  },
  {
    name: "Butterscotch Cake",
    description: "Three layers of fluffy cake drizzled with caramelized butterscotch sauce and crunchy praline.",
    price: 20,
    category: "Cake",
    image: "food_ButterScotch_Cake.png",
    rating: 5
  },
  {
    name: "Sliced Cake",
    description: "A delicious slice of traditional sponge cake infused with lemon zest and berries.",
    price: 15,
    category: "Cake",
    image: "food_Sliced_Cake.png",
    rating: 4
  },
  {
    name: "Garlic Mushroom",
    description: "Sautéed button mushrooms glazed in a rich, aromatic garlic butter and herb sauce.",
    price: 14,
    category: "Pure Veg",
    image: "food_Garlic_Mushroom.png",
    rating: 4
  },
  {
    name: "Fried Cauliflower",
    description: "Crispy, golden-fried cauliflower florets tossed in a sweet and spicy glaze.",
    price: 22,
    category: "Pure Veg",
    image: "food_Fried_Cauliflower.png",
    rating: 4
  },
  {
    name: "Mix Veg Pulao",
    description: "Aromatic basmati rice cooked with mixed vegetables, cardamom, and saffron.",
    price: 10,
    category: "Pure Veg",
    image: "food_Mix_Ved_Pulao.png",
    rating: 5
  },
  {
    name: "Rice Zucchini",
    description: "Lightly sautéed zucchini ribbons and brown rice seasoned with lemon and herbs.",
    price: 12,
    category: "Pure Veg",
    image: "food_Rice_Zucchini.png",
    rating: 4
  },
  {
    name: "Cheese Pasta",
    description: "Macaroni pasta baked in a rich, velvety three-cheese sauce topped with breadcrumbs.",
    price: 12,
    category: "Pasta",
    image: "food_Cheese_Pasta.png",
    rating: 5
  },
  {
    name: "Tomato Pasta",
    description: "Penne pasta tossed in a robust, slow-simmered tomato and garlic sauce with fresh basil.",
    price: 18,
    category: "Pasta",
    image: "food_Tomato_Pasta.png",
    rating: 4
  },
  {
    name: "Creamy Pasta",
    description: "Fettuccine pasta coated in a luxurious cream sauce with parmesan and parsley.",
    price: 16,
    category: "Pasta",
    image: "food_Creamy_Pasta.png",
    rating: 4
  },
  {
    name: "Chicken Pasta",
    description: "Penne pasta with grilled chicken strips in a rich, creamy Alfredo sauce.",
    price: 24,
    category: "Pasta",
    image: "food_Chicken_Pasta.png",
    rating: 5
  },
  {
    name: "Butter Noodles",
    description: "Tender egg noodles tossed in melted butter, garlic powder, and fresh herbs.",
    price: 14,
    category: "Noodles",
    image: "food_Butter_Noodles.png",
    rating: 4
  },
  {
    name: "Veg Noodles",
    description: "Stir-fried wheat noodles with crunchy bell peppers, cabbage, carrots, and soy sauce.",
    price: 12,
    category: "Noodles",
    image: "food_Veg_Noodles.png",
    rating: 4
  },
  {
    name: "Somen Noodles",
    description: "Chilled Japanese somen noodles served with a light dipping sauce and scallions.",
    price: 20,
    category: "Noodles",
    image: "food_Samen_Noodles.png",
    rating: 4
  },
  {
    name: "Cooked Noodles",
    description: "Comforting hot noodles in a savory, aromatic broth with fresh greens.",
    price: 15,
    category: "Noodles",
    image: "food_Cooked_Noodles.png",
    rating: 4
  }
];

async function seed() {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB!");

    // Clean existing foods
    console.log("Cleaning foods collection...");
    await Food.deleteMany({});
    console.log("Collection cleaned!");

    // Set up directories
    const srcDir = path.join(__dirname, '..', 'frontend', 'src', 'assets', 'frontend_assets');
    const destDir = path.join(__dirname, 'uploads');

    if (!fs.existsSync(destDir)) {
      console.log("Creating uploads directory...");
      fs.mkdirSync(destDir);
    }

    // Copy images and insert database records
    console.log("Copying images and inserting food items...");
    for (const food of foods) {
      const srcPath = path.join(srcDir, food.image);
      const destPath = path.join(destDir, food.image);

      if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
      } else {
        console.warn(`Warning: Image file not found: ${srcPath}`);
      }
    }

    const inserted = await Food.insertMany(foods);
    console.log(`Successfully seeded ${inserted.length} food items!`);

    await mongoose.disconnect();
    console.log("Disconnected from database. Seeding complete!");
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();
