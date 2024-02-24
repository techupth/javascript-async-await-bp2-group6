// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here

const getJohnProfileRejectedData = async () => {
  try {
    const rejectedData = await new Promise((_, reject) => {
      setTimeout(() => {
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        });
      }, 2000);
    });
    console.log(rejectedData);
  } catch (error) {
    console.error(error);
  }
};

getJohnProfileRejectedData();
