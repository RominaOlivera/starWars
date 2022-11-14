const { Router } = require('express');
const axios = require("axios")

const router = Router();



const getInfo = async () => {

  const apiUrl1 = await axios.get("https://swapi.dev/api/people/?page=1")
  const apiUrl2 = await axios.get("https://swapi.dev/api/people/?page=2")
  const apiUrl3 = await axios.get("https://swapi.dev/api/people/?page=3")
  const url1 = apiUrl1.data.results;
  const url2 = apiUrl2.data.results;
  const url3 = apiUrl3.data.results;

  const apiUrl = [...url1, ...url2, ...url3]

  const apInfo = apiUrl.map(e => axios.get(e.url))

  const getCharacters = await axios.all(apInfo);

  let characters = getCharacters.map(obj => obj.data)


  let infoCharacters = characters.map(e => {
    return {
      id: e.url.slice(29, -1),
      name: e.name,
      birth_year: e.birth_year,
      gender: e.gender,
      height: e.height,
      url: e.url

    }

  })
  return infoCharacters

}

router.get('/characters', async (req, res) => {

  const name = req.query.name
  const characters = await getInfo()

  if (name) {

    let characterName = characters.filter(e => e.name.toUpperCase().includes(name.toUpperCase()))
    characterName.length ?
      res.status(200).send(characterName) :
      res.send(["no encontrado"])
  } else {
    res.status(200).send(characters)

  }
});


router.get("/:id", async (req, res) => {

  const id = req.params.id;
  const peopleId = await getInfo()


  if (id) {
    let peoId = peopleId.filter(e => {

      if (e.url.split("/").find(e => e === id)) {
        return e
      }



    })


    if (peoId?.length) {
      const detail = await axios.get(peoId[0].url)
      res.status(200).send({
        name: detail.data.name,
        height: detail.data.height,
        mass: detail.data.mass,
        hair_color: detail.data.hair_color,
        skin_color: detail.data.skin_color,
        eye_color: detail.data.eye_color,
        birth_year: detail.data.birth_year,
        gender: detail.data.gender,
        homeworld: detail.data.homeworld,
      })
    } else {

      res.status(404).send("no character found")
    }
  }
})







module.exports = router;
