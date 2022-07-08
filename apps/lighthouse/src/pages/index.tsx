import React from "react";

type Props = {
  url: string;
  submit: (e: any) => void;
  changeUrl: (e: any) => void;
}

export const Welcome: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen page">
      <form className="space-y-5" onSubmit={props.submit}>
       <img src="https://media.discordapp.net/attachments/923838655523618826/993048527850704917/icon.png" width={100} height={100} className="mx-auto"></img>

       <input type="text" className="block px-4 py-3 text-sm border-gray-200 rounded-md w-[30rem] text-center bg-gray-100 focus:border-blue-500 focus:ring-blue-500" placeholder="โปรดประทานพรลิงค์ที่อยาจะทดสอบพยะค่ะ" name="url" onChange={e => props.changeUrl(e.target.value)} value={props.url} />
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white transition-all bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            เริ่มทดสอบ
          </button>
        </div>
      </form>
    </div>
  );
};
