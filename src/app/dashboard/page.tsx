import { DollarSign, CreditCard, PiggyBank, PlusCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/page-header';
import { expenses, income } from '@/lib/data';
import OverviewChart from '@/components/dashboard/overview-chart';
import RecentTransactions from '@/components/dashboard/recent-transactions';

export default function DashboardPage() {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const savings = income - totalExpenses;

  return (
    <>
      <PageHeader title="Panel">
        <Button>
          <PlusCircle className="mr-2" />
          Añadir Gasto
        </Button>
      </PageHeader>
      <main className="flex-1 space-y-4 p-4 sm:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent-foreground/80">
                ${income.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gastos Totales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${totalExpenses.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ahorros</CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${savings.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Este mes</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Resumen de Gastos</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <OverviewChart />
            </CardContent>
          </Card>
          <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
              <CardTitle>Transacciones Recientes</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentTransactions />
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
