import test from 'ava'
import util from '../index'

// ----------------------------------------
// isAvailable()

test('util#isAvailable(null)', t => t.true( ! util.isAvailable(null)))

const callIsAvailable = (packageId, stickerId, b) => b === util.isAvailable({ "packageId" : packageId, "stickerId" : stickerId })

test('util#isAvailable(1,   0)', t => t.true(callIsAvailable(1,   0, false)))
test('util#isAvailable(1,   1)', t => t.true(callIsAvailable(1,   1, true)))
test('util#isAvailable(1,   2)', t => t.true(callIsAvailable(1,   2, true)))
test('util#isAvailable(1,  18)', t => t.true(callIsAvailable(1,  18, false)))
test('util#isAvailable(1,  20)', t => t.true(callIsAvailable(1,  20, false)))
test('util#isAvailable(1,  21)', t => t.true(callIsAvailable(1,  21, true)))
test('util#isAvailable(1,  22)', t => t.true(callIsAvailable(1,  22, false)))
test('util#isAvailable(1,  99)', t => t.true(callIsAvailable(1,  99, false)))
test('util#isAvailable(1, 100)', t => t.true(callIsAvailable(1, 100, true)))
test('util#isAvailable(1, 139)', t => t.true(callIsAvailable(1, 139, true)))
test('util#isAvailable(1, 140)', t => t.true(callIsAvailable(1, 140, false)))
test('util#isAvailable(1, 400)', t => t.true(callIsAvailable(1, 400, false)))
test('util#isAvailable(1, 401)', t => t.true(callIsAvailable(1, 401, true)))
test('util#isAvailable(1, 430)', t => t.true(callIsAvailable(1, 430, true)))
test('util#isAvailable(1, 431)', t => t.true(callIsAvailable(1, 431, false)))

test('util#isAvailable(2,  17)', t => t.true(callIsAvailable(2,  17, false)))
test('util#isAvailable(2,  18)', t => t.true(callIsAvailable(2,  18, true)))
test('util#isAvailable(2,  20)', t => t.true(callIsAvailable(2,  20, true)))
test('util#isAvailable(2,  21)', t => t.true(callIsAvailable(2,  21, false)))
test('util#isAvailable(2,  22)', t => t.true(callIsAvailable(2,  22, true)))
test('util#isAvailable(2,  47)', t => t.true(callIsAvailable(2,  47, true)))
test('util#isAvailable(2,  48)', t => t.true(callIsAvailable(2,  48, false)))
test('util#isAvailable(2, 139)', t => t.true(callIsAvailable(2, 139, false)))
test('util#isAvailable(2, 140)', t => t.true(callIsAvailable(2, 140, true)))
test('util#isAvailable(2, 179)', t => t.true(callIsAvailable(2, 179, true)))
test('util#isAvailable(2, 180)', t => t.true(callIsAvailable(2, 180, false)))
test('util#isAvailable(2, 500)', t => t.true(callIsAvailable(2, 500, false)))
test('util#isAvailable(2, 501)', t => t.true(callIsAvailable(2, 501, true)))
test('util#isAvailable(2, 527)', t => t.true(callIsAvailable(2, 527, true)))
test('util#isAvailable(2, 528)', t => t.true(callIsAvailable(2, 528, false)))

test('util#isAvailable(3, 179)', t => t.true(callIsAvailable(3, 179, false)))
test('util#isAvailable(3, 180)', t => t.true(callIsAvailable(3, 180, true)))
test('util#isAvailable(3, 259)', t => t.true(callIsAvailable(3, 259, true)))
test('util#isAvailable(3, 260)', t => t.true(callIsAvailable(3, 260, false)))

test('util#isAvailable(4, 259)', t => t.true(callIsAvailable(4, 259, false)))
test('util#isAvailable(4, 260)', t => t.true(callIsAvailable(4, 260, true)))
test('util#isAvailable(4, 307)', t => t.true(callIsAvailable(4, 307, true)))
test('util#isAvailable(4, 308)', t => t.true(callIsAvailable(4, 308, false)))
test('util#isAvailable(4, 600)', t => t.true(callIsAvailable(4, 600, false)))
test('util#isAvailable(4, 601)', t => t.true(callIsAvailable(4, 601, true)))
test('util#isAvailable(4, 632)', t => t.true(callIsAvailable(4, 632, true)))
test('util#isAvailable(4, 633)', t => t.true(callIsAvailable(4, 633, false)))

test('util#isAvailable(5,   1)', t => t.true(callIsAvailable(5,   1, false)))

// ----------------------------------------
// random()

const testAvailable = (sticker) => {
  var stkid = sticker["stickerId"]
  switch (sticker["packageId"]) {
    case 1:
      return (  1 <= stkid && stkid <=  17)
          || ( 21 == stkid)
          || (100 <= stkid && stkid <=  139)
          || (401 <= stkid && stkid <=  430)
    case 2:
      return ( 18 <= stkid && stkid <=  20)
          || ( 22 <= stkid && stkid <=  47)
          || (140 <= stkid && stkid <= 179)
          || (501 <= stkid && stkid <= 527)
    case 3:
      return (180 <= stkid && stkid <= 259)
    case 4:
      return (260 <= stkid && stkid <= 307)
          || (601 <= stkid && stkid <= 632)
    default:
      return false
  }
}

test('util#random() should return 1<=packageId<=4 and stickerId from 1 to ...', t => {
  for (var i = 0; i < 10000; i++) {
    t.true(testAvailable(util.random()))
  }
})

// ----------------------------------------
