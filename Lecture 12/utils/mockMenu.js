const mockMenu = {
  cards: [
    {
      card: {
        card: {
          info: {
            name: "Mock Restaurant",
            cuisines: ["North Indian", "Chinese"],
            costForTwoMessage: "₹400 for two",
          },
        },
      },
    },
    {
      card: {
        card: {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Recommended",
                        itemCards: [
                          {
                            card: {
                              info: {
                                id: "1",
                                name: "Paneer Butter Masala",
                                price: 25000,
                                description:
                                  "Creamy paneer curry",
                              },
                            },
                          },
                          {
                            card: {
                              info: {
                                id: "2",
                                name: "Butter Naan",
                                price: 4000,
                                description:
                                  "Soft butter naan",
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
  ],
};

export default mockMenu;
