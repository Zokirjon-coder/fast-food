import buyurtmaImg from '../assets/images/check-circle.png'
import maxsulotlarImg from '../assets/images/archive.png'
import kategoriaImg from '../assets/images/layers.png'
import filiallarImg from '../assets/images/map-pin.png'
import mijozlarImg from '../assets/images/users.png'
import xisobotImg from '../assets/images/bar-chart-2.png'
import katalogImg from '../assets/images/settings.png'


import lavashmini from '../assets/images/lavash mini.png'
import chizburger from '../assets/images/chizburger.png'
import lavashmax from '../assets/images/lavashmax.png'
import lavashMini from '../assets/images/lavashmini.png'
import lavashsirom from '../assets/images/lavashsirom.png'
import burgermini from '../assets/images/burgermini.png'
import cocacola1_5 from '../assets/images/cocacola1.5.png'
import cocacola1 from '../assets/images/cocacola1.png'

export const dataSidebar = [
    {
        id: 1,
        image: buyurtmaImg,
        title: 'Buyurtmalar',
        pathname: '/Buyurtmalar',
        child: [],
        hidden: false,
    },
    {
        id: 2,
        image: maxsulotlarImg,
        title: 'maxsulotlar',
        pathname: '/maxsulotlar',
        child: [],
        hidden: false,
    },
    {
        id: 3,
        image: kategoriaImg,
        title: 'kategoriyalar',
        pathname: '/kategoriyalar',
        child: [],
        hidden: false,
    },
    {
        id: 4,
        image: filiallarImg,
        title: 'filiallar',
        pathname: '/filiallar',
        child: [],
        hidden: false,
    },
    {
        id: 5,
        image: mijozlarImg,
        title: 'mijozlar',
        pathname: '/mijozlar',
        child: [],
        hidden: false,
    },
    {
        id: 6,
        image: xisobotImg,
        title: 'xisobotlar',
        pathname: '/xisobotlar',
        child: [],
        hidden: false,
    },
    {
        id: 7,
        image: katalogImg,
        title: 'katalog',
        pathname: '/katalog',
        child: [],
        hidden: false,
    }
]

export const dataFood = [
    { id: 1, img: lavashmini, name: 'Lavash mini', kategory: 'Lavash mini', money: '18,000 UZS', inf: 'Kichkina lavash...' },
    { id: 2, img: chizburger, name: 'Chizburger', kategory: 'Burger', money: '23,000 UZS', inf: 'Kichkina lavash...' },
    { id: 3, img: lavashmax, name: 'Lavash max', kategory: 'Lavash', money: '8,000 UZS', inf: 'Kichkina lavash...' },
    { id: 4, img: lavashsirom, name: 'Lavash s sirom', kategory: 'Lavash', money: '21,000 UZS', inf: 'Kichkina lavash...' },
    { id: 5, img: burgermini, name: 'Burger mini', kategory: 'Burger', money: '11,000 UZS', inf: 'Kichkina lavash...' },
    { id: 6, img: lavashMini, name: 'Lavash Mini', kategory: 'Lavash', money: '18,000 UZS', inf: 'Kichkina lavash...' },
    { id: 7, img: cocacola1_5, name: 'Coca cola 1.5', kategory: 'Ichimlik', money: '34,000 UZS', inf: 'Kichkina lavash...' },
    { id: 8, img: cocacola1, name: 'Coca cola 1', kategory: 'Ichimlik', money: '18,000 UZS', inf: 'Kichkina lavash...' },
    { id: 9, img: burgermini, name: 'Burger mini', kategory: 'Burger', money: '11,000 UZS', inf: 'Kichkina lavash...' },
    { id: 10, img: lavashMini, name: 'Lavash Mini', kategory: 'Lavash', money: '18,000 UZS', inf: 'Kichkina lavash...' },
]
