<?php

/**
 * @filesource modules/index/views/index.php
 *
 * @copyright 2016 Goragod.com
 * @license http://www.kotchasan.com/license/
 *
 * @see http://www.kotchasan.com/
 */

namespace Index\Index;

/*
 * default View
 *
 * @author Goragod Wiriya <admin@goragod.com>
 *
 * @since 1.0
 */

class View extends \Kotchasan\View
{
    public function render()
    {
    }
}
?>

<html>

<head>
    <meta charset=utf-8>
    <link href="https://fonts.googleapis.com/css?family=Itim&subset=thai,latin" rel="stylesheet" type="text/css">
    <link href="modules/index/views/style.css" rel="stylesheet" type="text/css">
    <meta name=viewport content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body style="font-family: Itim" class="flex flex-col items-center text-center">
    <div class=warper style="display:block">
        <div class="warper">
            <div>
                <div class="elephant">
                    <div class="body"></div>
                    <div class="tail"></div>
                    <div class="head">
                        <div class="trunk"></div>
                        <div class="ear"></div>
                        <div class="eye"></div>
                    </div>
                </div>
                <p class="text-3xl font-bold">ทีมนวัตกรรมเพื่อพ่อหลวง ภูมิใจนำเสนอ</p>
                <p class="text-5xl font-bold">บ้านสีเหลือง</p>
                <p class="text-2xl font-bold">นวัตกรรมที่ได้รับแรงบันดาลใจมาจากบ้านแสง ที่จะคอยช่วยตรวจสอบความรักชาติของเว็บไซต์ของคุณ</p>
            </div>
        </div>
        <p class="text-slate-700">เว็บนี้เขียนโดยใช้ Kotchasan 🐘🐘🐘</p>

        <ul class="text-blue-500 hover:text-blue-600">
            <li><a href="https://github.com/cunny-SHiT6/yellow-house/blob/main/presentation.pptx">สไลด์นำเสนอ</a></li>
            <li><a href="https://github.com/cunny-SHiT6/yellow-house">ซอร์สโค้ดทั้งหมด (โมโนลิโพ และ โมโนคอมหมิด)</a></li>
            <li><a href="http://รักชาติ.gusbell.tech:1111/">ลองเล่น</a></li>
            <li><a href="https://yellow-house-rak.vercel.app/">ตัวอย่างเว็บรักชาติ</a></li>
            <li><a href="https://yellow-house-not-rak.vercel.app/">ตัวอย่างเว็บชังชาติ</a></li>
        </ul>

        <div class="h-24"></div>
        <a class="text-5xl text-blue-500 hover:text-blue-600" href="https://www.brikl.com/jobs">https://www.brikl.com/jobs</a>
    </div>
</body>

</html>