<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>

<body>
    <form action="./index.php" method="POST">
        <div>
            <input type="number" name="frecuencia" id="frecuencia" placeholder="frecuencia">
            <input type="number" name="BW" id="BW" placeholder="BW">
            <input type="number" name="PP" id="PP" placeholder="Potencia Pico">
        </div>
        <div>
            <input type="number" name="frecuencia2" id="frecuencia2" placeholder="frecuencia">
            <input type="number" name="BW2" id="BW2" placeholder="BW">
            <input type="number" name="PP2" id="PP2" placeholder="Potencia Pico">
        </div>
        <div>
            <input type="number" name="frecuencia3" id="frecuencia3" placeholder="frecuencia">
            <input type="number" name="BW3" id="BW3" placeholder="BW">
            <input type="number" name="PP3" id="PP3" placeholder="Potencia Pico">
        </div>
        <input type="submit" name="subir" id="subir" value="Hecho">
    </form>

        
    <?php
    if (isset($_POST['subir'])) {

        $frecuencia = $_POST['frecuencia'];
        $PP = $_POST['PP'];
        $BW = $_POST['BW']; 

        $frecuencia2 = $_POST['frecuencia2'];
        $PP2 = $_POST['PP2'];
        $BW2 = $_POST['BW2']; 

        $frecuencia3 = $_POST['frecuencia3'];
        $PP3 = $_POST['PP3'];
        $BW3 = $_POST['BW3']; 



        $piso_ruido = -100;

        echo "
        <script src='https://code.highcharts.com/highcharts.js'></script>
        <script src='https://code.highcharts.com/modules/series-label.js'></script>
        <script src='https://code.highcharts.com/modules/exporting.js'></script>
        <script src='https://code.highcharts.com/modules/export-data.js'></script>
        <script src='https://code.highcharts.com/modules/accessibility.js'></script>
    
        <figure class='highcharts-figure'>
            <div id='container'></div>
            <p class='highcharts-description'>
                This demo visualizes a data set with irregular time intervals.
                Highcharts comes with sophisticated functionality for dealing
                with time data, including support for different time zones and
                irregular intervals.
            </p>
        </figure>
    
        <script>
            // Data retrieved from https://www.vikjavev.no/ver/snjomengd
    
            Highcharts.chart('container', {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'Snow depth at Vikjafjellet, Norway'
                },
                subtitle: {
                    text: 'Irregular time data in Highcharts JS'
                },
                xAxis: {
                    type: 'text',
                    title: {
                        text: 'Date'
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
                    pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
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
                            [".($frecuencia-($BW)).", ".$piso_ruido."],
                            [".($frecuencia-($BW/2)).", ".($PP-3)."],
                            [".$frecuencia.",".$PP."],
                            [".($frecuencia+($BW/2)).", ".($PP-3)."],
                            [".($frecuencia+($BW)).", ".$piso_ruido."],
                        ]
                    }, {
                        name: 'Señal 2',
                        data: [
                            [".($frecuencia2-($BW2)).", ".$piso_ruido."],
                            [".($frecuencia2-($BW2/2)).", ".($PP2-3)."],
                            [".$frecuencia2.",".$PP2."],
                            [".($frecuencia2+($BW2/2)).", ".($PP2-3)."],
                            [".($frecuencia2+($BW2)).", ".$piso_ruido."],
                        ]
                    }, {
                        name: 'Señal 3',
                        data: [
                            [".($frecuencia3-($BW3)).", ".$piso_ruido."],
                            [".($frecuencia3-($BW3/2)).", ".($PP3-3)."],
                            [".$frecuencia3.",".$PP3."],
                            [".($frecuencia3+($BW3/2)).", ".($PP3-3)."],
                            [".($frecuencia3+($BW3)).", ".$piso_ruido."],
                        ]
                    }
                ]
            });
        </script>
        ";
    }
    ?>

</body>

</html>