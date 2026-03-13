/**
 * 农历转换测试脚本
 */

const { 
  lunarToSolar, 
  solarToLunar, 
  getThisYearSolarDate,
  getLeapMonth,
  formatLunarDate,
  parseLunarDate,
  getNextLunarBirthday
} = require('./lunar-converter');

console.log('=== 农历转换测试 ===\n');

// 测试 1: 农历转阳历
console.log('1. 农历转阳历测试');
console.log('   农历 1998年5月20日 → 阳历:');
try {
  const solar = lunarToSolar(1998, 5, 20);
  console.log(`   ${solar.year}-${String(solar.month).padStart(2, '0')}-${String(solar.day).padStart(2, '0')}`);
} catch (e) {
  console.log(`   错误: ${e.message}`);
}

// 测试 2: 获取今年农历日期对应的阳历
console.log('\n2. 今年农历日期转换');
console.log('   农历八月初五 → 今年的阳历:');
try {
  const thisYear = getThisYearSolarDate(8, 5);
  console.log(`   ${thisYear.year}-${String(thisYear.month).padStart(2, '0')}-${String(thisYear.day).padStart(2, '0')}`);
} catch (e) {
  console.log(`   错误: ${e.message}`);
}

// 测试 3: 获取下一个农历生日
console.log('\n3. 下一个农历生日');
console.log('   农历八月初五（出生年1998）:');
try {
  const nextBirthday = getNextLunarBirthday(8, 5, 1998);
  console.log(`   阳历日期: ${nextBirthday.year}-${String(nextBirthday.month).padStart(2, '0')}-${String(nextBirthday.day).padStart(2, '0')}`);
  console.log(`   年龄: ${nextBirthday.age}`);
  console.log(`   距离还有: ${nextBirthday.daysUntil} 天`);
} catch (e) {
  console.log(`   错误: ${e.message}`);
}

// 测试 4: 格式化农历日期
console.log('\n4. 农历日期格式化');
console.log(`   格式化为: ${formatLunarDate(8, 5, false)}`);
console.log(`   闰月格式: ${formatLunarDate(8, 5, true)}`);

// 测试 5: 解析农历日期字符串
console.log('\n5. 解析农历日期字符串');
const testDates = ['八月初五', '8-15', '闰八月初五', '腊月二十三'];
testDates.forEach(date => {
  const parsed = parseLunarDate(date);
  if (parsed) {
    console.log(`   "${date}" → 月:${parsed.month}, 日:${parsed.day}, 闰月:${parsed.isLeapMonth}`);
  } else {
    console.log(`   "${date}" → 解析失败`);
  }
});

// 测试 6: 检查闰月
console.log('\n6. 闰月检查');
const testYears = [2023, 2024, 2025];
testYears.forEach(year => {
  const leapMonth = getLeapMonth(year);
  if (leapMonth) {
    console.log(`   ${year}年: 闰${leapMonth.leapMonth}月`);
  } else {
    console.log(`   ${year}年: 无闰月`);
  }
});

console.log('\n=== 测试完成 ===');
