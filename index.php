<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Gráfica Redes Inalámbricas</title>
</head>

<body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand">Gráfica Redes Inalámbricas</a>
        </div>
    </nav>
    <form action="./index.php" method="POST">
        <br>
        <div class="mb-3">
            <input type="number" name="frecuencia" id="frecuencia" placeholder="frecuencia">
            <input type="number" name="BW" id="BW" placeholder="BW">
            <input type="number" name="PP" id="PP" placeholder="Potencia Pico">
        </div>
        <input type="submit" class="btn btn-primary" name="subir" id="subir" value="Hecho">
    </form>


    <?php
    if (isset($_POST['subir'])) {

        $contador = $contador + 1;
        $vector = array($_POST['frecuencia'], $_POST['PP'], $_POST['BW']);
        $piso_ruido = -100;

        if ($contador == 1) {
            echo "
                    <script src='https://code.highcharts.com/highcharts.js'></script>
                    <script src='https://code.highcharts.com/modules/series-label.js'></script>
                    <script src='https://code.highcharts.com/modules/exporting.js'></script>
                    <script src='https://code.highcharts.com/modules/export-data.js'></script>
                    <script src='https://code.highcharts.com/modules/accessibility.js'></script>
                
                    <figure class='highcharts-figure'>
                        <div id='container'></div>
                        <p class='highcharts-description'>
                        </p>
                    </figure>
                
                    <script>
                        // Data retrieved from https://www.vikjavev.no/ver/snjomengd
                
                        Highcharts.chart('container', {
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
                                        [" . ($vector[0] - ($vector[2])) . ", " . $piso_ruido . "],
                                        [" . ($vector[0] - ($vector[2] / 2)) . ", " . ($vector[1] - 3) . "],
                                        [" . $vector[0] . "," . $vector[1] . "],
                                        [" . ($vector[0] + ($vector[2] / 2)) . ", " . ($vector[1] - 3) . "],
                                        [" . ($vector[0] + ($vector[2])) . ", " . $piso_ruido . "],
                                    ]
                                }
                            ]
                        });
                    </script>

                    <h1>$contador</h1>
                ";
        }
    }
    ?>

</body>

</html>