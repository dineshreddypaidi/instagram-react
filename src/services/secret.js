import CryptoJS from "crypto-js";

const SECRET_KEY = "^T^WTAGA@#Ebv";

export const decryptToken = (encryptedToken) => {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
};

export const encryptToken = (token) => {
    try{
      return CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
    }catch(err) {
      console.log(err);
    }
};