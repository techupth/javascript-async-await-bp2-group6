const getJohnProfileData = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

const getJohnOrdersData = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

const getJohnProfile = async () => {
  try {
    const profile = await getJohnProfileData();
    console.log(profile);
  } catch (error) {
    console.error(error);
  }
};

const getJohnOrders = async () => {
  try {
    const orders = await getJohnOrdersData();
    console.log(orders);
  } catch (error) {
    console.error(error);
  }
};

const executeAsyncTasks = async () => {
  await getJohnProfile();
  await getJohnOrders();
};

executeAsyncTasks();
