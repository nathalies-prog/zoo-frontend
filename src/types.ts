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
export type EnclosureResponse = {
  enclosures : {
    id : number;
    name : string;
    costs: number;
  }[]
}
export type DonationResponse = {
  donations : {
    id : number;
    person_name : string;
    amount : number;
    date : string;
    pdf_url : string | null;
  }[]
}
export type Donation = {
  person_name : string;
  amount : number;
  date : string;
  pdf_url : string;
}

  