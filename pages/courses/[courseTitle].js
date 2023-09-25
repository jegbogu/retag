import { useRouter } from "next/router"

function CourseDetails(){
  const router = useRouter()

  const {CourseTitle} = router.query

    return(
        <div>
            <h1>Hello this {CourseTitle}</h1>
        </div>
    )
}

export default CourseDetails