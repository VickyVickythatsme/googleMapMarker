import faker from "faker";

export class Company{
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number,
        lng:number
    };
    constructor(){
        // randomly gengerate name and lng and lat
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }
    markerContent():string{
        const str:string = `Company name: ${this.companyName}
                            Catch Phrase: ${this.catchPhrase}
                            Location:
                            Lat: ${this.location.lat}
                            lng: ${this.location.lng}`;
        return str;
    }
}