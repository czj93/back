import { observable, computed, action, useStrict, ObservableMap,runInAction } from 'mobx';
useStrict(true);
class Store{
    @observable count = 0
    constructor(){
    }
    @action add(v){
    	this.count += 1
    	console.log(v)
    }
    @computed get total(){
    	return this.count + 10
    }
}

export default new Store()