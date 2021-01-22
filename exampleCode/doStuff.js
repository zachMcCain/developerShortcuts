

function cloneSheps(cohort) {
  for (var i = 0; i < cohort.length; i++) {
    if (i % 2 === 0) {
      cohort[i] = 'Tre Moore';
    } else {
      cohort[i] = 'Zach McCain';
    }
  }
  return cohort;
}

module.exports = cloneSheps;


