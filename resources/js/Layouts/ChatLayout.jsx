import { usePage } from '@inertiajs/react';

const ChatLayout = ({ children }) => {
    const page = usePage();
    const conversations = page.props.conversations;
    const selectedConversation = page.props.selectedConversation;

    console.log('conversations', conversations);
    console.log('selectedConversation', selectedConversation);

    return (
        <>
            <div>ChatLayout1111</div>
            <div>{children}</div>
        </>
    );
};

export default ChatLayout;
