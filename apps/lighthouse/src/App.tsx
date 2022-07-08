import { Welcome } from "./pages"
import { useState } from "react"
import { Processing } from "./pages/processing"
import { Result } from "./pages/result"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const isURL = (str:string) => {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return pattern.test(str);
}

const MySwal = withReactContent(Swal)
const App = () => {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [man, setMan] = useState(null)

  const handleProcess = (e: any) => {
    e.preventDefault();
    if (url === "") {
      return MySwal.fire({
        title: <p>เกิดข้อผิดพลาด</p>,
        text: "กรุณาประธานพรอย่าเอาข้อความเปล่ามาให้ดิฉันตรวจสอบด้วยนะค่ะ [object Object]",
        icon: "success",
      })
    }
    if (!isURL(url)) {
      return MySwal.fire({
        title: <p>ใส่ลิงค์ให้พูกต้องสิคะ</p>,
        text: "กรุณาประธานพรใส่ลิค์ที่ถูกต้องมาให้ดิฉันตรวจสอบด้วยนะค่ะ",
        icon: "success",
      })
    }
    setIsLoading(true)

    fetch(`http://116.204.182.142/aaa?url=${url}`, {
      method: "GET",
    }).then(async (res) => {
      setMan(await res.json())
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <div>
      { !man && !isLoading && (<Welcome submit={handleProcess} changeUrl={setUrl} url={url}></Welcome>)}
      { !man && isLoading && (<Processing></Processing>)}
      { man && !isLoading && (<Result bruh={man} setscreen={() => setMan(null)}></Result>)}
    </div>
  )
}

export default App
