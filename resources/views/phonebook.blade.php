<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('public/css/app.css')}}">
</head>
<body>
    <div id="app">
            <div class="container">
                    <Myheader style="font-size: 20px"></Myheader>
                    <router-view></router-view>
                    <Myfooter></Myfooter>
            </div>
    </div>

    <script src="{{asset('public/js/app.js')}}"></script>
</body>
</html>