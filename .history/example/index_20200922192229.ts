import Path from "path";
import Waf from "./../src/core/Waf";
import Config from "./../src/core/Config";
import express from "express";

const config = new Config(Path.resolve("./waf.json"));

const waf = new Waf(config);
