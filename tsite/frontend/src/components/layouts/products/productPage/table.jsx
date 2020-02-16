import React from "react";

const PriceTable = ({ sizes, prices }) => {
  return (
    <div>
      <div className="sizes">{sizes}</div>
      <div>
        {prices.length != 0 && (
          <table>
            <caption>Заголовок таблицы</caption>
            <thead>
              <tr>
                <th>Цвет\Толщина</th>
                {prices[0].depthPrice.map((depth, index) => (
                  <th key={index}>{depth.depth.size}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {prices.map((price, index) => (
                <tr key={index}>
                  <td key={price.id}>{price.color}</td>
                  {price.depthPrice.map((prs, index) => (
                    <td key={index}>{prs.price}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

PriceTable.defaultProps = {
  sizes: "sizes",
  prices: [
    {
      depthPrice: [
        {
          id: 1,
          price: 1,
          depth: {}
        }
      ]
    }
  ]
};

export default PriceTable;
