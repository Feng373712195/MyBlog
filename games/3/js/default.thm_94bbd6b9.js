window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"StartScene":"resource/game_skins/StartScene.exml","RankScene":"resource/game_skins/RankScene.exml","BeginScene":"resource/game_skins/BeginScene.exml","RankItem":"resource/game_skins/RankItem.exml","GameScene":"resource/game_skins/GameScene.exml","LoginInMessageBox":"resource/game_skins/LoginInMessageBox.exml","LevelUpMessageBox":"resource/game_skins/LevelUpMessageBox.exml","RankingListScene":"resource/game_skins/RankingListScene.exml","RankingItem":"resource/game_skins/RankingItem.exml","RankingResultScene":"resource/game_skins/RankingResultScene.exml","ResultMessageBox":"resource/game_skins/ResultMessageBox.exml","UseKeyMessageBox":"resource/game_skins/UseKeyMessageBox.exml","NoKeyMessageBox":"resource/game_skins/NoKeyMessageBox.exml","PkScene":"resource/game_skins/PkScene.exml","PkWaitMessageBox":"resource/game_skins/PkWaitMessageBox.exml","PkResultScene":"resource/game_skins/PkResultScene.exml","ChooseTypeScene":"resource/game_skins/ChooseTypeScene.exml","ChooseTypeDetailScenen":"resource/game_skins/ChooseTypeDetailScene.exml","Loading":"resource/game_skins/Loading.exml","ShoppingMallScene":"resource/game_skins/ShoppingMallScene.exml","ShoppingItem":"resource/game_skins/ShoppingItem.exml","ExchangeItem":"resource/game_skins/ExchangeItem.exml","BuySuccessMessage":"resource/game_skins/BuySuccessMessage.exml","ExchangeSuccesMessage":"resource/game_skins/ExchangeSuccesMessage.exml","PkGameScene":"resource/eui_skins/PkGameScene.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LevelUpMessageBox.exml'] = window.LevelUpMessageBoxSkin = (function (_super) {
	__extends(LevelUpMessageBoxSkin, _super);
	function LevelUpMessageBoxSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = LevelUpMessageBoxSkin.prototype;

	return LevelUpMessageBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PkGameScene.exml'] = window.PkGameSceneSkin = (function (_super) {
	__extends(PkGameSceneSkin, _super);
	function PkGameSceneSkin() {
		_super.call(this);
		this.skinParts = ["self0","rival0","gamer_top","question_index1","question_box0","rules_box_0","rules_box_1","answer_box0"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.gamer_top_i(),this._Group25_i()];
	}
	var _proto = PkGameSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xF0FDFF;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.gamer_top_i = function () {
		var t = new eui.Group();
		this.gamer_top = t;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 80;
		t.y = 30;
		t.elementsContent = [this.self0_i(),this.rival0_i(),this._Label1_i()];
		return t;
	};
	_proto.self0_i = function () {
		var t = new eui.Group();
		this.self0 = t;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 50;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Rect2_i(),this._Group1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.paddingLeft = 0;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x32F72C;
		t.height = 100;
		t.left = 0;
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.right = 0;
		t.scrollEnabled = true;
		t.width = 200;
		t.y = 24;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x3481F3;
		t.percentHeight = 70;
		t.left = -5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.percentWidth = 30;
		return t;
	};
	_proto.rival0_i = function () {
		var t = new eui.Group();
		this.rival0 = t;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 50;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group2_i(),this._Rect7_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 40;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollEnabled = true;
		t.width = 200;
		t.x = 100;
		t.y = 24;
		t.elementsContent = [this._Rect5_i(),this._Rect6_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 200;
		t.y = -30;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xF61737;
		t.percentHeight = 70;
		t.right = -5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.percentWidth = 30;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xD6F704;
		t.height = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "VS";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group25_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 1166;
		t.horizontalCenter = 0;
		t.width = 659;
		t.elementsContent = [this._Rect8_i(),this._Group24_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xF0FDFF;
		t.percentHeight = 100;
		t.left = -3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group24_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this._Label2_i(),this.question_box0_i(),this.rules_box_0_i(),this.rules_box_1_i(),this.answer_box0_i(),this._Label13_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Adobe Heiti Std R";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "—— 单选题 ——";
		t.textColor = 0x23BFD5;
		t.x = 232;
		t.y = 29;
		return t;
	};
	_proto.question_box0_i = function () {
		var t = new eui.Group();
		this.question_box0 = t;
		t.height = 324;
		t.horizontalCenter = 0;
		t.width = 584;
		t.y = 93;
		t.elementsContent = [this._Rect9_i(),this._Group3_i(),this._Group5_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xF0FDFF;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeColor = 0x23BFD5;
		t.strokeWeight = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.left = 23;
		t.right = 23;
		t.size = 34;
		t.text = "孤独症酒精病高发人群为________";
		t.textColor = 0x1D292B;
		t.percentWidth = 100;
		t.y = 43;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 20;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.x = 24;
		t.elementsContent = [this.question_index1_i(),this._Group4_i()];
		return t;
	};
	_proto.question_index1_i = function () {
		var t = new eui.Group();
		this.question_index1 = t;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 200;
		t.x = -24;
		t.y = -264;
		t.elementsContent = [this._Label4_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial-Black";
		t.percentHeight = 100;
		t.left = 0;
		t.size = 26;
		t.text = "2/6";
		t.textAlign = "center";
		t.textColor = 0x1D292B;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.width = 200;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Rect10_i(),this._Label5_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.percentHeight = 100;
		t.top = 0;
		t.width = 40;
		t.x = 29;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial-Black";
		t.percentHeight = 100;
		t.right = 0;
		t.size = 26;
		t.text = "+5";
		t.textAlign = "center";
		t.textColor = 0x1D292B;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 49.24;
		return t;
	};
	_proto.rules_box_0_i = function () {
		var t = new eui.Group();
		this.rules_box_0 = t;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 584;
		t.y = 457.2;
		t.elementsContent = [this._Group7_i(),this._Group9_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 50;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this._Rect11_i(),this._Group6_i(),this._Label6_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.height = 68;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 68;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 26;
		t.width = 158;
		t.x = 61;
		t.y = 16;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this._Rect12_i(),this._Rect13_i(),this._Rect14_i(),this._Rect15_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 3;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.strokeColor = 0x000000;
		t.width = 37;
		t.x = -1;
		t.y = 13;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xCBF0F5;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0x000000;
		t.width = 37;
		t.x = -52;
		t.y = -3;
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xCBF0F5;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 37;
		t.x = -113;
		t.y = -19;
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xCBF0F5;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 37;
		t.x = -113;
		t.y = -19;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial-Black";
		t.size = 26;
		t.text = "12S";
		t.textColor = 0x1D292B;
		t.x = 254;
		t.y = 8;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.percentWidth = 50;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this._Rect16_i(),this._Group8_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.height = 47;
		t.width = 49;
		t.x = 44;
		t.y = 26;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.width = 190;
		t.x = 112;
		t.y = 19;
		t.elementsContent = [this._Rect17_i(),this._Label7_i()];
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 48;
		t.ellipseWidth = 48;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "0/1 使用钥匙";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rules_box_1_i = function () {
		var t = new eui.Group();
		this.rules_box_1 = t;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 584;
		t.x = 38;
		t.y = 457.20000000000005;
		t.elementsContent = [this._Group11_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 96.5;
		t.layout = this._HorizontalLayout8_i();
		t.elementsContent = [this._Rect18_i(),this._Group10_i(),this._Label8_i()];
		return t;
	};
	_proto._HorizontalLayout8_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 6;
		t.horizontalAlign = "contentJustify";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.height = 68;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 68;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 26;
		t.width = 431;
		t.x = 61;
		t.y = 16;
		t.layout = this._HorizontalLayout7_i();
		t.elementsContent = [this._Rect19_i(),this._Rect20_i(),this._Rect21_i(),this._Rect22_i()];
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 3;
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.strokeColor = 0x000000;
		t.width = 105;
		t.x = -1;
		t.y = 13;
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xCBF0F5;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0x000000;
		t.width = 105;
		t.x = -52;
		t.y = -3;
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xCBF0F5;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 105;
		t.x = -113;
		t.y = -19;
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xCBF0F5;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 105;
		t.x = -113;
		t.y = -19;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial-Black";
		t.size = 26;
		t.text = "12S";
		t.textColor = 0x1D292B;
		t.x = 254;
		t.y = 8;
		return t;
	};
	_proto.answer_box0_i = function () {
		var t = new eui.Group();
		this.answer_box0 = t;
		t.height = 480;
		t.horizontalCenter = 0;
		t.width = 580;
		t.y = 565;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group14_i(),this._Group17_i(),this._Group20_i(),this._Group23_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.percentWidth = 100;
		t.x = 2;
		t.y = -12;
		t.elementsContent = [this._Rect23_i(),this._Group13_i()];
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xEDDEFF;
		t.height = 1;
		t.left = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect24_i(),this._Group12_i()];
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xDBF8EA;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout9_i();
		t.elementsContent = [this._Rect25_i(),this._Label9_i()];
		return t;
	};
	_proto._HorizontalLayout9_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "left";
		t.paddingLeft = 40;
		t.paddingRight = 40;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.height = 50;
		t.width = 50;
		t.x = 59;
		t.y = 28;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.text = "A：老年痴呆躯体";
		t.textColor = 0x1D292B;
		t.x = 153;
		t.y = 37;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = -37.99999999999999;
		t.y = -577;
		t.elementsContent = [this._Rect26_i(),this._Group16_i()];
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xEDDEFF;
		t.height = 1;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 120.00000000000011;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 120.00000000000011;
		t.elementsContent = [this._Rect27_i(),this._Group15_i()];
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFCDCC;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout10_i();
		t.elementsContent = [this._Rect28_i(),this._Label10_i()];
		return t;
	};
	_proto._HorizontalLayout10_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "left";
		t.paddingLeft = 40;
		t.paddingRight = 40;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect28_i = function () {
		var t = new eui.Rect();
		t.height = 50;
		t.width = 50;
		t.x = 59;
		t.y = 28;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.text = "A：老年痴呆躯体";
		t.textColor = 0x1D292B;
		t.x = 153;
		t.y = 37;
		return t;
	};
	_proto._Group20_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = -28;
		t.y = -567;
		t.elementsContent = [this._Rect29_i(),this._Group19_i()];
		return t;
	};
	_proto._Rect29_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xEDDEFF;
		t.height = 1;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 120.00000000000011;
		return t;
	};
	_proto._Group19_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 120.00000000000011;
		t.elementsContent = [this._Rect30_i(),this._Group18_i()];
		return t;
	};
	_proto._Rect30_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFCDCC;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout11_i();
		t.elementsContent = [this._Rect31_i(),this._Label11_i()];
		return t;
	};
	_proto._HorizontalLayout11_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "left";
		t.paddingLeft = 40;
		t.paddingRight = 40;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect31_i = function () {
		var t = new eui.Rect();
		t.height = 50;
		t.width = 50;
		t.x = 59;
		t.y = 28;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.text = "A：老年痴呆躯体";
		t.textColor = 0x1D292B;
		t.x = 153;
		t.y = 37;
		return t;
	};
	_proto._Group23_i = function () {
		var t = new eui.Group();
		t.height = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = -18;
		t.y = -557;
		t.elementsContent = [this._Rect32_i(),this._Group22_i()];
		return t;
	};
	_proto._Rect32_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xEDDEFF;
		t.height = 1;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 119.99999999999977;
		return t;
	};
	_proto._Group22_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 119.99999999999977;
		t.elementsContent = [this._Rect33_i(),this._Group21_i()];
		return t;
	};
	_proto._Rect33_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFCDCC;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group21_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout12_i();
		t.elementsContent = [this._Rect34_i(),this._Label12_i()];
		return t;
	};
	_proto._HorizontalLayout12_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		t.horizontalAlign = "left";
		t.paddingLeft = 40;
		t.paddingRight = 40;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect34_i = function () {
		var t = new eui.Rect();
		t.height = 50;
		t.width = 50;
		t.x = 59;
		t.y = 28;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.text = "A：老年痴呆躯体";
		t.textColor = 0x1D292B;
		t.x = 153;
		t.y = 37;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.bottom = 30;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.text = "精神卫生知识";
		t.textColor = 0xFF514E;
		return t;
	};
	return PkGameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "loading_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "loading_fill_png";
		t.percentWidth = 100;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/BeginScene.exml'] = window.BeginSceneSkin = (function (_super) {
	__extends(BeginSceneSkin, _super);
	function BeginSceneSkin() {
		_super.call(this);
		this.skinParts = ["start_btn","nologin_btn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.start_btn_i(),this.nologin_btn_i(),this._Label3_i()];
	}
	var _proto = BeginSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4D9FDE;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 726;
		t.horizontalCenter = 0;
		t.source = "logo_png";
		t.top = 0;
		t.width = 749;
		return t;
	};
	_proto.start_btn_i = function () {
		var t = new eui.Group();
		this.start_btn = t;
		t.bottom = 394;
		t.height = 90;
		t.horizontalCenter = 0;
		t.width = 482;
		t.elementsContent = [this._Rect2_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffc300;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeColor = 0x23bfd5;
		t.strokeWeight = 3;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.percentHeight = 100;
		t.left = 0;
		t.text = "确认授权微信登录";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.nologin_btn_i = function () {
		var t = new eui.Group();
		this.nologin_btn = t;
		t.bottom = 279;
		t.height = 90;
		t.horizontalCenter = 0;
		t.width = 482;
		t.elementsContent = [this._Rect3_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xb06cfe;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeColor = 0x23BFD5;
		t.strokeWeight = 3;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.percentHeight = 100;
		t.left = 0;
		t.text = "游客登录";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 80;
		t.horizontalCenter = 0;
		t.lineSpacing = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "精神卫生小游戏需要您授权登录来获取您的昵称、头像等信息，仅用于区别您和其它用户";
		t.touchEnabled = true;
		t.width = 600;
		t.x = 75;
		return t;
	};
	return BeginSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/BuySuccessMessage.exml'] = window.BuySuccessMessageSkin = (function (_super) {
	__extends(BuySuccessMessageSkin, _super);
	function BuySuccessMessageSkin() {
		_super.call(this);
		this.skinParts = ["bg","close_btn","bottom_btns","messagebox"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.messagebox_i()];
	}
	var _proto = BuySuccessMessageSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 1;
		t.fillAlpha = 0.6;
		t.fillColor = 0x2B2727;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Group();
		this.messagebox = t;
		t.alpha = 1;
		t.height = 537;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 586;
		t.x = 82;
		t.y = 399;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.bottom_btns_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 157;
		t.horizontalCenter = 0;
		t.source = "buy_top_png";
		t.top = -78.5;
		t.width = 243;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.border = false;
		t.fontFamily = "ZhenyanGB-Regular";
		t.size = 44;
		t.stroke = 1;
		t.strokeColor = 0x454f5b;
		t.text = "购买成功";
		t.textColor = 0x454f5b;
		t.x = 212;
		t.y = 135;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial-Black";
		t.horizontalCenter = 0;
		t.size = 44;
		t.text = "+5";
		t.textColor = 0x454f5b;
		t.top = 229;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 192;
		t.fontFamily = "PingFangSC-Medium";
		t.horizontalCenter = 0;
		t.text = "成功购买5把解锁钥匙";
		t.textColor = 0x1D292B;
		return t;
	};
	_proto.bottom_btns_i = function () {
		var t = new eui.Group();
		this.bottom_btns = t;
		t.bottom = 49;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 482;
		t.elementsContent = [this.close_btn_i()];
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Group();
		this.close_btn = t;
		t.bottom = 0;
		t.height = 70;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect2_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.strokeColor = 0x23BFD5;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "学到了";
		t.verticalCenter = 0;
		return t;
	};
	return BuySuccessMessageSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ChooseTypeDetailScene.exml'] = window.ChooseTypeDetailScenenSkin = (function (_super) {
	__extends(ChooseTypeDetailScenenSkin, _super);
	function ChooseTypeDetailScenenSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Group2_i(),this._Image4_i()];
	}
	var _proto = ChooseTypeDetailScenenSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xb2edf7;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 130;
		t.source = "yb_detail_bottom1_png";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 22;
		t.height = 1122;
		t.horizontalCenter = 0;
		t.top = 63;
		t.width = 662;
		t.y = 189.9;
		t.elementsContent = [this._Rect2_i(),this._Image2_i(),this._Label1_i(),this._Scroller1_i(),this._Image3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe8fcfe;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeColor = 0x23bfd5;
		t.strokeWeight = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 322.4;
		t.horizontalCenter = 0;
		t.source = "yb_top_png";
		t.width = 612;
		t.y = 89;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Medium";
		t.height = 76;
		t.horizontalCenter = 0;
		t.lineSpacing = 24;
		t.text = "标题内容标题内容标题内容标题内容标题内容";
		t.textColor = 0x1d292b;
		t.width = 569;
		t.y = 445;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 500;
		t.width = 569;
		t.x = 41;
		t.y = 583;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Label2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.left = 0;
		t.lineSpacing = 30;
		t.text = "文案部分...";
		t.textColor = 0x1d292b;
		t.top = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_detail_top_png";
		t.width = 338;
		t.x = 162;
		t.y = -40.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 130;
		t.source = "yb_detail_bottom2_png";
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	return ChooseTypeDetailScenenSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ChooseTypeScene.exml'] = window.ChooseTypeSceneSkin = (function (_super) {
	__extends(ChooseTypeSceneSkin, _super);
	function ChooseTypeSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","slider_item0","slider_item1","slider_item2","slider_item3","slider_item4","slider_item5","slider","slider_btn1","slider_btn2","slider_btn3","slider_btn4","slider_btn","slider_wap","type_btn1"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.slider_wap_i(),this._Image1_i(),this._Scroller1_i()];
	}
	var _proto = ChooseTypeSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.slider_wap_i = function () {
		var t = new eui.Group();
		this.slider_wap = t;
		t.height = 280;
		t.scrollEnabled = true;
		t.top = 31;
		t.width = 690;
		t.x = 30;
		t.elementsContent = [this.slider_i(),this.slider_btn_i()];
		return t;
	};
	_proto.slider_i = function () {
		var t = new eui.Group();
		this.slider = t;
		t.percentHeight = 100;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.elementsContent = [this.slider_item0_i(),this.slider_item1_i(),this.slider_item2_i(),this.slider_item3_i(),this.slider_item4_i(),this.slider_item5_i()];
		return t;
	};
	_proto.slider_item0_i = function () {
		var t = new eui.Rect();
		this.slider_item0 = t;
		t.fillColor = 0xc5fc02;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = -690;
		t.y = 0;
		return t;
	};
	_proto.slider_item1_i = function () {
		var t = new eui.Rect();
		this.slider_item1 = t;
		t.fillColor = 0xff00a9;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.slider_item2_i = function () {
		var t = new eui.Rect();
		this.slider_item2 = t;
		t.fillColor = 0xff4100;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 690;
		t.y = 0;
		return t;
	};
	_proto.slider_item3_i = function () {
		var t = new eui.Rect();
		this.slider_item3 = t;
		t.fillColor = 0xffbf00;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 1380;
		t.y = 0;
		return t;
	};
	_proto.slider_item4_i = function () {
		var t = new eui.Rect();
		this.slider_item4 = t;
		t.fillColor = 0xc5fc02;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 2070;
		t.y = 0;
		return t;
	};
	_proto.slider_item5_i = function () {
		var t = new eui.Rect();
		this.slider_item5 = t;
		t.fillColor = 0xff00a9;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 2760;
		t.y = 0;
		return t;
	};
	_proto.slider_btn_i = function () {
		var t = new eui.Group();
		this.slider_btn = t;
		t.bottom = 23;
		t.height = 10;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.slider_btn1_i(),this.slider_btn2_i(),this.slider_btn3_i(),this.slider_btn4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.slider_btn1_i = function () {
		var t = new eui.Rect();
		this.slider_btn1 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 10;
		t.strokeColor = 0xffffff;
		t.width = 10;
		t.x = -12;
		t.y = -6;
		return t;
	};
	_proto.slider_btn2_i = function () {
		var t = new eui.Rect();
		this.slider_btn2 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x000000;
		t.height = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 10;
		t.x = -161;
		t.y = -112.00000000000003;
		return t;
	};
	_proto.slider_btn3_i = function () {
		var t = new eui.Rect();
		this.slider_btn3 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x000000;
		t.height = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 10;
		t.x = -310;
		t.y = -218.00000000000006;
		return t;
	};
	_proto.slider_btn4_i = function () {
		var t = new eui.Rect();
		this.slider_btn4 = t;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x000000;
		t.height = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 10;
		t.x = -310;
		t.y = -218.00000000000006;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 67;
		t.horizontalCenter = 0;
		t.source = "yb_text_png";
		t.top = 342;
		t.width = 670;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 31;
		t.height = 751.52;
		t.horizontalCenter = 0;
		t.top = 440;
		t.width = 682;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this.type_btn1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	_proto.type_btn1_i = function () {
		var t = new eui.Image();
		this.type_btn1 = t;
		t.height = 148;
		t.source = "yb_select1_png";
		t.width = 338;
		t.x = 56;
		t.y = 52;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select2_png";
		t.width = 338;
		t.x = 24;
		t.y = -502.05999999999995;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select3_png";
		t.width = 338;
		t.x = 24;
		t.y = -502.05999999999995;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select4_png";
		t.width = 338;
		t.x = -8;
		t.y = -1056.12;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select5_png";
		t.width = 338;
		t.x = 2;
		t.y = -1046.12;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select6_png";
		t.width = 338;
		t.x = 12.000000000000007;
		t.y = -1036.12;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select7_png";
		t.width = 338;
		t.x = 22;
		t.y = -1026.12;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select8_png";
		t.width = 338;
		t.x = -11.999999999999996;
		t.y = -1580.1799999999998;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select9_png";
		t.width = 338;
		t.x = 22;
		t.y = -502.05999999999995;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select10_png";
		t.width = 338;
		t.x = 32;
		t.y = -492.05999999999995;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select11_png";
		t.width = 338;
		t.x = 42;
		t.y = -482.05999999999995;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select12_png";
		t.width = 338;
		t.x = 52;
		t.y = -472.05999999999995;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 148;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_select13_png";
		t.width = 338;
		t.x = 18;
		t.y = -1026.12;
		return t;
	};
	return ChooseTypeSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ExchangeItem.exml'] = window.ExchangeItemSkin = (function (_super) {
	__extends(ExchangeItemSkin, _super);
	function ExchangeItemSkin() {
		_super.call(this);
		this.skinParts = ["bottom_board","exchange_btn"];
		
		this.height = 114;
		this.width = 670;
		this.elementsContent = [this.bottom_board_i(),this._Group1_i(),this._Group2_i(),this._Group3_i()];
	}
	var _proto = ExchangeItemSkin.prototype;

	_proto.bottom_board_i = function () {
		var t = new eui.Rect();
		this.bottom_board = t;
		t.bottom = 0;
		t.fillColor = 0xCFCFCF;
		t.height = 1;
		t.left = 52;
		t.right = 52;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 37;
		t.top = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 64;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopping_key_png";
		t.verticalCenter = 0;
		t.width = 64;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 200;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 54;
		t.left = 0;
		t.source = "jb_png";
		t.verticalCenter = 0;
		t.width = 55;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Medium";
		t.left = 80;
		t.text = "1,000";
		t.textColor = 0xF64414;
		t.y = 40;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 71;
		t.right = 37;
		t.verticalCenter = 0;
		t.width = 182;
		t.elementsContent = [this._Image3_i(),this.exchange_btn_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "buy_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.y = 0;
		return t;
	};
	_proto.exchange_btn_i = function () {
		var t = new eui.Label();
		this.exchange_btn = t;
		t.percentHeight = 94;
		t.left = 0;
		t.text = "兑换";
		t.textAlign = "center";
		t.textColor = 0xf64414;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return ExchangeItemSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ExchangeSuccesMessage.exml'] = window.ExchangeSuccesMessageSkin = (function (_super) {
	__extends(ExchangeSuccesMessageSkin, _super);
	function ExchangeSuccesMessageSkin() {
		_super.call(this);
		this.skinParts = ["bg","close_btn","bottom_btns","messagebox"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.messagebox_i()];
	}
	var _proto = ExchangeSuccesMessageSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 1;
		t.fillAlpha = 0.6;
		t.fillColor = 0x2B2727;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Group();
		this.messagebox = t;
		t.alpha = 1;
		t.height = 526;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 586;
		t.x = 82;
		t.y = 404;
		t.elementsContent = [this.bg_i(),this._Label1_i(),this._Label2_i(),this._Image1_i(),this.bottom_btns_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 192;
		t.fontFamily = "PingFangSC-Medium";
		t.horizontalCenter = 0;
		t.text = "成功兑换...";
		t.textColor = 0x1D292B;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.border = false;
		t.fontFamily = "ZhenyanGB-Regular";
		t.size = 44;
		t.stroke = 1;
		t.strokeColor = 0x454F5B;
		t.text = "兑换成功";
		t.textColor = 0x454F5B;
		t.x = 212;
		t.y = 135;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 157;
		t.horizontalCenter = 0;
		t.source = "buy_top_png";
		t.top = -78.5;
		t.width = 243;
		return t;
	};
	_proto.bottom_btns_i = function () {
		var t = new eui.Group();
		this.bottom_btns = t;
		t.bottom = 49;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 482;
		t.elementsContent = [this.close_btn_i()];
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Group();
		this.close_btn = t;
		t.bottom = 0;
		t.height = 70;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.strokeColor = 0x23BFD5;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "学到了";
		t.verticalCenter = 0;
		return t;
	};
	return ExchangeSuccesMessageSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/GameScene.exml'] = window.GameSceneSkin = (function (_super) {
	__extends(GameSceneSkin, _super);
	function GameSceneSkin() {
		_super.call(this);
		this.skinParts = ["question_type","question_index","question_box","time_progress","timeout","usekey_btn","question_rule","radio_box1","answer_1","radio_box2","answer_2","radio_box3","answer_3","radio_box4","answer_4","question_answer","game_window","transtions"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.game_window_i(),this._Image14_i(),this._Label8_i(),this.transtions_i()];
	}
	var _proto = GameSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf0fdff;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 1197;
		t.horizontalCenter = 0;
		t.source = "game_bg1_png";
		t.top = 30;
		t.width = 733;
		return t;
	};
	_proto.game_window_i = function () {
		var t = new eui.Group();
		this.game_window = t;
		t.height = 1284;
		t.width = 659;
		t.x = 46;
		t.y = 50;
		t.elementsContent = [this._Rect2_i(),this._Group15_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.left = -3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.question_type_i(),this.question_box_i(),this.question_rule_i(),this.question_answer_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 30;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto.question_type_i = function () {
		var t = new eui.Label();
		this.question_type = t;
		t.fontFamily = "Adobe Heiti Std R";
		t.height = 50;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.text = "—— 单选题 ——";
		t.textColor = 0x23bfd5;
		t.top = 29;
		t.verticalAlign = "bottom";
		t.x = 232;
		return t;
	};
	_proto.question_box_i = function () {
		var t = new eui.Group();
		this.question_box = t;
		t.percentHeight = 26;
		t.horizontalCenter = 0;
		t.top = 93;
		t.width = 584;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this._Group4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "question_box_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.left = 23;
		t.right = 23;
		t.size = 34;
		t.text = "孤独症酒精病高发人群为________";
		t.textColor = 0x1d292b;
		t.percentWidth = 100;
		t.y = 43;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.bottom = 20;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 540;
		t.x = 24;
		t.elementsContent = [this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 200;
		t.x = -24;
		t.y = -264;
		t.elementsContent = [this.question_index_i()];
		return t;
	};
	_proto.question_index_i = function () {
		var t = new eui.Label();
		this.question_index = t;
		t.fontFamily = "Arial-Black";
		t.percentHeight = 100;
		t.left = 0;
		t.size = 26;
		t.text = "1/6";
		t.textAlign = "center";
		t.textColor = 0x1D292B;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.width = 200;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Rect3_i(),this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.percentHeight = 100;
		t.top = 0;
		t.visible = false;
		t.width = 40;
		t.x = 29;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.source = "ax_png";
		t.width = 40;
		t.x = 112;
		t.y = -4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.fontFamily = "Arial-Black";
		t.percentHeight = 100;
		t.right = 0;
		t.size = 26;
		t.text = "+5";
		t.textAlign = "center";
		t.textColor = 0x1d292b;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 49.24;
		return t;
	};
	_proto.question_rule_i = function () {
		var t = new eui.Group();
		this.question_rule = t;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.top = 457.2;
		t.width = 584;
		t.elementsContent = [this._Group5_i(),this._Group6_i()];
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 50;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.time_progress_i(),this._Image4_i(),this.timeout_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.time_progress_i = function () {
		var t = new eui.Group();
		this.time_progress = t;
		t.anchorOffsetX = 0;
		t.height = 26;
		t.left = 65;
		t.verticalCenter = 0;
		t.width = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Rect4_i(),this._Rect5_i(),this._Rect6_i(),this._Rect7_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 3;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xcbf0f5;
		t.percentHeight = 100;
		t.name = "time_progress_item";
		t.strokeColor = 0x000000;
		t.width = 37;
		t.x = -1;
		t.y = 13;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xcbf0f5;
		t.percentHeight = 100;
		t.name = "time_progress_item";
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0x000000;
		t.width = 37;
		t.x = -52;
		t.y = -3;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xcbf0f5;
		t.percentHeight = 100;
		t.name = "time_progress_item";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 37;
		t.x = -113;
		t.y = -19;
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xcbf0f5;
		t.percentHeight = 100;
		t.name = "time_progress_item";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 37;
		t.x = -113;
		t.y = -19;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 75;
		t.left = 0;
		t.source = "game_time_png";
		t.top = 0;
		t.width = 70;
		return t;
	};
	_proto.timeout_i = function () {
		var t = new eui.Label();
		this.timeout = t;
		t.fontFamily = "Arial-Black";
		t.left = 230;
		t.size = 26;
		t.text = "12S";
		t.textColor = 0x1d292b;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.percentWidth = 50;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this._Image5_i(),this.usekey_btn_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "right";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 47;
		t.source = "key_png";
		t.width = 49;
		t.x = 24;
		t.y = 33;
		return t;
	};
	_proto.usekey_btn_i = function () {
		var t = new eui.Group();
		this.usekey_btn = t;
		t.height = 50;
		t.width = 190;
		t.x = 112;
		t.y = 19;
		t.elementsContent = [this._Rect8_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 48;
		t.ellipseWidth = 48;
		t.fillColor = 0x23bfd5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "0/1 使用钥匙";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto.question_answer_i = function () {
		var t = new eui.Group();
		this.question_answer = t;
		t.height = 480;
		t.horizontalCenter = 0;
		t.top = 565;
		t.width = 580;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.answer_1_i(),this.answer_2_i(),this.answer_3_i(),this.answer_4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 12;
		return t;
	};
	_proto.answer_1_i = function () {
		var t = new eui.Group();
		this.answer_1 = t;
		t.height = 98;
		t.percentWidth = 100;
		t.x = 2;
		t.y = -12;
		t.elementsContent = [this._Rect9_i(),this._Group8_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xeddeff;
		t.height = 1;
		t.left = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect10_i(),this._Group7_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xdbf8ea;
		t.height = 98;
		t.left = 0;
		t.name = "question_bg";
		t.top = -2;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.y = 0;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this.radio_box1_i(),this._Label4_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "left";
		t.paddingLeft = 20;
		t.paddingRight = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.radio_box1_i = function () {
		var t = new eui.Group();
		this.radio_box1 = t;
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 34;
		t.x = 361;
		t.y = 0;
		t.elementsContent = [this._Rect11_i(),this._Rect12_i(),this._Rect13_i()];
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x23bfd5;
		t.percentHeight = 100;
		t.left = 0;
		t.name = "radio_box";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 36;
		t.ellipseWidth = 36;
		t.fillColor = 0xffffff;
		t.percentHeight = 70;
		t.percentWidth = 70;
		t.x = 5;
		t.y = 4.5;
		return t;
	};
	_proto._Rect13_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.ellipseHeight = 36;
		t.ellipseWidth = 36;
		t.fillColor = 0x23bfd5;
		t.percentHeight = 50;
		t.name = "radio_checked";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.percentWidth = 50;
		t.x = 8.5;
		t.y = 8;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 35;
		t.text = "老年痴呆躯体";
		t.textColor = 0x1d292b;
		t.verticalAlign = "bottom";
		t.x = 153;
		t.y = 37;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 39.9;
		t.name = "right_icon";
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "answer_right_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 43.2;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 44;
		t.name = "error_icon";
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "answer_error_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 40;
		t.x = 0;
		t.y = 110.00000000000011;
		return t;
	};
	_proto.answer_2_i = function () {
		var t = new eui.Group();
		this.answer_2 = t;
		t.height = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = -37.99999999999999;
		t.y = -577;
		t.elementsContent = [this._Rect14_i(),this._Group10_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Rect14_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xEDDEFF;
		t.height = 1;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 120.00000000000011;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 120.00000000000011;
		t.elementsContent = [this._Rect15_i(),this._Group9_i()];
		return t;
	};
	_proto._Rect15_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xffcdcc;
		t.height = 98;
		t.left = 0;
		t.name = "question_bg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this.radio_box2_i(),this._Label5_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "left";
		t.paddingLeft = 20;
		t.paddingRight = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.radio_box2_i = function () {
		var t = new eui.Group();
		this.radio_box2 = t;
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 34;
		t.x = 291;
		t.y = 32;
		t.elementsContent = [this._Rect16_i(),this._Rect17_i(),this._Rect18_i()];
		return t;
	};
	_proto._Rect16_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.left = 0;
		t.name = "radio_box";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect17_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 36;
		t.ellipseWidth = 36;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 70;
		t.percentWidth = 70;
		t.x = 5;
		t.y = 4.5;
		return t;
	};
	_proto._Rect18_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.ellipseHeight = 36;
		t.ellipseWidth = 36;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 50;
		t.name = "radio_checked";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.percentWidth = 50;
		t.x = 8.5;
		t.y = 8;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 35;
		t.text = "老年痴呆躯体";
		t.textColor = 0x1D292B;
		t.verticalAlign = "bottom";
		t.x = 153;
		t.y = 37;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 39.9;
		t.name = "right_icon";
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "answer_right_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 43.2;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 44;
		t.name = "error_icon";
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "answer_error_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 40;
		t.x = 0;
		t.y = 110.00000000000011;
		return t;
	};
	_proto.answer_3_i = function () {
		var t = new eui.Group();
		this.answer_3 = t;
		t.height = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = -28;
		t.y = -567;
		t.elementsContent = [this._Rect19_i(),this._Group12_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Rect19_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xEDDEFF;
		t.height = 1;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 120.00000000000011;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 120.00000000000011;
		t.elementsContent = [this._Rect20_i(),this._Group11_i()];
		return t;
	};
	_proto._Rect20_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xffcdcc;
		t.height = 98;
		t.left = 0;
		t.name = "question_bg";
		t.strokeAlpha = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this.radio_box3_i(),this._Label6_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "left";
		t.paddingLeft = 20;
		t.paddingRight = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.radio_box3_i = function () {
		var t = new eui.Group();
		this.radio_box3 = t;
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 34;
		t.x = 291;
		t.y = 32;
		t.elementsContent = [this._Rect21_i(),this._Rect22_i(),this._Rect23_i()];
		return t;
	};
	_proto._Rect21_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.left = 0;
		t.name = "radio_box";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect22_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 36;
		t.ellipseWidth = 36;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 70;
		t.percentWidth = 70;
		t.x = 5;
		t.y = 4.5;
		return t;
	};
	_proto._Rect23_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.ellipseHeight = 36;
		t.ellipseWidth = 36;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 50;
		t.name = "radio_checked";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.percentWidth = 50;
		t.x = 8.5;
		t.y = 8;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.height = 35;
		t.text = "老年痴呆躯体";
		t.textColor = 0x1D292B;
		t.verticalAlign = "bottom";
		t.x = 153;
		t.y = 37;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 39.9;
		t.name = "right_icon";
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "answer_right_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 43.2;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 44;
		t.name = "error_icon";
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "answer_error_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 40;
		t.x = 0;
		t.y = 110.00000000000011;
		return t;
	};
	_proto.answer_4_i = function () {
		var t = new eui.Group();
		this.answer_4 = t;
		t.height = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = -18;
		t.y = -557;
		t.elementsContent = [this._Rect24_i(),this._Group14_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Rect24_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xEDDEFF;
		t.height = 1;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 119.99999999999977;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 119.99999999999977;
		t.elementsContent = [this._Rect25_i(),this._Group13_i()];
		return t;
	};
	_proto._Rect25_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xffcdcc;
		t.height = 98;
		t.left = 0;
		t.name = "question_bg";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.height = 98;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout7_i();
		t.elementsContent = [this.radio_box4_i(),this._Label7_i()];
		return t;
	};
	_proto._HorizontalLayout7_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 15;
		t.horizontalAlign = "left";
		t.paddingLeft = 20;
		t.paddingRight = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.radio_box4_i = function () {
		var t = new eui.Group();
		this.radio_box4 = t;
		t.height = 34;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 34;
		t.x = 291;
		t.y = 32;
		t.elementsContent = [this._Rect26_i(),this._Rect27_i(),this._Rect28_i()];
		return t;
	};
	_proto._Rect26_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.left = 0;
		t.name = "radio_box";
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect27_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 36;
		t.ellipseWidth = 36;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 70;
		t.percentWidth = 70;
		t.x = 5;
		t.y = 4.5;
		return t;
	};
	_proto._Rect28_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.ellipseHeight = 36;
		t.ellipseWidth = 36;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 50;
		t.name = "radio_checked";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = true;
		t.percentWidth = 50;
		t.x = 8.5;
		t.y = 8;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.height = 35;
		t.text = "老年痴呆躯体";
		t.textColor = 0x1D292B;
		t.verticalAlign = "bottom";
		t.x = 153;
		t.y = 37;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 39.9;
		t.name = "right_icon";
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "answer_right_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 43.2;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 44;
		t.name = "error_icon";
		t.right = 15;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "answer_error_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 40;
		t.x = 0;
		t.y = 110.00000000000011;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.height = 133;
		t.right = 0;
		t.source = "game_bg2_png";
		t.width = 147;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bottom = 30;
		t.fontFamily = "PingFang-SC-Medium";
		t.horizontalCenter = 0;
		t.text = "精神卫生知识";
		t.textColor = 0xff514e;
		return t;
	};
	_proto.transtions_i = function () {
		var t = new eui.Label();
		this.transtions = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "Label";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return GameSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/LevelUpMessageBox.exml'] = window.LevelUpMessageBoxSkin = (function (_super) {
	__extends(LevelUpMessageBoxSkin, _super);
	function LevelUpMessageBoxSkin() {
		_super.call(this);
		this.skinParts = ["bg","levelup_before_text","leveup_before","levelup_before_text0","levelup_aflter","levelup_detail","close_btn","messagebox"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.messagebox_i()];
	}
	var _proto = LevelUpMessageBoxSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x2B2727;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Group();
		this.messagebox = t;
		t.alpha = 1;
		t.height = 526;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 586;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Label1_i(),this.levelup_detail_i(),this.close_btn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 212;
		t.horizontalCenter = 0;
		t.source = "levelup_png";
		t.width = 296;
		t.y = -89;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "ZhenyanGB-Regular";
		t.horizontalCenter = 0;
		t.size = 44;
		t.strokeColor = 0x454f5b;
		t.text = "恭喜您 升级啦";
		t.textColor = 0x454f5b;
		t.y = 141;
		return t;
	};
	_proto.levelup_detail_i = function () {
		var t = new eui.Group();
		this.levelup_detail = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132;
		t.width = 384;
		t.x = 106;
		t.y = 232;
		t.elementsContent = [this.leveup_before_i(),this._Rect2_i(),this.levelup_aflter_i(),this._Image2_i()];
		return t;
	};
	_proto.leveup_before_i = function () {
		var t = new eui.Group();
		this.leveup_before = t;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 40;
		t.elementsContent = [this.levelup_before_text_i()];
		return t;
	};
	_proto.levelup_before_text_i = function () {
		var t = new eui.Group();
		this.levelup_before_text = t;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "护士";
		t.textColor = 0x1d292b;
		t.verticalCenter = -20;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "Lv4";
		t.textColor = 0x1d292b;
		t.verticalCenter = 20;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.height = 20;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 20;
		return t;
	};
	_proto.levelup_aflter_i = function () {
		var t = new eui.Group();
		this.levelup_aflter = t;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 40;
		t.elementsContent = [this.levelup_before_text0_i()];
		return t;
	};
	_proto.levelup_before_text0_i = function () {
		var t = new eui.Group();
		this.levelup_before_text0 = t;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = -230;
		t.y = 0;
		t.elementsContent = [this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "护士长";
		t.textColor = 0x23bfd5;
		t.verticalCenter = -20;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 30;
		t.text = "Lv5";
		t.textColor = 0x23bfd5;
		t.verticalCenter = 20;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 30;
		t.horizontalCenter = 0;
		t.source = "arrow_png";
		t.width = 37;
		t.y = 31;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Group();
		this.close_btn = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 382;
		t.y = 402;
		t.elementsContent = [this._Rect3_i(),this._Label6_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.strokeColor = 0x23BFD5;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "再接再厉";
		t.verticalCenter = 0;
		return t;
	};
	return LevelUpMessageBoxSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/Loading.exml'] = window.LoadingSkin = (function (_super) {
	__extends(LoadingSkin, _super);
	function LoadingSkin() {
		_super.call(this);
		this.skinParts = ["progress","loading_text"];
		
		this.height = 1334;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.progress_i(),this.loading_text_i()];
	}
	var _proto = LoadingSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x4d9fde;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 726;
		t.horizontalCenter = 0;
		t.source = "logo_png";
		t.width = 749;
		t.y = 1;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.ProgressBar();
		this.progress = t;
		t.height = 8;
		t.horizontalCenter = 0;
		t.minimum = 0;
		t.skinName = "skins.ProgressBarSkin";
		t.value = 0;
		t.width = 420;
		t.y = 756;
		return t;
	};
	_proto.loading_text_i = function () {
		var t = new eui.Label();
		this.loading_text = t;
		t.fontFamily = "Adobe Heiti Std R";
		t.horizontalCenter = 0;
		t.text = "小游戏加载中...";
		t.y = 805;
		return t;
	};
	return LoadingSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/LoginInMessageBox.exml'] = window.LoginInMessageBoxSkin = (function (_super) {
	__extends(LoginInMessageBoxSkin, _super);
	function LoginInMessageBoxSkin() {
		_super.call(this);
		this.skinParts = ["bg","close_btn","messagebox"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.messagebox_i()];
	}
	var _proto = LoginInMessageBoxSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x2b2727;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Group();
		this.messagebox = t;
		t.alpha = 1;
		t.height = 526;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 586;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this.close_btn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 288;
		t.horizontalCenter = 0;
		t.source = "login_png";
		t.width = 431;
		t.y = -187;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 200;
		t.horizontalCenter = 0;
		t.source = "reward_png";
		t.width = 200;
		t.y = 106;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "+10";
		t.textColor = 0x454f5b;
		t.y = 321;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Group();
		this.close_btn = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 382;
		t.y = 402;
		t.elementsContent = [this._Rect2_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0x23bfd5;
		t.percentHeight = 100;
		t.strokeColor = 0x23bfd5;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "收下了";
		t.verticalCenter = 0;
		return t;
	};
	return LoginInMessageBoxSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/NoKeyMessageBox.exml'] = window.NoKeyMessageBoxSkin = (function (_super) {
	__extends(NoKeyMessageBoxSkin, _super);
	function NoKeyMessageBoxSkin() {
		_super.call(this);
		this.skinParts = ["bg","close_btn","bottom_btns","messagebox"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.messagebox_i()];
	}
	var _proto = NoKeyMessageBoxSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x2B2727;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Group();
		this.messagebox = t;
		t.alpha = 1;
		t.height = 477;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 586;
		t.x = 82;
		t.y = 429;
		t.elementsContent = [this.bg_i(),this._Label1_i(),this._Label2_i(),this.bottom_btns_i(),this._Image3_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "ZhenyanGB-Regular";
		t.size = 44;
		t.text = "钥匙0把";
		t.textColor = 0x454f5b;
		t.x = 223;
		t.y = 141;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Medium";
		t.horizontalCenter = 0;
		t.text = "您没有钥匙，不能使用哦";
		t.textColor = 0x1d292b;
		t.y = 240;
		return t;
	};
	_proto.bottom_btns_i = function () {
		var t = new eui.Group();
		this.bottom_btns = t;
		t.bottom = 49;
		t.height = 81;
		t.horizontalCenter = 0;
		t.percentWidth = 90;
		t.elementsContent = [this.close_btn_i(),this._Group1_i()];
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Group();
		this.close_btn = t;
		t.bottom = 0;
		t.height = 81;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 253;
		t.elementsContent = [this._Image1_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "btn_bg3_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "努力靠自己";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 81;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 253;
		t.y = 52;
		t.elementsContent = [this._Image2_i(),this._Label4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_bg4_png";
		t.top = 0;
		t.percentWidth = 100;
		t.x = -274;
		t.y = -10.999999999999886;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "买钥匙";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 132;
		t.horizontalCenter = 0;
		t.source = "nokey_top_png";
		t.width = 132;
		t.y = -57;
		return t;
	};
	return NoKeyMessageBoxSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/PkResultScene.exml'] = window.PkResultSceneSkin = (function (_super) {
	__extends(PkResultSceneSkin, _super);
	function PkResultSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","left_user","right_user"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this._Group1_i(),this.left_user_i(),this.right_user_i(),this._Group10_i(),this._Group13_i()];
	}
	var _proto = PkResultSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 278;
		t.horizontalCenter = 0;
		t.width = 533;
		t.y = 136;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pk_result1_png";
		t.top = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "pk_result2_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "pk_result3_png";
		t.top = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	_proto.left_user_i = function () {
		var t = new eui.Group();
		this.left_user = t;
		t.anchorOffsetX = 0;
		t.height = 108;
		t.left = 95;
		t.y = 461;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group2_i(),this._Group4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "justify";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.left = 0;
		t.top = 0;
		t.width = 108;
		t.elementsContent = [this._Rect1_i(),this._Image4_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "who_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 108;
		t.top = 0;
		t.width = 188;
		t.x = 108.02;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group3_i(),this._Label2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "bottom";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 37;
		t.y = -36;
		t.elementsContent = [this._Image5_i(),this._Label1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.left = 0;
		t.source = "pk_user_bg1_left_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.height = 50;
		t.left = 15;
		t.size = 36;
		t.text = "55积分";
		t.textAlign = "left";
		t.top = -1;
		t.verticalAlign = "middle";
		t.width = 160;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 9;
		t.size = 26;
		t.text = "快乐的小猪";
		t.textAlign = "left";
		t.textColor = 0x1d292b;
		t.percentWidth = 90;
		return t;
	};
	_proto.right_user_i = function () {
		var t = new eui.Group();
		this.right_user = t;
		t.anchorOffsetX = 0;
		t.height = 108;
		t.right = 95;
		t.width = 261;
		t.y = 491;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group6_i(),this._Group7_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "contentJustify";
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.top = 0;
		t.width = 160;
		t.x = 108.02;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Group5_i(),this._Label4_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "bottom";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 50;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 160;
		t.x = 37;
		t.y = -36;
		t.elementsContent = [this._Image6_i(),this._Label3_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.left = 0;
		t.source = "pk_user_bg1_right_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.height = 50;
		t.left = 0;
		t.right = 15;
		t.size = 36;
		t.text = "55积分";
		t.textAlign = "right";
		t.top = -1;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.left = 0;
		t.size = 26;
		t.text = "蜗牛";
		t.textAlign = "right";
		t.textColor = 0x1D292B;
		t.percentWidth = 90;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 108;
		t.left = 0;
		t.top = 0;
		t.width = 108;
		t.elementsContent = [this._Rect2_i(),this._Image7_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.horizontalCenter = 0;
		t.source = "who_png";
		t.verticalCenter = 0;
		t.width = 100;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.height = 333.3;
		t.horizontalCenter = 0;
		t.width = 607;
		t.y = 632;
		t.elementsContent = [this._Rect3_i(),this._Label5_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xe8fcfe;
		t.left = 0;
		t.strokeColor = 0x23bfd5;
		t.strokeWeight = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Medium";
		t.horizontalCenter = 0;
		t.text = "—— 获得奖励如下 ——";
		t.textColor = 0x1d292b;
		t.y = 39;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 111.03;
		t.left = 135;
		t.width = 126;
		t.y = 123;
		t.layout = this._VerticalLayout3_i();
		t.elementsContent = [this._Image8_i(),this._Label6_i()];
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 64.2;
		t.horizontalCenter = 0;
		t.source = "ax_png";
		t.top = 0;
		t.width = 68.4;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial-Black";
		t.text = "+10";
		t.textColor = 0x454F5B;
		t.x = 14;
		t.y = 108;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 111.03;
		t.right = 135;
		t.width = 126;
		t.y = 123;
		t.layout = this._VerticalLayout4_i();
		t.elementsContent = [this._Image9_i(),this._Label7_i()];
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 64.2;
		t.horizontalCenter = 0;
		t.source = "jb_png";
		t.top = 0;
		t.width = 68.4;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial-Black";
		t.text = "+10,000";
		t.textColor = 0x454f5b;
		t.x = 14;
		t.y = 108;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70;
		t.horizontalCenter = 0;
		t.width = 574;
		t.y = 1104;
		t.elementsContent = [this._Group11_i(),this._Group12_i()];
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 262;
		t.elementsContent = [this._Image10_i(),this._Label8_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "btn_bg2_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.percentHeight = 50;
		t.horizontalCenter = 0;
		t.text = "返回大厅";
		t.textAlign = "center";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.height = 70;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 262;
		t.elementsContent = [this._Image11_i(),this._Label9_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "btn_bg2_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.percentHeight = 50;
		t.horizontalCenter = 0;
		t.text = "继续挑战";
		t.textAlign = "center";
		t.verticalAlign = "bottom";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return PkResultSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/PkScene.exml'] = window.PkSceneSkin = (function (_super) {
	__extends(PkSceneSkin, _super);
	function PkSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","warp","pk_btn","share_btn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this.warp_i(),this._Group3_i()];
	}
	var _proto = PkSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 132;
		t.horizontalCenter = 0;
		t.source = "pk_top_png";
		t.top = 91;
		t.width = 279;
		return t;
	};
	_proto.warp_i = function () {
		var t = new eui.Group();
		this.warp = t;
		t.height = 210;
		t.horizontalCenter = 0;
		t.top = 361;
		t.width = 614;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Image4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 160;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 160;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "who_png";
		t.top = 0;
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "快乐的小猪";
		t.x = -158;
		t.y = -124;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 210;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 160;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 160;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "who_png";
		t.top = 0;
		t.width = 160;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "WHO";
		t.x = -158;
		t.y = -124;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 125;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "vs_png";
		t.verticalCenter = 0;
		t.width = 243;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 230.66;
		t.horizontalCenter = 0;
		t.top = 824;
		t.width = 439;
		t.elementsContent = [this.pk_btn_i(),this.share_btn_i()];
		return t;
	};
	_proto.pk_btn_i = function () {
		var t = new eui.Group();
		this.pk_btn = t;
		t.height = 101;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "btn_bg1_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "在线匹配对战";
		t.verticalCenter = 0;
		return t;
	};
	_proto.share_btn_i = function () {
		var t = new eui.Group();
		this.share_btn = t;
		t.bottom = 0;
		t.height = 101;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = -156;
		t.elementsContent = [this._Image6_i(),this._Label4_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "btn_bg2_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "在线匹配对战";
		t.verticalCenter = 0;
		return t;
	};
	return PkSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/PkWaitMessageBox.exml'] = window.PkWaitMessageBoxSkin = (function (_super) {
	__extends(PkWaitMessageBoxSkin, _super);
	function PkWaitMessageBoxSkin() {
		_super.call(this);
		this.skinParts = ["bg","gamer1","gamer2","ready_mask","close_btn","messagebox"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.messagebox_i()];
	}
	var _proto = PkWaitMessageBoxSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x2B2727;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Group();
		this.messagebox = t;
		t.alpha = 0;
		t.height = 672;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 0;
		t.width = 666;
		t.elementsContent = [this.bg_i(),this.gamer1_i(),this._Image2_i(),this.gamer2_i(),this.ready_mask_i(),this._Image4_i(),this._Label4_i(),this._Label5_i(),this.close_btn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gamer1_i = function () {
		var t = new eui.Group();
		this.gamer1 = t;
		t.height = 210;
		t.width = 160;
		t.x = 73;
		t.y = 157;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 160;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "who_png";
		t.top = 0;
		t.width = 160;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "快乐的小猪";
		t.textColor = 0x1d292b;
		t.x = -158;
		t.y = -124;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.horizontalCenter = 0;
		t.source = "vs_png";
		t.width = 180.79;
		t.y = 200;
		return t;
	};
	_proto.gamer2_i = function () {
		var t = new eui.Group();
		this.gamer2 = t;
		t.height = 210;
		t.width = 160;
		t.x = 433;
		t.y = 157;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 160;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "who_png";
		t.top = 0;
		t.width = 160;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "快乐的小猪";
		t.textColor = 0x1D292B;
		t.x = -158;
		t.y = -124;
		return t;
	};
	_proto.ready_mask_i = function () {
		var t = new eui.Group();
		this.ready_mask = t;
		t.height = 160;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 160;
		t.x = 433;
		t.y = 157;
		t.elementsContent = [this._Rect2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.horizontalCenter = 0;
		t.text = "未就绪";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 81;
		t.horizontalCenter = 0;
		t.source = "match_top_png";
		t.width = 338;
		t.y = 20;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.horizontalCenter = 0;
		t.text = "一大波儿对手正在赶来...";
		t.textColor = 0x1d292b;
		t.y = 421;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Medium";
		t.text = "已等待中：12秒";
		t.textColor = 0x23bfd5;
		t.x = 223;
		t.y = 479;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Group();
		this.close_btn = t;
		t.bottom = 71;
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 382;
		t.elementsContent = [this._Image5_i(),this._Label6_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "btn_bg2_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "取消";
		t.verticalCenter = 0;
		return t;
	};
	return PkWaitMessageBoxSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/RankingItem.exml'] = window.RankingItemSkin = (function (_super) {
	__extends(RankingItemSkin, _super);
	function RankingItemSkin() {
		_super.call(this);
		this.skinParts = ["mask_img","pass","nopass","item_mask"];
		
		this.height = 165;
		this.width = 650;
		this.elementsContent = [this._Image1_i(),this._Group4_i(),this._Group7_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.index"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ['第',"hostComponent.data.index", '关'],[1],this._Label2,"text");
	}
	var _proto = RankingItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "ranking_item_bg_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 153;
		t.left = 0;
		t.verticalCenter = 0;
		t.width = 545;
		t.elementsContent = [this._Rect1_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = -345;
		t.y = 9;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._Group2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		t.horizontalAlign = "left";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "Arial-Black";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 48;
		t.textAlign = "right";
		t.textColor = 0x23bfd5;
		t.verticalCenter = 0;
		t.width = 80;
		t.x = 270;
		t.y = 53;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 50;
		t.verticalCenter = 0;
		t.width = 264;
		t.x = 109;
		t.elementsContent = [this._Label2_i(),this._Group1_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.fontFamily = "ZhenyanGB-Regular";
		t.left = 0;
		t.size = 44;
		t.textColor = 0x1d292b;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 13;
		t.width = 264;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xcce9f0;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = -59;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x23bfd5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 50;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 200;
		t.elementsContent = [this._Rect4_i(),this._Group5_i(),this.item_mask_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x23bfd5;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 1;
		t.strokeColor = 0x000000;
		t.strokeWeight = 5;
		t.top = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Image2_i(),this._Label3_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 55;
		t.source = "jb_png";
		t.width = 55;
		t.x = 76;
		t.y = 54;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "                                 Arial-Black                             ";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "10/次";
		t.x = 97;
		t.y = 122;
		return t;
	};
	_proto.item_mask_i = function () {
		var t = new eui.Group();
		this.item_mask = t;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 170;
		t.elementsContent = [this.mask_img_i(),this._Group6_i()];
		return t;
	};
	_proto.mask_img_i = function () {
		var t = new eui.Image();
		this.mask_img = t;
		t.anchorOffsetX = -3.31;
		t.anchorOffsetY = 2.93;
		t.height = 145;
		t.left = -13;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "6b_mask_png";
		t.top = 10;
		t.width = 167.98;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.height = 145;
		t.width = 167.98;
		t.x = -13.31;
		t.y = 9.93;
		t.elementsContent = [this.pass_i(),this.nopass_i()];
		return t;
	};
	_proto.pass_i = function () {
		var t = new eui.Image();
		this.pass = t;
		t.height = 56.5;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pass_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 61.8;
		t.x = 70.31;
		t.y = 41.07;
		return t;
	};
	_proto.nopass_i = function () {
		var t = new eui.Image();
		this.nopass = t;
		t.height = 73;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "nopass_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 56;
		return t;
	};
	return RankingItemSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/RankingListScene.exml'] = window.RankingListSceneSkin = (function (_super) {
	__extends(RankingListSceneSkin, _super);
	function RankingListSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","ranking_view"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this._Group2_i()];
	}
	var _proto = RankingListSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 265;
		t.left = 0;
		t.source = "ranking_top_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 200;
		t.width = 650;
		t.elementsContent = [this.ranking_view_i()];
		return t;
	};
	_proto.ranking_view_i = function () {
		var t = new eui.Scroller();
		this.ranking_view = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 650;
		t.x = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	return RankingListSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/RankingResultScene.exml'] = window.RankingResultSceneSkin = (function (_super) {
	__extends(RankingResultSceneSkin, _super);
	function RankingResultSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","prize_view","back_btn","play_btn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this._Group15_i()];
	}
	var _proto = RankingResultSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		t.height = 812;
		t.horizontalCenter = 0;
		t.width = 662;
		t.y = 267;
		t.elementsContent = [this._Rect1_i(),this._Group14_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.left = -3;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.prize_view_i(),this._Group12_i(),this._Group13_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 381;
		t.horizontalCenter = 0;
		t.source = "ranking_s_png";
		t.width = 537;
		t.y = -224.9;
		return t;
	};
	_proto.prize_view_i = function () {
		var t = new eui.Group();
		this.prize_view = t;
		t.anchorOffsetY = 0;
		t.height = 145.45;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 80;
		t.x = -184;
		t.y = 133.00000000000006;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 50;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 84;
		t.source = "ax_png";
		t.width = 80;
		t.x = 96;
		t.y = 31;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.bottom = 0;
		t.fontFamily = "Arial-Black";
		t.left = 0;
		t.text = "+10";
		t.textColor = 0x454f5b;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.percentWidth = 50;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 84;
		t.source = "jb_png";
		t.width = 85;
		t.x = 146;
		t.y = 74;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.fontFamily = "Arial-Black";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "+10,000";
		t.textColor = 0x454f5b;
		t.x = -165;
		t.y = 170;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 336.36;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 310.73;
		t.elementsContent = [this._Label3_i(),this._Group11_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Medium";
		t.horizontalCenter = 0;
		t.text = "—— 积分获取详情 ——";
		t.textColor = 0x1d292b;
		t.y = 25.91;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0.36000000000001364;
		t.height = 242.42;
		t.left = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout9_i();
		t.elementsContent = [this._Group6_i(),this._Group10_i()];
		return t;
	};
	_proto._VerticalLayout9_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 12.999999999999993;
		t.y = -24.84999999999991;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 33.3;
		t.x = -12.999999999999993;
		t.y = 24.84999999999991;
		t.layout = this._VerticalLayout3_i();
		t.elementsContent = [this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Semibold";
		t.size = 36;
		t.text = "+5";
		t.textColor = 0x1d292b;
		t.x = 69;
		t.y = 14;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.size = 26;
		t.text = "第一题";
		t.textColor = 0x1d292b;
		t.x = 67;
		t.y = 64;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 33.3;
		t.x = 98;
		t.y = 24.84999999999991;
		t.layout = this._VerticalLayout4_i();
		t.elementsContent = [this._Label6_i(),this._Label7_i()];
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Semibold";
		t.size = 36;
		t.text = "+5";
		t.textColor = 0x1D292B;
		t.x = 69;
		t.y = 14;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.size = 26;
		t.text = "第二题";
		t.textColor = 0x1D292B;
		t.x = 67;
		t.y = 64;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 33.3;
		t.x = 210;
		t.y = 24.84999999999991;
		t.layout = this._VerticalLayout5_i();
		t.elementsContent = [this._Label8_i(),this._Label9_i()];
		return t;
	};
	_proto._VerticalLayout5_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Semibold";
		t.size = 36;
		t.text = "+5";
		t.textColor = 0x1D292B;
		t.x = 69;
		t.y = 14;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.size = 26;
		t.text = "第三题";
		t.textColor = 0x1D292B;
		t.x = 67;
		t.y = 64;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.percentHeight = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 12.999999999999993;
		t.y = -118.69999999999993;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 33.3;
		t.x = -12.999999999999993;
		t.y = 24.84999999999991;
		t.layout = this._VerticalLayout6_i();
		t.elementsContent = [this._Label10_i(),this._Label11_i()];
		return t;
	};
	_proto._VerticalLayout6_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Semibold";
		t.size = 36;
		t.text = "+5";
		t.textColor = 0x1D292B;
		t.x = 69;
		t.y = 14;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.size = 26;
		t.text = "第四题";
		t.textColor = 0x1D292B;
		t.x = 67;
		t.y = 64;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 33.3;
		t.x = 98;
		t.y = 24.84999999999991;
		t.layout = this._VerticalLayout7_i();
		t.elementsContent = [this._Label12_i(),this._Label13_i()];
		return t;
	};
	_proto._VerticalLayout7_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Semibold";
		t.size = 36;
		t.text = "+5";
		t.textColor = 0x1D292B;
		t.x = 69;
		t.y = 14;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.size = 26;
		t.text = "第五题";
		t.textColor = 0x1D292B;
		t.x = 67;
		t.y = 64;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 33.3;
		t.x = 210;
		t.y = 24.84999999999991;
		t.layout = this._VerticalLayout8_i();
		t.elementsContent = [this._Label14_i(),this._Label15_i()];
		return t;
	};
	_proto._VerticalLayout8_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Semibold";
		t.size = 36;
		t.text = "+5";
		t.textColor = 0x1D292B;
		t.x = 69;
		t.y = 14;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Regular";
		t.size = 26;
		t.text = "第六题";
		t.textColor = 0x1D292B;
		t.x = 67;
		t.y = 64;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		t.bottom = 40;
		t.height = 70;
		t.horizontalCenter = 0;
		t.percentWidth = 85;
		t.elementsContent = [this.back_btn_i(),this.play_btn_i()];
		return t;
	};
	_proto.back_btn_i = function () {
		var t = new eui.Group();
		this.back_btn = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.width = 262;
		t.elementsContent = [this._Image4_i(),this._Label16_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "btn_bg5_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "返回大厅";
		t.verticalCenter = 0;
		return t;
	};
	_proto.play_btn_i = function () {
		var t = new eui.Group();
		this.play_btn = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 262;
		t.elementsContent = [this._Image5_i(),this._Label17_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_bg5_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "继续挑战";
		t.verticalCenter = 0;
		t.x = -79;
		t.y = 20;
		return t;
	};
	return RankingResultSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/RankItem.exml'] = window.RankItemSkin = (function (_super) {
	__extends(RankItemSkin, _super);
	function RankItemSkin() {
		_super.call(this);
		this.skinParts = ["item_bg","rank_text","rank_label","item_group"];
		
		this.height = 100;
		this.width = 500;
		this.elementsContent = [this.item_group_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.rank"],[0],this.rank_text,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this.rank_label,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.score"],[0],this._Label1,"text");
	}
	var _proto = RankItemSkin.prototype;

	_proto.item_group_i = function () {
		var t = new eui.Group();
		this.item_group = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.item_bg_i(),this.rank_text_i(),this.rank_label_i(),this._Label1_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.item_bg_i = function () {
		var t = new eui.Rect();
		this.item_bg = t;
		t.fillColor = 0xfc0a0a;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 1;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.rank_text_i = function () {
		var t = new eui.Label();
		this.rank_text = t;
		t.anchorOffsetX = 0;
		t.left = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textAlign = "left";
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 35;
		return t;
	};
	_proto.rank_label_i = function () {
		var t = new eui.Label();
		this.rank_label = t;
		t.left = 100;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.right = 20;
		t.scaleX = 1;
		t.scaleY = 1;
		t.textAlign = "right";
		t.verticalCenter = 0;
		t.y = 35;
		return t;
	};
	return RankItemSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/RankScene.exml'] = window.RankSceneSkin = (function (_super) {
	__extends(RankSceneSkin, _super);
	function RankSceneSkin() {
		_super.call(this);
		this.skinParts = ["loading","rank1_view","rank2_view","select_btn","tab_bg","rank1_btn","rank2_btn","tab_group","bg","list_bg0","shopping1_view0","shopping2_view0","tab1_btn0","tab2_btn0","loading0","avater_board0","avater0","avater_mask0","user_avater_box0","user_name0","user0","jb_icon0","jb0"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Group3_i(),this.bg_i(),this._Image1_i(),this._Image2_i(),this._Group8_i(),this._Group11_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.avater_mask"],[0],this.avater0,"mask");
	}
	var _proto = RankSceneSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.loading_i(),this.rank1_view_i(),this.rank2_view_i(),this.tab_group_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf96c02;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.loading_i = function () {
		var t = new eui.Label();
		this.loading = t;
		t.horizontalCenter = 0;
		t.text = "加载中...";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rank1_view_i = function () {
		var t = new eui.Scroller();
		this.rank1_view = t;
		t.bottom = 100;
		t.height = 800;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.visible = false;
		t.percentWidth = 80;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.rank2_view_i = function () {
		var t = new eui.Scroller();
		this.rank2_view = t;
		t.bottom = 100;
		t.height = 800;
		t.horizontalCenter = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.visible = false;
		t.percentWidth = 80;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout2_i();
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto.tab_group_i = function () {
		var t = new eui.Group();
		this.tab_group = t;
		t.height = 80;
		t.horizontalCenter = 0;
		t.percentWidth = 80;
		t.y = 67;
		t.elementsContent = [this.select_btn_i(),this.tab_bg_i(),this.rank1_btn_i(),this.rank2_btn_i()];
		return t;
	};
	_proto.select_btn_i = function () {
		var t = new eui.Rect();
		this.select_btn = t;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0x0ea5f4;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 52;
		t.x = -64;
		t.y = -67;
		return t;
	};
	_proto.tab_bg_i = function () {
		var t = new eui.Rect();
		this.tab_bg = t;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillAlpha = 0;
		t.fillColor = 0x04f9ef;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeWeight = 1;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.rank1_btn_i = function () {
		var t = new eui.Group();
		this.rank1_btn = t;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 50;
		t.elementsContent = [this._Label1_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rank2_btn_i = function () {
		var t = new eui.Group();
		this.rank2_btn = t;
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.percentWidth = 50;
		t.elementsContent = [this._Label2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 132;
		t.left = 114;
		t.source = "rank_top_png";
		t.top = 46.1;
		t.width = 253;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 149;
		t.right = 71;
		t.source = "jp_png";
		t.top = 39.1;
		t.width = 137;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 690;
		t.elementsContent = [this.list_bg0_i(),this.shopping1_view0_i(),this.shopping2_view0_i(),this._Group7_i(),this.loading0_i()];
		return t;
	};
	_proto.list_bg0_i = function () {
		var t = new eui.Rect();
		this.list_bg0 = t;
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0xF0FDFF;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 68;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.shopping1_view0_i = function () {
		var t = new eui.Scroller();
		this.shopping1_view0 = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 68;
		t.percentWidth = 100;
		t.viewport = this._Group4_i();
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.shopping2_view0_i = function () {
		var t = new eui.Scroller();
		this.shopping2_view0 = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 68;
		t.visible = false;
		t.percentWidth = 100;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.height = 68;
		t.left = 15;
		t.right = 15;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.tab1_btn0_i(),this.tab2_btn0_i(),this._Group6_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 21;
		t.horizontalAlign = "justify";
		return t;
	};
	_proto.tab1_btn0_i = function () {
		var t = new eui.Group();
		this.tab1_btn0 = t;
		t.percentHeight = 100;
		t.scrollEnabled = true;
		t.width = 200;
		t.x = 6;
		t.y = -3;
		t.elementsContent = [this._Rect2_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 1;
		t.fillColor = 0x9250F0;
		t.height = 136;
		t.left = 0;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 3;
		t.top = 0;
		t.percentWidth = 99;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.percentHeight = 80;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "解锁钥匙";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.tab2_btn0_i = function () {
		var t = new eui.Group();
		this.tab2_btn0 = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollEnabled = true;
		t.width = 200;
		t.x = 6;
		t.y = -3;
		t.elementsContent = [this._Rect3_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xB88DF8;
		t.height = 136;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 3;
		t.top = 0;
		t.percentWidth = 99;
		t.x = 230;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.percentHeight = 80;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "其他礼品";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 190.00000000000006;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollEnabled = true;
		t.width = 200;
		t.x = 16;
		t.y = 7;
		t.elementsContent = [this._Rect4_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xB88DF8;
		t.height = 136;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 3;
		t.top = 0;
		t.percentWidth = 99;
		t.x = 230;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.percentHeight = 80;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "我的礼品";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 189.99999999999983;
		return t;
	};
	_proto.loading0_i = function () {
		var t = new eui.Label();
		this.loading0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "加载中...";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 287;
		t.y = 535;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.bottom = 22;
		t.height = 110;
		t.horizontalCenter = 0;
		t.width = 690;
		t.elementsContent = [this._Rect5_i(),this._Group10_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xF0FDFF;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout6_i();
		t.elementsContent = [this.user0_i(),this._Group9_i()];
		return t;
	};
	_proto._HorizontalLayout6_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "contentJustify";
		return t;
	};
	_proto.user0_i = function () {
		var t = new eui.Group();
		this.user0 = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 50;
		t.x = -328.00000000000006;
		t.y = 21;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this.user_avater_box0_i(),this.user_name0_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 18;
		t.horizontalAlign = "left";
		t.paddingLeft = 38;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.user_avater_box0_i = function () {
		var t = new eui.Group();
		this.user_avater_box0 = t;
		t.height = 66.3;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 66.3;
		t.y = 4;
		t.elementsContent = [this.avater_board0_i(),this.avater0_i(),this.avater_mask0_i()];
		return t;
	};
	_proto.avater_board0_i = function () {
		var t = new eui.Rect();
		this.avater_board0 = t;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0x23BFD5;
		t.height = 69.3;
		t.width = 69.3;
		t.x = -1.5;
		t.y = -1.5;
		return t;
	};
	_proto.avater0_i = function () {
		var t = new eui.Image();
		this.avater0 = t;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "who_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.avater_mask0_i = function () {
		var t = new eui.Rect();
		this.avater_mask0 = t;
		t.ellipseHeight = 66.3;
		t.ellipseWidth = 66.3;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.user_name0_i = function () {
		var t = new eui.Label();
		this.user_name0 = t;
		t.fontFamily = "PingFangSC-Regular";
		t.left = 122;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "微信昵称";
		t.textColor = 0x1D292B;
		t.verticalCenter = 0;
		t.x = 113;
		t.y = 22;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 50;
		t.x = 44.99999999999994;
		t.y = 21;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this.jb_icon0_i(),this.jb0_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 31;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.jb_icon0_i = function () {
		var t = new eui.Image();
		this.jb_icon0 = t;
		t.height = 45;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jb_png";
		t.verticalCenter = 0;
		t.width = 46;
		t.y = 15;
		return t;
	};
	_proto.jb0_i = function () {
		var t = new eui.Label();
		this.jb0 = t;
		t.fontFamily = "PingFangSC-Medium";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "112,00";
		t.textColor = 0xF64414;
		t.verticalCenter = 0;
		t.y = 22;
		return t;
	};
	return RankSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ResultMessageBox.exml'] = window.ResultMessageBoxSkin = (function (_super) {
	__extends(ResultMessageBoxSkin, _super);
	function ResultMessageBoxSkin() {
		_super.call(this);
		this.skinParts = ["bg","axnum","top_tip","tip_text1","tip_text2","close_btn","messagebox"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.messagebox_i()];
	}
	var _proto = ResultMessageBoxSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x2B2727;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Group();
		this.messagebox = t;
		t.alpha = 1;
		t.height = 734;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 586;
		t.x = 82;
		t.y = 300;
		t.elementsContent = [this.bg_i(),this.top_tip_i(),this.tip_text1_i(),this.tip_text2_i(),this._Group4_i(),this.close_btn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.top_tip_i = function () {
		var t = new eui.Group();
		this.top_tip = t;
		t.height = 52.5;
		t.left = 0;
		t.width = 580;
		t.y = 58;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.axnum_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "ax_png";
		t.width = 54.5;
		t.x = 226;
		t.y = 12;
		return t;
	};
	_proto.axnum_i = function () {
		var t = new eui.Label();
		this.axnum = t;
		t.bold = true;
		t.fontFamily = "Arial-Black";
		t.text = "+10";
		t.textColor = 0x454f5b;
		t.x = 328;
		t.y = 20;
		return t;
	};
	_proto.tip_text1_i = function () {
		var t = new eui.Image();
		this.tip_text1 = t;
		t.height = 43;
		t.horizontalCenter = 0;
		t.source = "right_tip_png";
		t.width = 270;
		t.y = 141;
		return t;
	};
	_proto.tip_text2_i = function () {
		var t = new eui.Image();
		this.tip_text2 = t;
		t.height = 43;
		t.horizontalCenter = 0;
		t.source = "error_tip_png";
		t.width = 320;
		t.y = 141;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 344;
		t.horizontalCenter = 0;
		t.width = 496;
		t.y = 240;
		t.elementsContent = [this._Rect2_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xe8fcfe;
		t.percentHeight = 100;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 30;
		t.horizontalAlign = "justify";
		t.paddingBottom = 40;
		t.paddingLeft = 30;
		t.paddingRight = 30;
		t.paddingTop = 40;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 20;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 30;
		t.y = 265;
		t.elementsContent = [this._Label1_i(),this._Rect3_i()];
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Medium";
		t.left = 0;
		t.text = "答案：A";
		t.textAlign = "left";
		t.textColor = 0x1d292b;
		t.top = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x23bfd5;
		t.height = 1;
		t.left = 0;
		t.strokeColor = 0x000000;
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 70;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.percentWidth = 100;
		t.x = 127;
		t.y = 50;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Label2_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "                                 PingFangSC-Regular                                                              PingFangSC-Regular                            ";
		t.percentHeight = 100;
		t.lineSpacing = 20;
		t.rotation = 359.99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "解析：答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。答案详解详情答案详解 答案详解详情答案详解详情详 答案详解详情答案详解详情答 案详解详情情。";
		t.textColor = 0x1d292b;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Group();
		this.close_btn = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 482;
		t.y = 626;
		t.elementsContent = [this._Image2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "btn_bg5_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "下一题";
		t.verticalCenter = 0;
		return t;
	};
	return ResultMessageBoxSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ShoppingItem.exml'] = window.ShoppingItemSkin = (function (_super) {
	__extends(ShoppingItemSkin, _super);
	function ShoppingItemSkin() {
		_super.call(this);
		this.skinParts = ["bottom_board","buy_btn"];
		
		this.height = 114;
		this.width = 670;
		this.elementsContent = [this.bottom_board_i(),this._Group1_i(),this._Group2_i(),this.buy_btn_i()];
	}
	var _proto = ShoppingItemSkin.prototype;

	_proto.bottom_board_i = function () {
		var t = new eui.Rect();
		this.bottom_board = t;
		t.bottom = 0;
		t.fillColor = 0xcfcfcf;
		t.height = 1;
		t.left = 52;
		t.right = 52;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 37;
		t.top = 0;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 64;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "shopping_key_png";
		t.verticalCenter = 0;
		t.width = 64;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Semibold";
		t.left = 98;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "X1";
		t.textColor = 0x1d292b;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 200;
		t.elementsContent = [this._Image2_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 54;
		t.left = 0;
		t.source = "jb_png";
		t.verticalCenter = 0;
		t.width = 55;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Medium";
		t.left = 80;
		t.text = "1,000";
		t.textColor = 0xf64414;
		t.y = 40;
		return t;
	};
	_proto.buy_btn_i = function () {
		var t = new eui.Image();
		this.buy_btn = t;
		t.height = 71;
		t.right = 37;
		t.source = "buy_png";
		t.verticalCenter = 0;
		t.width = 182;
		return t;
	};
	return ShoppingItemSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/ShoppingMallScene.exml'] = window.ShoppingMallSceneSkin = (function (_super) {
	__extends(ShoppingMallSceneSkin, _super);
	function ShoppingMallSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","list_bg","shopping1_view","shopping2_view","tab1_btn","tab2_btn","loading","avater_board","avater","avater_mask","user_avater_box","user_name","user","jb_icon","jb"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this._Image1_i(),this._Group5_i(),this._Group8_i()];
		
		eui.Binding.$bindProperties(this, ["avater_mask"],[0],this.avater,"mask");
	}
	var _proto = ShoppingMallSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 88;
		t.left = 0;
		t.source = "shopping_top_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 160;
		t.height = 200;
		t.left = 30;
		t.right = 30;
		t.top = 117;
		t.width = 200;
		t.y = 667;
		t.elementsContent = [this.list_bg_i(),this.shopping1_view_i(),this.shopping2_view_i(),this._Group4_i(),this.loading_i()];
		return t;
	};
	_proto.list_bg_i = function () {
		var t = new eui.Rect();
		this.list_bg = t;
		t.bottom = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0xf0fdff;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 68;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.shopping1_view_i = function () {
		var t = new eui.Scroller();
		this.shopping1_view = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 68;
		t.percentWidth = 100;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.shopping2_view_i = function () {
		var t = new eui.Scroller();
		this.shopping2_view = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 68;
		t.visible = false;
		t.percentWidth = 100;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 68;
		t.left = 15;
		t.right = 15;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.tab1_btn_i(),this.tab2_btn_i(),this._Group3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 21;
		t.horizontalAlign = "justify";
		return t;
	};
	_proto.tab1_btn_i = function () {
		var t = new eui.Group();
		this.tab1_btn = t;
		t.percentHeight = 100;
		t.scrollEnabled = true;
		t.width = 200;
		t.x = 6;
		t.y = -3;
		t.elementsContent = [this._Rect1_i(),this._Label1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillAlpha = 1;
		t.fillColor = 0x9250f0;
		t.height = 136;
		t.left = 0;
		t.strokeColor = 0xffffff;
		t.strokeWeight = 3;
		t.top = 0;
		t.percentWidth = 99;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.percentHeight = 80;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "解锁钥匙";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		return t;
	};
	_proto.tab2_btn_i = function () {
		var t = new eui.Group();
		this.tab2_btn = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollEnabled = true;
		t.width = 200;
		t.x = 6;
		t.y = -3;
		t.elementsContent = [this._Rect2_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xb88df8;
		t.height = 136;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 3;
		t.top = 0;
		t.percentWidth = 99;
		t.x = 230;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.percentHeight = 80;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "其他礼品";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 190.00000000000006;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollEnabled = true;
		t.width = 200;
		t.x = 16;
		t.y = 7;
		t.elementsContent = [this._Rect3_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xb88df8;
		t.height = 136;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.strokeWeight = 3;
		t.top = 0;
		t.percentWidth = 99;
		t.x = 230;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bottom = 0;
		t.percentHeight = 80;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "我的礼品";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.percentWidth = 100;
		t.x = 189.99999999999983;
		return t;
	};
	_proto.loading_i = function () {
		var t = new eui.Label();
		this.loading = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "加载中...";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 287;
		t.y = 535;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.bottom = 30;
		t.height = 110;
		t.horizontalCenter = 0;
		t.left = 30;
		t.right = 30;
		t.percentWidth = 100;
		t.elementsContent = [this._Rect4_i(),this._Group7_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xf0fdff;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this.user_i(),this._Group6_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		t.horizontalAlign = "contentJustify";
		return t;
	};
	_proto.user_i = function () {
		var t = new eui.Group();
		this.user = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 50;
		t.x = -328.00000000000006;
		t.y = 21;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.user_avater_box_i(),this.user_name_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 18;
		t.horizontalAlign = "left";
		t.paddingLeft = 38;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.user_avater_box_i = function () {
		var t = new eui.Group();
		this.user_avater_box = t;
		t.height = 66.3;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 66.3;
		t.y = 4;
		t.elementsContent = [this.avater_board_i(),this.avater_i(),this.avater_mask_i()];
		return t;
	};
	_proto.avater_board_i = function () {
		var t = new eui.Rect();
		this.avater_board = t;
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0x23bfd5;
		t.height = 69.3;
		t.width = 69.3;
		t.x = -1.5;
		t.y = -1.5;
		return t;
	};
	_proto.avater_i = function () {
		var t = new eui.Image();
		this.avater = t;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "who_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.avater_mask_i = function () {
		var t = new eui.Rect();
		this.avater_mask = t;
		t.ellipseHeight = 66.3;
		t.ellipseWidth = 66.3;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.user_name_i = function () {
		var t = new eui.Label();
		this.user_name = t;
		t.fontFamily = "PingFangSC-Regular";
		t.left = 122;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "微信昵称";
		t.textColor = 0x1d292b;
		t.verticalCenter = 0;
		t.x = 113;
		t.y = 22;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 50;
		t.x = 44.99999999999994;
		t.y = 21;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.jb_icon_i(),this.jb_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 31;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.jb_icon_i = function () {
		var t = new eui.Image();
		this.jb_icon = t;
		t.height = 45;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "jb_png";
		t.verticalCenter = 0;
		t.width = 46;
		t.y = 15;
		return t;
	};
	_proto.jb_i = function () {
		var t = new eui.Label();
		this.jb = t;
		t.fontFamily = "PingFangSC-Medium";
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "112,00";
		t.textColor = 0xf64414;
		t.verticalCenter = 0;
		t.y = 22;
		return t;
	};
	return ShoppingMallSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/StartScene.exml'] = window.StartSceneSkin = (function (_super) {
	__extends(StartSceneSkin, _super);
	function StartSceneSkin() {
		_super.call(this);
		this.skinParts = ["user_keys","right_group","user_level","user_name","progress_bg","progree_color","left_group","user_info","user_box","menu_item_1","menu_item_2","menu_item_3","menu_item_4","menu","meue_block","menu_warp","bottom_nav_1","bottom_nav_2","bottom_nav_3","bottom_nav_4","bottom_nav"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.menu_warp_i(),this._Group6_i()];
	}
	var _proto = StartSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xf0fdff;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.menu_warp_i = function () {
		var t = new eui.Scroller();
		this.menu_warp = t;
		t.bottom = 80;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image1_i(),this.user_keys_i(),this.user_box_i(),this.menu_i(),this.meue_block_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 175;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "start_top_png";
		t.top = 0;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.user_keys_i = function () {
		var t = new eui.Group();
		this.user_keys = t;
		t.height = 68;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 306;
		t.x = 222;
		t.y = 142;
		t.elementsContent = [this._Rect2_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Image3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0x1d292b;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 57;
		t.source = "key_png";
		t.verticalCenter = 0;
		t.width = 55;
		t.x = 23;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0.5;
		t.size = 36;
		t.text = "0/5";
		t.verticalCenter = 2;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.right = 20;
		t.size = 36;
		t.text = "+";
		t.verticalCenter = 2;
		t.visible = false;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 37;
		t.source = "push_png";
		t.verticalCenter = 0;
		t.width = 37;
		t.x = 246;
		return t;
	};
	_proto.user_box_i = function () {
		var t = new eui.Group();
		this.user_box = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 217;
		t.width = 660;
		t.x = 45;
		t.y = 217;
		t.elementsContent = [this.user_info_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto.user_info_i = function () {
		var t = new eui.Group();
		this.user_info = t;
		t.anchorOffsetX = 0;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.width = 280;
		t.elementsContent = [this.right_group_i(),this.left_group_i()];
		return t;
	};
	_proto.right_group_i = function () {
		var t = new eui.Group();
		this.right_group = t;
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.elementsContent = [this._Image4_i(),this._Rect3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 73;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "who_png";
		t.verticalCenter = 0;
		t.width = 73;
		t.x = 0;
		t.y = 54.000000000000114;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.height = 73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 73;
		return t;
	};
	_proto.left_group_i = function () {
		var t = new eui.Group();
		this.left_group = t;
		t.percentHeight = 60;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 200;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 28.79;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 200;
		t.elementsContent = [this.user_level_i(),this.user_name_i()];
		return t;
	};
	_proto.user_level_i = function () {
		var t = new eui.Label();
		this.user_level = t;
		t.bold = true;
		t.left = 0;
		t.text = "谢小U";
		t.textColor = 0x454f5b;
		t.verticalCenter = 0;
		return t;
	};
	_proto.user_name_i = function () {
		var t = new eui.Label();
		this.user_name = t;
		t.bottom = 0;
		t.right = 0;
		t.size = 24;
		t.text = "Lv1.小白";
		t.textColor = 0x454f5b;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 13;
		t.horizontalCenter = 0;
		t.width = 179;
		t.elementsContent = [this.progress_bg_i(),this.progree_color_i()];
		return t;
	};
	_proto.progress_bg_i = function () {
		var t = new eui.Rect();
		this.progress_bg = t;
		t.fillColor = 0xcce9f0;
		t.percentHeight = 100;
		t.left = 0;
		t.strokeColor = 0x000000;
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.progree_color_i = function () {
		var t = new eui.Rect();
		this.progree_color = t;
		t.fillColor = 0x23bfd5;
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 50;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 280;
		t.width = 190;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image5_i(),this._Label3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 12;
		t.horizontalAlign = "left";
		t.paddingLeft = 20;
		t.paddingTop = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "ax_png";
		t.width = 70;
		t.x = 131;
		t.y = 40;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.right = 0;
		t.text = "0";
		t.textColor = 0x454f5b;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.right = 0;
		t.top = 0;
		t.width = 190;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image6_i(),this._Label4_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 12;
		t.horizontalAlign = "right";
		t.paddingTop = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.source = "jb_png";
		t.width = 70;
		t.x = 51;
		t.y = 43;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "10,000";
		t.textColor = 0x454F5B;
		t.verticalCenter = 0;
		t.y = 284;
		return t;
	};
	_proto.menu_i = function () {
		var t = new eui.Group();
		this.menu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 746;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 312;
		t.percentWidth = 85;
		t.x = 56;
		t.y = 312;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.menu_item_1_i(),this.menu_item_2_i(),this.menu_item_3_i(),this.menu_item_4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.menu_item_1_i = function () {
		var t = new eui.Group();
		this.menu_item_1 = t;
		t.height = 192;
		t.width = 640;
		t.x = 36;
		t.y = 38;
		t.elementsContent = [this._Image7_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "rank_btn_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.menu_item_2_i = function () {
		var t = new eui.Group();
		this.menu_item_2 = t;
		t.height = 190;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = -4;
		t.y = -466;
		t.elementsContent = [this._Image8_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pk_btn_png";
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 206.0000000000001;
		return t;
	};
	_proto.menu_item_3_i = function () {
		var t = new eui.Group();
		this.menu_item_3 = t;
		t.height = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = 6;
		t.y = -456;
		t.elementsContent = [this._Image9_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "yb_btn_png";
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 206;
		return t;
	};
	_proto.menu_item_4_i = function () {
		var t = new eui.Group();
		this.menu_item_4 = t;
		t.height = 145;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.x = -80;
		t.y = 2170;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "spc_btn_png";
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 133.9999999999999;
		return t;
	};
	_proto.meue_block_i = function () {
		var t = new eui.Group();
		this.meue_block = t;
		t.height = 100;
		t.left = 0;
		t.percentWidth = 100;
		t.y = 1072;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.bottom = 10;
		t.height = 79;
		t.horizontalCenter = 0;
		t.width = 721;
		t.elementsContent = [this._Rect4_i(),this.bottom_nav_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillColor = 0xa1eff9;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottom_nav_i = function () {
		var t = new eui.Group();
		this.bottom_nav = t;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.bottom_nav_1_i(),this.bottom_nav_2_i(),this.bottom_nav_3_i(),this.bottom_nav_4_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.bottom_nav_1_i = function () {
		var t = new eui.Group();
		this.bottom_nav_1 = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 48;
		t.elementsContent = [this._Label5_i(),this._Image11_i()];
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x57a9bb;
		t.text = "排行榜";
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bottom_nav1_png";
		t.width = 70;
		t.x = 280.00000000000006;
		t.y = -35;
		return t;
	};
	_proto.bottom_nav_2_i = function () {
		var t = new eui.Group();
		this.bottom_nav_2 = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 247;
		t.elementsContent = [this._Label6_i(),this._Image12_i()];
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x57a9bb;
		t.text = "礼物";
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bottom_nav2_png";
		t.width = 64;
		t.x = -192;
		t.y = -35;
		return t;
	};
	_proto.bottom_nav_3_i = function () {
		var t = new eui.Group();
		this.bottom_nav_3 = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 429;
		t.elementsContent = [this._Label7_i(),this._Image13_i()];
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x57a9bb;
		t.text = "客服";
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bottom_nav3_png";
		t.width = 84;
		t.x = -100.99999999999989;
		t.y = -35;
		return t;
	};
	_proto.bottom_nav_4_i = function () {
		var t = new eui.Group();
		this.bottom_nav_4 = t;
		t.bottom = 0;
		t.percentHeight = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 80;
		t.x = 631;
		t.elementsContent = [this._Label8_i(),this._Image14_i()];
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x57a9bb;
		t.text = "关于";
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bottom_nav4_png";
		t.width = 70;
		t.x = -302.99999999999994;
		t.y = -35;
		return t;
	};
	return StartSceneSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/UseKeyMessageBox.exml'] = window.UseKeyMessageBoxSkin = (function (_super) {
	__extends(UseKeyMessageBoxSkin, _super);
	function UseKeyMessageBoxSkin() {
		_super.call(this);
		this.skinParts = ["bg","close_btn","messagebox"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.messagebox_i()];
	}
	var _proto = UseKeyMessageBoxSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 0.6;
		t.fillColor = 0x2B2727;
		t.percentHeight = 100;
		t.strokeAlpha = 1;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.messagebox_i = function () {
		var t = new eui.Group();
		this.messagebox = t;
		t.alpha = 1;
		t.height = 734;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 586;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Label1_i(),this._Group4_i(),this.close_btn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 157;
		t.horizontalCenter = 0;
		t.source = "buy_top_png";
		t.width = 243;
		t.y = -60;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 44;
		t.text = "正确答案";
		t.textColor = 0x454f5b;
		t.y = 141;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 344;
		t.horizontalCenter = 0;
		t.width = 496;
		t.y = 240;
		t.elementsContent = [this._Rect2_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xE8FCFE;
		t.percentHeight = 100;
		t.top = 0;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.left = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Scroller1_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 30;
		t.horizontalAlign = "justify";
		t.paddingBottom = 0;
		t.paddingLeft = 20;
		t.paddingRight = 20;
		t.paddingTop = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.percentHeight = 20;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 30;
		t.y = 265;
		t.elementsContent = [this._Label2_i(),this._Rect3_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "PingFangSC-Medium";
		t.left = 0;
		t.text = "答案：A";
		t.textAlign = "left";
		t.textColor = 0x1D292B;
		t.top = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x23BFD5;
		t.height = 1;
		t.left = 0;
		t.strokeColor = 0x000000;
		t.percentWidth = 100;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.percentHeight = 70;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.percentWidth = 100;
		t.x = 127;
		t.y = 50;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Label3_i()];
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "                                 PingFangSC-Regular                                                              PingFangSC-Regular                            ";
		t.percentHeight = 100;
		t.lineSpacing = 20;
		t.rotation = 359.99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "解析：答案详解答 案详解详情情答案详解详解答 案详解详情情答案详解详情";
		t.textColor = 0x1D292B;
		t.top = 0;
		t.percentWidth = 100;
		t.x = 0;
		return t;
	};
	_proto.close_btn_i = function () {
		var t = new eui.Group();
		this.close_btn = t;
		t.height = 70;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 482;
		t.y = 626;
		t.elementsContent = [this._Rect4_i(),this._Image2_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 100;
		t.ellipseWidth = 100;
		t.fillColor = 0x23BFD5;
		t.percentHeight = 100;
		t.strokeColor = 0x23BFD5;
		t.visible = false;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.left = 0;
		t.source = "btn_bg5_png";
		t.top = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.text = "学到了";
		t.verticalCenter = 0;
		return t;
	};
	return UseKeyMessageBoxSkin;
})(eui.Skin);