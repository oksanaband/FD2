const purchases= [
    { date:'Feb', category:'Food', amount:50},
    { date:'Feb', category:'Clothing', amount:100},
    { date:'Feb', category:'Entertainment', amount:75},
    { date:'Mar', category:'Food', amount:25},
    { date:'Mar', category:'Clothing', amount:200},
    { date:'Mar', category:'Entertainment', amount:50},
    { date:'Mar', category:'Food', amount:100},
    { date:'Mar', category:'Clothing', amount:150},
    { date:'Apr', category:'Entertainment', amount:100},
    { date:'Apr', category:'Food', amount:100},
    { date:'Apr', category:'Clothing', amount:100},
    { date:'Apr', category:'Clothing', amount:100},
    { date:'Jun', category:'Food', amount:100},
    { date:'Jun', category:'Entertainment', amount:100},
    { date:'Jun', category:'Food', amount:100},
    { date:'Jun', category:'Entertainment', amount:100},
    { date:'Jul', category:'Clothing', amount:100},
    { date:'Jul', category:'Entertainment', amount:100},
    { date:'Jul', category:'Food', amount:100},
    { date:'Jul', category:'Clothing', amount:100},
];
const makePurchaseStat = (purchases) => {
    // Общая сумма всех покупок
    const totalAmount = purchases.reduce((acc, purchase) => acc + purchase.amount, 0);

    // Сумма покупок по каждой категории
    const categoryAmount = purchases.reduce((acc, purchase) => {
        acc[purchase.category] = (acc[purchase.category] || 0) + purchase.amount;
        return acc;
    }, {});

    // Сумма покупок по месяцам
    const monthAmount = purchases.reduce((acc, purchase) => {
        acc[purchase.date] = (acc[purchase.date] || 0) + purchase.amount;
        return acc;
    }, {});

    return {
        totalAmount,
        categoryAmount,
        monthAmount,
    };
};

const stats = makePurchaseStat(purchases);
console.log(stats);
