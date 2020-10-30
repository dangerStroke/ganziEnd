webpackJsonp([46],{SiCs:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"carList",data:function(){return{columns:[{title:"序号",key:"id",align:"index"},{title:"车型名称",key:"name",align:"center"},{title:"车型座位数",key:"ridership",align:"center"},{title:"车型价格",key:"price",align:"center"},{title:"车型库存",key:"cars",align:"center"},{title:"车型描述",key:"intro",align:"center"},{title:"操作",slot:"action",width:150,align:"center"}],page:1,pagesize:10,total:0,data:[],name:"",ridership:"",image:"",cars:"",price:"",index:"",modal:!1,modalTitle:"",upData:{token:""},id:"",describe:""}},created:function(){this.getCarList()},mounted:function(){this.getToken()},methods:{getCarList:function(){var t=this;this.$fetch("/admin/list-model").then(function(e){200==e.code&&(t.data=e.data.map(function(t){return t.price=(t.price/100).toFixed(2),console.log(t),t}))})},clearSerach:function(){console.log(1)},newSite:function(t){this.modal=!0,t.id?(console.log(t),this.image=t.image,this.cars=t.cars,this.name=t.name,this.ridership=t.ridership,this.price=t.price,this.id=t.id,this.describe=t.intro,this.modalTitle="修改车型"):this.modalTitle="新建车型"},infoSure:function(t){var e=this,i=this.image,a=this.cars,s=this.price,n=this.name,r=this.ridership,c=this.id,o=this.describe;if(""!=i&&""!=a&&""!=s&&""!=n&&""!=r&&""!=o)"新建车型"==t?this.$post("/admin/add-model",{image:i,cars:a,price:100*s,name:n,ridership:r,intro:o}).then(function(t){console.log(t),200==t.code&&(e.modal=!1,e.image="",e.cars="",e.price="",e.name="",e.ridership="",e.id="",e.describe="",e.getCarList(),e.$Message.info("新建车型成功"))}):this.$post("/admin/edit-model",{id:c,image:i,cars:a,price:s,name:n,ridership:r,intro:o}).then(function(t){200==t.code&&(e.image="",e.cars="",e.price="",e.name="",e.ridership="",e.id="",e.modal=!1,e.describe="",e.getCarList(),e.$Message.info("修改车型成功"))});else{if(""==i)return void this.$Message.error("请上传车辆图片");if(""==a)return void this.$Message.error("请填写车型库存");if(""==s)return void this.$Message.error("请填写价格");if(""==r)return void this.$Message.error("请填写座位数");""==this.describe&&this.$Message.error("请填写描述")}},cancel:function(){this.image="",this.cars="",this.price="",this.name="",this.ridership="",this.id="",this.modal=!1},remove:function(t){var e=this;console.log(t),this.$post("/admin/delete-model",{id:t}).then(function(t){200==t.code&&t.data&&(e.$Message.info("删除成功"),e.getCarList())})},handleSuccessList:function(t){var e="http://static2.jd-gz.com/"+t.key;this.image=e,console.log(e)},changePage:function(t){this.page=t,this.getCarList()},getToken:function(){var t=this;this.$fetch("/admin/index/get-upload-token").then(function(e){200===e.code?t.upData.token=e.data:t.$Message.warning(e.error)})}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"custom_search"},[i("div",{staticClass:"adctive"},[i("Button",{staticClass:"newBtn",attrs:{type:"primary"},on:{click:t.newSite}},[i("Icon",{attrs:{type:"md-add"}}),t._v("新建\n      ")],1)],1)]),t._v(" "),i("Table",{attrs:{border:"",columns:t.columns,data:t.data},scopedSlots:t._u([{key:"action",fn:function(e){var a=e.row,s=e.index;return[i("Button",{staticStyle:{"margin-right":"5px"},attrs:{type:"primary",size:"small"},on:{click:function(e){return t.newSite(a)}}},[t._v("修改")]),t._v(" "),i("Button",{attrs:{type:"error",size:"small"},on:{click:function(e){return t.remove(a.id,s)}}},[t._v("删除")])]}}])}),t._v(" "),i("div",{staticClass:"driver_model"},[i("Modal",{attrs:{title:t.modalTitle,transfer:!1,"mask-closable":!1,closable:!1},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[i("div",{staticClass:"upLoadimg"},[i("div",{staticClass:"text"},[t._v("车辆图片：")]),t._v(" "),i("Upload",{ref:"upload",staticClass:"upload_btn",attrs:{format:["jpg","jpeg","png"],accept:"'jpg', 'jpeg', 'png'",name:"file",data:t.upData,"on-success":t.handleSuccessList,action:"http://up-z0.qiniup.com","show-upload-list":!1}},[i("div",{staticClass:"upload_img_css",staticStyle:{width:"130px",height:"100px"}},[i("img",{staticClass:"upload_img_css",attrs:{src:t.image,alt:""}})])])],1),t._v(" "),i("div",{staticClass:"carInfo"},[i("div",{staticClass:"input_info"},[t._v("车型名称:"),i("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"车型名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),i("div",{staticClass:"input_info"},[t._v("座位数:"),i("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"座位数"},model:{value:t.ridership,callback:function(e){t.ridership=e},expression:"ridership"}})],1),t._v(" "),i("div",{staticClass:"input_info"},[t._v("库存:"),i("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"库存"},model:{value:t.cars,callback:function(e){t.cars=e},expression:"cars"}})],1),t._v(" "),i("div",{staticClass:"input_info"},[t._v("价格:"),i("Input",{staticStyle:{width:"150px"},attrs:{type:"text",placeholder:"价格"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),t._v(" "),i("div",{staticClass:"input_info"},[t._v("描述:"),i("Input",{staticStyle:{width:"300px"},attrs:{type:"text",placeholder:"请填写描述(例：自动｜5座｜1.5L)"},model:{value:t.describe,callback:function(e){t.describe=e},expression:"describe"}})],1)]),t._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("Button",{attrs:{type:"text"},on:{click:function(e){return t.cancel(t.modalTitle)}}},[t._v("取消")]),t._v(" "),i("Button",{attrs:{type:"primary"},on:{click:function(e){return t.infoSure(t.modalTitle)}}},[t._v("确定")])],1)])],1),t._v(" "),i("div",{staticClass:"page_box"},[i("div",{staticClass:"page_left"},[t._v("\n      共"+t._s(t.total)+"条记录 第"+t._s(t.page)+"/"+t._s(Math.ceil(t.total/t.pagesize))+"页\n    ")]),t._v(" "),i("div",{staticClass:"page_right"},[i("Page",{attrs:{total:t.total,"page-size":t.pagesize,current:t.page},on:{"on-change":t.changePage}})],1)])],1)},staticRenderFns:[]};var n=i("VU/8")(a,s,!1,function(t){i("be2/")},"data-v-12a63a4b",null);e.default=n.exports},"be2/":function(t,e){}});
//# sourceMappingURL=46.ac2fa8a4357d4043542f.js.map