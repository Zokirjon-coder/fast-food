import buyurtmaImg from '../assets/images/check-circle.png'
import maxsulotlarImg from '../assets/images/archive.png'
import kategoriaImg from '../assets/images/layers.png'
import filiallarImg from '../assets/images/map-pin.png'
import mijozlarImg from '../assets/images/users.png'
import xisobotImg from '../assets/images/bar-chart-2.png'
import katalogImg from '../assets/images/settings.png'

import Buyurtmalar from '../pages/Buyurtmalar'
import Maxsulotlar from '../pages/Maxsulotlar'
import Kategoriyalar from '../pages/Kategoriyalar'
import Filiallar from '../pages/Filiallar'
import Mijozlar from '../pages/Mijozlar'
import Xisobot from '../pages/Xisobot'
import Katalog from '../pages/Katalog'

export const dataSidebar = [
    {
        id: 1,
        image: buyurtmaImg,
        title: 'buyurtmalar',
        pathname: '/',
        child: [],
        hidden: false,
        component: Buyurtmalar,
    },
    {
        id: 2,
        image: maxsulotlarImg,
        title: 'maxsulotlar',
        pathname: '/maxsulotlar',
        child: [],
        hidden: false,
        component: Maxsulotlar,
    },
    {
        id: 3,
        image: kategoriaImg,
        title: 'kategoriyalar',
        pathname: '/kategoriyalar',
        child: [],
        hidden: false,
        component: Kategoriyalar,
    },
    {
        id: 4,
        image: filiallarImg,
        title: 'filiallar',
        pathname: '/filiallar',
        child: [],
        hidden: false,
        component: Filiallar,
    },
    {
        id: 5,
        image: mijozlarImg,
        title: 'mijozlar',
        pathname: '/mijozlar',
        child: [],
        hidden: false,
        component: Mijozlar,
    },
    {
        id: 6,
        image: xisobotImg,
        title: 'xisobotlar',
        pathname: '/xisobotlar',
        child: [],
        hidden: false,
        component: Xisobot,
    },
    {
        id: 7,
        image: katalogImg,
        title: 'katalog',
        pathname: '/katalog',
        child: [],
        hidden: false,
        component: Katalog,
    }
]


