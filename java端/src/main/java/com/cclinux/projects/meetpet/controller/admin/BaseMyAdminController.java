package com.cclinux.projects.meetpet.controller.admin;

import com.cclinux.framework.core.platform.controller.BaseAdminController;
import com.cclinux.projects.meetpet.service.admin.AdminMgrService;

import javax.annotation.Resource;

/**
 * @Notes: 本项目管理系统控制器基类
 * @Author: cclinux0730 (weixin)
 * @Date: 2024/2/16 14:11
 * @Ver: ccminicloud-framework 3.2.1
 */
public class BaseMyAdminController extends BaseAdminController {
    @Resource(name = "MeetPetAdminMgrService")
    private AdminMgrService adminMgrService;

}
