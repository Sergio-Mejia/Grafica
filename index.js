const array1 = new Array();
var piso_ruido=-100;
var contador= 0;
var menor=0,maxi=0;
const temp = new Array();
function viewarray(){
    var inputvalues= document.getElementsByClassName('datoInput'),
    namesValues= [].map.call(inputvalues, function(dataInput){
        array1.push(parseInt(dataInput.value));
    });
    var inputvalue1= document.getElementsByClassName('dato1'),
    namesValue1= [].map.call(inputvalue1, function(dataInput){
        temp.push(parseInt(dataInput.value));
    });

    console.log(temp[0]);
    
    contador=contador+1;
        // Data retrieved from https://www.vikjavev.no/ver/snjomengd

        if(contador==1){ 
            menor=array1[0] - array1[1];
            maxi=array1[0] + array1[1]
        Highcharts.chart('container1', {
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Gráfica de Señales'
            },
            subtitle: {
                text: 'Graficadora de máximo 4 señales'
            },
            xAxis: {
                type: 'text',
                title: {
                    text: 'MHz'
                },
                min: menor,
                max: maxi
            },
            yAxis: {
                title: {
                    text: 'dBm'
                },
                min: -150
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x:.2f}, {point.y:.2f}'
            },

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        radius: 2.5
                    }
                }
            },

            colors: ['#6CF', '#39F', '#06C', '#036', '#000'],


                series: [
                
                    {
                        name: 'Señal 1',
                        data: [
                            [((array1[0] - array1[1])), piso_ruido ],
                            [((array1[0] - (array1[1] / 2))), (array1[2] - 3)],
                            [(array1[0]), array1[2]],
                            [((array1[0]) + ((array1[1]) / 2)), (array1[2] - 3)],
                            [((array1[0]) + (array1[1])), piso_ruido]
                        ]
                    },
                    {
                        name: 'ruido',
                        data: [
                            [((array1[0] - array1[1])), piso_ruido ],
                            [((array1[0] - (array1[1] / 2))), piso_ruido],
                            [(array1[0]),piso_ruido],
                            [((array1[0]) + ((array1[1]) / 2)), piso_ruido],
                            [((array1[0]) + (array1[1])), piso_ruido]                            
                        ]
                    }
                ]
            }
            
        );
        }else if(contador ==2){
            if((array1[3]- array1[4])<menor){
                menor= array1[3]- array1[4];
            }
            if((array1[3]+ array1[4])>maxi){
                maxi= array1[3]+ array1[4];
            }
            Highcharts.chart('container1', {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Gráfica de Señales'
                },
                subtitle: {
                    text: 'Graficadora de máximo 4 señales'
                },
                xAxis: {
                    type: 'text',
                    title: {
                        text: 'MHz'
                    },
                    min: menor,
                    max: maxi
                },
                yAxis: {
                    title: {
                        text: 'dBm'
                    },
                    min: -150
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x:.2f}, {point.y:.2f}'
                },
    
                plotOptions: {
                    series: {
                        marker: {
                            enabled: true,
                            radius: 2.5
                        }
                    }
                },
    
                colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
    
    
                    series: [
                    
                        {
                            name: 'Señal 1',
                            data: [
                                [((array1[0] - array1[1])), piso_ruido ],
                                [((array1[0] - (array1[1] / 2))), (array1[2] - 3)],
                                [(array1[0]), array1[2]],
                                [((array1[0]) + ((array1[1]) / 2)), (array1[2] - 3)],
                                [((array1[0]) + (array1[1])), piso_ruido]
                            ]
                        },
                        {
                            name: 'Señal 2',
                            data: [
                                [((array1[3] - array1[4])), piso_ruido ],
                                [((array1[3] - (array1[4] / 2))), (array1[5] - 3)],
                                [(array1[3]), array1[5]],
                                [((array1[3]) + ((array1[4]) / 2)), (array1[5] - 3)],
                                [((array1[3]) + (array1[4])), piso_ruido]
                            ]
                        },
                        {
                            name: 'ruido',
                            data: [
                                [menor, piso_ruido ],
                                [((array1[0] - (array1[1] / 2))), piso_ruido],
                                [(array1[0]),piso_ruido],
                                [((array1[0]) + ((array1[1]) / 2)), piso_ruido],
                                [maxi, piso_ruido]                            
                            ]
                        }
                    ]
                }
            );
        }else if(contador ==3){
            if((array1[6]- array1[7])<menor){
                menor= array1[6]- array1[7];
            }
            if((array1[6]+ array1[7])>maxi){
                maxi= array1[6]+ array1[7];
            }
            Highcharts.chart('container1', {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Gráfica de Señales'
                },
                subtitle: {
                    text: 'Graficadora de máximo 4 señales'
                },
                xAxis: {
                    type: 'text',
                    title: {
                        text: 'MHz'
                    },
                    min: menor,
                    max: maxi
                },
                yAxis: {
                    title: {
                        text: 'dBm'
                    },
                    min: -150
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x:.2f}, {point.y:.2f}'
                },
    
                plotOptions: {
                    series: {
                        marker: {
                            enabled: true,
                            radius: 2.5
                        }
                    }
                },
    
                colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
    
    
                    series: [
                    
                        {
                            name: 'Señal 1',
                            data: [
                                [((array1[0] - array1[1])), piso_ruido ],
                                [((array1[0] - (array1[1] / 2))), (array1[2] - 3)],
                                [(array1[0]), array1[2]],
                                [((array1[0]) + ((array1[1]) / 2)), (array1[2] - 3)],
                                [((array1[0]) + (array1[1])), piso_ruido]
                            ]
                        },
                        {
                            name: 'Señal 2',
                            data: [
                                [((array1[3] - array1[4])), piso_ruido ],
                                [((array1[3] - (array1[4] / 2))), (array1[5] - 3)],
                                [(array1[3]), array1[5]],
                                [((array1[3]) + ((array1[4]) / 2)), (array1[5] - 3)],
                                [((array1[3]) + (array1[4])), piso_ruido]
                            ]
                        },
                        {
                            name: 'Señal 3',
                            data: [
                                [((array1[6] - array1[7])), piso_ruido ],
                                [((array1[6] - (array1[7] / 2))), (array1[8] - 3)],
                                [(array1[6]), array1[8]],
                                [((array1[6]) + ((array1[7]) / 2)), (array1[8] - 3)],
                                [((array1[6]) + (array1[7])), piso_ruido]
                            ]
                        },
                        {
                            name: 'ruido',
                            data: [
                                [menor, piso_ruido ],
                                [((array1[0] - (array1[1] / 2))), piso_ruido],
                                [(array1[0]),piso_ruido],
                                [((array1[0]) + ((array1[1]) / 2)), piso_ruido],
                                [maxi, piso_ruido]                            
                            ]
                        }
                    ]
                }
            );
        } else if(contador ==4){
            if((array1[9]- array1[10])<menor){
                menor= array1[9]- array1[10];
            }
            if((array1[9]+ array1[10])>maxi){
                maxi= array1[9]+ array1[10];
            }
            Highcharts.chart('container1', {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Gráfica de Señales'
                },
                subtitle: {
                    text: 'Graficadora de máximo 4 señales'
                },
                xAxis: {
                    type: 'text',
                    title: {
                        text: 'MHz'
                    },
                    min: menor,
                    max: maxi
                },
                yAxis: {
                    title: {
                        text: 'dBm'
                    },
                    min: -150
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x:.2f}, {point.y:.2f}'
                },
    
                plotOptions: {
                    series: {
                        marker: {
                            enabled: true,
                            radius: 2.5
                        }
                    }
                },
    
                colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
    
    
                    series: [
                    
                        {
                            name: 'Señal 1',
                            data: [
                                [((array1[0] - array1[1])), piso_ruido ],
                                [((array1[0] - (array1[1] / 2))), (array1[2] - 3)],
                                [(array1[0]), array1[2]],
                                [((array1[0]) + ((array1[1]) / 2)), (array1[2] - 3)],
                                [((array1[0]) + (array1[1])), piso_ruido]
                            ]
                        },
                        {
                            name: 'Señal 2',
                            data: [
                                [((array1[3] - array1[4])), piso_ruido ],
                                [((array1[3] - (array1[4] / 2))), (array1[5] - 3)],
                                [(array1[3]), array1[5]],
                                [((array1[3]) + ((array1[4]) / 2)), (array1[5] - 3)],
                                [((array1[3]) + (array1[4])), piso_ruido]
                            ]
                        },
                        {
                            name: 'Señal 3',
                            data: [
                                [((array1[6] - array1[7])), piso_ruido ],
                                [((array1[6] - (array1[7] / 2))), (array1[8] - 3)],
                                [(array1[6]), array1[8]],
                                [((array1[6]) + ((array1[7]) / 2)), (array1[8] - 3)],
                                [((array1[6]) + (array1[7])), piso_ruido]
                            ]
                        },
                        {
                            name: 'Señal 4',
                            data: [
                                [((array1[9] - array1[10])), piso_ruido ],
                                [((array1[9] - (array1[10] / 2))), (array1[11] - 3)],
                                [(array1[9]), array1[11]],
                                [((array1[9]) + ((array1[10]) / 2)), (array1[11] - 3)],
                                [((array1[9]) + (array1[11])), piso_ruido]
                            ]
                        },{
                            name: 'ruido',
                            data: [
                                [menor, piso_ruido ],
                                [((array1[0] - (array1[1] / 2))), piso_ruido],
                                [(array1[0]),piso_ruido],
                                [((array1[0]) + ((array1[1]) / 2)), piso_ruido],
                                [maxi, piso_ruido]                            
                            ]
                        }
                    ]
                }
            );
        }else{
            alert("ERROR, no se pueden agregar más señales");
        }
        

}

