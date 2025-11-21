import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { creditCards } from "@/lib/data";
import { CreditCard, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CardsPage() {
  return (
    <>
      <PageHeader title="Tarjetas de Crédito">
        <Button>
          <PlusCircle className="mr-2" />
          Añadir Tarjeta
        </Button>
      </PageHeader>
      <main className="flex-1 space-y-4 p-4 sm:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {creditCards.map((card) => (
            <Card key={card.id} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{card.name}</CardTitle>
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                </div>
                <CardDescription>**** **** **** {card.last4}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div
                  className={cn(
                    "w-full h-32 rounded-lg bg-gradient-to-br p-4 flex flex-col justify-end",
                    card.color
                  )}
                >
                  <div className="text-white font-mono tracking-widest text-lg">
                    **** **** **** {card.last4}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-2">
                <div className="w-full">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Saldo</span>
                    <span>${card.balance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Límite</span>
                    <span>${card.limit.toLocaleString()}</span>
                  </div>
                </div>
                <Progress value={(card.balance / card.limit) * 100} className="h-2" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
