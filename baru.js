var mobil = [
    {
        merek : 'toyota',
        nama : 'supra',
        pintu : 2,
    },
    {
        merek : 'toyota',
        nama : 'kijang innova',
        pintu :  4,
    },
    {
        merek : 'mitsubushi',
        nama : 'expander',
        pintu : 4,
    },
    {
        merek : 'toyota',
        nama : 'FT 86',
        pintu : 2,
    },
    {
        merek : 'ferari',
        nama : 'laferari',
        pintu : 2,
    },
]
let b = parseInt(prompt("tentukan jumlah pintu: "));
const mobilPintu = mobil.filter((mobil) => mobil.pintu === b);
console.log(mobilPintu);
document.write(mobilPintu);