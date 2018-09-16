import {observable} from 'mobx';

class Storage
{
    @observable Coach = [
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
    
    @observable Carousel = 
    {
        'indexPage':
        {
            'Content':
            {

            },
            'Images':
            {
                'primary':
                {
                    key: 1,
                    imgUrl: './image/Carousel-indexPage-1.jpg'
                },
                'secondary':
                [
                    {
                        key: 2,
                        imgUrl: './image/Carousel-indexPage-2.jpg'
                    },
                    {
                        key: 3,
                        imgUrl: './image/Carousel-indexPage-3.jpg'
                    },
                    {
                        key: 4,
                        imgUrl: './image/Carousel-indexPage-4.jpg'
                    },
                ]
            }
        },
        'productPage':
        {
            'Content':
            {

            },
            'Images':
            {
                'primary':
                {
                    key: 1,
                    imgUrl: './image/Carousel-productPage-1.jpg'
                },
                'secondary':
                [
                    {
                        key: 2,
                        imgUrl: './image/Carousel-productPage-2.jpg'
                    },
                    {
                        key: 3,
                        imgUrl: './image/Carousel-productPage-3.jpg'
                    },
                    {
                        key: 4,
                        imgUrl: './image/Carousel-productPage-4.jpg'
                    },
                ]
            },
        },
    };

}

const store = new Storage();

export default store;