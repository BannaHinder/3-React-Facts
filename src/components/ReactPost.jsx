import {useState} from 'react'
import PostLiked from './PostLiked'

const ReactPost = (props) =>{

    let [postLiked, setPostLiked] = useState(false)
const likePost = ()=>{
setPostLiked(!postLiked)
}

return (
<div className="ReactFact">
<h3>Q: {props.question}</h3>
<p>Answer: {props.answer}</p>
{postLiked?<PostLiked/> : (<button onClick={()=>{likePost()}}>LIKE</button>)}

</div>
)
}
export default ReactPost;