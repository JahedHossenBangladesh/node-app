const {User,validate} = require('../model/user');
const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

router.get("/", async (req, res))