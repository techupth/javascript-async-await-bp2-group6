let getJohnProfile1 = () => {
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

const getJohnProfile2 = async () => {
  try {
    const profile = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        });
      }, 1000);
    });
    console.log(profile);
  } catch (error) {
    console.error('Error:', error);
  }
};

getJohnProfile2();
