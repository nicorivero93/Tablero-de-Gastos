import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { expenses, categories } from "@/lib/data";
import { PlusCircle } from "lucide-react";

export default function ExpensesPage() {
    const categoryMap = new Map(categories.map(c => [c.name, c.icon]));
    
    return (
        <>
            <PageHeader title="Expenses">
                <Button>
                    <PlusCircle className="mr-2" />
                    Add Expense
                </Button>
            </PageHeader>
            <main className="flex-1 space-y-4 p-4 sm:p-6">
                <div className="bg-card rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Description</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Tags</TableHead>
                                <TableHead className="text-right">Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {expenses.map((expense) => {
                                const Icon = categoryMap.get(expense.category);
                                return (
                                <TableRow key={expense.id}>
                                    <TableCell className="font-medium">{expense.description}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
                                            {expense.category}
                                        </div>
                                    </TableCell>
                                    <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <div className="flex gap-1">
                                            {expense.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">-${expense.amount.toFixed(2)}</TableCell>
                                </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </>
    )
}
