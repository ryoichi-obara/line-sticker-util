/*!
 * line-sticker-util.
 * Copyright(c) 2017 ryoichi-obara
 * MIT Licensed
 */
'use strict';

var stickers = [];
for (var pkgId = 1; pkgId <= 4; pkgId++) {
  stickers[pkgId] = [];
}
for (var stkId =   1; stkId <=  17; stkId++) { stickers[1].push(stkId); }
                                               stickers[1].push(21);
for (var stkId = 100; stkId <= 139; stkId++) { stickers[1].push(stkId); }
for (var stkId = 401; stkId <= 430; stkId++) { stickers[1].push(stkId); }
for (var stkId =  18; stkId <=  20; stkId++) { stickers[2].push(stkId); }
for (var stkId =  22; stkId <=  47; stkId++) { stickers[2].push(stkId); }
for (var stkId = 140; stkId <= 179; stkId++) { stickers[2].push(stkId); }
for (var stkId = 501; stkId <= 527; stkId++) { stickers[2].push(stkId); }
for (var stkId = 180; stkId <= 259; stkId++) { stickers[3].push(stkId); }
for (var stkId = 260; stkId <= 307; stkId++) { stickers[4].push(stkId); }
for (var stkId = 601; stkId <= 632; stkId++) { stickers[4].push(stkId); }

const generateRandomValue = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}

module.exports.isAvailable = function(sticker) {
  if (sticker == null) {
    return false;
  }
  var stickerId = sticker["stickerId"];
  var packageId = sticker["packageId"];
  if (1 <= packageId && packageId <= 4) {
    return stickers[packageId].includes(stickerId);
  } else {
    return false;
  }
}

module.exports.random = function(id) {
  var packageId = generateRandomValue(1, 5);
  var stickerId = stickers[packageId][generateRandomValue(0, stickers[packageId].length)];
  return {
    "id": "id",
    "type": "sticker",
    "stickerId": stickerId,
    "packageId": packageId
  };
}
