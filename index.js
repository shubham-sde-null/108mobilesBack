import bodyParser from "body-parser";
import express from "express";
import Mobile from "./Mobile.js";
import cors from "cors";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://shubham:mobiledatabase@cluster0.wa5nlvu.mongodb.net/mobiledb?retryWrites=true&w=majority",
  () => {
    console.log("database connection successfull to mongoose atlas");
  }
);
// mongoose.connect("mongodb://localhost:27017/mobilenames", () => {
//   console.log("mongosee connection successful");
// });

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/mobiledata", async (req, res) => {
  const allMobileData = await Mobile.find();
  res.json(allMobileData);
});
app.post("/addmobilename", async (req, res) => {
  const mobile = new Mobile({
    mobilename: req.body.mobilename,
    displaysize: req.body.displaysize,
    displaytype: req.body.displaytype,
    resolution: req.body.resolution,
    hdr: req.body.hdr,
    screentobodyratio: req.body.screentobodyratio,
    ppi: req.body.ppi,
    refreshrate: req.body.refreshrate,
    screenprotection: req.body.screenprotection,
    dustwaterresistance: req.body.dustwaterresistance,
    brightness: req.body.brightness,
    os: req.body.os,
    chipset: req.body.processor,
    processorcore: req.body.processorcore,
    gpu: req.body.gpu,
    wideangle: req.body.wideangle,
    ultrawide: req.body.ultrawide,
    depth: req.body.depth,
    macro: req.body.macro,
    telephoto:req.body.telephoto,
    frontcamera: req.body.frontcamera,
    ramvariant1: req.body.ramvariant1,
    ramvariant2: req.body.ramvariant2,
    ramvariant3: req.body.ramvariant3,
    ramvariant4: req.body.ramvariant4,
    storagetype: req.body.storagetype,
    memorycardoption: req.body.memorycardoption,
    expandableoption: req.body.expandableoption,
    batterycapacity: req.body.batterycapacity,
    batteryspeed: req.body.batteryspeed,
    fingerprint: req.body.fingerprint,
    facelock: req.body.facelock,
    bluetooth: req.body.bluetooth,
    port: req.body.port,
    nfc: req.body.nfc,
    fiveg: req.body.fiveg,
    stereo: req.body.stereo,
    jack: req.body.jack,
    frontimage: req.body.frontimage,
    backimage: req.body.backimage,
    leftimage: req.body.leftimage,
    rightimage: req.body.rightimage,
  });
  try {
    const savedMobile = await mobile.save();
    res.json(savedMobile);
  } catch (err) {
    console.log("ERROR:" + res.json({ message: err }));
  }
});
app.listen(5000, () => {
  console.log("port is started at 5000");
});
