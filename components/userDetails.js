function UserDetails(props){
    return(
        <div>
            <h1>{props.username}</h1>
            <hr/>
            <h4>{props.email}</h4>
           
        </div>
    )
}

export default UserDetails