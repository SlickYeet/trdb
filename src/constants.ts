import type { Recipe } from "@/types"

export const recentRecipes: Recipe[] = [
  {
    cookTime: 20,
    createdAt: new Date().toISOString(),
    description:
      "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    id: "1",
    ingredients: [
      { name: "Spaghetti", quantity: "200g" },
      { name: "Pancetta", quantity: "100g" },
      { name: "Eggs", quantity: "2 large" },
      { name: "Parmesan Cheese", quantity: "50g, grated" },
      { name: "Black Pepper", quantity: "to taste" },
      { name: "Salt", quantity: "to taste" },
    ],
    instructions: [
      {
        description:
          "Cook the spaghetti in salted boiling water until al dente.",
        step: 1,
      },
      { description: "In a pan, cook the pancetta until crispy.", step: 2 },
      {
        description:
          "In a bowl, whisk together the eggs and grated Parmesan cheese.",
        step: 3,
      },
      {
        description:
          "Drain the spaghetti and return it to the pot. Off the heat, quickly mix in the pancetta and egg mixture, stirring vigorously to create a creamy sauce.",
        step: 4,
      },
      {
        description:
          "Season with black pepper and salt to taste. Serve immediately.",
        step: 5,
      },
    ],
    prepTime: 15,
    slug: "spaghetti-carbonara",
    tags: ["Italian", "Pasta", "Quick"],
    title: "Spaghetti Carbonara",
  },
  {
    cookTime: 40,
    createdAt: new Date().toISOString(),
    description:
      "A popular Indian dish with marinated chicken in a spiced tomato sauce.",
    id: "2",
    ingredients: [
      { name: "Chicken Breast", quantity: "500g, cubed" },
      { name: "Yogurt", quantity: "150g" },
      { name: "Garam Masala", quantity: "2 tsp" },
      { name: "Cumin", quantity: "1 tsp" },
      { name: "Paprika", quantity: "1 tsp" },
      { name: "Tomato Puree", quantity: "200g" },
      { name: "Cream", quantity: "100ml" },
      { name: "Garlic", quantity: "3 cloves, minced" },
      { name: "Ginger", quantity: "1 inch, grated" },
      { name: "Salt", quantity: "to taste" },
    ],
    instructions: [
      {
        description:
          "Marinate the chicken in yogurt, garam masala, cumin, paprika, garlic, ginger, and salt for at least 1 hour.",
        step: 1,
      },
      {
        description:
          "Cook the marinated chicken in a pan until browned and cooked through. Set aside.",
        step: 2,
      },
      {
        description:
          "In the same pan, add tomato puree and cook for a few minutes. Then add cream and simmer until the sauce thickens.",
        step: 3,
      },
      {
        description:
          "Return the chicken to the pan and coat it with the sauce. Simmer for another 10 minutes.",
        step: 4,
      },
      { description: "Serve hot with rice or naan bread.", step: 5 },
    ],
    prepTime: 30,
    slug: "chicken-tikka-masala",
    tags: ["Indian", "Chicken", "Spicy"],
    title: "Chicken Tikka Masala",
  },
  {
    cookTime: 25,
    createdAt: new Date().toISOString(),
    description:
      "A refreshing Mexican salad with avocado, corn, black beans, and a zesty lime dressing.",
    id: "3",
    ingredients: [
      { name: "Avocado", quantity: "1 large, diced" },
      { name: "Corn Kernels", quantity: "1 cup (fresh or frozen)" },
      { name: "Black Beans", quantity: "1 cup, rinsed and drained" },
      { name: "Cherry Tomatoes", quantity: "1 cup, halved" },
      { name: "Red Onion", quantity: "1 small, finely chopped" },
      {
        name: "Cilantro",
        quantity: "1/4 cup, chopped (optional)",
      },
      {
        name: "Lime Juice",
        quantity: "2 tbsp",
      },
      {
        name: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        name: "Salt",
        quantity: "to taste",
      },
      {
        name: "Black Pepper",
        quantity: "to taste",
      },
    ],
    instructions: [
      {
        description:
          "In a large bowl, combine the diced avocado, corn kernels, black beans, cherry tomatoes, red onion, and cilantro (if using).",
        step: 1,
      },
      {
        description:
          "In a small bowl, whisk together the lime juice, olive oil, salt, and black pepper to make the dressing.",
        step: 2,
      },
      {
        description:
          "Pour the dressing over the salad and toss gently to combine.",
        step: 3,
      },
      { description: "Serve immediately or chill for later.", step: 4 },
    ],
    prepTime: 15,
    slug: "avocado-corn-salad",
    tags: ["Mexican", "Salad", "Vegetarian"],
    title: "Avocado Corn Salad",
  },
  {
    cookTime: 30,
    createdAt: new Date().toISOString(),
    description:
      "A comforting American classic with ground beef, tomato sauce, and a cheesy mashed potato topping.",
    id: "4",
    ingredients: [
      { name: "Ground Beef", quantity: "500g" },
      { name: "Onion", quantity: "1 medium, chopped" },
      { name: "Garlic", quantity: "2 cloves, minced" },
      { name: "Tomato Sauce", quantity: "400g" },
      { name: "Worcestershire Sauce", quantity: "1 tbsp" },
      { name: "Salt", quantity: "to taste" },
      { name: "Black Pepper", quantity: "to taste" },
      { name: "Potatoes", quantity: "4 large, peeled and cubed" },
      { name: "Butter", quantity: "2 tbsp" },
      { name: "Milk", quantity: "1/4 cup" },
      { name: "Cheddar Cheese", quantity: "100g, shredded" },
    ],
    instructions: [
      {
        description:
          "Preheat the oven to 200°C (400°F). In a pan, cook the ground beef with onion and garlic until browned. Drain excess fat.",
        step: 1,
      },
      {
        description:
          "Add tomato sauce, Worcestershire sauce, salt, and pepper to the beef. Simmer for 10 minutes.",
        step: 2,
      },
      {
        description:
          "Meanwhile, boil the potatoes until tender. Drain and mash with butter and milk. Season with salt and pepper.",
        step: 3,
      },
      {
        description:
          "Spread the beef mixture in a baking dish, top with mashed potatoes, and sprinkle with cheddar cheese.",
        step: 4,
      },
      { description: "Bake for 20 minutes until golden and bubbly.", step: 5 },
    ],
    prepTime: 20,
    slug: "shepherds-pie",
    tags: ["American", "Comfort Food", "Beef"],
    title: "Shepherd's Pie",
  },
]
