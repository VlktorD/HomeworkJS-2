function askForMoney() {
    var money = prompt("Колку пари имаш? Внеси износ:");

    if (money === null || money.trim() === "") {
        console.log("Не внесовте ништо!");
    } else {
        money = parseFloat(money);

        if (isNaN(money)) {
            console.log("Внесовте невалидна сума.");
        } else {
            if (money < 50) {
                console.log("Имаш малку пари. Можеш да купиш кафе.");
            } else if (money >= 50 && money <= 200) {
                console.log("Имаш пристојна сума. Можеш да одиш на ручек.");
            } else {
                console.log("Имаш доволно пари! Можеш да одиш на патување.");
            }
        }
    }
}
