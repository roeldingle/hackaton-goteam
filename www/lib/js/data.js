var chartOptions = {

	chart: { type: 'column'},
	title: {
		dialogReceiver: ''
	},
	xAxis: {
		categories: [     
			'2 Days',    
			'Yesterday',
			'Today',
		]
	},
	yAxis: {
		tickPositions: [0, 20, 40,  60,  80,  100],
			title: {
			dialogReceiver: ''
		},
		stackLabels: {
			enabled: true
		}
	},

	tooltip: {
		headerFormat: '<b>{point.x}</b><br/>',
		pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
	},
	plotOptions: {
		column: {
			stacking: 'normal',
			dataLabels: {
			    enabled: true
			}
		}
	},
	series: [{
		showInLegend: false,
		name: 'Attendance',
		data: [19, 16, 18],
	}, {
		showInLegend: false,
		name: 'Revenue',
		data: [32, 40, 38]
	},{
		showInLegend: false,
		name: 'NPS',
		data: [20, 26, 28]
	}, {
		showInLegend: false,
		name: 'Dynamics',
		data: [9,10, 8]
	}]

}

var team = [

	{
		name:"Koo Vergara",
		email:"kcvergara@straightarrow.com.ph",
		position:"Web Developer Specialist 2",
		shift:"6am to 3pm",
		theme:"#8bc34a"
	},
	{
		name:"Aerol Salcedo",
		email:"apsalcedo@straightarrow.com.ph",
		position:"Digital Project Manager Specialist 5",
		shift:"7am to 4pm",
		theme:"#ff9800"
	},
	{
		name:"Roy Niepes",
		email:"rlniepes@straightarrow.com.ph",
		position:"Web Developer Specialist 4",
		shift:"6am to 3pm",
		theme:"#9c27b0"
	},
	{
		name:"Fritz Roca",
		email:"fproca@straightarrow.com.ph",
		position:"Web Developer Specialist 4",
		shift:"6am to 3pm",
		theme:"#219653"
	}
];

var notification = [

	{
		title:"Team Monthly Huddle",
		date:"2017-05-24",
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		title:"Roel on leave",
		date:"2017-05-22",
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		title:"Finalize myHR filling",
		date:"2017-05-20",
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		title:"Bitbucket training in CNA c/o Koo",
		date:"2017-04-20",
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		title:"Party at Subic, Kamayan ..yeah!",
		date:"2017-04-20",
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	}
];

var attendance = [

	{
		date:"2017-05-24",
		status: "On-time",
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		date:"2017-05-23",
		status: "On-time",
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		date:"2017-05-22",
		status: "Late",
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		date:"2017-05-21",
		status: "On-leave",
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
];

var revenue = [

	{
		date:"2017-05-24",
		task: [
			{
			title: 'Task 1',
			hours : 4,
			status: 'Billed'
			},
			{
			title: 'Task 2',
			hours : 2,
			status: 'Un-Billed'
			},
			{
			title: 'Task 3',
			hours : 2,
			status: 'Billed'
			},

		]

	},{
		date:"2017-05-24",
		task: [
			{
			title: 'Task 1',
			hours : 4,
			status: 'Billed'
			},
			{
			title: 'Task 2',
			hours : 2,
			status: 'Un-Billed'
			},
			{
			title: 'Task 3',
			hours : 2,
			status: 'Billed'
			},

		]

	},
	{
		date:"2017-05-24",
		task: [
			{
			title: 'Task 1',
			hours : 4,
			status: 'Billed'
			},
			{
			title: 'Task 2',
			hours : 2,
			status: 'Un-Billed'
			},
			{
			title: 'Task 3',
			hours : 2,
			status: 'Billed'
			},

		]

	}
	
];


var nps = [

	{
		month:"May",
		score:"4.6"
	},
	{
		month:"April",
		score:"4.2"
	},
	{
		month:"March",
		score:"3.8"
	},
	{
		month:"February",
		score:"3.9"
	}
];


var dynamics = [

	{
		date:"2017-05-24",
		score: 10,
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		date:"2017-05-23",
		score: 8,
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		date:"2017-05-22",
		score: 8.5,
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	},
	{
		date:"2017-05-21",
		score: 9,
		message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sit amet ligula egestas euismod. Ut odio tellus, facilisis ac convallis eu, fringilla sed felis. Sed massa felis, dignissim ac ligula ac, suscipit fringilla tortor. Aliquam blandit porta lacus, et varius odio venenatis vitae. Aenean bibendum non enim eu pulvinar"
	}
	
];


var metrics = [

	{
		name:"Attendance",
		score:"4.6"
	},
	{
		name:"Revenue",
		score:"4.2"
	},
	{
		name:"NPS",
		score:"3.8"
	},
	{
		name:"Team Dynamics",
		score:"3.9"
	}
];




var dialogReceiver = ''; 
dialogReceiver += '<div id="dom-receiver" >';
dialogReceiver += 'Select Receiver(s)';
dialogReceiver += '<ons-list>';
dialogReceiver += '<ons-list-item tappable>';
dialogReceiver += '<label class="left">';
dialogReceiver += '<ons-input type="checkbox" id="check-all" input-id="check-all" onclick="checkall()" ></ons-input>';
dialogReceiver += '</label>';
dialogReceiver += '<label for="check-2" class="center">';
dialogReceiver += 'All';
dialogReceiver += '</label>';
dialogReceiver += '</ons-list-item>';
dialogReceiver += '<ons-list-item tappable>';
dialogReceiver += '<label class="left">';
dialogReceiver += '<ons-input type="checkbox" class="checkbox-input" input-id="check-2"></ons-input>';
dialogReceiver += '</label>';
dialogReceiver += '<label for="check-2" class="center">';
dialogReceiver += 'Koo Vergara';
dialogReceiver += '</label>';
dialogReceiver += '</ons-list-item>';
dialogReceiver += '<ons-list-item tappable>';
dialogReceiver += '<label class="left">';
dialogReceiver += '<ons-input type="checkbox" class="checkbox-input" input-id="check-2"></ons-input>';
dialogReceiver += '</label>';
dialogReceiver += '<label for="check-2" class="center">';
dialogReceiver += 'Aerol Salcedo';
dialogReceiver += '</label>';
dialogReceiver += '</ons-list-item>';
dialogReceiver += '<ons-list-item tappable>';
dialogReceiver += '<label class="left">';
dialogReceiver += '<ons-input type="checkbox" class="checkbox-input" input-id="check-2"></ons-input>';
dialogReceiver += '</label>';
dialogReceiver += '<label for="check-2" class="center">';
dialogReceiver += 'Roy Niepes';
dialogReceiver += '</label>';
dialogReceiver += '</ons-list-item>';
dialogReceiver += '<ons-list-item tappable>';
dialogReceiver += '<label class="left">';
dialogReceiver += '<ons-input type="checkbox" class="checkbox-input" input-id="check-2"></ons-input>';
dialogReceiver += '</label>';
dialogReceiver += '<label for="check-2" class="center">';
dialogReceiver += 'Fritz Roca';
dialogReceiver += '</label>';
dialogReceiver += '</ons-list-item>';
dialogReceiver += '</ons-list>';
