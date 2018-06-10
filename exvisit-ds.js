function getQueryParam(param) {
    var result =  window.location.search.match(
        new RegExp("(\\?|&)" + param + "(\\[\\])?=([^&]*)")
    );
    return result ? result[3] : false;
}
document.write("<b>Ingin mengunjungi " + getQueryParam("url") + "???</b>
");
document.write("Ini adalah halaman konfirmasi untuk memastikan apakah anda benar-benar ingin mengunjungi link diluar blog DizaShared.
Dengan melakukan klik pada link <b> Kunjungi " + getQueryParam("url") + " sekarang!</b> di bawah ini, Anda akan diarahkan langsung pada URL situs yang bersangkutan.
Terima kasih atas kunjungan Anda di DizaShared. Semoga anda bisa mendapatkan informasi lebih banyak melalui <u>" + getQueryParam("url") + "</u>.");
