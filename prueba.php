<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Gráfica Redes Inalámbricas</title>
</head>

<body>

    <?php
    $contador = 1;
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <nav class="navbar bg-primary">
        <div class="container-fluid">
            <div class="display-4" style="color: white;">
                Gráfica Redes Inalámbricas
            </div>
        </div>
    </nav>
    <div class="container" style="margin-top: 40px;">
        <div class="row">
            <div class="col"></div>
            <div class="col-6">
                <div class="form-group">
                    <label for="" class="form-label"> Frecuencia MHz</label>
                    <input type="number" min="0" max="100" name="frecuencia" placeholder="" class="form-control datoInput">
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Ancho de Banda MHz</label>
                    <input type="number" min="0" max="10" name="BW" id="BW" class="form-control datoInput">
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Potencia Pico dBm</label>
                    <input type="number" name="PP" id="PP" class="form-control datoInput">
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Temperatura</label>
                    <input type="number" min="0" max="373" name="T" id="T" class="form-control dato1">
                </div>
                <button type="submit" class="form-control btn btn-primary" name="subir" id="subir" onclick="viewarray()">Hecho</button>
            </div>
            <div class="col"></div>
        </div>
    </div>

    <script src='https://code.highcharts.com/highcharts.js'></script>
    <script src='https://code.highcharts.com/modules/series-label.js'></script>
    <script src='https://code.highcharts.com/modules/exporting.js'></script>
    <script src='https://code.highcharts.com/modules/export-data.js'></script>
    <script src='https://code.highcharts.com/modules/accessibility.js'></script>
    <figure class='highcharts-figure' style="margin-top: 40px;">
        <div id='container1'></div>
        <p class='highcharts-description'>
        </p>
    </figure>
    <script type='text/javascript' src='index.js'></script>


</body>