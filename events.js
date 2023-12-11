// === CARD EVENTS ===

const data = require("./data");
let game = {}

exports.init = function (g) {
    game = g
}

exports.guns_of_august = {
    can_play() {
        return (game.turn == 1 && game.cp.actions.length == 0)
    },
    play() {
        rules.push_undo()

        // TODO: Destroy the Liege fort

        game.cp.ws += data.cards[data.constants.GUNS_OF_AUGUST].ws

        game.location[data.constants.GE_1_ARMY] = data.constants.LIEGE
        game.location[data.constants.GE_2_ARMY] = data.constants.LIEGE
        game.activated.attack.push(data.constants.LIEGE)
        game.activated.attack.push(data.constants.KOBLENZ)
        game.control[data.constants.LIEGE] = 1
        game.events.guns_of_august = true

        rules.start_action_round()
    }
}

exports.rape_of_belgium = {
    can_play() {
        return game.events.guns_of_august && game.ap.commitment == data.constants.COMMITMENT_MOBILIZATION
    },
    play() {
        rules.push_undo()

        game.ap.ws += data.cards[data.constants.RAPE_OF_BELGIUM].ws
        game.vp -= 1

        rules.goto_end_action()
    }
}
