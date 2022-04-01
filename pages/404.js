
import { useEffect} from "react"
import { useRouter } from "next/router"
import notFoundStyle from '../styles/NotFound.module.css'

const ErrorPage = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        },3000)
    })
  return (
    <div className={notFoundStyle.imgContainer} >
        <img className={notFoundStyle.image} src="https://media.istockphoto.com/photos/error-404-3drendering-page-concept-picture-id1302333331?b=1&k=20&m=1302333331&s=170667a&w=0&h=t-4iFoxu6BLO002CSbv_F_S2b02xAiI5O1sYPjE92T8=" />
    </div>
  )
}

export default ErrorPage