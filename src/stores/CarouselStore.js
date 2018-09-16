import {observable, action, computed} from 'mobx';

class Carousel
{
    @observable carousels = [];
}

const store = new Carousel();

export default store;