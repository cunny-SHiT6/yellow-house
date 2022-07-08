import type { Component } from 'solid-js';

const Cookie: Component = () => {

    const accept = () => {
        return alert("เราเข้าใจท่านแล้ว ไม่ต้องกดแล้ว")
    }
    return <>
    <div class="w-full bg-orange-500 bottom-0 fixed">
        <span class="float-left">
            <br></br>
            เราใช้คุกกี้เพื่อพัฒนาประสิทธิภาพ และประสบการณ์ที่ดีในการใช้เว็บไซต์ของคุณ คุณสามารถศึกษารายละเอียดได้ที่ นโยบายความเป็นส่วนตัว และสามารถจัดการความเป็นส่วนตัวเองได้ของคุณได้เองโดยคลิกที่ ตั้งค่า</span>
        <button class="p-4 bg-blue-500 float-right" onClick={accept}>
            ยอมรับ
        </button>
    </div>
    </>
}

export default Cookie;
