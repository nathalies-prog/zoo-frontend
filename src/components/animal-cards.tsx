
import { useAnimals } from "../services/tier-service"; 
import { Card, CardHeader, CardTitle, CardDescription, CardContent} from "../components/ui/card"; 

const AnimalCards = () => {
  const { data, error } = useAnimals(); 

  if (error) {
    return <div>Error loading animals</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data?.animals.map((animal) => (
        <Card key={animal.id} className="w-full">
          <CardHeader>
            <CardTitle>{animal.name}</CardTitle> 
            <CardDescription>{animal.breed}</CardDescription> 
          </CardHeader>
          <CardContent>
            <p>Birthday: {new Date(animal.birthday).toLocaleDateString()}</p> 
            <p>Gender: {animal.gender ? "Male" : "Female"}</p> 
            <p>Health: {animal.health === 'healthy' ? '🤗' : '😷'}</p> 
          </CardContent>
  
        </Card>
      ))}
    </div>
  );
};

export default AnimalCards;
