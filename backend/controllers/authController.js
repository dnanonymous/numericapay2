const Merchant = require('../models/Merchant');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const generateApiKey = require('../utils/generateapikey');

const registerMerchant = async (req, res) => {
  const { email, password } = req.body;

  try {
    const merchantExists = await Merchant.findOne({ email });
    if (merchantExists) return res.status(400).json({ message: 'Ya existe' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const apiKey = generateApiKey();

    const merchant = await Merchant.create({ email, password: hashedPassword, apiKey });

    const token = jwt.sign({ id: merchant._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({ token, apiKey });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginMerchant = async (req, res) => {
  const { email, password } = req.body;

  try {
    const merchant = await Merchant.findOne({ email });
    if (!merchant) return res.status(400).json({ message: 'No existe' });

    const isMatch = await bcrypt.compare(password, merchant.password);
    if (!isMatch) return res.status(400).json({ message: 'Contraseña inválida' });

    const token = jwt.sign({ id: merchant._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({ token, apiKey: merchant.apiKey });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { registerMerchant, loginMerchant };
