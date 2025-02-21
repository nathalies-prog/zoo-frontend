// components/DonationList.tsx
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/card';
import { useDonations } from '../services/donations-service';

export function Donations() {
  const { data, isLoading, error } = useDonations();

  if (isLoading) return <p>Lade Spenden...</p>;
  if (error) return <p>Fehler beim Laden der Spenden!</p>;

  return (
    <Card className="shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold mb-4">Spenden für unseren Zoo🌼</CardTitle>
      </CardHeader>
      <CardContent>
        {data?.donations.map((donation) => (
          <div key={donation.id} className="mb-4">
            <Card className="bg-[#FEE3D0] shadow-md p-4 rounded-lg">
              <CardHeader>
                <CardTitle>{donation.person_name}</CardTitle>
              </CardHeader>
              <CardDescription>
                <p className="text-gray-600">Betrag: {donation.amount} EUR</p>
                <p className="text-gray-500">Datum: {new Date(donation.date).toLocaleDateString()}</p>
                {donation.pdf_url && (
                  <a href={donation.pdf_url} className="text-blue-500">PDF herunterladen</a>
                )}
              </CardDescription>
            </Card>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};


