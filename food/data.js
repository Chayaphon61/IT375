const data = [
    {
        id:1,
        name:'Potato Corner (โปเตโต้ คอร์เนอร์) - ถนนข้าวสาร',
        imageURL:'https://food.grab.com/th/en/restaurant/potato-corner-%E0%B9%82%E0%B8%9B%E0%B9%80%E0%B8%95%E0%B9%82%E0%B8%95%E0%B9%89-%E0%B8%84%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%99%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%AA%E0%B8%B2%E0%B8%A3-delivery/3-CZLJEVDYC3JFL6',
        type:'Partner, Small Bites/Snacks'
    },
    {
        id:2,
        name:'khiang(เขียง) - ถนนพระอาทิตย์',
        imageURL:'https://food.grab.com/th/en/restaurant/khiang-%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%87-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%97%E0%B8%B4%E0%B8%95%E0%B8%A2%E0%B9%8C-delivery/3-CZLGGETXRBV3A6',
        type:'Partner, Rice Bowls'
    },
    {
        id:3,
        name:'Subway (ซับเวย์) - ท่ามหาราช',
        imageURL:'https://food.grab.com/th/en/restaurant/subway-%E0%B8%8B%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B8%A2%E0%B9%8C-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%8A-delivery/3-CZCFHAATNRDJCN',
        type:'Partner,Fast Food'
    },
    {
        id:4,
        name:'BonChon(บอนชอน) - ท่ามหาราช',
        imageURL:'https://food.grab.com/th/en/restaurant/bonchon-%E0%B8%9A%E0%B8%AD%E0%B8%99%E0%B8%8A%E0%B8%AD%E0%B8%99-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%8A-delivery/THGFIST0000021a',
        type:'Partner,Fried Chicken'
    },    {
        id:5,
        name:'KFC (เคเอฟซี) - ดิโอลด์สยาม พลาซ่า',
        imageURL:'https://food.grab.com/th/en/restaurant/kfc-%E0%B9%80%E0%B8%84%E0%B9%80%E0%B8%AD%E0%B8%9F%E0%B8%8B%E0%B8%B5-%E0%B8%94%E0%B8%B4%E0%B9%82%E0%B8%AD%E0%B8%A5%E0%B8%94%E0%B9%8C%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%A1-%E0%B8%9E%E0%B8%A5%E0%B8%B2%E0%B8%8B%E0%B9%88%E0%B8%B2-delivery/THGFIST000007ad',
        type:'Partner,Fast Food,Fried Chicken'
    },
    {
        id:6,
        name:'Cafe Amazon(คาเฟ่ อเมซอน) - ถนนมหรรณพ',
        imageURL:'https://food.grab.com/th/en/restaurant/cafe-amazon-%E0%B8%84%E0%B8%B2%E0%B9%80%E0%B8%9F%E0%B9%88-%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%8B%E0%B8%AD%E0%B8%99-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%A1%E0%B8%AB%E0%B8%A3%E0%B8%A3%E0%B8%93%E0%B8%9E-delivery/3-CYTEUGBXT2D2TJ',
        type:'Partner,Coffee & Tea'
    },    
    {
        id:7,
        name:'Pizza Hut(พิซซ่าฮัท) - ถนนบำรุงเมือง',
        imageURL:'https://food.grab.com/th/en/restaurant/pizza-hut-%E0%B8%9E%E0%B8%B4%E0%B8%8B%E0%B8%8B%E0%B9%88%E0%B8%B2%E0%B8%AE%E0%B8%B1%E0%B8%97-%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%9A%E0%B8%B3%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87-delivery/3-CYTDJJE1VY2BEJ',
        type:'Coupon,Partner,Pizza'
    },
    {
        id:9,
        name:'Kamu Tea(คามุ ที) - วังหลัง',
        imageURL:'https://food.grab.com/th/en/restaurant/kamu-tea-%E0%B8%84%E0%B8%B2%E0%B8%A1%E0%B8%B8-%E0%B8%97%E0%B8%B5-%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87-delivery/3-CZC1VN5CBEXGAT',
        type:'Partner,Bubble Tea'
    }
];
module.exports = data;