// need to install faker as @types/faker
import faker from 'faker';
// why using capital?
export class User{
    name:string;
    location:{
        lng:number;
        lat:number;
    };
    constructor(){
        this.name = faker.name.findName();
        // special way to claim the object in class
        this.location = {
            lng:parseFloat(faker.address.longitude()),
            lat:parseFloat(faker.address.latitude()),
            
        }
        
    }
    markerContent():string {
        const str:string = `<div>
                            <h3>User name: ${this.name}</h3>
                            <h3>Location: </h3>
                            Lat: ${this.location.lat}
                            Lng: ${this.location.lng}
                            </div>`;
        return str;

    } 
}