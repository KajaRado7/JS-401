function provjeri(lista, pojam){
  for(let i=0; i<10; i++){
    if(pojam == lista[i].ime || pojam == lista[i].prezime)  return true;

  }
  return false;
}

let lista = [
  {
    ime: "Marko",
    prezime: "Horvat",
    upisan: true,
  },
  {
    ime: "Ivana",
    prezime: "Marić",
    upisan: true,
  },
  {
    ime: "Nikolina",
    prezime: "Simetić",
    upisan: true,
  },
  {
    ime: "Josip",
    prezime: "Vukić",
    upisan: true,
  },
  {
    ime: "Gregor",
    prezime: "Buić",
    upisan: true,
  },
  {
    ime: "Ivo",
    prezime: "Srdan",
    upisan: true,
  },
  {
    ime: "Ana",
    prezime: "Vukoja",
    upisan: true,
  },
  {
    ime: "Igor",
    prezime: "Dobran",
    upisan: true,
  },
  {
    ime: "Marija",
    prezime: "Lalić",
    upisan: true,
  },
  {
    ime: "Dubravko",
    prezime: "Vošten",
    upisan: true,
  }
];

let pojam = "Marko";
if(provjeri(lista, pojam)){
  console.log('Student se nalazi na popisu');
}
else{
  console.log('Student se NE nalazi na popisu');
}
