const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to mern using controllers");
    } catch (error) {
        res.status(404).send({msg:"Page not found"})
    }
};
const register = (async = (req, res) => {
  try {
    res.status(200).send("Welcome to registeration using controller");
  } catch (error) {
    res.status(404).send({msg:"Page not found"})
  }
});

module.exports = {home, register}