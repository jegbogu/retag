import classes from './bannerBtn.module.css'
function BannerBtn(props){
    return(
        <div className={classes.btn}>
            <button>{props.btn}</button>
        </div>
    )
}
export default BannerBtn