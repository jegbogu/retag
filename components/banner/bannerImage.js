import classes from './bannerImage.module.css'
 

function BannerImg(){
    return(
        <div className={classes.figure}>
            <img src="../../food.png" alt="banner Image"/>
        </div>
    )
}
export default BannerImg