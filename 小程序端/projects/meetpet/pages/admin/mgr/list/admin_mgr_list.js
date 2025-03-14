const AdminBiz = require('../../../../../../comm/biz/admin_biz.js');
const pageHelper = require('../../../../../../helper/page_helper.js');
const cloudHelper = require('../../../../../../helper/cloud_helper.js');

Page({

	/**
	 * 页面的初始数据
	 */
	data: {

		isSuperAdmin: false,
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		if (!AdminBiz.isAdmin(this, 'mgr')) return; 
	 

		//设置搜索菜单
		this.setData(this._getSearchMenu());
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

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

	bindStatusTap: async function (e) {
		if (!AdminBiz.isAdmin(this, 'mgr')) return;

		let id = pageHelper.dataset(e, 'id');
		let status = pageHelper.dataset(e, 'status');
		if (!id) return;
		status = Number(status);

		let params = {
			id,
			status
		}

		let that = this;
		try {
			await cloudHelper.callCloudSumbit('admin/mgr/status', params).then(res => {
				pageHelper.modifyListNode(id, that.data.dataList.list, 'adminStatus', status, 'adminId');
				that.setData({
					dataList: that.data.dataList,
				});
				pageHelper.showSuccToast('设置成功');
			});
		} catch (e) {
			console.log(e);
		}
	},

	bindDelTap: async function (e) {
		if (!AdminBiz.isAdmin(this, 'mgr')) return;

		let id = e.currentTarget.dataset.id;
		if (!id) return;

		let params = {
			id,
		}

		let callback = async () => {
			try {
				await cloudHelper.callCloudSumbit('admin/mgr/del', params).then(res => {
					pageHelper.delListNode(id, this.data.dataList.list, 'adminId');
					this.data.dataList.total--;
					this.setData({
						dataList: this.data.dataList
					});
					pageHelper.showSuccToast('删除成功', 2000);

				});

			} catch (e) {
				console.log(e);
			}
		}

		pageHelper.showConfirm('确认删除？删除不可恢复', callback);
	},

	bindCommListCmpt: function (e) {
		if (!AdminBiz.isAdmin(this, 'mgr')) return;
		pageHelper.commListListener(this, e);
	},


	url: function (e) {
		pageHelper.url(e, this);
	},

	_getSearchMenu: function () {

		let sortItems = [];
		let sortMenus = [
			{ label: '全部', type: '', value: '' },
			{ label: '正常', type: 'status', value: 1 },
			{ label: '停用', type: 'status', value: 0 },
		]
		if (this.data.admin.type == 1) {
			sortMenus = sortMenus.concat([
				{ label: '超管', type: 'type', value: 1 },
				{ label: '普通管理员', type: 'type', value: 0 },
				{ label: '核销员', type: 'type', value: 2 },
			]);
		}

		return {
			search: '',
			sortItems,
			sortMenus,
			isLoad: true
		}

	}
})