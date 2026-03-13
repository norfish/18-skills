const { Lunar } = require('lunar-javascript');

console.log('=== 农历日期转换验证 ===\n');

// 测试用例：1990年农历4月12日
console.log('生日：1990年农历4月12日\n');

// 验证2025年的转换
console.log('2025年农历四月十二 → 阳历：');
const lunar2025 = Lunar.fromYmd(2025, 4, 12);
const solar2025 = lunar2025.getSolar();
console.log(`  结果：${solar2025.getYear()}年${String(solar2025.getMonth()).padStart(2, '0')}月${String(solar2025.getDay()).padStart(2, '0')}日`);
console.log(`  预期：2025年05月09日`);
console.log(`  状态：${solar2025.getYear() === 2025 && solar2025.getMonth() === 5 && solar2025.getDay() === 9 ? '✅ 正确' : '❌ 错误'}`);

console.log('');

// 验证2026年的转换
console.log('2026年农历四月十二 → 阳历：');
const lunar2026 = Lunar.fromYmd(2026, 4, 12);
const solar2026 = lunar2026.getSolar();
console.log(`  结果：${solar2026.getYear()}年${String(solar2026.getMonth()).padStart(2, '0')}月${String(solar2026.getDay()).padStart(2, '0')}日`);
console.log(`  预期：2026年05月28日`);
console.log(`  状态：${solar2026.getYear() === 2026 && solar2026.getMonth() === 5 && solar2026.getDay() === 28 ? '✅ 正确' : '❌ 错误'}`);

console.log('\n=== 额外验证 ===\n');

// 反向验证：2025年5月9日是农历几号
console.log('反向验证 - 2025年05月09日 → 农历：');
const Solar = require('lunar-javascript').Solar;
const solarReverse2025 = Solar.fromYmd(2025, 5, 9);
const lunarReverse2025 = solarReverse2025.getLunar();
console.log(`  结果：${lunarReverse2025.getYear()}年${Math.abs(lunarReverse2025.getMonth())}月${lunarReverse2025.getDay()}日`);
console.log(`  是否为四月十二：${Math.abs(lunarReverse2025.getMonth()) === 4 && lunarReverse2025.getDay() === 12 ? '✅ 是' : '❌ 否'}`);

console.log('');

// 反向验证：2026年5月28日是农历几号
console.log('反向验证 - 2026年05月28日 → 农历：');
const solarReverse2026 = Solar.fromYmd(2026, 5, 28);
const lunarReverse2026 = solarReverse2026.getLunar();
console.log(`  结果：${lunarReverse2026.getYear()}年${Math.abs(lunarReverse2026.getMonth())}月${lunarReverse2026.getDay()}日`);
console.log(`  是否为四月十二：${Math.abs(lunarReverse2026.getMonth()) === 4 && lunarReverse2026.getDay() === 12 ? '✅ 是' : '❌ 否'}`);
