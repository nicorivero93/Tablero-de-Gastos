import type { ComponentType } from "react";
import {
  Car,
  Utensils,
  Home,
  ShoppingBag,
  Heart,
  Film,
  Gift,
  LucideProps,
} from "lucide-react";

export interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
  tags: string[];
  date: string;
  cardId: string;
}

export interface CreditCard {
  id: string;
  name: string;
  last4: string;
  limit: number;
  balance: number;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  icon: ComponentType<LucideProps>;
}

export interface Tag {
  id: string;
  name: string;
}

export const creditCards: CreditCard[] = [
  {
    id: "card-1",
    name: "Chase Sapphire",
    last4: "4242",
    limit: 15000,
    balance: 3450.82,
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: "card-2",
    name: "Amex Gold",
    last4: "8431",
    limit: 25000,
    balance: 8765.1,
    color: "from-yellow-400 to-amber-500",
  },
];

export const categories: Category[] = [
  { id: "cat-1", name: "Food", icon: Utensils },
  { id: "cat-2", name: "Transportation", icon: Car },
  { id: "cat-3", name: "Housing", icon: Home },
  { id: "cat-4", name: "Shopping", icon: ShoppingBag },
  { id: "cat-5", name: "Health", icon: Heart },
  { id: "cat-6", name: "Entertainment", icon: Film },
  { id: "cat-7", name: "Gifts", icon: Gift },
];

export const tags: Tag[] = [
  { id: "tag-1", name: "Work" },
  { id: "tag-2", name: "Personal" },
  { id: "tag-3", name: "Vacation" },
];

export const expenses: Expense[] = [
  {
    id: "exp-1",
    description: "Grocery shopping",
    amount: 75.6,
    category: "Food",
    tags: ["Personal"],
    date: "2024-07-20",
    cardId: "card-1",
  },
  {
    id: "exp-2",
    description: "Gasoline",
    amount: 55.0,
    category: "Transportation",
    tags: ["Personal"],
    date: "2024-07-19",
    cardId: "card-2",
  },
  {
    id: "exp-3",
    description: "Dinner with friends",
    amount: 120.0,
    category: "Food",
    tags: ["Personal"],
    date: "2024-07-18",
    cardId: "card-1",
  },
  {
    id: "exp-4",
    description: "New shoes",
    amount: 150.0,
    category: "Shopping",
    tags: ["Personal", "Vacation"],
    date: "2024-07-17",
    cardId: "card-2",
  },
  {
    id: "exp-5",
    description: "Movie tickets",
    amount: 30.0,
    category: "Entertainment",
    tags: ["Personal"],
    date: "2024-07-16",
    cardId: "card-1",
  },
];

export const income = 5000;
