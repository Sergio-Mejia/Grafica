<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="./index.php" method="POST">
        <input type="number" name="frecuencia" id="frecuencia" placeholder="frecuencia">
        <input type="number" name="BW" id="BW" placeholder="BW">
        <input type="number" name="PP" id="PP" placeholder="Potencia Pico">
        <input type="submit" name="subir" id="subir" value="Hecho">
    </form>

        <script type='text/javascript'>
            google.charts.load('current', {
                'packages': ['line']
            });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {

                var data = new google.visualization.DataTable();
                data.addColumn('number', 'Day');
                data.addColumn('number', 'Guardians of the Galaxy');
                data.addColumn('number', 'The Avengers');
                data.addColumn('number', 'Transformers: Age of Extinction');

                data.addRows([
                    [1, 37.8, 80.8, 41.8],
                    [2, 30.9, 69.5, 32.4],
                    [3, 25.4, 57, 25.7],
                    [4, 11.7, 18.8, 10.5],
                    [5, 11.9, 17.6, 10.4],
                    [6, 8.8, 13.6, 7.7],
                    [7, 7.6, 12.3, 9.6],
                    [8, 12.3, 29.2, 10.6],
                    [9, 16.9, 42.9, 14.8],
                    [10, 12.8, 30.9, 11.6],
                    [11, 5.3, 7.9, 4.7],
                    [12, 6.6, 8.4, 5.2],
                    [13, 4.8, 6.3, 3.6],
                    [14, 4.2, 6.2, 3.4]
                ]);

                var options = {
                    chart: {
                        title: 'Box Office Earnings in First Two Weeks of Opening',
                        subtitle: 'in millions of dollars (USD)'
                    },
                    width: 900,
                    height: 500
                };

                var chart = new google.charts.Line(document.getElementById('linechart_material'));

                chart.draw(data, google.charts.Line.convertOptions(options));
            }
        </script>
        
    <?php
    if (isset($_POST['subir'])) {

        $frecuencia = $_POST['frecuencia'];
        $PP = $_POST['PP'];
        $BW = $_POST['BW']; 

        $piso_ruido = -100;

        echo "
        <script type='text/javascript' src='https://www.gstatic.com/charts/loader.js'></script>
        <script type='text/javascript'>
            google.charts.load('current', {
                'packages': ['line']
            });
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {

                var data = new google.visualization.DataTable();
                data.addColumn('number', 'Frecuencia');
                data.addColumn('number', 'señal 1');
                data.addColumn('number', 'señal 2');


                data.addRows([
                    [".($frecuencia-($BW)).", ".$piso_ruido.",".$piso_ruido."],
                    [".($frecuencia-($BW/2)).", ".($PP-3).",".$piso_ruido."],
                    [".$frecuencia.", ".$PP.",".$piso_ruido."],
                    [".($frecuencia+($BW/2)).", ".($PP-3).",".$piso_ruido."],
                    [".($frecuencia+($BW)).", ".$piso_ruido.",".$piso_ruido."],
                ]);

                data.addRows([
                    [70, ".$piso_ruido.",".$piso_ruido."],
                    [75,".$piso_ruido.",5],
                ]);



                var options = {
                    chart: {
                        title: 'Visualizacion de señales de radiofrecuencia',
                        subtitle: 'dBm'
                    },
                    width: 900,
                    height: 500
                };

                var chart = new google.charts.Line(document.getElementById('linechart_material'));

                chart.draw(data, google.charts.Line.convertOptions(options));
            }
        </script>
        <div id='linechart_material' style='width: 900px; height: 500px'></div>
        ";
    }
    ?>

</body>

</html>