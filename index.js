const array1 = new Array();
let piso_ruido = 0;
let contador = 0;
let menor = 0, maxi = 0;
const temp = new Array();
let aux = 0;


function convertirFrecuencia() {

    var frecuencia = parseInt(document.getElementById("frecuencia1").value);
    console.log(frecuencia);
    const combo = document.getElementById("unidadf");
    let selected = combo.options[combo.selectedIndex].text;
    var unidad = 0;

    console.log("Seleccionado " + selected);

    switch (selected) {
        case 'MHz':
            unidad = frecuencia;
            console.log(unidad);
            break;
        case 'kHz':
            unidad = Math.pow(10, -3) * frecuencia;
            console.log('Unidad MHz' + unidad);
            break;
        case 'Hz':
            unidad = Math.pow(10, -6) * frecuencia;
            console.log('Unidad MHz' + unidad);
            break;
        case 'GHz':
            unidad = Math.pow(10, 3) * frecuencia;
            console.log('Unidad MHz' + unidad);
            break;
    }
    console.log(unidad);
    return unidad;
}

function convertirBw() {

    let bw = document.getElementById("BW").value;

    const combo = document.getElementById("unidadbw");
    let selected = combo.options[combo.selectedIndex].text;
    let unidad = 0;

    console.log("Seleccionado " + selected);

    switch (selected) {
        case 'kHz':
            unidad = Math.pow(10, -3) * bw;
            console.log('Unidad MHz' + unidad);
            break;
        case 'Hz':
            unidad = Math.pow(10, -6) * bw;
            console.log('Unidad MHz' + unidad);
            break;
        case 'GHz':
            unidad = Math.pow(10, 3) * bw;
            console.log('Unidad MHz' + unidad);
            break;
        case 'MHz':
            unidad = bw;
            break;
    }
    return unidad;
}

function convertirPP() {

    let pp = document.getElementById("PP").value;

    const combo = document.getElementById("unidadpp");
    let selected = combo.options[combo.selectedIndex].text;
    let unidad = 0;

    console.log("Seleccionado " + selected);

    switch (selected) {
        case 'dBm':
            unidad = parseInt(pp);
            console.log('Unidad dBm' + unidad);
            break;
        case 'dBW':
            unidad = parseInt(pp) + 30;
            console.log('Unidad dBm' + unidad);
            break;
        case 'dBK':
            unidad = parseInt(pp) + 60;
            console.log('Unidad dBm' + unidad);
            break;
    }
    return unidad;
}

