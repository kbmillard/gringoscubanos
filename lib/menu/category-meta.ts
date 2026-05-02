import type { MenuCategoryMeta } from "./schema";

/**
 * Editorial styling for menu category tabs. Labels must match sheet `category` values.
 */
export const MENU_CATEGORY_META: MenuCategoryMeta[] = [
  {
    id: "sandwiches",
    label: "Sandwiches",
    panelKickerEn: "Pressed Cuban",
    subtitle: "Old World flavor on fresh Cuban bread",
    color: "red",
    number: "01",
  },
  {
    id: "sides",
    label: "Sides",
    panelKickerEn: "Sides",
    subtitle: "Empanadas, beans, plantains, hand-cut fries",
    color: "green",
    number: "02",
  },
  {
    id: "bowls",
    label: "Bowls",
    panelKickerEn: "Bowls",
    subtitle: "Bowl with your choice of meat",
    color: "yellow",
    number: "03",
  },
  {
    id: "kids-meals",
    label: "Kid's Meals",
    panelKickerEn: "Kids",
    subtitle: "Includes fries and a drink",
    color: "orange",
    number: "04",
  },
  {
    id: "beverages",
    label: "Beverages",
    panelKickerEn: "Drinks",
    subtitle: "Soda, water, and more",
    color: "cyan",
    number: "05",
  },
  {
    id: "desserts",
    label: "Desserts",
    panelKickerEn: "Desserts",
    subtitle: "Ask what we have today",
    color: "pink",
    number: "06",
  },
];
