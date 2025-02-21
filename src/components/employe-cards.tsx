import { useStaff } from "../services/employe-service"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";




const StaffCards = () => {
    const { data, error } = useStaff();

    if (error) {
        return <div>Error loading Staffies</div>;
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {data?.staffies.map((staff) => {
                const gender= Math.random() < 0.5 ? "men" : "women";

                return (
                    <Card key={staff.id} className="w-full">
                        <CardHeader>
                            <CardTitle>{staff.role}</CardTitle>
                            <CardTitle>{staff.id}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={`https://randomuser.me/api/portraits/${gender}/${staff.id % 100}.jpg`}
                                alt="Staff Image"
                                className="w-35 h-35 rounded-sm object-cover"
                            />
                            <p>Name: {staff.name}</p>
                            <p>Gehalt: {staff.salary} €</p>
                        </CardContent>
                        <CardFooter>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
};
export default StaffCards;
