/*
 *  Copyright (C) 1998-2016 by Northwoods Software Corporation. All Rights Reserved.
 */

// This file holds all of the JavaScript code specific to the BPMN.html page.

// Setup all of the Diagrams and what they need.
// This is called after the page is loaded.
import {icons} from './icons.js';
export default function(bpmnInfo) {
	// a selection of free icons from http://icomoon.io/
// the following paths are all pure SVG path strings that GoJS parses as Geometry strings.

	var go$ = go.GraphObject.make; // for more concise visual tree definitions

	// constants for design choices

	var GradientYellow = go$(go.Brush, "Linear", {
		0: "LightGoldenRodYellow",
		1: "#FFFF66"
	});
	/*var GradientLightGreen = go$(go.Brush, "Linear", {
		0: "#E0FEE0",
		1: "PaleGreen"
	});*/
	var GradientLightGray = go$(go.Brush, "Linear", {
		0: "White",
		1: "#DADADA"
	});

	var ActivityNodeFill = go$(go.Brush, "Linear", {
		0: "OldLace",
		1: "PapayaWhip"
	});
	var ActivityNodeStroke = "#CDAA7D";
	var ActivityMarkerStrokeWidth = 1.5;
	var ActivityNodeWidth = 120;
	var ActivityNodeHeight = 80;
	var ActivityNodeStrokeWidth = 1;
	var ActivityNodeStrokeWidthIsCall = 4;

	var SubprocessNodeFill = ActivityNodeFill;
	var SubprocessNodeStroke = ActivityNodeStroke;

	var EventNodeSize = 32;
	var EventNodeInnerSize = EventNodeSize - 6;
	var EventNodeSymbolSize = EventNodeInnerSize - 14;
	var EventEndOuterFillColor = "pink";
	var EventBackgroundColor = "LightGreen";
	var EventSymbolLightFill = "white";
	var EventSymbolDarkFill = "dimgray";
	var EventDimensionStrokeColor = "green";
	var EventDimensionStrokeEndColor = "red";
	var EventNodeStrokeWidthIsEnd = 4;

	/*var GatewayNodeSize = 80;
	var GatewayNodeSymbolSize = 45;
	var GatewayNodeFill = GradientYellow;
	var GatewayNodeStroke = "darkgoldenrod";
	var GatewayNodeSymbolStroke = "darkgoldenrod";
	var GatewayNodeSymbolFill = GradientYellow;
	var GatewayNodeSymbolStrokeWidth = 3;*/

	var DataFill = GradientLightGray;


	// custom figures for Shapes

	go.Shape.defineFigureGenerator("Empty", function(shape, w, h) {
		return new go.Geometry();
	});

	var annotationStr = "M 150,0L 0,0L 0,600L 150,600 M 800,0";
	var annotationGeo = go.Geometry.parse(annotationStr);
	annotationGeo.normalize();
	go.Shape.defineFigureGenerator("Annotation", function(shape, w, h) {
		var geo = annotationGeo.copy();
		// calculate how much to scale the Geometry so that it fits in w x h
		var bounds = geo.bounds;
		var scale = Math.min(w / bounds.width, h / bounds.height);
		geo.scale(scale, scale);
		return geo;
	});

	var gearStr = "F M 391,5L 419,14L 444.5,30.5L 451,120.5L 485.5,126L 522,141L 595,83L 618.5,92L 644,106.5" +
		"L 660.5,132L 670,158L 616,220L 640.5,265.5L 658.122,317.809L 753.122,322.809L 770.122,348.309L 774.622,374.309" +
		"L 769.5,402L 756.622,420.309L 659.122,428.809L 640.5,475L 616.5,519.5L 670,573.5L 663,600L 646,626.5" +
		"L 622,639L 595,645.5L 531.5,597.5L 493.192,613.462L 450,627.5L 444.5,718.5L 421.5,733L 393,740.5L 361.5,733.5" +
		"L 336.5,719L 330,627.5L 277.5,611.5L 227.5,584.167L 156.5,646L 124.5,641L 102,626.5L 82,602.5L 78.5,572.5" +
		"L 148.167,500.833L 133.5,466.833L 122,432.5L 26.5,421L 11,400.5L 5,373.5L 12,347.5L 26.5,324L 123.5,317.5" +
		"L 136.833,274.167L 154,241L 75.5,152.5L 85.5,128.5L 103,105.5L 128.5,88.5001L 154.872,82.4758L 237,155" +
		"L 280.5,132L 330,121L 336,30L 361,15L 391,5 Z M 398.201,232L 510.201,275L 556.201,385L 505.201,491L 399.201,537" +
		"L 284.201,489L 242.201,385L 282.201,273L 398.201,232 Z";
	var gearGeo = go.Geometry.parse(gearStr);
	gearGeo.normalize();

	go.Shape.defineFigureGenerator("BpmnTaskService", function(shape, w, h) {
		var geo = gearGeo.copy();
		// calculate how much to scale the Geometry so that it fits in w x h
		var bounds = geo.bounds;
		var scale = Math.min(w / bounds.width, h / bounds.height);
		geo.scale(scale, scale);
		// text should go in the hand
		geo.spot1 = new go.Spot(0, 0.6, 10, 0);
		geo.spot2 = new go.Spot(1, 1);
		return geo;
	});

	var handGeo = go.Geometry.parse("F1M18.13,10.06 C18.18,10.07 18.22,10.07 18.26,10.08 18.91," +
		"10.20 21.20,10.12 21.28,12.93 21.36,15.75 21.42,32.40 21.42,32.40 21.42," +
		"32.40 21.12,34.10 23.08,33.06 23.08,33.06 22.89,24.76 23.80,24.17 24.72," +
		"23.59 26.69,23.81 27.19,24.40 27.69,24.98 28.03,24.97 28.03,33.34 28.03," +
		"33.34 29.32,34.54 29.93,33.12 30.47,31.84 29.71,27.11 30.86,26.56 31.80," +
		"26.12 34.53,26.12 34.72,28.29 34.94,30.82 34.22,36.12 35.64,35.79 35.64," +
		"35.79 36.64,36.08 36.72,34.54 36.80,33.00 37.17,30.15 38.42,29.90 39.67," +
		"29.65 41.22,30.20 41.30,32.29 41.39,34.37 42.30,46.69 38.86,55.40 35.75," +
		"63.29 36.42,62.62 33.47,63.12 30.76,63.58 26.69,63.12 26.69,63.12 26.69," +
		"63.12 17.72,64.45 15.64,57.62 13.55,50.79 10.80,40.95 7.30,38.95 3.80," +
		"36.95 4.24,36.37 4.28,35.35 4.32,34.33 7.60,31.25 12.97,35.75 12.97," +
		"35.75 16.10,39.79 16.10,42.00 16.10,42.00 15.69,14.30 15.80,12.79 15.96," +
		"10.75 17.42,10.04 18.13,10.06z ");
	handGeo.rotate(90, 0, 0);
	handGeo.normalize();
	go.Shape.defineFigureGenerator("BpmnTaskManual", function(shape, w, h) {
		var geo = handGeo.copy();
		// calculate how much to scale the Geometry so that it fits in w x h
		var bounds = geo.bounds;
		var scale = Math.min(w / bounds.width, h / bounds.height);
		geo.scale(scale, scale);
		// guess where text should go (in the hand)
		geo.spot1 = new go.Spot(0, 0.6, 10, 0);
		geo.spot2 = new go.Spot(1, 1);
		return geo;
	});


	// define the appearance of tooltips, shared by various templates
	var tooltiptemplate =
		go$(go.Adornment, go.Panel.Auto,
			go$(go.Shape, "RoundedRectangle", {
				fill: "whitesmoke",
				stroke: "gray"
			}),
			go$(go.TextBlock, {
					margin: 3,
					editable: false
				},
				new go.Binding("text", "", function(data) {
					if (data.item !== undefined) return data.item;
					return "(unnamed item)";
				}))
		);


	function nodeEventTypeConverter(s) { // order here from BPMN 2.0 poster

		var tasks = ["NotAllowed",
			"Empty",
			"BpmnTaskMessage",
			"BpmnEventTimer",
			"BpmnEventEscalation",
			"BpmnEventConditional",
			"Arrow",
			"BpmnEventError",
			"ThinX",
			"BpmnActivityCompensation",
			"Triangle",
			"Pentagon",
			"ThickCross",
			"Circle"
		];
		if (s < tasks.length) return tasks[s];
		return "NotAllowed"; // error
	}

	function nodeEventDimensionStrokeColorConverter(s) {
		if (s === 8) return EventDimensionStrokeEndColor;
		return EventDimensionStrokeColor;
	}

	function nodeEventDimensionSymbolFillConverter(s) {
		//if (s <= 6) return EventSymbolLightFill;
		//return EventSymbolDarkFill;
		return "white";  //统一白色??
	}

	//------------------------------------------  Event Node Template  ----------------------------------------------
	for (var k in icons) {
      icons[k] = go.Geometry.fillPath(icons[k]);
    }
	
	function geoFunc(geoname) {
      if (icons[geoname]) return icons[geoname];
      else return icons["heart"]; // default icon
    }
	var eventNodeTemplate =
		go$(go.Node, "Vertical", {
				locationObjectName: "SHAPE",
				locationSpot: go.Spot.Center,
				toolTip: tooltiptemplate
			},
			new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
			// move a selected part into the Foreground layer, so it isn't obscured by any non-selected parts
			new go.Binding("layerName", "isSelected", function(s) {
				return s ? "Foreground" : "";
			}).ofObject(),
			
			// can be resided according to the user's desires
			{
				resizable: false,
				resizeObjectName: "SHAPE"
			},
			go$(go.Panel, "Spot",
				go$(go.Shape, "Circle", // Outer circle
					{
						strokeWidth: 1,
						name: "SHAPE",
						//EventNodeSize
						desiredSize: new go.Size(30, 30),
						portId: "",
						fromLinkable: true,
						toLinkable: true,
						cursor: "pointer",
						fromSpot: go.Spot.RightSide,
						toSpot: go.Spot.LeftSide
					},
					// allows the color to be determined by the node data
					new go.Binding("fill", "eventDimension", function(s) {
						//根据事件维度eventDimension值 绑定不同颜色
						if(s === 8){
							return EventEndOuterFillColor;
						}else if(s === 1){
							return EventBackgroundColor;
						}else{
							return "#5cadff";
						}
						
					}),
					//整个图标都是icons
					//new go.Binding("geometryString", "geo", geoFunc),
					new go.Binding("strokeWidth", "eventDimension", function(s) {
						//return s === 8 ? EventNodeStrokeWidthIsEnd : 1;
						return 0;//统一绑定边框宽度
					}),
					//给笔画宽度描色  根据事件维度值   
					new go.Binding("stroke", "eventDimension", nodeEventDimensionStrokeColorConverter),
					
					new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify)
				), // end main shape
				go$(go.Shape, "Circle", // Inner circle
					{
						alignment: go.Spot.Center,
						desiredSize: new go.Size(8,8),//new go.Size(EventNodeInnerSize, EventNodeInnerSize),
						fill: null
					},
					// new go.Binding("stroke", "eventDimension", nodeEventDimensionStrokeColorConverter),
					/*new go.Binding("strokeDashArray", "eventDimension", function(s) {
						return (s === 3 || s === 6) ? [4, 2] : null;
					}),*/ // dashes for non-interrupting
					
					new go.Binding("visible", "eventDimension", function(s) {
						//return s > 3 && s <= 7;  //中间小圈？？
					}) // inner  only visible for 4 thru 7
				),
				go$(go.Shape, "NotAllowed", {
						alignment: go.Spot.Center,
						//EventNodeSymbolSize
						desiredSize: new go.Size(16, 16),//icons图标字体大小
						stroke: "white"
					},
					new go.Binding("figure", "eventType", nodeEventTypeConverter),
					//圈内是icons图标
					new go.Binding("geometryString", "geo", geoFunc),
					new go.Binding("fill", "eventDimension", nodeEventDimensionSymbolFillConverter)
					//根据eventDimension值 填充颜色
				)
			), // end Auto Panel
			go$(go.TextBlock, {
					alignment: go.Spot.Center,
					textAlign: "center",
					// margin: 5,
					editable: false
				},
				new go.Binding("text").makeTwoWay())

		); // end go.Node Vertical

	//------------------------------------------  Template Maps  ----------------------------------------------

	// create the nodeTemplateMap, holding main view node templates:
	var nodeTemplateMap = new go.Map("string", go.Node);
	nodeTemplateMap.add("in", eventNodeTemplate);
	nodeTemplateMap.add("out", eventNodeTemplate);

	// create the nodeTemplateMap, holding special palette "mini" node templates:
	var palNodeTemplateMap = new go.Map("string", go.Node);
	//绘制各种类型的图形
	palNodeTemplateMap.add("in", eventNodeTemplate);
	palNodeTemplateMap.add("out", eventNodeTemplate);



	//------------------------------------------the main Diagram----------------------------------------------

	var defaults = {
		allowVerticalScroll: false, //禁止纵向滑动
		allowHorizontalScroll: false, //禁止横向滑动
		allowLink: false, //禁止节点有连线
		allowDrop: true, // 允许从左侧拖拽节点过来
		// allowDelete:false,禁止删除
	};
	//回调返回对象
	var bpmnData = {
		selectedNode: null,
		deleteSelection: deleteSelection
	};
	/**
	 * 设置选中节点
	 * @param {[Object]} node 
	 */
	function _setSelectNode(node) {
		bpmnData.selectedNode = node;
	};
	/**
	 * 取消选中项
	 * @param  {[Object]} diagram 
	 */
	function _clearSelection(diagram) {

		var otherDiagram = diagram.div.id === bpmnInfo.info[0].id ? outDiagram : inDiagram;
		if (otherDiagram.nodes.count && otherDiagram.selection.count) {
			otherDiagram.clearSelection();
		}
	};

	function deleteSelection() {
		inDiagram.commandHandler.deleteSelection();
		outDiagram.commandHandler.deleteSelection();
	};
	/**
	 * 鼠标拖拽释放事件
	 * @param  {[Event]} e 鼠标事件对象
	 */
	function mouseDrop(e) {

		var is = false, //true取消此次拖拽
			diagram = e.diagram,
			selection = diagram.selection,
			firstNode = selection.first();
		if(firstNode){
			firstNode.scale = 1.5;
			//输入区 bpmnInfo.info[0].id='mainCon-in'
			if (diagram.div.id === bpmnInfo.info[0].id) {
				//category类型===out 说明节点是输出区的节点禁止拖拽到输入区
				//key<0 说明该节点有多个(相同节点如果出现多个则key的值小于0),禁止拖拽
				if (firstNode.data.category === "out" || firstNode.data.key < 0) {
					is = true;
				}
			} else { //输出区
				if (firstNode.data.category === "in" || diagram.nodes.count > 1) {
					is = true;
				}
			}

			if (is) {
				diagram.currentTool.doCancel();
				//再次选中之前的节点
				if (bpmnData.selectedNode) {
					diagram.select(bpmnData.selectedNode);
				}
			} else {
				//取消另一个面板中选中项,禁止两个区域同时出现选中项
				_clearSelection(diagram);
				_setSelectNode(firstNode);
			}

			bpmnInfo.callBack(bpmnData);
		}
	};
	window.inDiagram =
		go$(go.Diagram, bpmnInfo.info[0].id, defaults, {
			nodeTemplateMap: nodeTemplateMap,
			mouseDrop: mouseDrop,
			'commandHandler.doKeyDown':function(){
				if(event.ctrlKey){
					return false;
				}
				go.CommandHandler.prototype.doKeyDown.call(this);
			}
		});
		
	/**
	 * 监听单击事件
	 * @param  {[Event]} e 鼠标事件
	 */
	inDiagram.addDiagramListener("ObjectSingleClicked", function(e) {
		_clearSelection(e.diagram);
		_setSelectNode(e.diagram.selection.first());
		bpmnInfo.callBack(bpmnData);

	});
	inDiagram.addDiagramListener("ChangedSelection", function(e) {
		if (!e.diagram.selection.count) {
			_setSelectNode(null);
			bpmnInfo.callBack(bpmnData);
		}
	});
	inDiagram.addDiagramListener("ChangedSelection",function(e){
		var firstNode=e.diagram.selection.first();
		if(firstNode){
			if(firstNode.data.category==='out'||firstNode.data.key<0){
				e.diagram.currentCursor = "no-drop";
				e.diagram.currentTool.doCancel();
			}else{
				firstNode.scale=1.5;
			}
			
		}
	});

	window.outDiagram =
		go$(go.Diagram,  bpmnInfo.info[1].id, defaults, {
			nodeTemplateMap: nodeTemplateMap,
			mouseDrop: mouseDrop,
		});

	outDiagram.addDiagramListener("ObjectSingleClicked", function(e) {
		_clearSelection(e.diagram);
		_setSelectNode(e.diagram.selection.first());
		bpmnInfo.callBack(bpmnData);
	});
	outDiagram.addDiagramListener("ChangedSelection", function(e) {
		if (!e.diagram.selection.count) {
			_setSelectNode(null);
			bpmnInfo.callBack(bpmnData);
		}
	});
	outDiagram.addDiagramListener("ChangedSelection",function(e){
		if(e.diagram.nodes.count>1){
			e.diagram.currentTool.doCancel();
		}
	});
	bpmnData.inDiagram = inDiagram;
	bpmnData.outDiagram = outDiagram;
	//------------------------------------------  Palette   ----------------------------------------------

	// Make sure the pipes are ordered by their key in the palette inventory
	function keyCompare(a, b) {
		var at = a.data.key;
		var bt = b.data.key;
		if (at < bt) return -1;
		if (at > bt) return 1;
		return 0;
	}

	function initModel(obj) {
		var dom=document.getElementById(obj.id);
		if(dom.childNodes.length){
			return ;
		}
		// initialize the first Palette, BPMN Spec Level 1
		var accordion =
			go$(go.Palette, obj.id, { // share the templates with the main Diagram
				nodeTemplateMap: palNodeTemplateMap,
				// layout: go$(go.GridLayout, {
				// 	cellSize: new go.Size(1, 1),
				// 	spacing: new go.Size(1, 1),
				// 	comparer: keyCompare
				// })
			});
		accordion.model = go$(go.GraphLinksModel, {
			copiesArrays: true,
			copiesArrayObjects: true,
			nodeDataArray: obj.nodeDataArray
		}); // end model	
	}
	
	bpmnData.initModel=initModel;
	return bpmnData;
} // end init