

"use strict"

import React from 'react';

import { Card, CardTitle } from 'react-toolbox/lib/card';
import Dropdown from 'react-toolbox/lib/dropdown';

import _impScss from '../../../../scss/main/content/dashboard_content';

const campaigns = [
    {value: "All", label: "All Campaigns"}, 
    {value: "Campaign - 1", label: "Campaign - 1"}, 
    {value: "Campaign - 2", label: "Campaign - 2"},
    {value: "None", label: "No Created Campaign"}
]

class DashboardContent extends React.Component {
    
    constructor(){
        super();
        this.state = {
            value: "All"
        }
    }

    componentDidMount() {
        var chart_view = AmCharts.makeChart("chart_view_id", {
            "type": "serial",
            "theme": "light",
            "marginTop":5,
            "marginLeft": 10,
            "marginRight": 10,
            "dataProvider": [{
                "year": "1950",
                "value": 100
            }, {
                "year": "1951",
                "value": 345
            }, {
                "year": "1952",
                "value": 677
            }, {
                "year": "1953",
                "value": 100
            }, {
                "year": "1954",
                "value": 234
            }, {
                "year": "1955",
                "value": 289
            }, {
                "year": "1956",
                "value": 254
            }, {
                "year": "1957",
                "value": 345
            }, {
                "year": "1958",
                "value": 123
            }, {
                "year": "1959",
                "value": 256
            }, {
                "year": "1960",
                "value": 323
            }, {
                "year": "1961",
                "value": 234
            }, {
                "year": "1962",
                "value": 345
            }, {
                "year": "1963",
                "value": 456
            }, {
                "year": "1964",
                "value": 789
            }, {
                "year": "1965",
                "value": 456
            }, {
                "year": "1966",
                "value": 567
            }, {
                "year": "1967",
                "value": 567
            }, {
                "year": "1968",
                "value": 356
            }, {
                "year": "1969",
                "value": 677
            }, {
                "year": "1970",
                "value": 333
            }, {
                "year": "1971",
                "value": 567
            }, {
                "year": "1972",
                "value": 789
            }, {
                "year": "1973",
                "value": 786
            }, {
                "year": "1974",
                "value": 473
            }, {
                "year": "1975",
                "value": 546
            }, {
                "year": "1976",
                "value": 367
            }, {
                "year": "1977",
                "value": 478
            }, {
                "year": "1978",
                "value": 256
            }, {
                "year": "1979",
                "value": 364
            }, {
                "year": "1980",
                "value": 356
            }, {
                "year": "1981",
                "value": 400
            }, {
                "year": "1982",
                "value": 267
            }, {
                "year": "1983",
                "value": 378
            }, {
                "year": "1984",
                "value": 327
            }, {
                "year": "1985",
                "value": 456
            }, {
                "year": "1986",
                "value": 267
            }, {
                "year": "1987",
                "value": 467
            }, {
                "year": "1988",
                "value": 467
            }, {
                "year": "1989",
                "value": 456
            }, {
                "year": "1990",
                "value": 987
            }, {
                "year": "1991",
                "value": 1045
            }, {
                "year": "1992",
                "value": 1789
            }, {
                "year": "1993",
                "value": 1586
            }, {
                "year": "1994",
                "value": 346
            }, {
                "year": "1995",
                "value": 1746
            }, {
                "year": "1996",
                "value": 1492
            }, {
                "year": "1997",
                "value": 1234
            }, {
                "year": "1998",
                "value": 345
            }, {
                "year": "1999",
                "value": 1567
            }, {
                "year": "2000",
                "value": 1786
            }, {
                "year": "2001",
                "value": 456
            }, {
                "year": "2002",
                "value": 476
            }, {
                "year": "2003",
                "value": 1257
            }, {
                "year": "2004",
                "value": 1367
            }, {
                "year": "2005",
                "value": 1567
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left"
            }],
            "graphs": [{
                "id":"g1",
                "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                "bullet": "round",
                "bulletSize": 8,
                "lineColor": "#03aa22",
                "lineThickness": 2,
                "negativeLineColor": "#637bb6",
                "type": "smoothedLine",
                "valueField": "value"
            }],
            "chartScrollbar": {
                "graph":"g1",
                "gridAlpha":0,
                "color":"#888888",
                "scrollbarHeight":55,
                "backgroundAlpha":0,
                "selectedBackgroundAlpha":0.1,
                "selectedBackgroundColor":"#888888",
                "graphFillAlpha":0,
                "autoGridCount":true,
                "selectedGraphFillAlpha":0,
                "graphLineAlpha":0.2,
                "graphLineColor":"#c2c2c2",
                "selectedGraphLineColor":"#888888",
                "selectedGraphLineAlpha":1

            },
            "chartCursor": {
                "categoryBalloonDateFormat": "YYYY",
                "cursorAlpha": 0,
                "valueLineEnabled":true,
                "valueLineBalloonEnabled":true,
                "valueLineAlpha":0.5,
                "fullWidth":true
            },
            "dataDateFormat": "YYYY",
            "categoryField": "year",
            "categoryAxis": {
                "minPeriod": "YYYY",
                "parseDates": true,
                "minorGridAlpha": 0.1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": false
            }
        });

        var chart_cost = AmCharts.makeChart("chart_click_id", {
            "type": "serial",
            "theme": "light",
            "marginTop":5,
            "marginLeft": 10,
            "marginRight": 10,
            "dataProvider": [{
                "year": "1950",
                "value": -0.307
            }, {
                "year": "1951",
                "value": -0.168
            }, {
                "year": "1952",
                "value": -0.073
            }, {
                "year": "1953",
                "value": -0.027
            }, {
                "year": "1954",
                "value": -0.251
            }, {
                "year": "1955",
                "value": -0.281
            }, {
                "year": "1956",
                "value": -0.348
            }, {
                "year": "1957",
                "value": -0.074
            }, {
                "year": "1958",
                "value": -0.011
            }, {
                "year": "1959",
                "value": -0.074
            }, {
                "year": "1960",
                "value": -0.124
            }, {
                "year": "1961",
                "value": -0.024
            }, {
                "year": "1962",
                "value": -0.022
            }, {
                "year": "1963",
                "value": 0
            }, {
                "year": "1964",
                "value": -0.296
            }, {
                "year": "1965",
                "value": -0.217
            }, {
                "year": "1966",
                "value": -0.147
            }, {
                "year": "1967",
                "value": -0.15
            }, {
                "year": "1968",
                "value": -0.16
            }, {
                "year": "1969",
                "value": -0.011
            }, {
                "year": "1970",
                "value": -0.068
            }, {
                "year": "1971",
                "value": -0.19
            }, {
                "year": "1972",
                "value": -0.056
            }, {
                "year": "1973",
                "value": 0.077
            }, {
                "year": "1974",
                "value": -0.213
            }, {
                "year": "1975",
                "value": -0.17
            }, {
                "year": "1976",
                "value": -0.254
            }, {
                "year": "1977",
                "value": 0.019
            }, {
                "year": "1978",
                "value": -0.063
            }, {
                "year": "1979",
                "value": 0.05
            }, {
                "year": "1980",
                "value": 0.077
            }, {
                "year": "1981",
                "value": 0.12
            }, {
                "year": "1982",
                "value": 0.011
            }, {
                "year": "1983",
                "value": 0.177
            }, {
                "year": "1984",
                "value": -0.021
            }, {
                "year": "1985",
                "value": -0.037
            }, {
                "year": "1986",
                "value": 0.03
            }, {
                "year": "1987",
                "value": 0.179
            }, {
                "year": "1988",
                "value": 0.18
            }, {
                "year": "1989",
                "value": 0.104
            }, {
                "year": "1990",
                "value": 0.255
            }, {
                "year": "1991",
                "value": 0.21
            }, {
                "year": "1992",
                "value": 0.065
            }, {
                "year": "1993",
                "value": 0.11
            }, {
                "year": "1994",
                "value": 0.172
            }, {
                "year": "1995",
                "value": 0.269
            }, {
                "year": "1996",
                "value": 0.141
            }, {
                "year": "1997",
                "value": 0.353
            }, {
                "year": "1998",
                "value": 0.548
            }, {
                "year": "1999",
                "value": 0.298
            }, {
                "year": "2000",
                "value": 0.267
            }, {
                "year": "2001",
                "value": 0.411
            }, {
                "year": "2002",
                "value": 0.462
            }, {
                "year": "2003",
                "value": 0.47
            }, {
                "year": "2004",
                "value": 0.445
            }, {
                "year": "2005",
                "value": 0.47
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left"
            }],
            "graphs": [{
                "id":"g1",
                "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                "bullet": "round",
                "bulletSize": 8,
                "lineColor": "#d1655d",
                "lineThickness": 2,
                "negativeLineColor": "#637bb6",
                "type": "smoothedLine",
                "valueField": "value"
            }],
            "chartScrollbar": {
                "graph":"g1",
                "gridAlpha":0,
                "color":"#888888",
                "scrollbarHeight":55,
                "backgroundAlpha":0,
                "selectedBackgroundAlpha":0.1,
                "selectedBackgroundColor":"#888888",
                "graphFillAlpha":0,
                "autoGridCount":true,
                "selectedGraphFillAlpha":0,
                "graphLineAlpha":0.2,
                "graphLineColor":"#c2c2c2",
                "selectedGraphLineColor":"#888888",
                "selectedGraphLineAlpha":1

            },
            "chartCursor": {
                "categoryBalloonDateFormat": "YYYY",
                "cursorAlpha": 0,
                "valueLineEnabled":true,
                "valueLineBalloonEnabled":true,
                "valueLineAlpha":0.5,
                "fullWidth":true
            },
            "dataDateFormat": "YYYY",
            "categoryField": "year",
            "categoryAxis": {
                "minPeriod": "YYYY",
                "parseDates": true,
                "minorGridAlpha": 0.1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": false
            }
        });

        var chart_click = AmCharts.makeChart("chart_cost_id", {
            "type": "serial",
            "theme": "light",
            "marginTop":5,
            "marginLeft": 10,
            "marginRight": 10,
            "dataProvider": [{
                "year": "1950",
                "value": -0.307
            }, {
                "year": "1951",
                "value": -0.168
            }, {
                "year": "1952",
                "value": -0.073
            }, {
                "year": "1953",
                "value": -0.027
            }, {
                "year": "1954",
                "value": -0.251
            }, {
                "year": "1955",
                "value": -0.281
            }, {
                "year": "1956",
                "value": -0.348
            }, {
                "year": "1957",
                "value": -0.074
            }, {
                "year": "1958",
                "value": -0.011
            }, {
                "year": "1959",
                "value": -0.074
            }, {
                "year": "1960",
                "value": -0.124
            }, {
                "year": "1961",
                "value": -0.024
            }, {
                "year": "1962",
                "value": -0.022
            }, {
                "year": "1963",
                "value": 0
            }, {
                "year": "1964",
                "value": -0.296
            }, {
                "year": "1965",
                "value": -0.217
            }, {
                "year": "1966",
                "value": -0.147
            }, {
                "year": "1967",
                "value": -0.15
            }, {
                "year": "1968",
                "value": -0.16
            }, {
                "year": "1969",
                "value": -0.011
            }, {
                "year": "1970",
                "value": -0.068
            }, {
                "year": "1971",
                "value": -0.19
            }, {
                "year": "1972",
                "value": -0.056
            }, {
                "year": "1973",
                "value": 0.077
            }, {
                "year": "1974",
                "value": -0.213
            }, {
                "year": "1975",
                "value": -0.17
            }, {
                "year": "1976",
                "value": -0.254
            }, {
                "year": "1977",
                "value": 0.019
            }, {
                "year": "1978",
                "value": -0.063
            }, {
                "year": "1979",
                "value": 0.05
            }, {
                "year": "1980",
                "value": 0.077
            }, {
                "year": "1981",
                "value": 0.12
            }, {
                "year": "1982",
                "value": 0.011
            }, {
                "year": "1983",
                "value": 0.177
            }, {
                "year": "1984",
                "value": -0.021
            }, {
                "year": "1985",
                "value": -0.037
            }, {
                "year": "1986",
                "value": 0.03
            }, {
                "year": "1987",
                "value": 0.179
            }, {
                "year": "1988",
                "value": 0.18
            }, {
                "year": "1989",
                "value": 0.104
            }, {
                "year": "1990",
                "value": 0.255
            }, {
                "year": "1991",
                "value": 0.21
            }, {
                "year": "1992",
                "value": 0.065
            }, {
                "year": "1993",
                "value": 0.11
            }, {
                "year": "1994",
                "value": 0.172
            }, {
                "year": "1995",
                "value": 0.269
            }, {
                "year": "1996",
                "value": 0.141
            }, {
                "year": "1997",
                "value": 0.353
            }, {
                "year": "1998",
                "value": 0.548
            }, {
                "year": "1999",
                "value": 0.298
            }, {
                "year": "2000",
                "value": 0.267
            }, {
                "year": "2001",
                "value": 0.411
            }, {
                "year": "2002",
                "value": 0.462
            }, {
                "year": "2003",
                "value": 0.47
            }, {
                "year": "2004",
                "value": 0.445
            }, {
                "year": "2005",
                "value": 0.47
            }],
            "valueAxes": [{
                "axisAlpha": 0,
                "position": "left"
            }],
            "graphs": [{
                "id":"g1",
                "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
                "bullet": "round",
                "bulletSize": 8,
                "lineColor": "#d1655d",
                "lineThickness": 2,
                "negativeLineColor": "#637bb6",
                "type": "smoothedLine",
                "valueField": "value"
            }],
            "chartScrollbar": {
                "graph":"g1",
                "gridAlpha":0,
                "color":"#888888",
                "scrollbarHeight":55,
                "backgroundAlpha":0,
                "selectedBackgroundAlpha":0.1,
                "selectedBackgroundColor":"#888888",
                "graphFillAlpha":0,
                "autoGridCount":true,
                "selectedGraphFillAlpha":0,
                "graphLineAlpha":0.2,
                "graphLineColor":"#c2c2c2",
                "selectedGraphLineColor":"#888888",
                "selectedGraphLineAlpha":1

            },
            "chartCursor": {
                "categoryBalloonDateFormat": "YYYY",
                "cursorAlpha": 0,
                "valueLineEnabled":true,
                "valueLineBalloonEnabled":true,
                "valueLineAlpha":0.5,
                "fullWidth":true
            },
            "dataDateFormat": "YYYY",
            "categoryField": "year",
            "categoryAxis": {
                "minPeriod": "YYYY",
                "parseDates": true,
                "minorGridAlpha": 0.1,
                "minorGridEnabled": true
            },
            "export": {
                "enabled": false
            }
        });

        chart_view.addListener("rendered_view", zoomChart);
        if(chart_view.zoomChart){
            chart_view.zoomChart();
        }

        chart_click.addListener("rendered_click", zoomChart);
        if(chart_click.zoomChart){
            chart_click.zoomChart();
        }

        chart_cost.addListener("rendered_cost", zoomChart);
        if(chart_cost.zoomChart){
            chart_cost.zoomChart();
        }

        function zoomChart(){
            chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
        }
    }
    
