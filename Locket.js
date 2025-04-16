// ========= Nguyễn Thành Khai - Zalo 0348560360 ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// ========= Tiktok @8bpmodvip ========= //
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Locket Gold By Nguyễn Thành Khai ! ";var khailuvpython={ is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2025-04-12T01:04:18Z",purchase_date:"2025-04-12T01:04:17Z",store:"app_store"},khailuvpython2={grace_period_expires_date:null,purchase_date:"2025-04-12T01:04:17Z",product_identifier:"com.khai.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(khailuvpython2.product_identifier=s,obj.subscriber.subscriptions[s]=khailuvpython):obj.subscriber.subscriptions["com.khai.premium.yearly"]=khailuvpython,obj.subscriber.entitlements[e]=khailuvpython2}else obj.subscriber.subscriptions["com.khai.premium.yearly"]=khailuvpython,obj.subscriber.entitlements.pro=khailuvpython2;$done({body:JSON.stringify(obj)});
