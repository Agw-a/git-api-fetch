import {format} from 'date-fns'
import { Link } from 'react-router-dom'


const Repository = (props) => {
  return (
    <div className='repo-card'>
      <div className='name'>
        <p>{props.name}</p>
      </div>

     
     <div className='text-repo'>
      <p>This repo was created on {format(new Date(props.created_at), 'dd MMM yyy')} by {" "} {props.owner.login}</p>
    </div>
    <div>
      <div>
        {props.private ? <p id='private'>Private</p> : <p id='public'>Public</p>}
    </div>
    <div>
        {props.fork ? <p id='forked'>Forked</p> : <p id='not-forked'>Owned</p>}
    </div>
      </div>
    <Link to={`/All-repos/${props.name}`}>Repo Details</Link>
    </div>
    
  )
}

export default Repository;
