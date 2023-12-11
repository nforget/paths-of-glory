"use strict"

const {constants: k, cards} = require("../data");
let game, states, rules
exports.init = function (g, s, r) {
    game = g
    states = s
    rules = r
}

exports.goto_play_rps = function (card) {
    rules.record_action(k.ACTION_RP, card)
    let cdata = cards[card]

    game.rp.ge += cdata.rpge ?? 0
    game.rp.ah += cdata.rpah ?? 0
    game.rp.fr += cdata.rpfr ?? 0
    game.rp.br += cdata.rpbr ?? 0
    game.rp.ru += cdata.rpru ?? 0
    game.rp.allied += cdata.rpa ?? 0
    game.rp.bu += cdata.rpbu !== undefined && game.war.bu ? cdata.rpbu : 0
    game.rp.it += cdata.rpit !== undefined && game.war.it ? cdata.rpit : 0
    game.rp.tu += cdata.rptu !== undefined && game.war.tu ? cdata.rptu : 0

    rules.discard_card(card, 'for rps')
    rules.goto_end_action()
}