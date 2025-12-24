import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-card border-border overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-muted overflow-hidden relative">
          {collection.image ? (
            <>
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Sin imagen
            </div>
          )}
          
          {collection.featured && (
            <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs px-3 py-1 rounded-full font-medium">
              Destacado
            </span>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-foreground font-bold text-xl mb-2 line-clamp-1">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => onViewProducts(collection.id)}
          >
            Ver Productos
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}