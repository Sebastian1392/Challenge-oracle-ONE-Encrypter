document.getElementById('messagesPanel').style.display = 'none';
const keys = {'a': 'ai', 'e':'enter','i':'imes','o':'ober','u':'ufat'}

function encryptAndCopyMessage(isEncrypt) {
    message = document.getElementById('inputMessage').value.toLowerCase();
    messageEncrypted = (isEncrypt) ? encryptMessage(message) : unencryptMessage(message);
    if (messageEncrypted != '') {
        textAreaMessage = document.getElementById('message');
        textAreaMessage.value = messageEncrypted;
        document.getElementById('noMessagesPanel').style.display = 'none';
        document.getElementById('messagesPanel').style.display = 'block';
        document.getElementById('inputMessage').value = '';
    }
}

function encryptMessage(message) {
    messageEncrypt = ''
    for (let index = 0; index < message.length; index++) {
        let character = message.charAt(index);
        messageEncrypt += (keys[character] != null)? keys[character]: character;
    }
    return messageEncrypt;
}

function unencryptMessage(message) {
    messageUnencrypt = '';
    for (let index = 0; index < message.length; index++) {
        let character = message.charAt(index);
        if (keys[character] != null) {
            message = message.replace(keys[character], character);
        }
        messageUnencrypt += character;
    }
    return messageUnencrypt  ;
}

function copyText() {
    let text = document.getElementById('message').value;
    navigator.clipboard.writeText(text);
}