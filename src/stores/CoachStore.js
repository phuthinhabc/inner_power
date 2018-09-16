import {observable, action} from 'mobx';

class Coach
{
    @observable coach = [
        {
            key: 1,
            imgUrl: './image/trainer-img1.jpg',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem'
        },
        {
            key: 2,
            imgUrl: './image/trainer-img2.jpg',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem'
        },
        {
            key: 3,
            imgUrl: './image/trainer-img3.jpg',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, blanditiis esse sapiente quis dolore quidem'
        }
    ];
    @action demoCoach()
    {
        console.log('success');
    }
}

const store = new Coach();

export default store;