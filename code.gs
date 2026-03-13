<!DOCTYPE html>
<html lang="th">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>ระบบสารสนเทศสำนักงานสภามหาวิทยาลัย</title>

<script src="https://cdn.tailwindcss.com"></script>

<link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;600&display=swap" rel="stylesheet">

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<style>

body{
font-family:'Prompt',sans-serif;
background:linear-gradient(135deg,#f1f5f9,#ffffff);
}

.portal-header{
background:linear-gradient(135deg,#1e3a8a,#2563eb);
color:white;
}

.card-system{
transition:0.3s;
}

.card-system:hover{
transform:translateY(-6px);
box-shadow:0 15px 30px rgba(0,0,0,0.15);
}

</style>

</head>


<body class="p-6 md:p-12">

<div class="max-w-6xl mx-auto">

<!-- HEADER -->

<div class="portal-header rounded-3xl p-10 shadow-xl text-center mb-10">

<h1 class="text-3xl md:text-4xl font-bold mb-2">
ระบบสารสนเทศสำนักงานสภามหาวิทยาลัย
</h1>

<p class="text-blue-100">
Office of the University Council Information System
</p>

</div>



<!-- SYSTEM GRID -->

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">


<!-- รายงานประชุม -->

<a href="https://script.google.com/a/macros/tu.ac.th/s/AKfycbwXSddzVsKjeIJX5RTfoYxnkBaK_Gmi21z_Yv9vo9ODrWBgK47sUYUqjyBifdeY4T1Thg/exec"
target="_blank">

<div class="card-system bg-white p-8 rounded-2xl border border-slate-200 shadow-md">

<div class="text-blue-600 text-3xl mb-3">
<i class="fa-solid fa-file-lines"></i>
</div>

<h2 class="text-xl font-bold mb-2">
ระบบสืบค้นรายงานการประชุม
</h2>

<p class="text-slate-500 text-sm">
ค้นหาข้อมูลการประชุม มติย่อ และเอกสารการประชุม
</p>

</div>

</a>



<!-- คำสั่ง ประกาศ -->

<a href="https://script.google.com/a/macros/tu.ac.th/s/AKfycbykr-1Lat0q8D1I2PW2TkpGjfMEB6SLuekzwF-Nl2u63WReaWoexROJKYb2EZi5t4wV/exec"
target="_blank">

<div class="card-system bg-white p-8 rounded-2xl border border-slate-200 shadow-md">

<div class="text-orange-600 text-3xl mb-3">
<i class="fa-solid fa-file-contract"></i>
</div>

<h2 class="text-xl font-bold mb-2">
ระบบสืบค้นคำสั่ง ประกาศ ข้อบังคับ
</h2>

<p class="text-slate-500 text-sm">
ค้นหาคำสั่ง ประกาศ และข้อบังคับที่เกี่ยวข้อง
</p>

</div>

</a>



<!-- เข็มเกียรติยศ -->

<a href="https://script.google.com/a/macros/tu.ac.th/s/AKfycbwo_2j-NQ5Sv5-KCCFufcLIcwLFevvMVnD2Bo7c1S3xFYrFHvk0kTUtxsZbMykYFp9F/exec"
target="_blank">

<div class="card-system bg-white p-8 rounded-2xl border border-slate-200 shadow-md">

<div class="text-red-600 text-3xl mb-3">
<i class="fa-solid fa-award"></i>
</div>

<h2 class="text-xl font-bold mb-2">
ระบบสืบค้นเข็มและโล่เกียรติยศ
</h2>

<p class="text-slate-500 text-sm">
ค้นหาข้อมูลเข็มและโล่เกียรติยศของมหาวิทยาลัย
</p>

</div>

</a>



<!-- ปริญญากิตติมศักดิ์ -->

<a href="https://script.google.com/a/macros/tu.ac.th/s/AKfycbyB_yPwV4rrkBZlzTCXZyp_L0-RmVAqhvlnrohfMe-YpSV8rmyWA1_IRcrCq89qLss/exec"
target="_blank">

<div class="card-system bg-white p-8 rounded-2xl border border-slate-200 shadow-md">

<div class="text-purple-600 text-3xl mb-3">
<i class="fa-solid fa-graduation-cap"></i>
</div>

<h2 class="text-xl font-bold mb-2">
ระบบสืบค้นปริญญากิตติมศักดิ์
</h2>

<p class="text-slate-500 text-sm">
ค้นหาข้อมูลผู้ได้รับปริญญากิตติมศักดิ์
</p>

</div>

</a>



</div>



<!-- FOOTER -->

<div class="text-center mt-12 text-sm text-slate-500">

© <span id="year"></span>  
สำนักงานสภามหาวิทยาลัยธรรมศาสตร์

</div>

</div>


<script>

document.getElementById("year").textContent=new Date().getFullYear()

</script>


</body>
</html>
