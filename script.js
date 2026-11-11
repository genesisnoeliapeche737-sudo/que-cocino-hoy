const recipes = [
  {
    id: 'arroz-con-pollo',
    name: 'Arroz con pollo',
    description: 'Arroz tierno con pollo dorado, morrón y zanahoria, todo en una misma olla.',
    category: 'Almuerzo',
    difficulty: 'Fácil',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    image: 'arroz-con-pollo.webp',
    ingredients: [
      ['Arroz', '1 taza'], ['Pollo', '400 g de pechuga'], ['Cebolla', '1 unidad'],
      ['Morrón', '½ unidad'], ['Zanahoria', '1 unidad'], ['Caldo', '2¼ tazas'],
      ['Aceite', '1 cucharada'], ['Sal', '½ cucharadita o a gusto']
    ],
    steps: [
      'Cortá el pollo en cubos de 2 cm. Picá la cebolla, el morrón y la zanahoria.',
      'Calentá el aceite en una olla a fuego medio-alto y dorá el pollo durante 5 minutos. Agregá las verduras y cociná 5 minutos más.',
      'Sumá el arroz, el caldo caliente y la sal. Cuando hierva, tapá la olla y cociná a fuego bajo de 18 a 20 minutos, hasta que el arroz esté tierno y el pollo cocido.',
      'Apagá el fuego, dejá reposar 5 minutos con la olla tapada y separá los granos con un tenedor antes de servir.'
    ]
  },
  {
    id: 'tortilla-de-papas',
    name: 'Tortilla de papas',
    description: 'Una tortilla casera con papas tiernas y cebolla, dorada de los dos lados.',
    category: 'Cena',
    difficulty: 'Media',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    image: 'tortilla-de-papas.webp',
    ingredients: [
      ['Papa', '500 g'], ['Huevo', '5 unidades'], ['Cebolla', '1 unidad'],
      ['Aceite', '4 cucharadas'], ['Sal', '½ cucharadita']
    ],
    steps: [
      'Pelá las papas, cortalas en láminas finas y cortá la cebolla en tiras.',
      'Calentá 3 cucharadas de aceite en una sartén antiadherente. Cociná las papas y la cebolla tapadas a fuego medio-bajo durante 15 a 18 minutos. Revolvé cada tanto hasta que las papas estén tiernas.',
      'Batí los huevos con la sal y mezclalos con las papas y la cebolla. Calentá el aceite restante en la sartén y volcá la mezcla.',
      'Cociná unos 4 minutos a fuego medio-bajo. Cuando los bordes estén firmes, tapá con un plato plano, da vuelta la tortilla y deslizala de nuevo a la sartén. Cociná otros 3 minutos o hasta que el centro cuaje.'
    ]
  },
  {
    id: 'pasta-al-tomate',
    name: 'Pasta al tomate',
    description: 'Fideos con salsa de tomate fresco, ajo y un toque de albahaca.',
    category: 'Almuerzo',
    difficulty: 'Fácil',
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    image: 'pasta-al-tomate.webp',
    ingredients: [
      ['Fideos secos', '200 g'], ['Tomate', '400 g'], ['Ajo', '2 dientes'],
      ['Albahaca', '6 hojas'], ['Aceite', '1 cucharada, preferentemente de oliva'],
      ['Sal', 'A gusto']
    ],
    steps: [
      'Picá el ajo y cortá los tomates en cubitos.',
      'Calentá el aceite a fuego medio y salteá el ajo durante 30 segundos. Sumá el tomate y una pizca de sal. Cociná de 15 a 20 minutos, aplastando los tomates con una cuchara.',
      'Mientras se cocina la salsa, herví los fideos en agua con sal según el paquete. Antes de colarlos, reservá un chorrito del agua de cocción.',
      'Mezclá los fideos con la salsa y agregá un poco del agua reservada si hace falta. Terminá con la albahaca cortada a mano.'
    ]
  },
  {
    id: 'panqueques',
    name: 'Panqueques con dulce de leche',
    description: 'Panqueques finitos y suaves, enrollados con dulce de leche.',
    category: 'Postre',
    difficulty: 'Fácil',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    image: 'panqueques.webp',
    ingredients: [
      ['Huevo', '2 unidades'], ['Leche', '250 ml'], ['Harina de trigo', '125 g'],
      ['Manteca', '15 g'], ['Dulce de leche', '160 g']
    ],
    steps: [
      'Batí los huevos con la mitad de la leche. Agregá la harina de a poco y batí hasta que no queden grumos. Incorporá el resto de la leche.',
      'Calentá una sartén antiadherente a fuego medio y pincelala con un poco de manteca.',
      'Volcá un cucharón chico de mezcla y girá la sartén para cubrir el fondo. Cociná 1 minuto, da vuelta el panqueque y cociná unos 30 segundos más. Repetí hasta usar toda la mezcla.',
      'Untá cada panqueque con dulce de leche y enrollalo.'
    ]
  },
  {
    id: 'ensalada-caprese',
    name: 'Ensalada caprese',
    description: 'Tomates jugosos, mozzarella fresca y hojas de albahaca.',
    category: 'Almuerzo',
    difficulty: 'Fácil',
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    image: 'ensalada-caprese.webp',
    ingredients: [
      ['Tomate', '2 unidades grandes'], ['Mozzarella', '200 g de mozzarella fresca'],
      ['Albahaca', '10 hojas'], ['Aceite', '2 cucharadas, preferentemente de oliva'],
      ['Sal', '¼ de cucharadita']
    ],
    steps: [
      'Lavá los tomates y la albahaca. Secá las hojas con cuidado.',
      'Cortá los tomates y la mozzarella en rodajas de un grosor parecido.',
      'Alterná las rodajas en una fuente y repartí la albahaca. Agregá el aceite y la sal justo antes de servir.'
    ]
  },
  {
    id: 'milanesas-de-pollo',
    name: 'Milanesas de pollo',
    description: 'Milanesas al horno con un rebozado crocante de ajo y perejil.',
    category: 'Cena',
    difficulty: 'Fácil',
    prepTime: 15,
    cookTime: 22,
    servings: 4,
    image: 'milanesas-de-pollo.webp',
    ingredients: [
      ['Pollo', '500 g de pechuga en filetes finos'], ['Huevo', '2 unidades'],
      ['Pan rallado', '150 g'], ['Ajo', '1 diente'], ['Perejil', '2 cucharadas picado'],
      ['Aceite', '2 cucharadas'], ['Sal', '½ cucharadita']
    ],
    steps: [
      'Precalentá el horno a 220 °C y pincelá una asadera con la mitad del aceite.',
      'Batí los huevos con el ajo picado, el perejil y la sal. Pasá cada filete por el huevo y después por el pan rallado, presionando para que se adhiera.',
      'Acomodá los filetes separados en la asadera y pincelalos con el resto del aceite.',
      'Horneá entre 18 y 22 minutos. Dalos vuelta a mitad de cocción y retiralos cuando estén dorados y el pollo esté cocido en el centro.'
    ]
  },
  {
    id: 'pizza-margarita',
    name: 'Pizza margarita',
    description: 'Pizza de masa casera con tomate, mozzarella y albahaca fresca.',
    category: 'Cena',
    difficulty: 'Media',
    prepTime: 70,
    cookTime: 15,
    servings: 4,
    image: 'pizza-margarita.webp',
    ingredients: [
      ['Harina de trigo', '300 g'], ['Levadura seca', '4 g'], ['Agua', '190 ml tibia'],
      ['Sal', '1 cucharadita'], ['Aceite', '2 cucharadas'],
      ['Puré de tomate', '150 g'], ['Mozzarella', '200 g'], ['Albahaca', '8 hojas']
    ],
    steps: [
      'Mezclá la harina con la levadura, la sal, el agua tibia y 1 cucharada de aceite. Amasá 8 minutos hasta obtener una masa lisa.',
      'Tapá el bol y dejá levar la masa en un lugar templado entre 45 y 60 minutos, hasta que casi duplique su tamaño.',
      'Precalentá el horno a 240 °C. Untá una pizzera con el resto del aceite y estirá la masa hasta cubrirla. Distribuí el puré de tomate y la mozzarella en trozos.',
      'Horneá de 12 a 15 minutos, hasta que la base esté dorada y el queso se derrita. Agregá la albahaca fresca al sacarla.'
    ]
  },
  {
    id: 'guiso-de-lentejas',
    name: 'Guiso de lentejas',
    description: 'Un guiso espeso de lentejas, papa y chorizo colorado.',
    category: 'Almuerzo',
    difficulty: 'Media',
    prepTime: 15,
    cookTime: 35,
    servings: 4,
    image: 'guiso-de-lentejas.webp',
    ingredients: [
      ['Lenteja cocida', '450 g escurridos'], ['Chorizo colorado', '100 g'],
      ['Cebolla', '1 unidad'], ['Zanahoria', '1 unidad'], ['Papa', '2 unidades'],
      ['Puré de tomate', '200 g'], ['Caldo', '500 ml'],
      ['Pimentón', '1 cucharadita'], ['Aceite', '1 cucharada'], ['Sal', 'A gusto']
    ],
    steps: [
      'Picá la cebolla y la zanahoria, cortá las papas peladas en cubos chicos y el chorizo en rodajas. Escurrí las lentejas.',
      'Calentá el aceite en una olla. Dorá el chorizo 3 minutos y agregá la cebolla y la zanahoria. Cociná otros 5 minutos.',
      'Agregá las papas, el pimentón, el puré de tomate y el caldo. Cociná a fuego medio unos 20 minutos, hasta que las papas estén tiernas.',
      'Incorporá las lentejas y cociná 7 minutos más. Probá el guiso y ajustá la sal antes de servir.'
    ]
  },
  {
    id: 'brownies',
    name: 'Brownies de chocolate',
    description: 'Brownies con bordes firmes y un centro húmedo de chocolate.',
    category: 'Postre',
    difficulty: 'Media',
    prepTime: 15,
    cookTime: 25,
    servings: 9,
    image: 'brownies.webp',
    ingredients: [
      ['Chocolate semiamargo', '150 g'], ['Manteca', '100 g'], ['Huevo', '2 unidades'],
      ['Azúcar', '150 g'], ['Harina de trigo', '70 g'], ['Sal', '1 pizca']
    ],
    steps: [
      'Precalentá el horno a 175 °C. Forrá un molde cuadrado de 20 cm con papel manteca.',
      'Derretí el chocolate con la manteca a baño María. Dejá entibiar.',
      'Batí los huevos con el azúcar, agregá el chocolate derretido y mezclá. Incorporá la harina y la sal con una espátula hasta que desaparezca la harina seca.',
      'Volcá la mezcla en el molde y horneá de 20 a 25 minutos. Retirá cuando un palillo salga con migas húmedas. Dejá enfriar antes de cortar.'
    ]
  },
  {
    id: 'omelette',
    name: 'Omelette de queso',
    description: 'Huevos batidos y queso derretido en un desayuno que se hace en minutos.',
    category: 'Desayuno',
    difficulty: 'Fácil',
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    image: 'omelette.webp',
    ingredients: [
      ['Huevo', '2 unidades'], ['Queso cremoso', '40 g'],
      ['Manteca', '1 cucharadita'], ['Sal', '1 pizca']
    ],
    steps: [
      'Batí los huevos con la sal y cortá el queso en trocitos.',
      'Derretí la manteca en una sartén antiadherente a fuego medio-bajo. Volcá los huevos y mové la sartén para cubrir el fondo.',
      'Cuando los bordes estén firmes, distribuí el queso sobre una mitad. Doblá el omelette y cociná un minuto más, hasta que el huevo cuaje y el queso se derrita.'
    ]
  },
  {
    id: 'tostadas-con-palta',
    name: 'Tostadas con palta',
    description: 'Pan crocante con palta pisada, limón y tomate fresco.',
    category: 'Desayuno',
    difficulty: 'Fácil',
    prepTime: 8,
    cookTime: 4,
    servings: 2,
    image: 'tostadas-con-palta.webp',
    ingredients: [
      ['Pan', '4 rebanadas'], ['Palta', '1 unidad grande'], ['Limón', '½ unidad'],
      ['Tomate', '1 unidad'], ['Sal', '1 pizca']
    ],
    steps: [
      'Tostá el pan en una sartén o tostadora hasta que esté dorado de ambos lados.',
      'Pisá la pulpa de la palta con un tenedor. Mezclala con el jugo del limón y la sal.',
      'Cortá el tomate en rodajas finas. Untá las tostadas con la palta y repartí el tomate por encima.'
    ]
  },
  {
    id: 'sopa-de-calabaza',
    name: 'Sopa de calabaza',
    description: 'Una sopa cremosa de calabaza, cebolla y un toque de crema.',
    category: 'Cena',
    difficulty: 'Fácil',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    image: 'sopa-de-calabaza.webp',
    ingredients: [
      ['Calabaza', '650 g pelada'], ['Cebolla', '1 unidad'], ['Ajo', '1 diente'],
      ['Caldo', '700 ml'], ['Crema de leche', '100 ml'], ['Aceite', '1 cucharada'],
      ['Sal', 'A gusto']
    ],
    steps: [
      'Cortá la calabaza en cubos chicos y picá la cebolla y el ajo.',
      'Calentá el aceite en una olla y rehogá la cebolla durante 4 minutos. Sumá el ajo y revolvé durante 30 segundos.',
      'Agregá la calabaza y el caldo. Cociná unos 20 minutos desde que hierva, hasta que puedas atravesar la calabaza con un tenedor.',
      'Apagá el fuego y procesá con una licuadora de mano. Agregá la crema, calentá un minuto más y ajustá la sal.'
    ]
  },
  {
    id: 'empanadas-de-carne',
    name: 'Empanadas de carne',
    description: 'Empanadas al horno con relleno jugoso de carne, cebolla y huevo.',
    category: 'Cena',
    difficulty: 'Media',
    prepTime: 30,
    cookTime: 30,
    servings: 4,
    image: 'empanadas-de-carne.webp',
    ingredients: [
      ['Tapa de empanada', '12 unidades para horno'], ['Carne picada', '350 g'],
      ['Cebolla', '2 unidades'], ['Huevo', '2 unidades'], ['Aceite', '1 cucharada'],
      ['Pimentón', '1 cucharadita'], ['Comino', '¼ de cucharadita'],
      ['Sal', '½ cucharadita']
    ],
    steps: [
      'Herví un huevo durante 10 minutos, enfriá, pelá y picalo. Mientras tanto, picá las cebollas y precalentá el horno a 210 °C.',
      'Rehogá la cebolla en el aceite durante 6 minutos. Agregá la carne, el pimentón, el comino y la sal. Cociná de 6 a 8 minutos, separando la carne con una cuchara, hasta que esté cocida.',
      'Mezclá el huevo duro con el relleno y dejalo entibiar. Poné una cucharada en cada tapa, doblala y sellá el borde con un repulgue o un tenedor.',
      'Batí el segundo huevo y pincelá las empanadas. Horneá entre 15 y 18 minutos hasta que estén doradas.'
    ]
  },
  {
    id: 'ensalada-de-garbanzos',
    name: 'Ensalada de garbanzos',
    description: 'Garbanzos, tomate y pepino con un aliño fresco de limón y perejil.',
    category: 'Almuerzo',
    difficulty: 'Fácil',
    prepTime: 15,
    cookTime: 0,
    servings: 3,
    image: 'ensalada-de-garbanzos.webp',
    ingredients: [
      ['Garbanzo cocido', '400 g escurridos'], ['Tomate', '2 unidades'],
      ['Pepino', '1 unidad'], ['Cebolla', '½ unidad'], ['Limón', '1 unidad'],
      ['Perejil', '2 cucharadas picado'], ['Aceite', '2 cucharadas'],
      ['Sal', '½ cucharadita']
    ],
    steps: [
      'Enjuagá y escurrí los garbanzos. Cortá el tomate y el pepino en cubos chicos y picá la cebolla.',
      'Mezclá en un bol el jugo del limón, el aceite, la sal y el perejil.',
      'Agregá los garbanzos y las verduras al bol. Mezclá bien y serví.'
    ]
  },
  {
    id: 'budin-de-banana',
    name: 'Budín de banana',
    description: 'Un budín húmedo y esponjoso para aprovechar bananas maduras.',
    category: 'Desayuno',
    difficulty: 'Fácil',
    prepTime: 15,
    cookTime: 45,
    servings: 8,
    image: 'budin-de-banana.webp',
    ingredients: [
      ['Banana', '3 unidades maduras'], ['Huevo', '2 unidades'],
      ['Azúcar', '100 g'], ['Aceite', '80 ml de aceite neutro'],
      ['Harina de trigo', '200 g'], ['Polvo de hornear', '2 cucharaditas'],
      ['Sal', '1 pizca']
    ],
    steps: [
      'Precalentá el horno a 175 °C y forrá una budinera de 22 cm con papel manteca.',
      'Pisá las bananas. Batí los huevos con el azúcar y el aceite. Agregá el puré de banana.',
      'Mezclá la harina, el polvo de hornear y la sal. Incorporá los secos a la mezcla húmeda sin batir de más.',
      'Volcá en la budinera y horneá entre 40 y 45 minutos, hasta que al pinchar el centro con un palillo salga limpio. Dejá entibiar antes de desmoldar.'
    ]
  },
  {
    id: 'arroz-con-leche',
    name: 'Arroz con leche',
    description: 'El postre clásico, cremoso y perfumado con limón y canela.',
    category: 'Postre',
    difficulty: 'Fácil',
    prepTime: 5,
    cookTime: 35,
    servings: 4,
    image: 'arroz-con-leche.webp',
    ingredients: [
      ['Arroz', '100 g'], ['Leche', '1 litro'], ['Azúcar', '80 g'],
      ['Limón', '2 tiras de cáscara'], ['Canela', '1 ramita o ½ cucharadita molida']
    ],
    steps: [
      'Lavá el limón y cortá dos tiras de cáscara sin llevarte la parte blanca.',
      'Poné la leche, el arroz, la cáscara de limón y la canela en una olla. Cuando empiece a hervir, bajá el fuego y cociná de 25 a 30 minutos. Revolvé seguido para evitar que se pegue.',
      'Cuando el arroz esté tierno, agregá el azúcar y cociná unos 5 minutos más, revolviendo.',
      'Retirá la cáscara y la ramita de canela si la usaste. Repartí en tazas y serví tibio o frío.'
    ]
  },
  {
    id: 'tarta-de-acelga',
    name: 'Tarta de acelga',
    description: 'Tarta de masa dorada con un relleno suave de acelga y queso.',
    category: 'Cena',
    difficulty: 'Media',
    prepTime: 20,
    cookTime: 40,
    servings: 6,
    image: 'tarta-de-acelga.webp',
    ingredients: [
      ['Acelga', '1 atado grande'], ['Tapa de tarta', '1 disco'], ['Cebolla', '1 unidad'],
      ['Huevo', '3 unidades'], ['Queso cremoso', '150 g'],
      ['Aceite', '1 cucharada'], ['Sal', '½ cucharadita']
    ],
    steps: [
      'Precalentá el horno a 190 °C. Lavá la acelga y picá las hojas y las pencas por separado. Picá la cebolla.',
      'Calentá el aceite en una sartén y rehogá la cebolla y las pencas durante 5 minutos. Agregá las hojas y cociná otros 4 minutos. Escurrí bien y dejá entibiar.',
      'Mezclá la acelga con los huevos batidos, la sal y el queso en cubitos. Forrá un molde de 24 cm con la masa y volcá el relleno.',
      'Horneá de 28 a 32 minutos, hasta que los bordes de la masa estén dorados y el relleno esté firme.'
    ]
  },
  {
    id: 'risotto-de-champinones',
    name: 'Risotto de champiñones',
    description: 'Arroz cremoso con champiñones dorados, manteca y queso rallado.',
    category: 'Almuerzo',
    difficulty: 'Difícil',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    image: 'risotto-de-champinones.webp',
    ingredients: [
      ['Arroz', '300 g de arroz arborio'], ['Champiñón', '250 g'],
      ['Cebolla', '1 unidad'], ['Caldo', '1 litro'], ['Manteca', '30 g'],
      ['Queso rallado', '60 g, preferentemente parmesano'],
      ['Aceite', '2 cucharadas'], ['Sal', 'A gusto']
    ],
    steps: [
      'Calentá el caldo en una olla aparte y mantenelo caliente a fuego bajo. Picá la cebolla y cortá los champiñones en láminas.',
      'Dorá los champiñones en una sartén amplia con la mitad del aceite durante unos 5 minutos y reservalos. En la misma sartén, rehogá la cebolla con el resto del aceite durante 4 minutos. Sumá el arroz y revolvé 1 minuto.',
      'Agregá un cucharón de caldo caliente y revolvé. Cuando el arroz absorba casi todo el líquido, añadí otro cucharón. Repetí durante 18 a 20 minutos, hasta que el grano esté tierno pero firme en el centro.',
      'Apagá el fuego e incorporá los champiñones, la manteca y el queso rallado. Mezclá, ajustá la sal y serví enseguida.'
    ]
  }
];

