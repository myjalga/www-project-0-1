
/**
 * @description Handle for secure info, this will encrypt and decrypt the user's ID
 */
const _crypto = require('crypto');
const _cipher = _crypto.createCipher('aes192', '!@j*OENEL@lg@31989');



let _encrypt = _cipher.update(`${String(new Date().getTime())}-1`, 'utf8', 'hex');
_encrypt += _cipher.final('hex');
console.log(_encrypt);


const _decipher = _crypto.createDecipher('aes192', '!@j*OENEL@lg@31989');
let _decrypted = _decipher.update(_encrypt, 'hex', 'utf8');
_decrypted += _decipher.final('utf8');;
console.log(_decrypted);
