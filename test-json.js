import fs from 'fs';

try {
  const data = fs.readFileSync('src/data/experiments.json', 'utf8');
  const experiments = JSON.parse(data);
  
  console.log('✅ JSON is valid!');
  console.log(`📊 Total experiments: ${experiments.length}`);
  
  // Check Experiment 6
  const exp6 = experiments.find(e => e.id === 6);
  if (exp6) {
    console.log(`\n✅ Experiment 6 found: ${exp6.title}`);
    console.log(`📝 Sub-experiments: ${exp6.subExperiments.length}`);
    
    if (exp6.subExperiments.length > 0) {
      console.log('\n✅ Experiment 6 has code!');
      exp6.subExperiments.forEach((sub, index) => {
        console.log(`   ${index + 1}. ${sub.id}: ${sub.title}`);
      });
    } else {
      console.log('\n❌ Experiment 6 has NO sub-experiments!');
    }
  } else {
    console.log('\n❌ Experiment 6 NOT found!');
  }
  
} catch (error) {
  console.error('❌ Error:', error.message);
}
