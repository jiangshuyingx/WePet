module.exports = { // meetpet
	PROJECT_COLOR: '#FDCF00',
	NAV_COLOR: '#000000',
	NAV_BG: '#FDCF00',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
		{ title: '用户注册使用协议', key: 'SETUP_YS' }
	],

	// 用户 
	USER_FIELDS: [
		{ mark: 'pet', title: '宠物类型', type: 'select', selectOptions: ['汪星人', '喵星人','其他'], must: true },
		{ mark: 'petname', type: 'text', title: '宠物昵称', must: true },
	 
	],


	NEWS_NAME: '公告',
	NEWS_CATE: [
		{ id: 1, title: '小店公告' },
		{ id: 2, title: '养猫常识' },
		{ id: 3, title: '养狗Tips' },
		{ id: 4, title: '明星宠物师' },
	],
	NEWS_FIELDS: [
		{ mark: 'desc', type: 'textarea', title: '简介', must: true, min: 2, max: 200 },
		{ mark: 'content', title: '详细内容', type: 'content', must: true },
		{ mark: 'cover', type: 'image', title: '封面图', must: true, min: 1, max: 1 },
	],


	MEET_NAME: '预约',
	MEET_CATE: [
		{ id: 1, title: '上门喂猫' },
		{ id: 2, title: '上门遛狗' },
		{ id: 3, title: '上门洗护' },
		{ id: 4, title: '其他服务' },

	],
	MEET_FIELDS: [
		{ mark: 'cover', title: '封面图', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'time', title: '预约时段设置', type: 'rows', ext: { titleName: '时段', maxCnt: 15, minCnt: 1 }, must: false },
		{ mark: 'tag', title: '特色', type: 'checkbox', selectOptions: ['细致专业', '准时', '铲粑粑带走', '干净卫生', '反馈及时', '赠送浇花喂鱼'], ext: { show: 'row' }, checkBoxLimit: 0, must: false },
		{ mark: 'desc', title: '预约须知', type: 'content', must: true },
	],
	MEET_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, max: 30 },
		{ mark: 'phone', type: 'mobile', title: '手机', must: true, edit: false }
	],


}