function viewarray() {
    var f1 = parseFloat(convertirFrecuencia());
    console.log(f1);
    var bw1 = parseFloat(convertirBw());
    var pp1 = parseFloat(convertirPP());
    var t1 = parseInt(document.getElementById('T').value);


    // Data retrieved from https://www.vikjavev.no/ver/snjomengd

    if (t1 > 0 && t1 < 373) {
        if (f1 <= 100 && f1 > 0) {
            if (bw1 <= 10 && bw1 > 0) {
                contador = contador + 1;
                document.getElementById('T').disabled = true;
                array1.push(f1); array1.push(bw1); array1.push(pp1);
                console.log("Piso de ruido " + piso_ruido);
                console.log('Contador ' + contador);
                if (contador == 1) {
                    piso_ruido = 10 * Math.log10((((t1) * (Math.pow(10, 6) * array1[1]) * (Math.pow(10, -23) * 1.38)) / ((Math.pow(10, -3) * 1))));
                    menor = array1[0] - array1[1];
                    maxi = array1[0] + array1[1];
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
                                    [((array1[0] - array1[1])), piso_ruido],
                                    [((array1[0] - (array1[1] / 2))), (array1[2] - 3)],
                                    [(array1[0]), array1[2]],
                                    [((array1[0]) + ((array1[1]) / 2)), (array1[2] - 3)],
                                    [((array1[0]) + (array1[1])), piso_ruido]
                                ]
                            },
                            {
                                name: 'ruido',
                                data: [
                                    [((array1[0] - array1[1])), piso_ruido],
                                    [((array1[0] - (array1[1] / 2))), piso_ruido],
                                    [(array1[0]), piso_ruido],
                                    [((array1[0]) + ((array1[1]) / 2)), piso_ruido],
                                    [((array1[0]) + (array1[1])), piso_ruido]
                                ]
                            }
                        ]
                    }

                    );
                } else if (contador == 2) {
                    if (array1[1] < array1[4]) {
                        aux = array1[1]/10;
                    } else{
                        aux = array1[4]/10;
                    }

                    piso_ruido = 10 * Math.log10((((t1) * (Math.pow(10, 6) * parseFloat(aux)) * (Math.pow(10, -23) * 1.38)) / ((Math.pow(10, -3) * 1))));
                    if ((array1[3] - array1[4]) < menor) {
                        menor = array1[3] - array1[4];
                    }
                    if ((array1[3] + array1[4]) > maxi) {
                        maxi = array1[3] + array1[4];
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
                                    [((array1[0] - array1[1])), piso_ruido],
                                    [((array1[0] - (array1[1] / 2))), (array1[2] - 3)],
                                    [(array1[0]), array1[2]],
                                    [((array1[0]) + ((array1[1]) / 2)), (array1[2] - 3)],
                                    [((array1[0]) + (array1[1])), piso_ruido]
                                ]
                            },
                            {
                                name: 'Señal 2',
                                data: [
                                    [((array1[3] - array1[4])), piso_ruido],
                                    [((array1[3] - (array1[4] / 2))), (array1[5] - 3)],
                                    [(array1[3]), array1[5]],
                                    [((array1[3]) + ((array1[4]) / 2)), (array1[5] - 3)],
                                    [((array1[3]) + (array1[4])), piso_ruido]
                                ]
                            },
                            {
                                name: 'ruido',
                                data: [
                                    [menor, piso_ruido],
                                    [((array1[0] - (array1[1] / 2))), piso_ruido],
                                    [(array1[0]), piso_ruido],
                                    [((array1[0]) + ((array1[1]) / 2)), piso_ruido],
                                    [maxi, piso_ruido]
                                ]
                            }
                        ]
                    }
                    );
                } else if (contador == 3) {
                    
                    if (array1[7]<aux) {
                        aux = array1[7]/10;
                    }
                    piso_ruido = 10 * Math.log10((((t1) * (Math.pow(10, 6) * parseFloat(aux)) * (Math.pow(10, -23) * 1.38)) / ((Math.pow(10, -3) * 1))));
                    
                    if ((array1[6] - array1[7]) < menor) {
                        menor = array1[6] - array1[7];
                    }
                    if ((array1[6] + array1[7]) > maxi) {
                        maxi = array1[6] + array1[7];
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
                                    [((array1[0] - array1[1])), piso_ruido],
                                    [((array1[0] - (array1[1] / 2))), (array1[2] - 3)],
                                    [(array1[0]), array1[2]],
                                    [((array1[0]) + ((array1[1]) / 2)), (array1[2] - 3)],
                                    [((array1[0]) + (array1[1])), piso_ruido]
                                ]
                            },
                            {
                                name: 'Señal 2',
                                data: [
                                    [((array1[3] - array1[4])), piso_ruido],
                                    [((array1[3] - (array1[4] / 2))), (array1[5] - 3)],
                                    [(array1[3]), array1[5]],
                                    [((array1[3]) + ((array1[4]) / 2)), (array1[5] - 3)],
                                    [((array1[3]) + (array1[4])), piso_ruido]
                                ]
                            },
                            {
                                name: 'Señal 3',
                                data: [
                                    [((array1[6] - array1[7])), piso_ruido],
                                    [((array1[6] - (array1[7] / 2))), (array1[8] - 3)],
                                    [(array1[6]), array1[8]],
                                    [((array1[6]) + ((array1[7]) / 2)), (array1[8] - 3)],
                                    [((array1[6]) + (array1[7])), piso_ruido]
                                ]
                            },
                            {
                                name: 'ruido',
                                data: [
                                    [menor, piso_ruido],
                                    [((array1[0] - (array1[1] / 2))), piso_ruido],
                                    [(array1[0]), piso_ruido],
                                    [((array1[0]) + ((array1[1]) / 2)), piso_ruido],
                                    [maxi, piso_ruido]
                                ]
                            }
                        ]
                    }
                    );
                } else if (contador == 4) {
                    if (array1[10]<aux) {
                        aux = array1[10]/10;
                    }
                    piso_ruido = 10 * Math.log10((((t1) * (Math.pow(10, 6) * parseFloat(aux)) * (Math.pow(10, -23) * 1.38)) / ((Math.pow(10, -3) * 1))));

                    if ((array1[9] - array1[10]) < menor) {
                        menor = array1[9] - array1[10];
                    }
                    if ((array1[9] + array1[10]) > maxi) {
                        maxi = array1[9] + array1[10];
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
                                    [((array1[0] - array1[1])), piso_ruido],
                                    [((array1[0] - (array1[1] / 2))), (array1[2] - 3)],
                                    [(array1[0]), array1[2]],
                                    [((array1[0]) + ((array1[1]) / 2)), (array1[2] - 3)],
                                    [((array1[0]) + (array1[1])), piso_ruido]
                                ]
                            },
                            {
                                name: 'Señal 2',
                                data: [
                                    [((array1[3] - array1[4])), piso_ruido],
                                    [((array1[3] - (array1[4] / 2))), (array1[5] - 3)],
                                    [(array1[3]), array1[5]],
                                    [((array1[3]) + ((array1[4]) / 2)), (array1[5] - 3)],
                                    [((array1[3]) + (array1[4])), piso_ruido]
                                ]
                            },
                            {
                                name: 'Señal 3',
                                data: [
                                    [((array1[6] - array1[7])), piso_ruido],
                                    [((array1[6] - (array1[7] / 2))), (array1[8] - 3)],
                                    [(array1[6]), array1[8]],
                                    [((array1[6]) + ((array1[7]) / 2)), (array1[8] - 3)],
                                    [((array1[6]) + (array1[7])), piso_ruido]
                                ]
                            },
                            {
                                name: 'Señal 4',
                                data: [
                                    [((array1[9] - array1[10])), piso_ruido],
                                    [((array1[9] - (array1[10] / 2))), (array1[11] - 3)],
                                    [(array1[9]), array1[11]],
                                    [((array1[9]) + ((array1[10]) / 2)), (array1[11] - 3)],
                                    [((array1[9]) + (array1[10])), piso_ruido]
                                ]
                            }, {
                                name: 'ruido',
                                data: [
                                    [menor, piso_ruido],
                                    [((array1[0] - (array1[1] / 2))), piso_ruido],
                                    [(array1[0]), piso_ruido],
                                    [((array1[0]) + ((array1[1]) / 2)), piso_ruido],
                                    [maxi, piso_ruido]
                                ]
                            }
                        ]
                    }
                    );
                } else {
                    alert("ERROR, no se pueden agregar más señales");
                }
            } else {
                alert("ERROR. El ancho de banda debe estar entre 0 y 10 MHz");
                bw1 = 0;
                f1 = 0;
                pp1 = 0;
            }
        } else {
            alert("ERROR. La frecuencia debe estar entre 0 y 100 MHz");
            bw1 = 0;
            f1 = 0;
            pp1 = 0;
        }
    } else {

        alert("ERROR. La temperatura debe estar entre 0 y  373 grados Kelvin");
        bw1 = 0;
        f1 = 0;
        pp1 = 0;
        t1 = 0;
    }
}

