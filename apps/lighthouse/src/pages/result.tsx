import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  bruh: any;
  setscreen: () => void;
}

export const Result: React.FC<Props> = (props: Props) => {
  const [progress, setProgress] = React.useState(0);

  const convertLatintoThaiNumber = (str: string) => {
    const thaiNumber = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
    return str.replace(/[0-9]/g, (match: any) => thaiNumber[match]);
  };

  const convertPercentToClass = (percent: number) => {
    if (percent > 50) {
      return ["text-green-500", "#5FE86C", "#98F5A2"];
    } else if (percent > 0) {
      return ["text-orange-500", "#E8905F", "#F5CB98"];
    } else {
      return ["text-red-500", "#E85F5F", "#F59898"]
    }
  }

  const convertPercentToText = (percent: number) => {
    if (percent > 50) {
      return "เว็บไซต์ของคุณโครตรักชาติเลยพยะค่ะ ยินดีด้วย 🎉";
    } else if (percent > 0) {
      return "ควรแก้ไขเว็บของคุณเพื่อความมั่นคงต่อราชนาอาจักรมากขึ้นนะค่ะ";
    } else {
      return "เว็บคุณเป็นภัยความมั่นคงต่อราชนาอาจักรมากค่ะ"
    }
  }

  return (
    <div className={"w-full " + (props.bruh.data.score < 0 && 'bg-red-200')}>
      <div className="h-screen max-w-2xl px-8 mx-auto space-y-6 page">
        <div className="py-8 space-y-6">
          <h1 className="text-2xl text-center text-gray-800">
            สรุปผลของเว็บไซต์
          </h1>
          <div className={"flex justify-center " + convertPercentToClass(props.bruh.data.score)}>
            <div className="w-48 h-48">
              <CircularProgressbar
                value={(props.bruh.data.score < 0 ? -props.bruh.data.score : 0)}
                text={`${convertLatintoThaiNumber(`${props.bruh.data.score}`)}`}
                styles={{
                  path: {
                    stroke: convertPercentToClass(props.bruh.data.score)[1],
                  },
                  trail: {
                    stroke: convertPercentToClass(props.bruh.data.score)[2],
                  },
                  text: {
                    fill: convertPercentToClass(props.bruh.data.score)[1],
                    fontSize: "2rem",
                  },
                }}
              />
            </div>
          </div>
          <p className="text-lg text-center text-gray-600">
            {convertPercentToText(props.bruh.data.score)}
          </p>
        </div>
        <div className="space-y-2">
          {
            props.bruh.data.violations.map((item: any) => (
              <div className={"flex items-center p-4 rounded-md " + (item.severity === 1 ? 'bg-red-700 text-white' : 'bg-gray-100 text-gray-800')}>
                <div className="w-full space-y-[4px]">
                  <h1 className="text-xl ">{item.title}</h1>
                  <h2 className="text-sm">
                    {item.description}
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <h1>{item.violated && `-${item.violated}`}</h1>
                <div className={"w-4 h-4 rounded-full shadow" + (item.severity === 1 ? 'shadow-red-400 bg-red-500' : 'shadow-gray-400 bg-gray-500')}></div>
                </div>
              </div>
            ))
          }
        </div>

        <button onClick={props.setscreen}>กลับหน้าหลัก</button>
      </div>
    </div>
  );
};
