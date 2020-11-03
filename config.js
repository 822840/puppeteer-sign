/*
 * @Descripttion:  项目配置表 
 * @Author: xuess<wuniu2010@126.com>
 * @Date: 2019-06-04 17:29:18
 * @LastEditors: 午休
 * @LastEditTime: 2020-09-09 21:02:05
 */

// email 登陆账号 如：xxxx@126.com  默认使用的是 126的邮箱登录的。可以自行配置
const emailName = 'xxxx@126.com';
// email 登陆密码
const emailPassword = '123456';

// 接收者 邮箱
const toEmail = 'xxxx@qq.com';

//用于签到的 账号信息 列表
const cookieListValKey = [
	{	
		type: 'smzdm',
		username: '822840@qq.com',
		phone: '账号1',
		// 数组类型的 cookies
		cookies: [{xxx:'xxx'}]
	},
	{	
		type: 'smzdm',
		username: '账号2',
		phone: '账号2',
		// 数组类型的 cookies
		cookies: [{xxx:'__jsluid_h=a36e1bd9c57a60c5348230f126656d97; __ckguid=HGx3uO3rJG2IjoQSEr2ko; device_id=213070643316042856311058657b3decbce8c5815e71e58a01ab959487; homepage_sug=j; r_sort_type=score; __jsluid_s=45532ee6e00b0f4bb1ac253ff5ab97af; footer_floating_layer=0; smzdm_ec=06; smzdm_ea=200; smzdm_user_source=C9BDD88394F298AD0E0A813BB7E27DDE; s_his=%E6%B8%B8%E6%88%8F; ss_ab=ss93; ad_date=3; wt3_eid=%3B999768690672041%7C2160428564800281323%232160437623700173150; wt3_sid=%3B999768690672041; _zdmA.vid=*; smzdm_user_view=797FA3E6E83D4828E1C0DC64A9D887F8; sess=NzY4MDd8MTYwOTU3NTE1NHwyMTgxNjYzOTg4fGE1MmRjNjQzMzZkM2IzYTNjZTg5MmE5NWQ2YmFhMWNm; user=user%3A2181663988%7C2181663988; smzdm_id=2181663988; _zdmA.uid=ZDMA.J4R6Daxuy.1604391156.2419200; ad_json_feed=%7B%22J_feed_ad4%22%3A%7B%22number%22%3A0%2C%22surplus%22%3A6%7D%7D; bannerCounter=%5B%7B%22number%22%3A2%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A6%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A1%2C%22surplus%22%3A1%7D%2C%7B%22number%22%3A0%2C%22surplus%22%3A1%7D%5D'}]
	},
];


//回复列表 用于发表评论的内容
let commitList = [
	'感谢爆料，很不错啊',
	'感谢爆料，价格不错~~',
];

module.exports = {
	emailName,
	emailPassword,
	toEmail,
	cookieListValKey,
	commitList
};
