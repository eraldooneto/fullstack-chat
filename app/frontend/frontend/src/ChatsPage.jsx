import { MultiChatSocket, MultiChatWindow, useMultiChatLogic, useSingleChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('c8984229-a835-4bfd-801d-2ee522da0782', props.user.username, props.user.secret);

    return <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
}

export default ChatsPage