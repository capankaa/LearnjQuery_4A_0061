const inputTugas = $("#inputTugas");
const inputTanggal = $("#inputTanggal");
const btnTambah = $("#btnTambah");
const daftarTugas = $("#daftarTugas");

btnTambah.on("click", function() {

    let teksTugas = inputTugas.val();
    let tanggalTugas = inputTanggal.val();

    if(teksTugas === ""){
        alert("Masukkan Data Terlebih Dahulu!");
        return;
    }

    let listbaru = $("<li></li>");

    let spanbaru = $("<span></span>");
    spanbaru.html(teksTugas);
    listbaru.append(spanbaru);

    let tanggalbaru = $("<span></span>");
    tanggalbaru.html(tanggalTugas);
    listbaru.append(tanggalbaru);

    let btnHapus = $("<button></button>");
    btnHapus.html("Hapus");
    btnHapus.addClass("hapus");

    btnHapus.on("click", function() {
        listbaru.remove();
    });

    listbaru.append(btnHapus);

    let btnEdit = $("<button></button>");
    btnEdit.html("Edit");
    btnEdit.addClass("edit");

    btnEdit.on("click", function() {
        let editTugas = prompt("Edit Tugas");
        spanbaru.html(editTugas);
    });

    listbaru.append(btnEdit);

    let statusTugas = $("<select></select>");

    let progress = $("<option></option>");
    progress.html("Progress");
    statusTugas.append(progress);

    let done = $("<option></option>");
    done.html("Done");
    statusTugas.append(done);

    statusTugas.on("change", function() {

        if(statusTugas.val() === "Done"){
            spanbaru.addClass("done");
            spanbaru.removeClass("progress");
        }

        if(statusTugas.val() === "Progress"){
            spanbaru.addClass("progress");
            spanbaru.removeClass("done");
        }

    });

    listbaru.append(statusTugas);

    daftarTugas.append(listbaru);

    const warnabaru = $("li");
    warnabaru.each(function(index) {
        if(index % 2 === 0){
            $(this).css("color", "blue");
        } else {
            $(this).css("color", "red");
        }
    });

    inputTugas.val("");
    inputTanggal.val("");

});