/*
Title : degree_decimal.js
Author : Maruf Hasan
Description : convert degree into decimal and decimal into deg.
Date : 24 October , 2021
*/

//dependencies
const handelar = require("./../../.localhandelar.js");

//main functions to export
function deg2Dcm(input = [0, 0, 0]) {
  let result;
  let inp = typeof input === "string" || Array.isArray(input) ? input : false;
  if (inp !== false) {
    if (Array.isArray(input)) {
      if (!inp.length) {
        inp = [0, 0, 0];
      } else if (inp.length === 1) {
        inp[1] = 0;
        inp[2] = 0;
      } else if (inp.length === 2) {
        inp[2] = 0;
      } else {
        inp = inp;
      }
      result = deg2DcmLocal(inp);
    } else if (typeof input === "string") {
      let regXpDeg = /(\d(°))/gi,
        regXpMin = /\d(\')/gi,
        regXpSec = /\d(\")/gi,
        deg,
        min,
        sec,
        linp,
        data;
      data = [
        parseFloat(inp.substring(0, inp.search(regXpDeg) + 1)),
        parseFloat(
          inp.substring(inp.search(regXpDeg) + 2, inp.search(regXpMin) + 1)
        ),
        parseFloat(
          inp.substring(inp.search(regXpMin) + 2, inp.search(regXpSec) + 1)
        ),
      ];
      (deg =
        typeof data[0] === "number" && !Number.isNaN(data[0])
          ? data[0]
          : false),
        (min =
          typeof data[1] === "number" && !Number.isNaN(data[1])
            ? data[1]
            : false),
        (sec =
          typeof data[2] === "number" && !Number.isNaN(data[2])
            ? data[2]
            : false);
      if (deg !== false && min !== false && sec !== false) {
        if (regXpDeg.test(inp) && regXpMin.test(inp) && regXpSec.test(inp)) {
          linp = [deg, min, sec];
          result = deg2DcmLocal(linp);
        } else if (
          inp.search(regXpDeg) >= 0 &&
          inp.search(regXpMin) >= 0 &&
          !regXpSec.test(inp)
        ) {
          deg = parseFloat(inp.substring(0, inp.search(regXpDeg) + 1));
          min = parseFloat(
            inp.substring(inp.search(regXpDeg) + 2, inp.search(regXpMin) + 1)
          );
          linp = [deg, min, 0];
          result = deg2DcmLocal(linp);
        } else if (
          inp.search(regXpDeg) >= 0 &&
          inp.search(regXpMin) < 0 &&
          !regXpSec.test(inp)
        ) {
          deg = parseFloat(inp.substring(0, inp.search(regXpDeg) + 1));
          linp = [deg, 0, 0];
          result = deg2DcmLocal(linp);
        } else {
          throw "Enter at least a number and symbols like °,',\"";
        }
      } else {
        throw "somthing went wrong in deg2Dcm() inpput. please enter a valid srting here";
      }
    } else {
      handelar.error(
        "a number or a string which contains °,' or \"",
        "input",
        "deg2Dcm"
      );
    }
  } else {
    handelar.error(
      "a number or a string which contains °,' or \"",
      "input",
      "deg2Dcm"
    );
  }
  handelar.record(result, input, "deg2Dcm");
  return handelar.mood(result);
}

function dcm2Deg(number) {
  let num = typeof number === "number" ? number : false;
  if (num !== false) {
    let deg, min, sec;
    deg = Math.ceil(num) - 1;
    min = Math.ceil((num - deg) * 60) - 1;
    sec = ((num - deg) * 60 - min) * 60;
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    if (min >= 60) {
      min = 0;
      deg++;
    }
    handelar.record(
      {
        result: [deg, min, sec],
        string: `${deg}°${min}'${sec}"`,
      },
      number,
      "dcm2Deg"
    );
    return {
      result: [deg, min, sec],
      string: `${deg}°${min}'${sec}"`,
    };
  } else {
    handelar.error("a number", "number", "dcm2Deg");
  }
}

//local function for deg2Dcm
function deg2DcmLocal(array) {
  let data = Array.isArray(array) ? array : [0, 0, 0];
  let deg = data[0],
    min = data[1],
    sec = data[2];
  let result;
  result = deg + min / 60 + sec / 3600;
  return result;
}

//export and share
module.exports = {
  deg2Dcm,
  dcm2Deg,
};
