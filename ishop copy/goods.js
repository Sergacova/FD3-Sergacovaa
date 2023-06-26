let Goods = React.createClass({
  displayName: "Goods",

  getDefaultProps: function () {
    return {
      question: "Товара нет на складе!",
    };
  },

  render: function () {
    let goodsCardsArr = [];
    this.props.goods.forEach((element) => {
      let goodsCard = element;
      let goodsCardCode = React.DOM.ul({
          key: goodsCard.vendorCode,
          className: "Card",
        },
        React.DOM.li({
            className: "Name",
          },
          React.DOM.h3({
              className: null,
            },
            goodsCard.name
          )
        ),
        React.DOM.li({
            className: "Img",
          },
          React.DOM.img({
            className: null,
            src: goodsCard.img,
          })
        ),
        React.DOM.li({
            className: "Price",
          },
          React.DOM.h4({
              className: null,
            },
            "Цена: " + goodsCard.price + "BYN"
          )
        ),
        React.DOM.li({
            className: "Number",
          },
          "Кол-во на складе: " + goodsCard.number + "шт."
        ),
        React.DOM.button({
            className: "Button",
          },
          "Купить"
        )
      );
      goodsCardsArr.push(goodsCardCode);
    });
    console.log(goodsCardsArr);

    return React.DOM.div({
        className: "Goods",
      },
      React.DOM.h2({
          className: "sectionName",
        },
        this.props.sectionName
      ),
      React.DOM.div({
          className: "Wrapper",
        },
        React.DOM.div({
            className: "GoodsCardsArr",
          },
          goodsCardsArr
        )
      )
    );
  },
});