    render () {
        return (
            <div style={{width: '100%', padding: '10px'}}>
                
                <div class="col-lg-12 col-md-12 col-sm-12" style={{padding: 0, margin:'5px 0px 5px 0px'}}>
                    <div class="col-lg-2 col-md-2 col-sm-12" />
                    <div class="col-lg-8 col-md-8 col-sm-12" style={{padding: 0, margin: 0}}>
                        <div class="col-lg-12 col-md-12 col-sm-12" style={{margin: 0, padding: 0}}>
                            <Card style={{width: '100%', overflow: 'visible'}}>
                                <div class="row col-lg-12 col-md-12 col-sm-12">
                                    <div class="col-lg-3 col-md-12 col-sm-12">
                                        <Dropdown
                                            auto
                                            onChange={(value)=>this.setState({value: value})}
                                            source={campaigns}
                                            value={this.state.value}/>
                                    </div>
                                    <div class="col-lg-9 col-md-12 col-sm-12">
                                        <div class="col-lg-3 col-md-12 col-sm-12" style={{padding: '10px', margin: 0}}>
                                            <p class={_impScss.statsDashboardContent}>Impressions</p>
                                            <h4><strong>10000000</strong></h4>
                                        </div>
                                        <div class="col-lg-3 col-md-12 col-sm-12" style={{padding: '10px', margin: 0}}>
                                            <p class={_impScss.statsDashboardContent}>Views</p>
                                            <h4><strong>10000000</strong></h4>
                                        </div>
                                        <div class="col-lg-3 col-md-12 col-sm-12" style={{padding: '10px', margin: 0}}>
                                            <p class={_impScss.statsDashboardContent}>Clicks</p>
                                            <h4><strong>10000000</strong></h4>
                                        </div>
                                        <div class="col-lg-3 col-md-12 col-sm-12" style={{padding: '10px', margin: 0}}>
                                            <p class={_impScss.statsDashboardContent}>Cost</p>
                                            <h4><strong>10000000</strong></h4>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12" />
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12" style={{margin:'5px 0px 5px 0px', padding: 0}}>
                    <div class="col-lg-2 col-md-2 col-sm-12" />
                    <div class="col-lg-8 col-md-8 col-sm-12" style={{padding: 0, margin: 0}}>
                        <Card style={{width: '100%', padding: '10px', overflow: 'visible'}}>
                            <div class="col-lg-12 col-md-12 col-sm-12" style={{padding: 0, margin: 0}}><strong>Cost</strong></div>
                            <div class="col-lg-12 col-md-12 col-sm-12" style={{padding: 0, margin: 0}}>
                                <div id="chart_cost_id" style={{height: '300px', width: '100%'}}></div>
                            </div>
                        </Card>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12" />
                </div>


                <div class="col-lg-12 col-md-12 col-sm-12" style={{margin:'5px 0px 5px 0px', padding: 0}}>
                    <div class="col-lg-2 col-md-2 col-sm-12" />
                    <div class="col-lg-8 col-md-8 col-sm-12" style={{padding: 0, margin: 0}}>
                        <Card style={{width: '100%', padding: '10px', overflow: 'visible'}}>
                            <div class="col-lg-12 col-md-12 col-sm-12" style={{padding: 0, margin: 0}}><strong>Views</strong></div>
                            <div class="col-lg-12 col-md-12 col-sm-12" style={{padding: 0, margin: 0}}>
                                <div id="chart_view_id" style={{height: '300px', width: '100%'}}></div>
                            </div>
                        </Card>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12" />
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12" style={{margin:'5px 0px 5px 0px', padding: 0}}>
                    <div class="col-lg-2 col-md-2 col-sm-12" />
                    <div class="col-lg-8 col-md-8 col-sm-12" style={{padding: 0, margin: 0}}>
                        <Card style={{width: '100%', padding: '10px', overflow: 'visible'}}>
                            <div class="col-lg-12 col-md-12 col-sm-12" style={{padding: 0, margin: 0}}><strong>Clicks</strong></div>
                            <div class="col-lg-12 col-md-12 col-sm-12" style={{padding: 0, margin: 0}}>
                                <div id="chart_click_id" style={{height: '300px', width: '100%'}}></div>
                            </div>
                        </Card>
                    </div>
                    <div class="col-lg-2 col-md-2 col-sm-12" />
                </div>

            </div>
        );
    }
}


export default DashboardContent;