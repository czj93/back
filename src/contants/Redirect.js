import path from '../router/router_path'

export default {
    "/" : path.newCreateGame,   //index
    "/new_create/index" : path.newCreateGame, //newCreate
    "/my_game/index" : path.myGameEdit, //myGame
    "/label/index" : path.labelCreate,  //label
    "/all_game/index" : path.allGameCheckImprove,   //allGame
    "/admin/index" : path.adminUserCorpUser  //admin
}
