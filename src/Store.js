import { observable } from 'mobx';

class Store {
  @observable images;
  @observable photos;
  token = '4417915906.b6970d4.28e366a283a84256872046e361e2f322';
  userid = 4417915906;
  
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
  
  addData() {
	  fetch('http://localhost:3000/items.json', {
			method: 'post',
			headers: {
				'Accept' : 'application/json',
				'Content-type' : 'application/json'
			},
			body: JSON.stringify({
				id: "12",
				name: "Bitch",
				price: "66"
			})
		})
			.then(res=>res.json())
			.then(data=>console.log(data))
			.catch(err=>console.error(err))
  }
  getData() {
	  fetch('https://randomuser.me/api/?results=10')
			.then(this.validateResponse)
			.then(res=>res.json())
			.then(data=>{this.photos = data.results})
			.catch(err=>console.error('GetData Error: ', err))
  }
}

export default Store;