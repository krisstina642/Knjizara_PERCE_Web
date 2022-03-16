import { Injectable } from '@angular/core';
import { Knjiga } from 'src/Klase/knjiga';
import { Preporuka } from 'src/Klase/preporuka';

@Injectable({
  providedIn: 'root'
})
export class KnjigeServiceService {
  private sveKnjige=[
    {
        "id":0,
        "naziv": "Igre gladi - Sjaj slobode",
        "autor": "Suzanne Collins",
        "cena": 800, 
        "opis": "DA LI BI MOGAO DA PREŽIVIŠ SAM U DIVLJINI, DOK SE SVI TRUDE DA TI ONEMOGUĆE DA ŽIV DOČEKAŠ JUTRO?\n\n U ruševinama područja nekada poznatog pod imenom Severna Amerika, nalazi se zemlja Panem, sa blistavim glavnim gradom Kapitolom i dvanaest distrikta. Kapitol je surov i okrutan, drži distrikte u pokornosti tako što ih primorava da svake godine šalju po jednog dečaka i jednu devojčicu, od dvanaest do osamnaest godina, koji će učestvovati u Igrama gladi – borbi do smrti koju uživo prenosi televizija.\n\nŠesnaestogodišnja Ketnis Everdin, koja živi sa majkom i mlađom sestrom, smatra da je potpisala sebi smrtnu presudu kada se dobrovoljno prijavila da učestvuje u Igrama umesto sestre. Međutim, bila je na vratima smrti i ranije – preživljavanje je njena druga priroda. Mada joj to nije bila namera, postala je pravi borac. Međutim, ako želi da pobedi, moraće da bira između preživljavanja i humanosti, između života i ljubavi.\nAvantura i romansa stapaju se u ovom uzbudljivom romanu čija se radnja odvija u budućnosti koja na veoma zabrinjavajući način podseća na našu sadašnjost.",
        "slika": "/assets/image/knjiga1.png",
        "ocena": 4.5,
        "godina": 2009,
        "broj_strana":287,
        "promocija":1
    },
     {
        "id":1,
        "naziv": "Harry Potter - Zatvorenik iz Askabana",
        "autor": "J.K.Rowling",
        "cena": 1000,
        "opis": "Treća hogvortska godina je na pragu, a leto koje joj prethodi kao da nikada nije bilo duže... Darslijevi, suroviji nego ikada pre, muštraju i maltretiraju Harija za svaku sitnicu. Za to vreme, zemlja je u strahu i panici. I to oba njena sveta, i normalski I čarobnjački. Razlog je Sirijus Blek, jezivi i monstruozni ubica koji je pobegao iz najbolje čuvanog zatvora na svetu – Askabana, kako bi podmirio još nekoliko starih računa... Romori se da mu je cilj samo jedan – sam Hari Poter koji mu pripada na neki sasvim poseban način... ",
        "slika": "/assets/image/knjiga2.png",
        "ocena": 4.1,
        "godina": 2015,
        "broj_strana":336,
        "promocija":1
    },
     {
        "id":2,
        "naziv": "Starac i more",
        "autor": "Ernest Hemingvej",
        "cena": 1200,
        "opis": "Starac i more je verovatno najpoznatiji roman najpoznatijeg pisca na svetu. Priča o ribaru sa Kube koji se tokom tri dana bori sa silama prirode da preživi na otvorenom moru. Ali i sa svojom ljudskom naravi koja, sačinjena od slabosti, ponosa, strahova i svesti o svojoj krhkoj prirodi, može veoma lako postati i glavni protivnik u borbi za život. \n Pred čitaocima je ponovo remek-delo neprolazne vrednosti koje jednostavnim, a živim, ubedljivim i majstorski izvedenim jezikom obrađuje temu hrabrosti da se iznađe lična pobeda u susretu sa očiglednim porazom. Potvrda za ovo je što je Starac i more jedan od samo devet romana koja je Nobelov komitet ikada eksplicitno naveo u svom obrazloženju za odluku o dodeljivanju najveće književne nagrade na svetu. Hemingvej nam je ovim delom ostavio kolosalni dokaz svog književnog genija i veličanstveni doprinos književnosti XX veka.",
        "slika": "/assets/image/knjiga4.png",
        "ocena": 4.7,
        "godina": 2009,
        "broj_strana":103,
        "promocija":0
    },
     {
        "id":3,
        "naziv": "Životinjska farma",
        "autor": "Džordž Orvel",
        "cena": 1300,
        "opis": "Kultna knjiga XX veka.\n „Slabi ili jaki, pametni ili priprosti, svi smo mi braća. Nijedna životinja nikad ne sme ubiti neku drugu. Sve životinje su jednake.\n A sada, drugovi, ispričaću vam šta sam prošle noći sanjao. Ne mogu vam opisati taj san. Bio je to san o tome kako će zemlja izgledati pošto Čovek sa nje iščezne. Ali podsetio me je na nešto što sam odavno već zaboravio.“\nPovod za nastanak Životinjske farme nalazio se u Orvelovoj analizi posledica Ruske revolucije koja je prerasla u totalitarni režim i diktaturu stvorenu oko kulta ličnosti, kao i u njegovom iskustvu stečenom tokom Španskog građanskog rata. Iako je javnost često insistirala na momentu kritike sovjetske vlasti, Orvel je uvek naglašavao da se Životinjska farma iako prvenstveno satira o Ruskoj revoluciji, odnosi na svaku nasilnu revoluciju koju predvode nemarni ljudi gladni vlasti. „Hteo sam da naravoučenije bude da revolucije donose radikalno poboljšanje samo kada su mase budne i znaju kako da zbace svoje vođe čim ovi obave svoj posao. Trebalo je da prekretnica u priči bude trenutak kada svinje zadrže mleko i jabuke za sebe“, isticao je Orvel razočaran što je čitaocima možda promakao ovaj ključni momenat teksta. \n I pored piščeve bojazni, ova alegorijska antiutopija odmah je privukla veliku pažnju. Danas se smatra jednim od najboljih romana XX veka, postala je neizostavna lektira svakog savremenog čitaoca, a 1996. godine dobila je nagradu Hugo. Danas je možda više nego ikad pre potrebno da ovo delo čitamo i razumemo.\n „Sve životinje su jednake,\n ali neke životinje su jednakije \n od drugih.“ \n Post scriptum \n Orvel je za prvo izdanje napisao predgovor pod naslovom Sloboda štampe. Izdavač je odbio da ga štampa. Tekst je bio gotovo zaboravljen do 1972. godine, kada je objavljen u Književnom dodatku Timesa. Sada se prvi put pojavljuje na srpskom jeziku.",
        "slika": "/assets/image/knjiga5.png",
        "ocena": 5,
        "godina": 1999,
        "broj_strana":160,
        "promocija":0
    },
    {
        "id":4,
        "naziv": "Orkanski visovi",
        "autor": "Emili Bronte",
        "cena": 688,
        "opis": "Remek-delo engleske i svetske književnosti, jedna od najlepših ljubavnih priča svih vremena. Priča o fatalnoj ljubavi i kobnoj osveti, o tajnama i protivrečnostima skrivenim u dubinama ljudskog srca. Hoće li se duhovi Orkanskih visova ikada umiriti? \n Usamljena vresišta severne Engleske. Dve porodice, dva suprotstavljena sveta destruktivnih strasti i stidljivog konformizma. Neprevaziđenom dramskom snagom bezvremenog klasika, surova stvarnost svakodnevnog života stapa se sa neutoljivim strastima, dubokim emocijama i gnevom osvete, pripovedajući o nesreći ljudskog roda sputanog i poraženog sopstvenim ograničenjima. \n Ova tragična ljubavna priča, burna poput severnog vetra koji briše pustarama Jorkšira, obuhvata dve generacije – od vremena kada je Hitklif, ostavši sam na svetu, došao da živi na imanju porodice Ernšo, pa sve do njegove smrti mnogo godina kasnije.\n Jedini roman Emili Bronte uzbudljiv je viktorijanski klasik o snazi ljubavi koja, uprkos svemu, pa i smrti, živi večno. Ketrin i Hitklif nezaboravni su likovi koji i dan-danas očaravaju čitaoce neobuzdanom snagom svojih karaktera.",
        "slika": "/assets/image/knjiga3.png",
        "ocena": 5,
        "godina": 2020,
        "broj_strana":334,
        "promocija":0
    },
    {
        "id":5,
        "naziv": "Zanimljiva istorija Srba u 147 priča",
        "autor": "Momčilo Petrović",
        "cena": 760,
        "opis": "Istoriju jedne nacije ne čine samo sećanja na sudbonosne bitke i velike heroje. Zanimljiva istorija Srba u 147 priča beleži i osvetljava one događaje i pojedince za koje u zvaničnim hronikama često neopravdano nije bilo mesta. \n\n Kratke i upečatljive priče iz ovog svojevrsnog istorijskog zabavnika dopašće se čitaocima različitih generacija i sigurno će iznenaditi nepoznatim detaljima i interesantnim činjenicama mnoge koji smatraju da dobro poznaju nacionalnu istoriju, književnost i društveno-političke prilike. \n Zašto su neki podaci skrivani, ulepšavani ili falsifikovani? \n Da li je naše kolektivno sećanje ipak uspelo da od zaborava sačuva neke na prvi pogled sitne i neznatne detalje koji mnogo toga otkrivaju?\n Ko je Miloša Obrenovića naučio da pije viski? \n Kako je falsifikovan govor na Njegoševoj sahrani?\n Koji je general naredio prebijanje Đure Jakšića?\n Kome je Radoje Domanović opsovao majku nad rakom Janka Veselinovića?\n Zašto su Srbi poraženi na Čegru?\n Šta je objavljeno u novinama koje su štampane u noći uoči 6. aprila 1941. godine?\n Koliko je dragocenosti Čerčilov vojni izaslanik ukrao od četnika tokom Drugog svetskog rata?\n Kako je u Srbiji rođen turizam i otkud nudizam na Savi?\n Zašto vozovi u Srbiji kasne?",
        "slika": "/assets/image/knjiga10.png",
        "ocena": 4,
        "godina": 2021,
        "broj_strana":448,
        "promocija":1
    },
    {
      "id":6,
      "naziv": "Igre gladi - Sjaj slobode",
      "autor": "Suzanne Collins",
      "cena": 800, 
      "opis": "DA LI BI MOGAO DA PREŽIVIŠ SAM U DIVLJINI, DOK SE SVI TRUDE DA TI ONEMOGUĆE DA ŽIV DOČEKAŠ JUTRO?\n\n U ruševinama područja nekada poznatog pod imenom Severna Amerika, nalazi se zemlja Panem, sa blistavim glavnim gradom Kapitolom i dvanaest distrikta. Kapitol je surov i okrutan, drži distrikte u pokornosti tako što ih primorava da svake godine šalju po jednog dečaka i jednu devojčicu, od dvanaest do osamnaest godina, koji će učestvovati u Igrama gladi – borbi do smrti koju uživo prenosi televizija.\n\nŠesnaestogodišnja Ketnis Everdin, koja živi sa majkom i mlađom sestrom, smatra da je potpisala sebi smrtnu presudu kada se dobrovoljno prijavila da učestvuje u Igrama umesto sestre. Međutim, bila je na vratima smrti i ranije – preživljavanje je njena druga priroda. Mada joj to nije bila namera, postala je pravi borac. Međutim, ako želi da pobedi, moraće da bira između preživljavanja i humanosti, između života i ljubavi.\nAvantura i romansa stapaju se u ovom uzbudljivom romanu čija se radnja odvija u budućnosti koja na veoma zabrinjavajući način podseća na našu sadašnjost.",
      "slika": "/assets/image/knjiga11.png",
      "ocena": 4.5,
      "godina": 2009,
      "broj_strana":287,
      "promocija":1
  },
   {
      "id":7,
      "naziv": "Harry Potter - Zatvorenik iz Askabana",
      "autor": "J.K.Rowling",
      "cena": 1000,
      "opis": "Treća hogvortska godina je na pragu, a leto koje joj prethodi kao da nikada nije bilo duže... Darslijevi, suroviji nego ikada pre, muštraju i maltretiraju Harija za svaku sitnicu. Za to vreme, zemlja je u strahu i panici. I to oba njena sveta, i normalski I čarobnjački. Razlog je Sirijus Blek, jezivi i monstruozni ubica koji je pobegao iz najbolje čuvanog zatvora na svetu – Askabana, kako bi podmirio još nekoliko starih računa... Romori se da mu je cilj samo jedan – sam Hari Poter koji mu pripada na neki sasvim poseban način... ",
      "slika": "/assets/image/knjiga13.png",
      "ocena": 4.1,
      "godina": 2015,
      "broj_strana":336,
      "promocija":1
  },{
    "id":8,
    "naziv": "Igre gladi - Sjaj slobode",
    "autor": "Suzanne Collins",
    "cena": 800, 
    "opis": "DA LI BI MOGAO DA PREŽIVIŠ SAM U DIVLJINI, DOK SE SVI TRUDE DA TI ONEMOGUĆE DA ŽIV DOČEKAŠ JUTRO?\n\n U ruševinama područja nekada poznatog pod imenom Severna Amerika, nalazi se zemlja Panem, sa blistavim glavnim gradom Kapitolom i dvanaest distrikta. Kapitol je surov i okrutan, drži distrikte u pokornosti tako što ih primorava da svake godine šalju po jednog dečaka i jednu devojčicu, od dvanaest do osamnaest godina, koji će učestvovati u Igrama gladi – borbi do smrti koju uživo prenosi televizija.\n\nŠesnaestogodišnja Ketnis Everdin, koja živi sa majkom i mlađom sestrom, smatra da je potpisala sebi smrtnu presudu kada se dobrovoljno prijavila da učestvuje u Igrama umesto sestre. Međutim, bila je na vratima smrti i ranije – preživljavanje je njena druga priroda. Mada joj to nije bila namera, postala je pravi borac. Međutim, ako želi da pobedi, moraće da bira između preživljavanja i humanosti, između života i ljubavi.\nAvantura i romansa stapaju se u ovom uzbudljivom romanu čija se radnja odvija u budućnosti koja na veoma zabrinjavajući način podseća na našu sadašnjost.",
    "slika": "/assets/image/knjiga12.png",
    "ocena": 4.5,
    "godina": 2009,
    "broj_strana":287,
    "promocija":1
},
 {
    "id":9,
    "naziv": "Harry Potter - Zatvorenik iz Askabana",
    "autor": "J.K.Rowling",
    "cena": 1000,
    "opis": "Treća hogvortska godina je na pragu, a leto koje joj prethodi kao da nikada nije bilo duže... Darslijevi, suroviji nego ikada pre, muštraju i maltretiraju Harija za svaku sitnicu. Za to vreme, zemlja je u strahu i panici. I to oba njena sveta, i normalski I čarobnjački. Razlog je Sirijus Blek, jezivi i monstruozni ubica koji je pobegao iz najbolje čuvanog zatvora na svetu – Askabana, kako bi podmirio još nekoliko starih računa... Romori se da mu je cilj samo jedan – sam Hari Poter koji mu pripada na neki sasvim poseban način... ",
    "slika": "/assets/image/knjiga14.png",
    "ocena": 4.1,
    "godina": 2015,
    "broj_strana":336,
    "promocija":1
},
{
  "id":10,
  "naziv": "Orkanski visovi",
  "autor": "Emili Bronte",
  "cena": 688,
  "opis": "Remek-delo engleske i svetske književnosti, jedna od najlepših ljubavnih priča svih vremena. Priča o fatalnoj ljubavi i kobnoj osveti, o tajnama i protivrečnostima skrivenim u dubinama ljudskog srca. Hoće li se duhovi Orkanskih visova ikada umiriti? \n Usamljena vresišta severne Engleske. Dve porodice, dva suprotstavljena sveta destruktivnih strasti i stidljivog konformizma. Neprevaziđenom dramskom snagom bezvremenog klasika, surova stvarnost svakodnevnog života stapa se sa neutoljivim strastima, dubokim emocijama i gnevom osvete, pripovedajući o nesreći ljudskog roda sputanog i poraženog sopstvenim ograničenjima. \n Ova tragična ljubavna priča, burna poput severnog vetra koji briše pustarama Jorkšira, obuhvata dve generacije – od vremena kada je Hitklif, ostavši sam na svetu, došao da živi na imanju porodice Ernšo, pa sve do njegove smrti mnogo godina kasnije.\n Jedini roman Emili Bronte uzbudljiv je viktorijanski klasik o snazi ljubavi koja, uprkos svemu, pa i smrti, živi večno. Ketrin i Hitklif nezaboravni su likovi koji i dan-danas očaravaju čitaoce neobuzdanom snagom svojih karaktera.",
  "slika": "/assets/image/knjiga15.png",
  "ocena": 5,
  "godina": 2020,
  "broj_strana":334,
  "promocija":0
},
{
   "id":11,
   "naziv": "Životinjska farma",
   "autor": "Džordž Orvel",
   "cena": 1300,
   "opis": "Kultna knjiga XX veka.\n „Slabi ili jaki, pametni ili priprosti, svi smo mi braća. Nijedna životinja nikad ne sme ubiti neku drugu. Sve životinje su jednake.\n A sada, drugovi, ispričaću vam šta sam prošle noći sanjao. Ne mogu vam opisati taj san. Bio je to san o tome kako će zemlja izgledati pošto Čovek sa nje iščezne. Ali podsetio me je na nešto što sam odavno već zaboravio.“\nPovod za nastanak Životinjske farme nalazio se u Orvelovoj analizi posledica Ruske revolucije koja je prerasla u totalitarni režim i diktaturu stvorenu oko kulta ličnosti, kao i u njegovom iskustvu stečenom tokom Španskog građanskog rata. Iako je javnost često insistirala na momentu kritike sovjetske vlasti, Orvel je uvek naglašavao da se Životinjska farma iako prvenstveno satira o Ruskoj revoluciji, odnosi na svaku nasilnu revoluciju koju predvode nemarni ljudi gladni vlasti. „Hteo sam da naravoučenije bude da revolucije donose radikalno poboljšanje samo kada su mase budne i znaju kako da zbace svoje vođe čim ovi obave svoj posao. Trebalo je da prekretnica u priči bude trenutak kada svinje zadrže mleko i jabuke za sebe“, isticao je Orvel razočaran što je čitaocima možda promakao ovaj ključni momenat teksta. \n I pored piščeve bojazni, ova alegorijska antiutopija odmah je privukla veliku pažnju. Danas se smatra jednim od najboljih romana XX veka, postala je neizostavna lektira svakog savremenog čitaoca, a 1996. godine dobila je nagradu Hugo. Danas je možda više nego ikad pre potrebno da ovo delo čitamo i razumemo.\n „Sve životinje su jednake,\n ali neke životinje su jednakije \n od drugih.“ \n Post scriptum \n Orvel je za prvo izdanje napisao predgovor pod naslovom Sloboda štampe. Izdavač je odbio da ga štampa. Tekst je bio gotovo zaboravljen do 1972. godine, kada je objavljen u Književnom dodatku Timesa. Sada se prvi put pojavljuje na srpskom jeziku.",
   "slika": "/assets/image/knjiga16.png",
   "ocena": 5,
   "godina": 1999,
   "broj_strana":160,
   "promocija":0
},
{
   "id":12,
   "naziv": "Životinjska farma",
   "autor": "Džordž Orvel",
   "cena": 1300,
   "opis": "Kultna knjiga XX veka.\n „Slabi ili jaki, pametni ili priprosti, svi smo mi braća. Nijedna životinja nikad ne sme ubiti neku drugu. Sve životinje su jednake.\n A sada, drugovi, ispričaću vam šta sam prošle noći sanjao. Ne mogu vam opisati taj san. Bio je to san o tome kako će zemlja izgledati pošto Čovek sa nje iščezne. Ali podsetio me je na nešto što sam odavno već zaboravio.“\nPovod za nastanak Životinjske farme nalazio se u Orvelovoj analizi posledica Ruske revolucije koja je prerasla u totalitarni režim i diktaturu stvorenu oko kulta ličnosti, kao i u njegovom iskustvu stečenom tokom Španskog građanskog rata. Iako je javnost često insistirala na momentu kritike sovjetske vlasti, Orvel je uvek naglašavao da se Životinjska farma iako prvenstveno satira o Ruskoj revoluciji, odnosi na svaku nasilnu revoluciju koju predvode nemarni ljudi gladni vlasti. „Hteo sam da naravoučenije bude da revolucije donose radikalno poboljšanje samo kada su mase budne i znaju kako da zbace svoje vođe čim ovi obave svoj posao. Trebalo je da prekretnica u priči bude trenutak kada svinje zadrže mleko i jabuke za sebe“, isticao je Orvel razočaran što je čitaocima možda promakao ovaj ključni momenat teksta. \n I pored piščeve bojazni, ova alegorijska antiutopija odmah je privukla veliku pažnju. Danas se smatra jednim od najboljih romana XX veka, postala je neizostavna lektira svakog savremenog čitaoca, a 1996. godine dobila je nagradu Hugo. Danas je možda više nego ikad pre potrebno da ovo delo čitamo i razumemo.\n „Sve životinje su jednake,\n ali neke životinje su jednakije \n od drugih.“ \n Post scriptum \n Orvel je za prvo izdanje napisao predgovor pod naslovom Sloboda štampe. Izdavač je odbio da ga štampa. Tekst je bio gotovo zaboravljen do 1972. godine, kada je objavljen u Književnom dodatku Timesa. Sada se prvi put pojavljuje na srpskom jeziku.",
   "slika": "/assets/image/knjiga17.png",
   "ocena": 5,
   "godina": 1999,
   "broj_strana":160,
   "promocija":0
},
{
   "id":13,
   "naziv": "Životinjska farma",
   "autor": "Džordž Orvel",
   "cena": 1300,
   "opis": "Kultna knjiga XX veka.\n „Slabi ili jaki, pametni ili priprosti, svi smo mi braća. Nijedna životinja nikad ne sme ubiti neku drugu. Sve životinje su jednake.\n A sada, drugovi, ispričaću vam šta sam prošle noći sanjao. Ne mogu vam opisati taj san. Bio je to san o tome kako će zemlja izgledati pošto Čovek sa nje iščezne. Ali podsetio me je na nešto što sam odavno već zaboravio.“\nPovod za nastanak Životinjske farme nalazio se u Orvelovoj analizi posledica Ruske revolucije koja je prerasla u totalitarni režim i diktaturu stvorenu oko kulta ličnosti, kao i u njegovom iskustvu stečenom tokom Španskog građanskog rata. Iako je javnost često insistirala na momentu kritike sovjetske vlasti, Orvel je uvek naglašavao da se Životinjska farma iako prvenstveno satira o Ruskoj revoluciji, odnosi na svaku nasilnu revoluciju koju predvode nemarni ljudi gladni vlasti. „Hteo sam da naravoučenije bude da revolucije donose radikalno poboljšanje samo kada su mase budne i znaju kako da zbace svoje vođe čim ovi obave svoj posao. Trebalo je da prekretnica u priči bude trenutak kada svinje zadrže mleko i jabuke za sebe“, isticao je Orvel razočaran što je čitaocima možda promakao ovaj ključni momenat teksta. \n I pored piščeve bojazni, ova alegorijska antiutopija odmah je privukla veliku pažnju. Danas se smatra jednim od najboljih romana XX veka, postala je neizostavna lektira svakog savremenog čitaoca, a 1996. godine dobila je nagradu Hugo. Danas je možda više nego ikad pre potrebno da ovo delo čitamo i razumemo.\n „Sve životinje su jednake,\n ali neke životinje su jednakije \n od drugih.“ \n Post scriptum \n Orvel je za prvo izdanje napisao predgovor pod naslovom Sloboda štampe. Izdavač je odbio da ga štampa. Tekst je bio gotovo zaboravljen do 1972. godine, kada je objavljen u Književnom dodatku Timesa. Sada se prvi put pojavljuje na srpskom jeziku.",
   "slika": "/assets/image/knjiga18.png",
   "ocena": 5,
   "godina": 1999,
   "broj_strana":160,
   "promocija":0
}
];

  constructor() { }
  getKnjige() {
    return this.sveKnjige;
  }

  azuriraj(knjiga:Knjiga){
    this.sveKnjige.forEach(element => {
      if (element.id==knjiga.id) element=knjiga
    });
  }
  addKnjiga(knjiga:Knjiga){
    knjiga.id=this.sveKnjige.length;
    let copyKnjiga = Object.assign({}, knjiga);
    this.sveKnjige.push(copyKnjiga);
    console.log(this.sveKnjige);
    
  }
  getKnjigafromId(id:number):Knjiga{
    let knjige=this.sveKnjige.filter(elem=> elem.id==id)  
    return knjige[0];
  }

  getPreporuceneKnjige(preporuke:Preporuka[]):Knjiga[]{
    let knjige:Knjiga[]=[];
    preporuke.forEach(element => {
      knjige.push(this.getKnjigafromId(element.idKnjiga))
    });
    return knjige;
  }
}
