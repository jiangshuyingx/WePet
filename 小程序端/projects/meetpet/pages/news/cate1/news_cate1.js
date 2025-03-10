const pageHelper = require('../../../../../helper/page_helper.js');
const ProjectBiz = require('../../../biz/project_biz.js');
const NewsBiz = require('../../../biz/news_biz.js');

Page({

	data: {
		isLoad: false,

		_params: null,

		sortMenus: [],
		sortItems: [], 
	},

	/**
		* 生命周期函数--监听页面加载
		*/
	onLoad: async function (options) {
		ProjectBiz.initPage(this); 

		this.setData({
			isLoad: true,
			_params: {
				cateId: 1,
			}
		}); 
		NewsBiz.setCateTitle(1);   
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () { },

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: async function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	url: async function (e) {
		pageHelper.url(e, this);
	},

	bindCommListCmpt: function (e) {
		pageHelper.commListListener(this, e);
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	} 

})