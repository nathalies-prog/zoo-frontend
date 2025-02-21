import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/card';
import { useEnclosures } from '../services/enclosure-service';

export function Enclosures() {
  const { data, isLoading, error } = useEnclosures();

  if (isLoading) return <p>Lade Gehege...</p>;
  if (error) return <p>Fehler beim Laden der Gehege!</p>;

  return (
    <Card className="shadow-lg p-6 ">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold mb-4">Ein Überblick über unsere Gehege und deren Kosten 🌻</CardTitle>
      </CardHeader>
      <CardContent>
        {data?.enclosures.map((enclosure : any) => (
          <div key={enclosure.id} className="mb-4">
            <Card className="bg-[#FEE3D0] shadow-md p-4 rounded-lg">
              <CardHeader>
                <CardTitle>{enclosure.name}</CardTitle>
              </CardHeader>
              <CardDescription>
                <p className="text-gray-600">Kosten: {enclosure.costs} EUR</p>
              </CardDescription>
            </Card>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

