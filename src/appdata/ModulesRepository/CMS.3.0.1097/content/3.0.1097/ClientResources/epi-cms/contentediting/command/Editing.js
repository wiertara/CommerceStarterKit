//>>built
define("epi-cms/contentediting/command/Editing",["dojo/_base/declare","dojo/_base/lang","dojo/Stateful","epi","epi/shell/_StatefulGetterSetterMixin","epi-cms/command/TranslateContent","epi-cms/contentediting/command/RevertToPublished","epi-cms/contentediting/command/Reject","epi-cms/contentediting/command/SendForReview","epi-cms/contentediting/command/Publish","epi-cms/contentediting/command/CreateDraft","epi-cms/contentediting/command/Withdraw","epi-cms/contentediting/command/ManageExpiration"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d){var _e=_1([_3,_5],{model:null,revertToPublished:null,reject:null,translate:null,createDraft:null,sendForReview:null,publish:null,withdraw:null,manageExpiration:null,constructor:function(_f){_2.mixin(this,_f);this.revertToPublished=new _7();this.reject=new _8();this.translate=new _6();this.createDraft=new _b();this.sendForReview=new _9();this.publish=new _a();this.withdraw=new _c();this.manageExpiration=new _d();},_setModelAttr:function(_10){this._set("model",_10);this.revertToPublished.set("model",_10);this.reject.set("model",_10);this.translate.set("model",_10);this.createDraft.set("model",_10);this.sendForReview.set("model",_10);this.publish.set("model",_10);this.withdraw.set("model",_10);this.manageExpiration.set("model",_10);}});return new _e();});