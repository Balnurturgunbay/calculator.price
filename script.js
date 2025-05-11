document.getElementById('calculateBtn').addEventListener('click', calculateDowry);

function calculateDowry() {
  let basePrice = 100;
  const education = parseFloat(document.getElementById('education').value);
  const netWorth = parseFloat(document.getElementById('netWorth').value);
  const caste = parseInt(document.getElementById('caste').value);

  const skills = document.querySelectorAll('.skill:checked');
  const reputation = document.querySelectorAll('.reputation:checked');
  const repPenalty = document.querySelectorAll('.reputationFix:checked');

  const ageRadio = document.querySelector('input[name="age"]:checked');
  const age = ageRadio ? parseFloat(ageRadio.value) : 1;

  let skillBonus = 0;
  skills.forEach(skill => skillBonus += parseInt(skill.value));

  let repCoefficient = 1;
  reputation.forEach(rep => repCoefficient *= parseFloat(rep.value));

  let repFlatPenalty = 0;
  repPenalty.forEach(rep => repFlatPenalty += parseInt(rep.value));

  // Final price
  let finalPrice = basePrice * education * netWorth * age * repCoefficient;
  finalPrice += caste + skillBonus + repFlatPenalty;

  // Show result with styling update
  const result = document.getElementById('result');
  result.textContent = `Final Dowry: $${finalPrice.toFixed(2)}`;
  result.style.color = finalPrice > 150 ? 'green' : 'red';
}