// avoid immport sooo many class
interface Mappable {
    location:{
        lat:number;
        lng:number;
    }
    markerContent():string;

}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId:string) {
    // initialize a google map
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
  // when user and company has different name with same property
  // it's not available for using like this way
  addMaker(mappable:Mappable):void{
      const marker = new google.maps.Marker({
          map:this.googleMap,
          position:{
              lat: mappable.location.lat,
              lng: mappable.location.lng
          }
      })
      marker.addListener("click", () => {
        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent(),
        })
        infoWindow.open(this.googleMap, marker);
      })


  }
}
