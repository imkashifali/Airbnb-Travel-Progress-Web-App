export default function startingDev() {
  let swUrl = `${process.env.PUBLIC_URL}/starting.js`;
  navigator.serviceWorker
    .register(swUrl)
    .then((result) => {
      console.log("result", result);
    })
    .catch((err) => {
      console.log("err", err);
    });
}
