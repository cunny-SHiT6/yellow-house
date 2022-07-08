import React from "react";

export const Processing: React.FC = () => {
  return (
    <div className="h-screen flex items-center justify-center px-8 page">
      <div className="space-y-4 max-w-32">
        <h1 className="text-2xl text-center text-gray-900">กำลังประมวณผล</h1>

        <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          <div
            className="flex flex-col justify-center overflow-hidden bg-yellow-500"
            role="progressbar"
            style={{
              width: "25%",
            }}
          ></div>
        </div>

        <h2 className="text-xs text-gray-400">
          คุณรู้ไหมว่า พระบาทสมเด็จพระเจ้าอยู่หัวภูมิพลอดุลยเดช รัชกาลที่ 9
          ได้พระราชทานทรัพย์ส่วนพระองค์สร้างโครงการอันหลากหลายในโครงการส่วนพระองค์สวนจิตรลดา
          ซึ่งแบ่งออกเป็น 2 ประเภทคือ โครงการแบบไม่ใช่ธุรกิจ
          เพื่อพัฒนาประสิทธิภาพการผลิตทางการเกษตร และโครงการกึ่งธุรกิจ อาทิ
          โรงโคนมสวนจิตรลดา, โรงนมผงสวนดุสิต, น้ำผึ้งสวนจิตรลดา เป็นต้น
        </h2>
      </div>
    </div>
  );
};
