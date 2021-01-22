

function cloneSheps(cohort, sheps) {
  for (var i = 0; i < cohort.length; i++) {
    if (i % 2 === 0) {
      cohort[i] = sheps[0];
    } else {
      cohort[i] = sheps[1];
    }
  }
  return cohort;
}

module.exports = cloneSheps;


