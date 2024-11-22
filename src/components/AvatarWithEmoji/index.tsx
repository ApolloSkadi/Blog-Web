import {useState} from "react";
import {Avatar} from "antd";

/**
 * 头像 附带 emoji标签
 */
const AvatarWithEmoji =  () => {

    const [userInfo] = useState({
        avatarUrl: '',
        emoji: '👀'
    })


    return (
        <>
            <div>
                <Avatar src={userInfo.avatarUrl}></Avatar>
                <div>
                    {userInfo.emoji}
                </div>
            </div>
        </>
    )
}
export default AvatarWithEmoji