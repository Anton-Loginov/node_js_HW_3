'use strict';

const getTheAmountOfWater = land => {
    let minLevelLand = 0;
    let maxLevelLand = 0;
    let leftEdgeLand = 0;
    let rightEdgeLand = land.length - 1;
    let volumeWater = 0;

    while (leftEdgeLand < rightEdgeLand) {
        if (land[leftEdgeLand] > minLevelLand) {
            minLevelLand = land[leftEdgeLand];
        } else if (land[rightEdgeLand] > maxLevelLand) {
            maxLevelLand = land[rightEdgeLand];
        } else if (minLevelLand >= maxLevelLand) {
            volumeWater += maxLevelLand - land[rightEdgeLand];
            rightEdgeLand--;
        } else {
            volumeWater += minLevelLand - land[leftEdgeLand];
            leftEdgeLand++;
        }
    }
    return volumeWater;
};

console.log(getTheAmountOfWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6]));
console.log(getTheAmountOfWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log(getTheAmountOfWater([7, 0, 1, 3, 4, 1, 2, 1]));
console.log(getTheAmountOfWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]));
console.log(getTheAmountOfWater([2, 2, 1, 2, 2, 3, 0, 1, 2]));
console.log(getTheAmountOfWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8]));
console.log(getTheAmountOfWater([2, 2, 2, 2, 2]));




