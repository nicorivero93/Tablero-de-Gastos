// Este archivo contiene los datos de ejemplo para la aplicación.
// Define las interfaces y exporta los datos que se utilizarán en los componentes.

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

// Interfaz para un gasto.
export interface Expense {
  id: string; // Identificador único del gasto.
  description: string; // Descripción del gasto.
  amount: number; // Monto del gasto.
  category: string; // Categoría a la que pertenece el gasto.
  tags: string[]; // Etiquetas asociadas al gasto.
  date: string; // Fecha en que se realizó el gasto (formato YYYY-MM-DD).
  cardId: string; // ID de la tarjeta de crédito utilizada.
}

// Interfaz para una tarjeta de crédito.
export interface CreditCard {
  id: string; // Identificador único de la tarjeta.
  name: string; // Nombre de la tarjeta (ej. "Chase Sapphire").
  last4: string; // Últimos 4 dígitos de la tarjeta.
  limit: number; // Límite de crédito de la tarjeta.
  balance: number; // Saldo actual de la tarjeta.
  color: string; // Clase de color para estilos (usada en Tailwind CSS).
}

// Interfaz para una categoría de gasto.
export interface Category {
  id: string; // Identificador único de la categoría.
  name: string; // Nombre de la categoría.
  icon: ComponentType<LucideProps>; // Componente de icono para la categoría.
}

// Interfaz para una etiqueta de gasto.
export interface Tag {
  id: string; // Identificador único de la etiqueta.
  name: string; // Nombre de la etiqueta.
}

// Datos de ejemplo para las tarjetas de crédito.
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

// Datos de ejemplo para las categorías.
export const categories: Category[] = [
  { id: "cat-1", name: "Comida", icon: Utensils },
  { id: "cat-2", name: "Transporte", icon: Car },
  { id: "cat-3", name: "Vivienda", icon: Home },
  { id: "cat-4", name: "Compras", icon: ShoppingBag },
  { id: "cat-5", name: "Salud", icon: Heart },
  { id: "cat-6", name: "Entretenimiento", icon: Film },
  { id: "cat-7", name: "Regalos", icon: Gift },
];

// Datos de ejemplo para las etiquetas.
export const tags: Tag[] = [
  { id: "tag-1", name: "Trabajo" },
  { id: "tag-2", name: "Personal" },
  { id: "tag-3", name: "Vacaciones" },
];

// Datos de ejemplo para los gastos.
export const expenses: Expense[] = [
  {
    id: "exp-1",
    description: "Compras de supermercado",
    amount: 75.6,
    category: "Comida",
    tags: ["Personal"],
    date: "2024-07-20",
    cardId: "card-1",
  },
  {
    id: "exp-2",
    description: "Nafta",
    amount: 55.0,
    category: "Transporte",
    tags: ["Personal"],
    date: "2024-07-19",
    cardId: "card-2",
  },
  {
    id: "exp-3",
    description: "Cena con amigos",
    amount: 120.0,
    category: "Comida",
    tags: ["Personal"],
    date: "2024-07-18",
    cardId: "card-1",
  },
  {
    id: "exp-4",
    description: "Zapatillas nuevas",
    amount: 150.0,
    category: "Compras",
    tags: ["Personal", "Vacaciones"],
    date: "2024-07-17",
    cardId: "card-2",
  },
  {
    id: "exp-5",
    description: "Entradas de cine",
    amount: 30.0,
    category: "Entretenimiento",
    tags: ["Personal"],
    date: "2024-07-16",
    cardId: "card-1",
  },
];

// Ingreso mensual de ejemplo.
export const income = 5000;
