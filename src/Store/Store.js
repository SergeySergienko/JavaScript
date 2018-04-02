import { observable } from 'mobx';

export default class Store {
  @observable images;
  @observable photos;
  token = '';
  userid = '';
  
  constructor(images, photos) {
        this.images = images;
        this.photos = photos;
    }
	
  validateResponse(response) {
	  if (!response.ok) {
		throw Error(response.statusText);
	  }
	  return response;
	}


  fetchData() {
    fetch('https://api.instagram.com/v1/users/'+this.userid+'/media/recent/?access_token='+this.token+'&count='+this.amount)
	  .then(this.validateResponse)
      .then(response => response.json())
	  .then(result =>	{this.images = result.data})
      .catch(error => 	console.log('FetchData Error: ', error));
  }
  
  getData() {
	  fetch('https://randomuser.me/api/?results=10')
			.then(this.validateResponse)
			.then(res=>res.json())
			.then(data=>{this.photos = data.results})
			.catch(err=>console.error('GetData Error: ', err))
  }
}
