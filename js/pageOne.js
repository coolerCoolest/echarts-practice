var vm = new Vue({
	el: "#rrapp",
	data: {
		ehi: window.pageData.pageOne.ehi,
		texta: window.pageData.pageOne.Thistext,
		textQian: window.pageData.pageOne.qian,
		textHou: window.pageData.pageOne.hou,
		tableData: window.pageData.pageOne.tableData
	},
	methods: {
		jump: function() {
			window.location.href = "index.html";
		},
		barOne: function() {
			var myChart = echarts.init(document.getElementById('barOne'));
			var option = {
				backgroundColor: "rgba(0,0,0,0.2)",
				title: {
					text: "近5年EHI指数情况",
					textStyle: {
						color: '#FFFFFF',
						fontSize: '30',
						fontWeight: 'bold'
					},
					top: '5%',
					left: "4%"
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: { // 坐标轴指示器，坐标轴触发有效
						type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
					}
				},
				grid: {
					left: '4%',
					right: '4%',
					bottom: '13%',
					top: '20%',
					containLabel: true
				},
				legend: {
					data: ['全县', '社区', '乡村'],
					right: 30,
					bottom: 22,
					textStyle: {
						color: "#fff",
						fontSize: 20
					},
					itemWidth: 12,
					itemHeight: 10,
					// itemGap: 35
				},
				xAxis: {
					type: 'category',
					data: window.pageData.pageOne.barOneData.xdata,
					axisLine: {
						lineStyle: {
							color: '#45B664'
						}
					},
					axisLabel: {
						textStyle: {
							color: '#ffffff',
							fontSize: 14
						}
					},
				},

				yAxis: {
					type: 'value',
					axisLine: {
						show: false,
						lineStyle: {
							color: 'white'
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: 'rgba(255,255,255,0.3)'
						}
					},
					axisLabel: {}
				},
				series: [{
						name: '全县',
						type: 'bar',
						barWidth: '15%',
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#FD6666'
								}, {
									offset: 1,
									color: '#FE4545'
								}]),
								barBorderRadius: [12, 12, 0, 0],
							},
						},
						data: window.pageData.pageOne.barOneData.ydataOne
					},
					{
						name: '社区',
						type: 'bar',
						barWidth: '15%',
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#248ff7'
								}, {
									offset: 1,
									color: '#6851f1'
								}]),
								barBorderRadius: [12, 12, 0, 0],
							}

						},
						data: window.pageData.pageOne.barOneData.ydataTwo
					},
					{
						name: '乡村',
						type: 'bar',
						barWidth: '15%',
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#8bd46e'
								}, {
									offset: 1,
									color: '#09bcb7'
								}]),
								barBorderRadius: [12, 12, 0, 0],
							}
						},
						data: window.pageData.pageOne.barOneData.ydataThree
					}
				]
			};

			var app = {
				currentIndex: -1,
			};
			// setInterval(function() {
			// 	var dataLen = option.series[0].data.length;

			// 	// 取消之前高亮的图形
			// 	myChart.dispatchAction({
			// 		type: 'downplay',
			// 		seriesIndex: 0,
			// 		dataIndex: app.currentIndex
			// 	});
			// 	app.currentIndex = (app.currentIndex + 1) % dataLen;
			// 	//console.log(app.currentIndex);
			// 	// 高亮当前图形
			// 	myChart.dispatchAction({
			// 		type: 'highlight',
			// 		seriesIndex: 0,
			// 		dataIndex: app.currentIndex,
			// 	});
			// 	// 显示 tooltip
			// 	myChart.dispatchAction({
			// 		type: 'showTip',
			// 		seriesIndex: 0,
			// 		dataIndex: app.currentIndex
			// 	});

			// }, 1000);
			myChart.setOption(option);
		},
		lineOne: function() {
			var myChart = echarts.init(document.getElementById('line'));
			var option = {
				backgroundColor: "rgba(0,0,0,0.2)",
				title: {
					text: '近5年乡村EHI指数',
					x: '2%',
					top: '5%',
					textStyle: {
						color: '#FFFFFF',
						fontSize: '30',
						fontWeight: 'bold'
					},
				},
				legend: {
					top: '5%',
					data: ['2016', '2017', '2018', '2019', '2020'],
					right: 30,
					bottom: 22,
					textStyle: {
						color: "#fff",
						fontSize: 20
					},
					itemWidth: 12,
					itemHeight: 10,
				},
				tooltip: {
					// show: true
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					},
				},
				grid: {
					left: '5%',
					right: '5%',
					top: '13%',
					bottom: '10%',
					containLabel: true
				},
				xAxis: {
					axisLabel: {
						textStyle: {
							color: '#ffffff',
							fontSize: 14
						}
					},
					axisLine: {
						lineStyle: {
							color: '#45B664',
						}
					},
					data: window.pageData.pageOne.lineData.xdata
				},
				yAxis: {
					name: '',
					min: 100,
					max: 115,
					nameTextStyle: {
						color: '#ffffff',
						fontSize: 14
					},
					axisLabel: {
						textStyle: {
							color: '#ffffff',
							fontSize: 14
						},
						showMaxLabel: false
					},
					axisLine: {
						symbol: ['none', 'arrow'],
						symbolOffset: [0, 4],
						lineStyle: {
							color: '#707070'
						}
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: 'rgba(255,255,255,0.3)'
						}
					},
					boundaryGap: [0, 0.1]
				},
				series: [{
						name: '2016',
						type: 'line',
						symbolSize: 3,
						itemStyle: {
							normal: {
								lineStyle: {
									color: "#FFBF24",
									width: 8
								},
							}
						},
						//						itemStyle: {
						//							normal: {
						//								color: '#FFBF24',
						//								lineStyle: {
						//									color: "#FFBF24",
						//									width: 1
						//								},
						//								areaStyle: {
						//									color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
						//										offset: 0,
						//										color: 'rgba(255,191,36,0)'
						//									}, {
						//										offset: 1,
						//										color: 'rgba(255,191,36,0.2)'
						//									}]),
						//								}
						//							}
						//						},
						data: window.pageData.pageOne.lineData.dataOne
					},
					{
						name: '2017',
						type: 'line',
						symbolSize: 3,
						itemStyle: {
							normal: {
								lineStyle: {
									color: "#FF5A5A",
									width: 8
								},
							}
						},
						//						itemStyle: {
						//							normal: {
						//								color: '#FF5A5A',
						//								lineStyle: {
						//									color: "#FF5A5A",
						//									width: 1
						//								},
						//								areaStyle: {
						//									color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
						//										offset: 0,
						//										color: 'rgba(255,90,90,0)'
						//									}, {
						//										offset: 1,
						//										color: 'rgba(255,90,90,0.2)'
						//									}]),
						//								}
						//							}
						//						},
						data: window.pageData.pageOne.lineData.dataTwo
					},
					{
						name: '2018',
						type: 'line',
						symbolSize: 3,
						itemStyle: {
							normal: {
								lineStyle: {
									color: "#CF4ECF",
									width: 8
								},
							}
						},
						//						itemStyle: {
						//							normal: {
						//								color: '#CF4ECF',
						//								lineStyle: {
						//									color: "#CF4ECF",
						//									width: 1
						//								},
						//								areaStyle: {
						//									color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
						//										offset: 0,
						//										color: 'rgba(207,78,207,0)'
						//									}, {
						//										offset: 1,
						//										color: 'rgba(207,78,207,0.2)'
						//									}]),
						//								}
						//							}
						//						},
						data: window.pageData.pageOne.lineData.dataThree
					},
					{
						name: '2019',
						type: 'line',
						symbolSize: 3,
						itemStyle: {
							normal: {
								lineStyle: {
									color: "#00B4FF",
									width: 8
								},
							}
						},
						//						itemStyle: {
						//							normal: {
						//								color: '#00B4FF',
						//								lineStyle: {
						//									color: "#00B4FF",
						//									width: 1
						//								},
						//								areaStyle: {
						//									color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
						//										offset: 0,
						//										color: 'rgba(0,180,255,0)'
						//									}, {
						//										offset: 1,
						//										color: 'rgba(0,180,255,0.2)'
						//									}]),
						//								}
						//							}
						//						},
						data: window.pageData.pageOne.lineData.dataFour
					},
					{
						name: '2020',
						type: 'line',
						symbolSize: 3,
						itemStyle: {
							normal: {
								lineStyle: {
									color: "#24DA4E",
									width: 8
								},
							}
						},
						//						itemStyle: {
						//							normal: {
						//								color: '#24DA4E',
						//								lineStyle: {
						//									color: "#24DA4E",
						//									width: 1
						//								},
						//								areaStyle: {
						//									color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
						//										offset: 0,
						//										color: 'rgba(36,218,78,0)'
						//									}, {
						//										offset: 1,
						//										color: 'rgba(36,218,78,0.2)'
						//									}]),
						//								}
						//							}
						//						},
						data: window.pageData.pageOne.lineData.dataFive
					}
				]
			};
			myChart.setOption(option);
		},
		barTwo: function() {
			var myChart = echarts.init(document.getElementById('barTwo'))
			var option = {
				backgroundColor: "rgba(0,0,0,0.2)",
				title: {
					text: '近5年乡村EHI指数增速',
					x: '2%',
					top: '5%',
					textStyle: {
						color: '#FFFFFF',
						fontSize: '30',
						fontWeight: 'bold'
					},
				},
				"color": [
					"#1890ff",
					"#1f9"
				],
				"grid": {
					top: "25%",
					right: "5%",
					left: "5%",
					bottom: "8%",
				},
				tooltip: {
					// show: true
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					},
				},
				"legend": {
					top: "5%",
					right: 30,
					itemWidth: 10,
					itemHeight: 10,
					textStyle: {
						fontSize: 20,
						color: '#FFFFFF',
						padding: [3, 8, 0, 2]
					},
					data: ['EHI指数5年增速', '与全县均值的倍数', "全县平均增速"],
				},

				xAxis: [{
					type: "category",
					data: window.pageData.pageOne.barTwoData.xData,
					axisLine: {
						show: true,
					},
					axisTick: {
						show: false,
					},
					splitLine: {
						show: false,
					},
					axisLabel: {
						color: "#ffffff",
						interval: 0,
						textStyle: {
							fontSize: 14,
						},
						fontFamily: "LCDEF",
					},
				}, ],
				"yAxis": [{
						name: '',
						axisLine: {
							show: false,
							lineStyle: {
								color: '#ccc'
							}
						},
						type: "value",
						axisTick: {
							show: false,
						},
						splitLine: {
							"show": false,
							lineStyle: {
								"color": "#384267",
							}
						},
						axisLabel: {
							"formatter": "{value} %",
							color: "#ffffff",
							fontSize: "10",
						},
					},
					{
						"type": "value",
						"name": "",
						"position": "right",
						"splitLine": {
							"show": false
						},
						"axisPointer": {
							"show": true
						},
						"axisTick": {
							show: false
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: '#ffffff',
							}
						},
					}
				],
				"series": [{
						"type": "bar",
						"name": "EHI指数5年增速",
						"barWidth": "20",
						"data": window.pageData.pageOne.barTwoData.ydata,
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
										offset: 0,
										color: '#42B7FD',
									},
									{
										offset: 1,
										color: '#3299FF',
									},
								]),
								barBorderRadius: [12, 12, 0, 0],
							}

						}
					},
					{
						"type": "line",
						"name": "与全县均值的倍数",
						"yAxisIndex": 1,
						itemStyle: {
							color: '#FF9000',
						},
						symbolSize: 10,
						symbol: 'circle',
						"data": window.pageData.pageOne.barTwoData.ydataTow
					},
					{
						"type": "line",
						"name": "全县平均增速",
						"yAxisIndex": 1,
						itemStyle: {
							color: '#24FFB9',
						},
						symbolSize: 10,
						symbol: 'circle',
						"data": window.pageData.pageOne.barTwoData.pingjun
					}
				]
			};
			myChart.setOption(option);
		}
	},
	mounted: function() {
		this.barOne();
		this.lineOne();
		this.barTwo();
	}
})
