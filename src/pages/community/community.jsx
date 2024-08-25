import React, {useState} from 'react'
import './community.css';




const Community = () => {
  
    const [cur_messager, set_cur_messager] = useState('');

  
    return (
    
    <div>
    <div className="gap"></div>

    <div className='bigfellow'>
        <div className="leftfellow">
            <div className="topleft" onClick={()=>{
                set_cur_messager('');
            }}>Name of User</div>
            <div className="bottomleft">
                {/* for each messeger one div */}
                <div className="messeger" onClick={()=>{
                    set_cur_messager('messager1');
                }}>
                    messeger1
                </div>
                <div className="messeger" onClick={()=>{
                    set_cur_messager('messager2')
                }}>
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
    </div>
  )
}

export default Community
