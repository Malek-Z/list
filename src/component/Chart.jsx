import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

import '../css/chart.css';

 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Chart extends Component {	
	render() {
		const chartOne = {
			animationEnabled: true,
			title: {
				text: "Cours en ligne"
			},
			data: [{
				type: "doughnut",
				showInLegend: true,
				dataPoints: [
					{ name: "Done", y: 69 },
					{ name: "Todo", y: 31 },
				]
			}]
		}
        const chartTwo = {
			animationEnabled: true,
			title: {
				text: "Devoirs_maison"
			},
			data: [{
				type: "doughnut",
				showInLegend: true,
				dataPoints: [
					{ name: "Done", y: 69 },
					{ name: "Todo", y: 31 },
				]
			}]
		}
        const chartTr = {
			animationEnabled: true,
			title: {
				text: "Administration"
			},
			data: [{
				type: "doughnut",
				showInLegend: true,
				dataPoints: [
					{ name: "Done", y: 69 },
					{ name: "Todo", y: 31 },
				]
			}]
		}
		
		return (
		<div className='coll'>
            <div className='card'>
			    <CanvasJSChart options = {chartOne} containerProps={{ width: '100%', height: '250px' }}/>
            </div>
            <div className='card'>
                <CanvasJSChart options = {chartTwo} containerProps={{ width: '100%', height: '250px' }}/>
            </div>
            <div className='card'>
                <CanvasJSChart options = {chartTr} containerProps={{ width: '100%', height: '250px' }}/>
            </div>
		</div>
		);
	}
}
 
export default Chart; 