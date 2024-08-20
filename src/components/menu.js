const Menu = () => {

    const startersMenu = [
        {
            name: "Bruschetta",
            description: "Grilled bread topped with diced tomatoes, garlic, basil, and olive oil.",
            price: "$6.99",
        },
        {
            name: "Stuffed Mushrooms",
            description: "Mushrooms filled with a savory blend of cheeses, herbs, and breadcrumbs.",
            price: "$7.49",
        },
        {
            name: "Garlic Shrimp",
            description: "Sautéed shrimp in a garlic and lemon butter sauce.",
            price: "$8.99",
        },
        {
            name: "Caprese Salad",
            description: "Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.",
            price: "$7.99",
        },
        {
            name: "Crispy Calamari",
            description: "Lightly breaded and fried calamari served with marinara sauce.",
            price: "$9.49",
        },
        {
            name: "Spinach Artichoke Dip",
            description: "A creamy blend of spinach, artichokes, and cheese served with tortilla chips.",
            price: "$6.99",
        },
        {
            name: "Buffalo Chicken Wings",
            description: "Spicy buffalo wings served with blue cheese dressing and celery sticks.",
            price: "$8.49",
        },
    ];

    const drinksMenu = [
        {
          name: "Fresh Lemonade",
          description: "Refreshing lemonade made with freshly squeezed lemons.",
          price: "$3.50",
        },
        {
          name: "Iced Coffee",
          description: "Chilled coffee served over ice, with optional milk and sugar.",
          price: "$3.00",
        },
        {
          name: "Mango Smoothie",
          description: "Creamy mango smoothie blended with yogurt and ice.",
          price: "$4.50",
        },
        {
          name: "Classic Mojito",
          description: "Rum, mint leaves, lime juice, sugar, and soda water.",
          price: "$7.00",
        },
        {
          name: "Green Tea",
          description: "Hot or iced green tea brewed from premium leaves.",
          price: "$2.75",
        },
        {
          name: "Berry Punch",
          description: "Mixed berry punch with a hint of citrus.",
          price: "$4.00",
        },
        {
          name: "Sparkling Water",
          description: "Refreshing sparkling water served with a slice of lemon.",
          price: "$2.50",
        },
      ];
      


    return (
        <div id="menu" className="menu">
            
            <div className="starters">
                <div className="menuSubHeading">
                    STARTERS
                </div>
                <div className="menuList">
                    {startersMenu.map(elem => {

                        return (
                            <div className="menuItem">
                                <div className="name">{elem.name}</div>
                                <div className="price">{elem.price}</div>
                            </div>
                        )

                    })}


                </div>
            </div>
            <div className="menuHeader">
                <div className="heading">FEATURED MENUS</div>
            </div>
            <div className="drinks">
                <div className="menuSubHeading">
                    DRINKS
                </div>
                <div className="menuList">
                    {drinksMenu.map(elem => {

                        return (
                            <div className="menuItem">
                                <div className="name">{elem.name}</div>
                                <div className="price">{elem.price}</div>
                            </div>
                        )

                    })}


                </div>
            </div>
            <div className="steak"></div>
        </div>
    )

}

export default Menu