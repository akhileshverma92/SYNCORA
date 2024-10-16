import React from 'react'
import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
function index() {
    const { id } = useParams();
    const mymeeting = async (element) => {
        const appID = Number(import.meta.env.VITE_APPID);
        const serverSecret = import.meta.env.VITE_SERVERSECRET;
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            id,
            Date.now().toString(),
            "akkyyy"
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks:[
                {
                    name: 'copy link',
                    url: 'https://localhost:3000/room/'+id,
                }
            ]
            ,
            scenario: {
                mode:ZegoUIKitPrebuilt.OneONoneCall,

            },
            showScreenSharingButton: true,

        })
    }
    return <div>
        <div id="zego" style={{ height: '100vh', width: '100%' }} ref={mymeeting}></div>
    </div>
};


export default index