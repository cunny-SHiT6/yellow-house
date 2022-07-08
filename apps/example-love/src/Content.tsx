import { Component } from "solid-js";

const Content: Component = () => {
  return (
    <div class='w-full p-1'>
      <div style='font-family: rakChartHard' class='w-full text-4xl'>ล่าสุด</div>
      <div class='h-130 flex m-1 overflow-x-scroll'>
        <div class='w-64 h-120 border-2 rounded-xl p-1 mx-1'>
          <img src='/assets/banffp.png' class='w-full object-cover h-1/2'></img>
          <div style='font-family: rakChart-Bold' class='w-full h-1/8 text-2xl'>
            แบนอนาคตใหม่
          </div>
          <div style='font-family: rakChart-Normal' class='w-full h-1/4 text-m'>
            แบนอนาคตใหม่ พรรคชังชาติ ต้องการปฏิรูปสถาบันกษัตริย์ สถาบันดีอยู่แล้ว จะเปลี่ยนแปลงให้แย่ลงไปทำไม? มาร่วมด้วยช่วยกันกดดันพรรคให้เลิกเล่นการเมือง
          </div>
        </div>
        <div class='w-64 h-120 border-2 rounded-xl p-1 mx-1'>
          <img src='/assets/no3keebaowguncha.png' class='w-full object-cover h-1/2'></img>
          <div style='font-family: rakChart-Bold' class='w-full h-1/8 text-2xl'>
            กัญชาไม่ผิด สามกีบที่ผิด
          </div>
          <div style='font-family: rakChart-Normal' class='w-full h-1/4 text-m'>
            สามกีบต้องการโจมตีรัฐบาล ปากบอกบุหรี่ผูกขาด รัฐเลยให้กัญชา กระท่อมเสรี ก็ยังด่ากัญชาอีก สรุปคือสามกีบด่าทุกเรื่องที่รัฐออกนโยบาย แต่ลงทะเบียนทุกอย่างที่รัฐแจกให้ฟรี ต้องการโจมตีทุกที่ที่รัฐอาศัย สงสัยนานๆไปก็โจมตีประเทศ เผาบ้านเผาเมือง
          </div>
        </div>
        <div class='w-64 h-120 border-2 rounded-xl p-1 mx-1'>
          <img src='/assets/r10grad.jpg' class='w-full object-cover h-1/2'></img>
          <div style='font-family: rakChart-Bold' class='w-full h-1/8 text-l'>
            รัชกาลที่ ๑๐ ทรงคิดค้นการรับปริญญาผ่านภาพ
          </div>
          <div style='font-family: rakChart-Normal' class='w-full h-1/4 text-m'>
            รัชกาลที่ ๑๐ ทรงคิดค้นการรับปริญญาผ่านภาพ เพื่อให้ในหลวงท่านได้ทรงงานอื่นพร้อมๆกัน แต่ยังคงเก็บไว้ซึ่งเกียรติจากการรับปริญญาจากราชวงศ์
          </div>
        </div>
        <div class='w-64 h-120 border-2 rounded-xl p-1 mx-1'>
          <img src='/assets/takkie.jpg' class='w-full object-cover h-1/2'></img>
          <div style='font-family: rakChart-Bold' class='w-full h-1/8 text-l'>
            โทนี่ หรืออดีตนายกทักษิณ หลอกลวงคนไทยผ่านออนไลน์
          </div>
          <div style='font-family: rakChart-Normal' class='w-full h-1/4 text-m'>
            โทนี่ หรืออดีตนายกทักษิณ หลอกลวงคนไทยผ่านออนไลน์ โดยการถ่ายทอดสดผ่านสื่อสังคมออนไลน์ ซึ่งมีเยาวชนจำนวนมาก รู้ๆกันว่า เด็กๆพวกนี้มันคิดเองไม่ได้หรอก โดนหลอกกันมาทั้งนั้น อย่าทำให้บ้านเมืองเดือดร้อนไปมากกว่านี้ มันมากพอแล้วจากการที่พวกเผาไทยกับคณะร่านมาพยายามขายชาติ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;