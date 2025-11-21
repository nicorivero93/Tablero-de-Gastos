import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { expenses, categories } from '@/lib/data';

export default function RecentTransactions() {
  const categoryMap = new Map(categories.map(c => [c.name, c.icon]));

  return (
    <div className="space-y-6">
      {expenses.slice(0, 5).map((expense) => {
        const Icon = categoryMap.get(expense.category);
        return (
          <div key={expense.id} className="flex items-center">
            <Avatar className="h-9 w-9">
                {Icon && <AvatarFallback className="bg-background"><Icon className="h-4 w-4 text-muted-foreground" /></AvatarFallback>}
            </Avatar>
            <div className="ml-4 space-y-1">
              <p className="text-sm font-medium leading-none">{expense.description}</p>
              <p className="text-sm text-muted-foreground">{expense.category}</p>
            </div>
            <div className="ml-auto font-medium">-${expense.amount.toFixed(2)}</div>
          </div>
        )
      })}
    </div>
  );
}
