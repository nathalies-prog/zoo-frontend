export type AnimalResponse = {
    animals: {
      id: number;
      breed: string;
      name: string;
      birthday: string;  
      gender: boolean;
      health: string;
      vet_id: number;
      enclosure_id: number;
    }[];
  };

export type StaffResponse = {
  staffies: {
    id : number;
    name : string;
    salary : number;
    role : string;
  }[];
}

export type Donation = {
  person_name : string;
  amount : number;
  date : string;
  pdf_url : string;
}

  