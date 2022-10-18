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
        $contador=1;
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand">Gráfica Redes Inalámbricas</a>
        </div>
    </nav>
    <div class="container">
        <div class="row mt-4">
            <div class="col-lg-3">
                <div class="card">
                    <div class="card-body">
                        <div class="form-group">
                            <input type="number" name="frecuencia" placeholder="frecuencia" class="form-control datoInput">
                        </div>
                        <div class="form-group">
                            <input type="number" name="BW" id="BW" placeholder="BW" class="form-control datoInput">
                        </div>
                        <div class="form-group">
                            <input type="number" name="PP" id="PP" placeholder="Potencia Pico" class="form-control datoInput">
                        </div>
                        <div class="form-group">
                            <input type="number" name="T" id="T" placeholder="Temperatura" class="form-control dato1">
                        </div>                        
                        <button type="submit" class="btn btn-primary" name="subir" id="subir" onclick="viewarray()">Hecho</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src='https://code.highcharts.com/highcharts.js'></script>
    <script src='https://code.highcharts.com/modules/series-label.js'></script>
    <script src='https://code.highcharts.com/modules/exporting.js'></script>
    <script src='https://code.highcharts.com/modules/export-data.js'></script>
    <script src='https://code.highcharts.com/modules/accessibility.js'></script>
    <figure class='highcharts-figure'>
        <div id='container1'></div>
        <p class='highcharts-description'>
        </p>
    </figure>
    <script type='text/javascript' src='index.js'></script>

    
</body>