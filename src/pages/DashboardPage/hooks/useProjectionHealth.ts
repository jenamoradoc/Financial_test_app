export const useProjectionHealth = () => {
  const data = [
    ["Month", "Revenue", "Expenses", "Profit"],
    ["January", 10000, 8000, 2000],
    ["February", 12000, 9000, 3000],
    ["March", 13000, 9500, 3500],
    ["April", 14000, 10000, 4000],
    ["May", 15000, 10500, 4500],
    ["June", 16000, 11000, 5000],
    ["July", 17000, 11500, 5500],
    ["August", 18000, 12000, 6000],
    ["September", 19000, 12500, 6500],
    ["October", 20000, 13000, 7000],
    ["November", 21000, 13500, 7500],
    ["December", 22000, 14000, 8000],
  ];

  const options = {
    title: "Business Health Projection",
  };

  return { data, options };
};
