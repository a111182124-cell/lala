<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>我的海邊照片</title>
  <style>
    body {
      margin: 0;
      font-family: Arial;
      background: linear-gradient(to bottom, #87ceeb, #fdf6e3);
      text-align: center;
    }
    h1 {
      margin-top: 20px;
    }
    .card {
      margin: 20px auto;
      padding: 20px;
      max-width: 500px;
      background: white;
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    }
    img {
      width: 100%;
      border-radius: 15px;
    }
    input {
      margin-top: 15px;
    }
  </style>
</head>
<body>

  <h1>🌅 海邊照片展示</h1>

  <div class="card">
    <img id="photo" src="your-photo.jpg" alt="照片">
    <p>夕陽與海的美好瞬間</p>

    <input type="file" onchange="loadImage(event)">
  </div>

  <script>
    function loadImage(event) {
      const img = document.getElementById('photo');
      img.src = URL.createObjectURL(event.target.files[0]);
    }
  </script>

</body>
</html>