const storageKeys = {
  pantry: 'que-cocino-hoy:despensa',
  favorites: 'que-cocino-hoy:favoritos',
  shopping: 'que-cocino-hoy:compras'
};

const commonIngredients = ['Huevo', 'Papa', 'Arroz', 'Pollo', 'Tomate', 'Cebolla', 'Aceite', 'Sal'];
const compareNames = new Intl.Collator('es-AR', { sensitivity: 'base' }).compare;
const ingredients = [...new Set(recipes.flatMap(recipe => recipe.ingredients.map(([name]) => name)))]
  .sort(compareNames);
const recipeById = new Map(recipes.map(recipe => [recipe.id, recipe]));
const pantry = new Set(readStorage(storageKeys.pantry).filter(name => ingredients.includes(name)));
const favorites = new Set(readStorage(storageKeys.favorites).filter(id => recipeById.has(id)));
const shopping = new Map();

for (const item of readStorage(storageKeys.shopping)) {
  if (ingredients.includes(item?.name)) {
    shopping.set(item.name, { name: item.name, checked: item.checked === true });
  }
}

const byId = id => document.getElementById(id);
const search = byId('ingredient-search');
const ingredientOptions = byId('ingredient-options');
const selectedIngredients = byId('selected-ingredients');
const allIngredientsButton = byId('all-ingredients');
const clearPantryButton = byId('clear-pantry');
const recipeGrid = byId('recipe-grid');
const favoritesGrid = byId('favorites-grid');
const categoryFilter = byId('category-filter');
const difficultyFilter = byId('difficulty-filter');
const timeFilter = byId('time-filter');
const filters = [categoryFilter, difficultyFilter, timeFilter];
const shoppingList = byId('shopping-list');
const recipeDialog = byId('recipe-dialog');
const dialogContent = byId('dialog-content');
const toast = byId('toast');
const navigation = [...document.querySelectorAll('.main-nav a')];
const views = {
  '#recetas': byId('recipes-view'),
  '#favoritos': byId('favorites-view'),
  '#compras': byId('shopping-view')
};
let showAllIngredients = false;
let activeView = '#recetas';
let activeRecipe = null;
let recipeOpener = null;
let toastTimeout;

