(function (Scratch) {
	'use strict';
	
	// V0.0.2

	Scratch.translate.setup({
		"zh": {
			extName: '汉字',
			hanziNumber: '[type] 数字 [number]',
			normalHanzi: '[text] 是汉字？',
			normal: '中文汉字',
			traditional: '繁体汉字',
			uppercase: '中文大写',
			uppercaseTrad: '大写繁体',
			unitless: '无单位',
			japanese: '日语汉字',
			chuNom: '字喃汉字'
		},
		"zh-tw": {
			extName: '漢字',
			hanziNumber: '[type] 數字 [number]',
			normalHanzi: '[text] 是漢字？',
			normal: '中文漢字',
			traditional: '繁體漢字',
			uppercase: '中文大寫',
			uppercaseTrad: '大寫繁體',
			unitless: '無單位',
			japanese: '日本漢字',
			chuNom: '字喃漢字'
		},
		"vi": {
			extName: '𡨸漢',
			hanziNumber: '[number] 𧵑 [type]',
			normalHanzi: '[text] 𪜀𡨸漢？',
			normal: '𡨸漢㗂中',
			traditional: '𡨸漢繁體',
			uppercase: '𡨸漢㗂中（in hoa）',
			uppercaseTrad: '𡨸漢繁體（in hoa）',
			unitless: '空單位',
			japanese: '𡨸漢㗂日',
			chuNom: '𡨸漢𡨸喃'
		}
	});
	const formatMessage = Scratch.translate;
	const lang = (id, defaultValue) => Scratch.translate({ id: id, default: defaultValue });

	const normalHanzi =
		/^[\u4e00-\u9fff\u3400-\u4dbf\ud840-\ud87f\ud880-\ud8bf\ud8c0-\ud8ff\ud900-\ud93f\ud940-\ud97f\ud980-\ud9bf\ud9c0-\ud9ff\u2e80-\u2eff\u2f00-\u2fdf\u2ff0-\u2fff\u3000-\u303f\u31c0-\u31ef\u3200-\u32ff\u3300-\u33ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af\uf900-\ufaff]+$/;

	function hanziNumber(num, type) {
		const config = getConfig(type);

		let strNum = String(num);
		const isNegative = strNum.startsWith('-');
		if (isNegative) strNum = strNum.substring(1);

		const [strInt, strDec = ''] = strNum.split('.');
		const convertedInt = convertIntegerPart(strInt, config);
		const convertedDec = convertDecimalPart(strDec, config);

		return `${isNegative ? config.minus : ''}${convertedInt}${convertedDec ? config.decUnits + convertedDec : ''}`;
	}

	/**
	* 获取配置函数
	*/
	function getConfig(type) {
		const configs = {
			uppercase: {
				nums: ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
				intRadice: ['', '拾', '佰', '仟'],
				intUnits: ['', '万', '亿', '兆', '京', '垓', '秭', '穣', '沟', '涧', '正', '载', '极', '恒河沙', '阿僧祇', '那由他', '不可思议', '无量大数'],
				decUnits: '点',
				minus: '负',
				units: true,
				partition: 4,
				middle0: '零'
			},
			japanese: {
				nums: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
				intRadice: ['', '十', '百', '千'],
				intUnits: ['', '万', '億', '兆', '京', '垓', '秭', '穣', '溝', '涧', '正', '載', '極', '恒河沙', '阿僧祇', '那由他', '不可思議', '無量大数'],
				decUnits: '点',
				minus: '負',
				skipOneForUnits: true,
				units: true,
				partition: 4,
				middle0: '零'
			},
			unitless: {
				nums: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
				intRadice: '',
				intUnits: '',
				decUnits: '点',
				minus: '負',
				units: false,
				partition: 0,
				middle0: '零'
			},
			chuNom: {
				nums: ['空', '𠬠', '𠄩', '𠀧', '𦊚', '𠄼', '𦒹', '𦉱', '𠔭', '𠃩'],
				intRadice: ['', '𨒒', '𤾓'],
				intUnits: ['', '𠦳', '兆', '姉'],
				decUnits: '𦤾',
				minus: '除',
				units: true,
				partition: 3,
				middle0: '𥛭' // 𥙪
			},
			'zh-trad': {
				nums: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
				intRadice: ['', '十', '百', '千'],
				intUnits: ['', '萬', '億', '兆', '京', '垓', '秭', '穰', '溝', '澗', '正', '載', '極', '恆河沙', '阿僧祇', '那由他', '不可思議', '無量大數'],
				decUnits: '點',
				minus: '負',
				units: true,
				partition: 4,
				middle0: '零'
			},
			'uppercase-trad': {
				nums: ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
				intRadice: ['', '十', '百', '千'],
				intUnits: ['', '萬', '億', '兆', '京', '垓', '秭', '穰', '溝', '澗', '正', '載', '極', '恆河沙', '阿僧祇', '那由他', '不可思議', '無量大數'],
				decUnits: '點',
				minus: '負',
				units: true,
				partition: 4,
				middle0: '零'
			},
			default: {
				nums: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
				intRadice: ['', '十', '百', '千'],
				intUnits: ['', '万', '亿', '兆', '京', '垓', '秭', '穣', '沟', '涧', '正', '载', '极', '恒河沙', '阿僧祇', '那由他', '不可思议', '无量大数'],
				decUnits: '点',
				minus: '负',
				units: true,
				partition: 4,
				middle0: '零'
			}
		};
		return configs[type] || configs.default;
	}

	/**
	* 转换整数部分
	*/
	function convertIntegerPart(strInt, config) {
		if (!strInt || strInt === '0') return config.nums[0];

		let result = '';
		const len = strInt.length;
		let zeroCount = 0;

		for (let i = 0; i < len; i++) {
			const digit = strInt[i];
			const position = len - i - 1;
			const unitPosition = Math.floor(position / config.partition);
			const radicePosition = position % config.partition;

			if (digit === '0') {
				zeroCount++;
			} else {
				if (zeroCount > 0) {
					result += config.middle0;
					zeroCount = 0;
				}
				result += convertDigit(digit, radicePosition, config);
			}

			if (radicePosition === 0 && zeroCount < config.partition) {
				result += config.intUnits[unitPosition];
			}
		}
		return result;
	}

	/**
	* 转换单个数字
	*/
	function convertDigit(digit, position, config) {
		return config.skipOneForUnits && digit === '1' && position > 0
			? config.intRadice[position]
			: config.nums[parseInt(digit)] + (config.units ? config.intRadice[position] : '');
	}

	/**
	* 转换小数部分
	*/
	function convertDecimalPart(strDec, config) {
		return strDec.split('').map(digit => config.nums[parseInt(digit)]).join('');
	}

	class hanzi {
		getInfo() {
			return {
				id: 'hanzi',
				name: lang('extName', 'hanzi'),
				color1: '#E62F00',
				color2: '#CF2A00',
				color3: '#B82600',
				blocks: [
					{
						opcode: 'hanziNumber',
						blockType: Scratch.BlockType.REPORTER,
						text: lang('hanziNumber', '[type] \'s [number]'),
						arguments: {
							type: {
								type: Scratch.ArgumentType.NUMBER,
								menu: 'type'
							},
							number: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: ''
							}
						}
					},
					'---',
					{
						opcode: 'normalHanzi',
						blockType: Scratch.BlockType.BOOLEAN,
						text: lang('normalHanzi', '[text] is hanzi?'),
						arguments: {
							text: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: '字'
							}
						}
					}
				],
				menus: {
					type: {
						acceptReporters: false,
						items: [
							{
								text: lang('normal', 'Chinese hanzi'),
								value: 'normal'
							},
							{
								text: lang('traditional', 'traditional Chinese hanzi'),
								value: 'zh-trad'
							},
							{
								text: lang('uppercase', 'uppercase'),
								value: 'uppercase'
							},
							{
								text: lang('uppercaseTrad', 'uppercase'),
								value: 'uppercase-trad'
							},
							{
								text: lang('unitless', 'unitless'),
								value: 'unitless'
							},
							{
								text: lang('japanese', 'Japanese kanji'),
								value: 'japanese'
							},
							{
								text: lang('chuNom', 'Chu Nom hanzi'),
								value: 'chuNom'
							}
						]
					}
				}
			};
		}
		hanziNumber({ type, number }) {
			return hanziNumber(number, type);
		}
		normalHanzi({ text }) {
			return normalHanzi.test(text);
		}
	}
	Scratch.extensions.register(new hanzi());
})(Scratch);
