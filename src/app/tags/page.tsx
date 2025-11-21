import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { tags } from "@/lib/data";
import { Plus, Tag as TagIcon } from "lucide-react";

export default function TagsPage() {
    return (
        <>
            <PageHeader title="Etiquetas" />
            <main className="flex-1 space-y-4 p-4 sm:p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Gestionar Etiquetas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-2">
                            <Input placeholder="Nombre de nueva etiqueta" />
                            <Button><Plus className="mr-2 h-4 w-4" /> Añadir</Button>
                        </div>
                        <div className="border rounded-md">
                            {tags.map((tag, index) => (
                                <div key={tag.id} className={`flex items-center justify-between p-3 ${index < tags.length - 1 ? 'border-b' : ''}`}>
                                    <div className="flex items-center gap-3">
                                        <TagIcon className="h-5 w-5 text-muted-foreground" />
                                        <span className="font-medium">{tag.name}</span>
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