function readStorage(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) ?? '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

function normalizeText(text) {
  return text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
}

function icon(name) {
  return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function notify(message) {
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.hidden = false;
  toastTimeout = setTimeout(() => { toast.hidden = true; }, 3800);
}

function updateCount(id, count) {
  const badge = byId(id);
  badge.textContent = count;
  badge.hidden = count === 0;
}

function renderIngredientOptions() {
  const query = normalizeText(search.value);
  const visibleIngredients = query
    ? ingredients.filter(name => normalizeText(name).includes(query))
    : showAllIngredients ? ingredients : commonIngredients;

  byId('ingredient-options-title').textContent = query ? 'Resultados de búsqueda'
    : showAllIngredients ? 'Todos los ingredientes' : 'Ingredientes comunes';
  ingredientOptions.classList.toggle('is-expanded', showAllIngredients || Boolean(query));
  allIngredientsButton.hidden = Boolean(query);
  allIngredientsButton.setAttribute('aria-expanded', String(showAllIngredients));
  allIngredientsButton.querySelector('span').textContent = showAllIngredients
    ? 'Mostrar ingredientes comunes' : 'Ver todos los ingredientes';

  ingredientOptions.innerHTML = visibleIngredients.map(name => {
    const selected = pantry.has(name);
    return `<button class="ingredient-chip" type="button" data-ingredient="${name}" aria-pressed="${selected}">
      ${icon(selected ? 'check' : 'plus')} ${name}
    </button>`;
  }).join('') || '<p>No encontramos ese ingrediente.</p>';
}

function renderPantry() {
  renderIngredientOptions();
  byId('ingredient-count').textContent = pantry.size;
  byId('selection-empty').hidden = pantry.size > 0;
  clearPantryButton.hidden = pantry.size === 0;
  selectedIngredients.innerHTML = [...pantry].sort(compareNames).map(name =>
    `<li><button class="selected-chip" type="button" data-ingredient="${name}" aria-label="Quitar ${name} de la despensa">
      ${name} ${icon('close')}
    </button></li>`
  ).join('');
}

function updatePantry() {
  if (!saveStorage(storageKeys.pantry, [...pantry])) {
    notify('La despensa estará disponible durante esta visita.');
  }
  renderPantry();
  renderRecipes();
  renderFavorites();
}

// La despensa guarda nombres. Las cantidades se consultan en la receta.
function compareRecipe(recipe) {
  const missing = recipe.ingredients.filter(([name]) => !pantry.has(name));
  const available = recipe.ingredients.length - missing.length;
  const percent = Math.round(available / recipe.ingredients.length * 100);
  return { recipe, missing, available, percent };
}

function rankRecipes(list) {
  return list.map(compareRecipe).sort((first, second) =>
    second.available - first.available || second.percent - first.percent
  );
}

function matchMarkup({ missing, percent }) {
  const ready = missing.length === 0;
  const status = ready ? 'Podés prepararla'
    : missing.length === 1 ? 'Te falta 1 ingrediente' : `Te faltan ${missing.length} ingredientes`;
  return `<div class="match-block${ready ? ' is-ready' : ''}">
    <div class="match-label"><span>${status}</span><strong>${percent}%</strong></div>
    <progress class="match-track" value="${percent}" max="100" aria-label="Coincidencia con tu despensa"></progress>
  </div>`;
}

function favoriteButton(recipe) {
  return `<button class="icon-button favorite-button" type="button" data-favorite="${recipe.id}"
    aria-label="Favorito: ${recipe.name}" title="Guardar o quitar de favoritos"
    aria-pressed="${favorites.has(recipe.id)}">${icon('heart')}</button>`;
}

function recipeCard(match) {
  const { recipe } = match;
  return `<article class="recipe-card" data-recipe="${recipe.id}">
    <div class="card-image">
      <img src="assets/recipes/${recipe.image}" alt="" loading="lazy" decoding="async">
      <span class="category-badge">${recipe.category}</span>
      ${favoriteButton(recipe)}
    </div>
    <div class="card-body">
      <h3 class="card-title">${recipe.name}</h3>
      <p class="card-description">${recipe.description}</p>
      <div class="card-meta">
        <span>${icon('clock')} ${recipe.prepTime + recipe.cookTime} min en total</span>
        <span>${icon('level')} ${recipe.difficulty}</span>
      </div>
      ${matchMarkup(match)}
      <button class="button button-outline button-card" type="button" data-open-recipe="${recipe.id}"
        aria-label="Ver receta de ${recipe.name}">Ver receta ${icon('arrow')}</button>
    </div>
  </article>`;
}

function renderRecipes() {
  const filteredRecipes = recipes.filter(recipe =>
    (!categoryFilter.value || recipe.category === categoryFilter.value) &&
    (!difficultyFilter.value || recipe.difficulty === difficultyFilter.value) &&
    (!timeFilter.value || recipe.prepTime <= Number(timeFilter.value))
  );
  const matches = rankRecipes(filteredRecipes);
  const count = matches.length;
  const readyCount = matches.filter(match => match.missing.length === 0).length;
  const result = count === 1 ? '1 receta' : `${count} recetas`;
  byId('recipe-count').textContent = readyCount ? `${result} · ${readyCount} para cocinar` : result;
  byId('no-results').hidden = count > 0;
  recipeGrid.innerHTML = matches.map(recipeCard).join('');
}

function renderFavorites() {
  const matches = rankRecipes(recipes.filter(recipe => favorites.has(recipe.id)));
  favoritesGrid.innerHTML = matches.map(recipeCard).join('');
  byId('favorites-empty').hidden = matches.length > 0;
  updateCount('favorite-count', favorites.size);
}

function toggleFavorite(id, button) {
  const remove = favorites.has(id);
  if (remove) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  const saved = saveStorage(storageKeys.favorites, [...favorites]);
  const otherButtons = [...favoritesGrid.querySelectorAll('[data-favorite]')];
  const position = otherButtons.indexOf(button);
  renderFavorites();
  document.querySelectorAll(`[data-favorite="${id}"]`).forEach(heart => {
    heart.setAttribute('aria-pressed', String(!remove));
  });

  if (position >= 0) {
    const nextButtons = favoritesGrid.querySelectorAll('[data-favorite]');
    const next = nextButtons[Math.min(position, nextButtons.length - 1)] ?? byId('favorites-empty').querySelector('a');
    next.focus({ preventScroll: true });
  }
  const message = remove ? 'Receta quitada de tus favoritos.' : 'Receta guardada en tus favoritos.';
  const feedback = saved ? message : `${message} El cambio dura esta visita.`;
  if (recipeDialog.open) {
    byId('dialog-feedback').textContent = feedback;
  } else {
    notify(feedback);
  }
}

function addMissingIngredients(recipe) {
  const { missing } = compareRecipe(recipe);
  let added = 0;
  for (const [name] of missing) {
    if (!shopping.has(name)) {
      shopping.set(name, { name, checked: false });
      added += 1;
    }
  }
  if (added === 0) return { added, saved: true };

  const saved = saveStorage(storageKeys.shopping, [...shopping.values()]);
  renderShopping();
  return { added, saved };
}

function renderShoppingProgress() {
  const checkedCount = [...shopping.values()].filter(item => item.checked).length;
  byId('shopping-progress').textContent = `${checkedCount} de ${shopping.size} comprados`;
}

function renderShopping() {
  const items = [...shopping.values()].sort((first, second) => compareNames(first.name, second.name));
  byId('shopping-panel').hidden = items.length === 0;
  byId('shopping-empty').hidden = items.length > 0;
  shoppingList.innerHTML = items.map(({ name, checked }) => `<li class="shopping-row">
    <label><input type="checkbox" data-check-item="${name}" ${checked ? 'checked' : ''}> <span>${name}</span></label>
    <button type="button" class="icon-button" data-remove-item="${name}" aria-label="Quitar ${name} de la lista">${icon('trash')}</button>
  </li>`).join('');
  updateCount('shopping-count', items.length);
  renderShoppingProgress();
}

function openRecipe(id, opener) {
  const recipe = recipeById.get(id);
  const match = compareRecipe(recipe);
  activeRecipe = recipe;
  recipeOpener = opener;
  dialogContent.innerHTML = `<img class="dialog-image" src="assets/recipes/${recipe.image}" alt="">
    <div class="dialog-body">
      <span class="category-badge">${recipe.category}</span>
      <div class="dialog-title-row"><h2 id="dialog-title">${recipe.name}</h2>${favoriteButton(recipe)}</div>
      <p class="dialog-description">${recipe.description}</p>
      <div class="dialog-meta">
        <span>${icon('clock')} ${recipe.prepTime} min de preparación</span>
        <span>${recipe.cookTime ? `${recipe.cookTime} min de cocción` : 'Sin cocción'}</span>
        <span>${icon('people')} ${recipe.servings} porciones</span>
        <span>${icon('level')} ${recipe.difficulty}</span>
      </div>
      ${matchMarkup(match)}
      <h3>Ingredientes</h3>
      <ul class="ingredient-details">${recipe.ingredients.map(([name, amount]) => `<li>
        <span>${pantry.has(name) ? `${icon('check')} <span class="sr-only">En tu despensa:</span>` : ''}
          <span><strong>${name}</strong> ${amount}</span></span>
        ${pantry.has(name) ? '' : '<span class="missing-label">Falta</span>'}
      </li>`).join('')}</ul>
      ${match.missing.length ? `<button class="button button-primary add-missing" type="button" id="add-missing">
        ${icon('cart')} Agregar faltantes a compras
      </button>
      <a class="button button-outline add-missing" href="#compras" id="see-shopping" hidden>Ver lista ${icon('arrow')}</a>` : ''}
      <p class="dialog-feedback" id="dialog-feedback" role="status"></p>
      <h3>Paso a paso</h3>
      <ol class="recipe-steps">${recipe.steps.map(step => `<li>${step}</li>`).join('')}</ol>
    </div>`;
  recipeDialog.showModal();
  recipeDialog.scrollTop = 0;
}

function showView() {
  const hash = location.hash;
  if (hash === '#main-content') return;
  const next = Object.hasOwn(views, hash) ? hash : '#recetas';
  for (const [route, view] of Object.entries(views)) {
    view.hidden = route !== next;
  }
  for (const link of navigation) {
    if (link.getAttribute('href') === next) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  }
  if (activeView !== next) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  activeView = next;
}

byId('start-pantry').addEventListener('click', () => {
  byId('pantry').scrollIntoView({ block: 'start' });
  search.focus({ preventScroll: true });
});
search.addEventListener('input', renderIngredientOptions);
allIngredientsButton.addEventListener('click', () => {
  showAllIngredients = !showAllIngredients;
  renderIngredientOptions();
});
ingredientOptions.addEventListener('click', event => {
  const chip = event.target.closest('[data-ingredient]');
  if (!chip) return;
  const name = chip.dataset.ingredient;
  if (pantry.has(name)) {
    pantry.delete(name);
  } else {
    pantry.add(name);
  }
  const scrollPosition = ingredientOptions.scrollTop;
  updatePantry();
  ingredientOptions.scrollTop = scrollPosition;
  [...ingredientOptions.querySelectorAll('button')].find(button => button.dataset.ingredient === name)
    ?.focus({ preventScroll: true });
});
selectedIngredients.addEventListener('click', event => {
  const chip = event.target.closest('[data-ingredient]');
  if (!chip) return;
  const index = [...selectedIngredients.querySelectorAll('button')].indexOf(chip);
  pantry.delete(chip.dataset.ingredient);
  updatePantry();
  const buttons = selectedIngredients.querySelectorAll('button');
  const next = buttons[Math.min(index, buttons.length - 1)] ?? search;
  next.focus({ preventScroll: true });
});
clearPantryButton.addEventListener('click', () => {
  pantry.clear();
  updatePantry();
  search.focus({ preventScroll: true });
});

for (const filter of filters) filter.addEventListener('change', renderRecipes);
byId('reset-filters').addEventListener('click', () => {
  for (const filter of filters) filter.value = '';
  renderRecipes();
  categoryFilter.focus();
});

document.addEventListener('click', event => {
  const favorite = event.target.closest('[data-favorite]');
  if (favorite) toggleFavorite(favorite.dataset.favorite, favorite);
  const opener = event.target.closest('[data-open-recipe]');
  if (opener) openRecipe(opener.dataset.openRecipe, opener);
});

byId('close-recipe').addEventListener('click', () => recipeDialog.close());
recipeDialog.addEventListener('click', event => {
  if (event.target !== recipeDialog) return;
  const bounds = recipeDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) recipeDialog.close();
});
recipeDialog.addEventListener('close', () => {
  // El navegador puede entregar este evento después de abrir otra receta.
  if (recipeDialog.open) return;
  if (recipeOpener?.isConnected) {
    recipeOpener.focus({ preventScroll: true });
  } else if (activeView === '#favoritos') {
    const fallback = favoritesGrid.querySelector('[data-open-recipe]') ?? byId('favorites-empty').querySelector('a');
    fallback.focus({ preventScroll: true });
  }
  activeRecipe = null;
  recipeOpener = null;
});
dialogContent.addEventListener('click', event => {
  if (event.target.closest('#see-shopping')) recipeDialog.close();
  if (!event.target.closest('#add-missing')) return;
  const { added, saved } = addMissingIngredients(activeRecipe);
  const message = added === 0 ? 'Los ingredientes faltantes ya están en tu lista.'
    : added === 1 ? 'Agregaste 1 ingrediente a tu lista.' : `Agregaste ${added} ingredientes a tu lista.`;
  byId('dialog-feedback').textContent = saved ? message : `${message} El cambio dura esta visita.`;
  byId('see-shopping').hidden = false;
});

shoppingList.addEventListener('change', event => {
  const input = event.target;
  if (!input.matches('[data-check-item]')) return;
  shopping.get(input.dataset.checkItem).checked = input.checked;
  if (!saveStorage(storageKeys.shopping, [...shopping.values()])) {
    notify('El cambio en la lista dura esta visita.');
  }
  renderShoppingProgress();
});
shoppingList.addEventListener('click', event => {
  const button = event.target.closest('[data-remove-item]');
  if (!button) return;
  const index = [...shoppingList.querySelectorAll('[data-remove-item]')].indexOf(button);
  shopping.delete(button.dataset.removeItem);
  if (!saveStorage(storageKeys.shopping, [...shopping.values()])) {
    notify('El cambio en la lista dura esta visita.');
  }
  renderShopping();
  const buttons = shoppingList.querySelectorAll('[data-remove-item]');
  const next = buttons[Math.min(index, buttons.length - 1)] ?? byId('shopping-empty').querySelector('a');
  next.focus({ preventScroll: true });
});

window.addEventListener('hashchange', showView);
renderPantry();
renderRecipes();
renderFavorites();
renderShopping();
showView();
