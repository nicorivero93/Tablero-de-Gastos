import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { categories } from "@/lib/data";
import { Plus } from "lucide-react";

export default function CategoriesPage() {
    return (
        <>
            <PageHeader title="Categorías" />
            <main className="flex-1 space-y-4 p-4 sm:p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Gestionar Categorías</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-2">
                            <Input placeholder="Nombre de nueva categoría" />
                            <Button><Plus className="mr-2 h-4 w-4" /> Añadir</Button>
                        </div>
                        <div className="border rounded-md">
                            {categories.map((category, index) => (
                                <div key={category.id} className={`flex items-center justify-between p-3 ${index < categories.length - 1 ? 'border-b' : ''}`}>
                                    <div className="flex items-center gap-3">
                                        <category.icon className="h-5 w-5 text-muted-foreground" />
                                        <span className="font-medium">{category.name}</span>
                                    </div>
                                    <Button variant="ghost" size="sm">Editar</Button>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </main>
        </>
    )
}
