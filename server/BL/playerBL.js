const axios = require("axios");
const fs = require("fs");

const url = "https://api.tvmaze.com/shows/1/cast";

const GetAllPlayers = async () => {
  const { data } = await axios.get(url);
  const players = data.map((item) => {
    return (item.person = {
      id: item.person.id,
      name: item.person.name,
      birthday: item.person.birthday,
      gender: item.person.gender,
      image: item.person.image.medium,
    });
  });
  return players;
};

const AddMsgToTxT = (newMsg) => {
  return new Promise((resolve, reject) => {
    let obj = newMsg;

    // Set variable to current date and time
    const date = new Date();

    let stringNewMsg = `id: ${obj.id}
            name: ${obj.name}
            msg: ${obj.msg}
            date: ${date}
            `;

    fs.readFile("msg.txt", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }

      let downRow = data ? "\n\n" : "";

      fs.writeFile("msg.txt", data + downRow + stringNewMsg, (err) => {
        if (err) {
          reject(err);
        }

        fs.readFile("msg.txt", "utf-8", (err, newData) => {
          if (err) {
            reject(err);
          }
          resolve("Adding a message was successful !");
        });
      });
    });
  });
};

module.exports = { GetAllPlayers, AddMsgToTxT };
