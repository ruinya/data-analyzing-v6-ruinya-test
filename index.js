import _ from 'lodash';

const showInfo = (content) => {
  const data = content.split('\n').slice(2).map((row) => row.split('|').slice(1).slice(0, -1).map((el) => el.trim()));

  // step 1
  console.log(`Count: ${data.length}`);

  // step 2
  const galaxies = _.uniq(data.map((el) => el[1])).sort();

  console.log(`Galaxies: ${galaxies.join(', ')}`);

  // step 3
  const minDistance = _.min(data.map((el) => Number(el[4])));
  const maxDistance = _.max(data.map((el) => Number(el[4])));

  console.log(`Farest from Earth: ${maxDistance} light years, closest to Earth: ${minDistance} light years`);

  // step 4
  const closeToEarth = data.reduce((acc, el) => (Number(acc[4]) < Number(el[4]) ? acc : el));

  console.log(`Closest to Earth: ${closeToEarth[0]} in ${closeToEarth[1]} galaxy`);
  // step 5
  const groupedByCalaxies = _.groupBy(data, (el) => el[1]);

  const sumOfWeight = Object.entries(groupedByCalaxies).reduce((acc, [names, stars]) => {
    const sum = _.sortedUniq(stars.map((el) => Number(el[2])));
    return { ...acc, [names]: sum };
  }, {});

  const galaxyWithMakeWeight = _.maxBy(Object.entries(sumOfWeight), ([, num]) => num);

  const starsWithMaxRadius = _.maxBy(data
    .filter((el) => el[1] === galaxyWithMakeWeight[0]), (el) => Number(el[3]));

  console.log(`Star with largest radius from heaviest galaxy is ${starsWithMaxRadius[0]}`);
};

export default showInfo;
