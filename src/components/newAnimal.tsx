import { ChangeEvent, FormEvent, useState } from "react";
import { useFormStore } from "../store/form-store";
export function AddAnimal() {
    const { isFormVisible, toggleFormVisibility } = useFormStore();
  
    const [newAnimal, setNewAnimal] = useState({
      id: "",
      breed: "",
      name: "",
      birthday: "",
      gender: true,  
      health: "",
      vet_id: "",
      enclosure_id: "",
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      if (name === 'gender') {
        setNewAnimal({
          ...newAnimal,
          [name]: value === 'true', 
        });
      } else {
        setNewAnimal({
          ...newAnimal,
          [name]: value,
        });
      }
    };
  
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        const response = await fetch("https://wa-dev-zoobackend-gwc-nr.azurewebsites.net/animals/insertAnimal", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAnimal),
        });
  
        if (!response.ok) {
          throw new Error("Fehler beim Hinzufügen des Tiers");
        }
  
        const data = await response.json();
        console.log("Tier erfolgreich hinzugefügt:", data);
  
        setNewAnimal({
          id: "",
          breed: "",
          name: "",
          birthday: "",
          gender: true, 
          health: "",
          vet_id: "",
          enclosure_id: "",
        });
        toggleFormVisibility(); 
      } catch (error) {
        console.error("Fehler beim Hinzufügen des Tiers:", error);
      }
    };
  
    return (
      <div>
        <button
          onClick={toggleFormVisibility}
          className="mb-4 px-6 py-3 bg-[#014034] text-white rounded-md hover:bg-[#1a5635]"
        >
          Tier hinzufügen
        </button>
  
        {isFormVisible && (
          <div className="relative">
            <form
              onSubmit={handleSubmit}
              className="absolute w-100 top-0 left-0 right-0 mt-4 p-6 border-2 border-gray-300 rounded-lg backdrop-blur-sm z-20"
            >
              <h2 className="text-2xl font-bold mb-4">Tier hinzufügen</h2>
  
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Rasse</label>
                <input
                  type="text"
                  name="breed"
                  value={newAnimal.breed}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newAnimal.name}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Geburtstag</label>
                <input
                  type="date"
                  name="birthday"
                  value={newAnimal.birthday}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Geschlecht</label>
                <select
                  name="gender"
                  value={newAnimal.gender ? 'true' : 'false'} 
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md"
                >
                  <option value="true">Männlich</option>
                  <option value="false">Weiblich</option>
                </select>
              </div>
  
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Gesundheitsstatus</label>
                <input
                  type="text"
                  name="health"
                  value={newAnimal.health}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Tierarzt ID</label>
                <input
                  type="number"
                  name="vet_id"
                  value={newAnimal.vet_id}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
  
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Gehege ID</label>
                <input
                  type="number"
                  name="enclosure_id"
                  value={newAnimal.enclosure_id}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md"
                />
              </div>
  
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-[#014034] text-white rounded-md hover:bg-[#1a5635]"
              >
                Hinzufügen
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
  