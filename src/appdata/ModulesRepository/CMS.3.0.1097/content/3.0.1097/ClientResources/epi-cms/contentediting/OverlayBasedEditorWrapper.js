//>>built
define("epi-cms/contentediting/OverlayBasedEditorWrapper",["dojo/_base/declare","dojo/_base/lang","dojo/on","epi/shell/widget/IframeWithOverlay","epi-cms/contentediting/_EditorWrapperBase"],function(_1,_2,on,_3,_4){return _1([_4],{postCreate:function(){this.inherited(arguments);this.own(on(this.get("iframeWithOverlay").iframe,"mousedown",_2.hitch(this,this._onViewportClick)));},destroy:function(){this._iframeWithOverlay=null;this.inherited(arguments);},_onViewportClick:function(_5){},_onEditorResize:function(_6){},_onEditorResizeFinished:function(_7){},_getOverlayItemAttr:function(){return this.overlayItem||this.editorParams.overlayItem;},_getIframeWithOverlayAttr:function(){if(this._iframeWithOverlay){return this._iframeWithOverlay;}var _8=null,_9=this.overlayItem;while(_9){if(_9 instanceof _3){_8=_9;break;}_9=_9.getParent();}return this._iframeWithOverlay=_8;}});});