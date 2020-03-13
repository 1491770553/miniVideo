# miniVideo
小程序的一个小型项目，后端：SpringBoot+MybatisBatis+Mysql+Swagger-ui，这个仓库用来存放小程序端

概述：

自己在工作空闲时间在家学习---人不学习和行尸有什么区别呢。
这个项目也是学习过来一步一步自己慢慢敲下来的，如果有这方面意向也可以联系我

# 下面是项目小程序的预览图

[![8KbXm8.th.jpg](https://s1.ax1x.com/2020/03/13/8KbXm8.th.jpg)](https://imgchr.com/i/8KbXm8) [![8KbHSI.th.jpg](https://s1.ax1x.com/2020/03/13/8KbHSI.th.jpg)](https://imgchr.com/i/8KbHSI) [![8KbLOf.th.jpg](https://s1.ax1x.com/2020/03/13/8KbLOf.th.jpg)](https://imgchr.com/i/8KbLOf) [![8Kbblt.th.jpg](https://s1.ax1x.com/2020/03/13/8Kbblt.th.jpg)](https://imgchr.com/i/8Kbblt) [![8Kbj0S.th.jpg](https://s1.ax1x.com/2020/03/13/8Kbj0S.th.jpg)](https://imgchr.com/i/8Kbj0S) [![8KbvTg.th.jpg](https://s1.ax1x.com/2020/03/13/8KbvTg.th.jpg)](https://imgchr.com/i/8KbvTg) [![8KqSYj.th.jpg](https://s1.ax1x.com/2020/03/13/8KqSYj.th.jpg)](https://imgchr.com/i/8KqSYj) [![8Kqpfs.th.jpg](https://s1.ax1x.com/2020/03/13/8Kqpfs.th.jpg)](https://imgchr.com/i/8Kqpfs)


## 登录注销模块：

用户登录，注销，注册等等功能

## 首页模块：

做了一个分页下拉翻页，上拉刷新功能，展示用户视频的截图，视频的截图由后端进行

## 视频详情：

查看视频，可以给视频点赞，给用户关注，评论，回复功能

## 搜索模块：

使用了wsSearchView组件，进行搜索，怎么说呢，灰常好用

## 个人主页模块：

首页是使用微信小程序端的一个临时文件上传功能做的修改头像，查询关注的人和收藏/点赞的人视频，以及上传视频（可以选择bgm[后端实现]）

## 举报模块：

看到不良信息可以进行举报，待完善后台的一个管理系统进行删除修改bgm这样的后台管理系统，管理用户等等

## 分享模块：

用户可以分享到朋友圈，好友

# 技术点：

1.搜索使用的是：wsSearchView组件，github有开源使用这个做搜索模块很方便，近期搜索.热搜等等都简化了，页面也帮你开发出来了
wsSearchView组件网站
https://github.com/mindawei/wsSearchView

2.FFMPEG
linux里和Windows的命令不一样
FFMPEF的命令行和Windows起冲突，后端只能部署到linnux（当然学习能力好的可以对这个FFMPEG的代码进行编译修改本来的代码，到Windows就也可以运行了，喜欢linux系统的小伙伴就不用慌了）
后端通过调用FFMPEG的api进行对视频的压缩，截图，Bgm的替换 等等的操作

3.pageHelper
这个是Mybatis的分页插件，也是灰常的好用，可以对数据进行分页，不需要你再到sql语句里编写代码limit
这个也是我的博客，写过这样的一篇文章
https://www.cnblogs.com/liujunwei/p/11570476.html


4.Swagger-Ui
一个开发需要掌握的提供api接口供测试人员使用

5.还有很多
都需要大家一起努力加油！！
学习就完了，

# Learning makes me happy

也可以关注俺的公众号，跟我公众号发送消息，我也会去回复喔(搜索  我的有趣住在无趣里)
微信号：liujunwei0726

也可以扫码关注（我也会分享一点干货）

祝大家 学习、工作 快乐！！

<img src="https://img2018.cnblogs.com/blog/1814171/202002/1814171-20200212140323834-1059040125.png" alt="8KzqZq.jpg" border="0" />

