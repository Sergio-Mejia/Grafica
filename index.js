var array1 = new Array();
var piso_ruido=-100;

function viewarray(){
    var inputvalues= document.getElementsByClassName('datoInput'),
    namesValues= [].map.call(inputvalues, function(dataInput){
        array1.push(dataInput.value);
    });

        console.log(array1[0]);
        console.log(array1[1]);
        console.log(array1[2]);
        var f=array1[0],bw=array1[1],pp=array1[2];
    
        // Data retrieved from https://www.vikjavev.no/ver/snjomengd

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
                min: -150
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
                        [((f - bw)), piso_ruido ],
                        [((f - (bw / 2))), (pp - 3)],
                        [(f), pp],
                        [((f) + ((bw) / 2)), (pp - 3)],
                        [((f) + (bw)), piso_ruido]
                    ]
                }
            ]
        });
}

