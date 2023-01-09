const bcrypt = require('bcrypt')
const auth = require('../../../auth');

const TABLE = 'auth'

module.exports = (StoreToUse) =>{

    let store = StoreToUse || require('../../../store/dummy');

    function list() {
        return store.list(TABLE);
    }

    async function login(username, password){
        const data = await store.query(TABLE, { username: username});
        if( await bcrypt.compare(password, data.password)){
            return auth.sign(data);
        } else{
            throw new Error('Información invalida')
        }
    }

    async function upsert(data){
        const authData = {
            id: data.id,
        }
        if(data.username){
            authData.username = data.username;
        }
        if(data.password){
            authData.password = await bcrypt.hash(data.password, 5);
        }
        return await store.upsert(TABLE, authData);
    }
    

    return{
        upsert,
        login,
        list
    }
}
