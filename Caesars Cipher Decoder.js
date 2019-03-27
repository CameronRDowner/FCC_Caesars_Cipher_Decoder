function decodeCaesarsCipher(stringToDecode) { //in a string encoded in Caesars Cipher, each letter is shifted backwards 13 letters (eg. 'N' is 'A')
    function decodeCharacter(character) {
        let characterCode = character.charCodeAt(0);
        for (let iterations = 13; iterations > 0; iterations--) {
            if (characterCode >= 65 && characterCode < 90) {
                characterCode++;
            } else {
                characterCode = 65;
            }
        }
        return String.fromCharCode(characterCode);
    }
    return stringToDecode.replace(/[A-Z]/g, decodeCharacter);
}


decodeCaesarsCipher("SERR PBQR PNZC");