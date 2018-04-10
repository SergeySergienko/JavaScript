import { observable, action } from 'mobx';

export default class Store {
    @observable images;
    @observable photos;
    @observable amount;
    token = '4417915906.b6970d4.28e366a283a84256872046e361e2f322';
    userid = 4417915906;

    constructor(images, photos, amount) {
        this.images = images;
        this.photos = photos;
        this.amount = amount;
    }

	@action.bound  //use to automatically bind actions to the class object
	add() {
		this.amount ++;
	}
	
    validateResponse(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }

	@action
    fetchData() {
        fetch('https://api.instagram.com/v1/users/' + this.userid + '/media/recent/?access_token=' + this.token)
            .then(this.validateResponse)
            .then(response => response.json())
            .then(result => {
                this.images = result.data
            })
            .catch(error =>    console.log('FetchData Error: ', error));
    }

	@action
    getData() {
        fetch('https://randomuser.me/api/?results=10')
            .then(this.validateResponse)
            .then(res=>res.json())
            .then(data=> {
                this.photos = data.results
            })
            .catch(err=>console.error('GetData Error: ', err))
    }
}