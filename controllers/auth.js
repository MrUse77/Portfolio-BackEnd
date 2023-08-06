const bcrypt = require("bcryptjs");
const { userModel } = require("../models");
const { tokenSign } = require("../utils/handleJwt");

const loginCtrl =async (req, res) => {
    try {
        const personaCreada = await userModel.findOne({ email: req.body.email });
        if(!personaCreada) return res.status(400).send("Email no encontrado");
        const passwordValida = bcrypt.compareSync(req.body.password, personaCreada.password);
        if(!passwordValida) return res.status(400).send("Password incorrecto");
        const token = await tokenSign(personaCreada);
        res.header("authorization", token).send(token);
        res.send(token);
    } catch (e) {
        console.log(e);
    }
};
const registerCtrl =async (req, res) => {
    try {
        const nuevaPersona = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            gender: req.body.gender,
            role: req.body.role,
    });
    const token = await tokenSign(nuevaPersona);
    res.send({
      token: token,
    });
    } catch (e) {
        console.log(e);
    }
};

module.exports = { loginCtrl, registerCtrl };