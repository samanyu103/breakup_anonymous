import React, {useState} from 'react'
import './community.css';




const Community = () => {
  
    const [cur_messager, set_cur_messager] = useState('messager1');

  
    return (
    <div className='bigfellow'>
        <div className="leftfellow">
            <div className="topleft" >Name of User</div>
            <div className="bottomleft">
                {/* for each messeger one div */}
                <div className="messeger">
                    messeger1
                </div>
                <div className="messeger">
                    messeger2
                </div>
            </div>
        </div>
        <div className="rightfellow">
            <div className="topright">
                <div className={cur_messager==''? "friends" : "not-active"}>Friends</div>
                <div className={cur_messager==''? "not-active" : "cur-messager"}>{cur_messager}</div>
            </div>

            <div className="bottomright">

            </div>
            
            
            <div className="sendpanel">
                <input type="text" placeholder='enter message' className='inputmsg'/>
                <button class="send-btn" type="submit">Send</button>

            </div>
        </div>
        
    </div>
  )
}

export default Community
