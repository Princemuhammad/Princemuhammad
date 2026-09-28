import { Dua } from './types';

export interface RabbanaDua extends Dua {
  reference: string;
}

// Forty du'as from the Qur'an that call on Allah as "Rabbana" (Our Lord),
// in Mushaf (Qur'anic) order. Recite after salah, in tawaf, in Sa'i, or at any time.
export const RABBANA_DUAS: RabbanaDua[] = [
  {
    reference: 'Al-Baqarah · 2:127',
    transliteration: "Rabbana taqabbal minna innaka antas-samee'ul-'aleem.",
    translation:
      'Our Lord, accept this from us. You are the All-Hearing, the All-Knowing.',
  },
  {
    reference: 'Al-Baqarah · 2:128',
    transliteration:
      "Rabbana waj'alna muslimayni laka wa min dhurriyyatina ummatam muslimatal-lak, wa arina manasikana wa tub 'alayna, innaka antat-tawwabur-raheem.",
    translation:
      'Our Lord, make us submissive to You and make from our descendants a nation submissive to You. Show us our rites and accept our repentance. You are the Accepter of repentance, the Most Merciful.',
  },
  {
    reference: 'Al-Baqarah · 2:201',
    transliteration:
      "Rabbana atina fid-dunya hasanatanw wa fil-akhirati hasanatanw wa qina 'adhaban-nar.",
    translation:
      'Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.',
  },
  {
    reference: 'Al-Baqarah · 2:250',
    transliteration:
      "Rabbana afrigh 'alayna sabranw wa thabbit aqdamana wansurna 'alal-qawmil-kafireen.",
    translation:
      'Our Lord, pour upon us patience, make firm our steps, and help us against the disbelieving people.',
  },
  {
    reference: 'Al-Baqarah · 2:286',
    transliteration: "Rabbana la tu'akhidhna in naseena aw akhta'na.",
    translation: 'Our Lord, do not hold us responsible if we forget or err.',
  },
  {
    reference: 'Al-Baqarah · 2:286',
    transliteration:
      "Rabbana wa la tahmil 'alayna isran kama hamaltahu 'alal-ladhina min qablina.",
    translation:
      'Our Lord, lay not upon us a burden like that which You laid upon those before us.',
  },
  {
    reference: 'Al-Baqarah · 2:286',
    transliteration:
      "Rabbana wa la tuhammilna ma la taqata lana bih, wa'fu 'anna waghfir lana warhamna, anta mawlana fansurna 'alal-qawmil-kafireen.",
    translation:
      'Our Lord, burden us not with that which we have no strength to bear. Pardon us, forgive us, and have mercy on us. You are our Protector, so help us against the disbelieving people.',
    source: 'Recited widely at the close of Surah al-Baqarah',
  },
  {
    reference: 'Aal-Imran · 3:8',
    transliteration:
      "Rabbana la tuzigh quloobana ba'da idh hadaytana wa hab lana mil-ladunka rahmah, innaka antal-wahhab.",
    translation:
      'Our Lord, let not our hearts deviate after You have guided us, and grant us mercy from Yourself. You are the Ever-Giving.',
  },
  {
    reference: 'Aal-Imran · 3:9',
    transliteration:
      "Rabbana innaka jami'un-nasi li-yawmil-la rayba feeh, innal-laha la yukhliful-mi'ad.",
    translation:
      'Our Lord, You will gather mankind for a Day about which there is no doubt. Indeed, Allah does not fail in His promise.',
  },
  {
    reference: 'Aal-Imran · 3:16',
    transliteration:
      "Rabbana innana amanna faghfir lana dhunoobana wa qina 'adhaban-nar.",
    translation:
      'Our Lord, we have believed, so forgive us our sins and protect us from the punishment of the Fire.',
  },
  {
    reference: 'Aal-Imran · 3:53',
    transliteration:
      "Rabbana amanna bima anzalta wattaba'nar-rasoola faktubna ma'ash-shahideen.",
    translation:
      'Our Lord, we have believed in what You revealed and followed the Messenger, so record us among the witnesses.',
  },
  {
    reference: 'Aal-Imran · 3:147',
    transliteration:
      "Rabbanagh-fir lana dhunoobana wa israfana fi amrina wa thabbit aqdamana wansurna 'alal-qawmil-kafireen.",
    translation:
      'Our Lord, forgive us our sins and our transgressions, make firm our steps, and help us against the disbelieving people.',
  },
  {
    reference: 'Aal-Imran · 3:191',
    transliteration:
      "Rabbana ma khalaqta hadha batila, subhanaka faqina 'adhaban-nar.",
    translation:
      'Our Lord, You have not created this without purpose; glory be to You. Protect us from the punishment of the Fire.',
  },
  {
    reference: 'Aal-Imran · 3:192',
    transliteration:
      'Rabbana innaka man tudkhilin-nara faqad akhzaytah, wa ma lizh-zalimeena min ansar.',
    translation:
      'Our Lord, whoever You admit to the Fire, You have disgraced him, and the wrongdoers will have no helpers.',
  },
  {
    reference: 'Aal-Imran · 3:193',
    transliteration:
      "Rabbana innana sami'na munadiyan yunadi lil-imani an aminoo bi-rabbikum fa-amanna.",
    translation:
      'Our Lord, we have heard a caller calling to faith, saying, "Believe in your Lord," and we have believed.',
  },
  {
    reference: 'Aal-Imran · 3:193',
    transliteration:
      "Rabbana faghfir lana dhunoobana wa kaffir 'anna sayyi'atina wa tawaffana ma'al-abrar.",
    translation:
      'Our Lord, forgive us our sins, remove from us our misdeeds, and cause us to die with the righteous.',
  },
  {
    reference: 'Aal-Imran · 3:194',
    transliteration:
      "Rabbana wa atina ma wa'adtana 'ala rusulika wa la tukhzina yawmal-qiyamah, innaka la tukhliful-mi'ad.",
    translation:
      'Our Lord, grant us what You promised us through Your messengers, and do not disgrace us on the Day of Resurrection. Indeed, You do not fail in Your promise.',
  },
  {
    reference: "Al-A'raf · 7:23",
    transliteration:
      'Rabbana zalamna anfusana, wa il-lam taghfir lana wa tarhamna la-nakoonanna minal-khasireen.',
    translation:
      'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.',
    source: "The du'a of Adam and Hawwa",
  },
  {
    reference: "Al-A'raf · 7:47",
    transliteration: "Rabbana la taj'alna ma'al-qawmiz-zalimeen.",
    translation: 'Our Lord, do not place us with the wrongdoing people.',
  },
  {
    reference: "Al-A'raf · 7:89",
    transliteration:
      'Rabbana iftah baynana wa bayna qawmina bil-haqqi wa anta khayrul-fatiheen.',
    translation:
      'Our Lord, decide between us and our people in truth, for You are the best of deciders.',
  },
  {
    reference: "Al-A'raf · 7:126",
    transliteration: "Rabbana afrigh 'alayna sabranw wa tawaffana muslimeen.",
    translation: 'Our Lord, pour upon us patience and let us die as Muslims.',
  },
  {
    reference: 'Yunus · 10:85',
    transliteration: "Rabbana la taj'alna fitnatal-lil-qawmiz-zalimeen.",
    translation: 'Our Lord, make us not a trial for the wrongdoing people.',
  },
  {
    reference: 'Ibrahim · 14:37',
    transliteration:
      "Rabbana inni askantu min dhurriyyati bi-wadin ghayri dhi zar'in 'inda baytikal-muharram.",
    translation:
      'Our Lord, I have settled some of my descendants in a valley without cultivation near Your sacred House.',
    source: "The du'a of Ibrahim, settling his family at Makkah",
  },
  {
    reference: 'Ibrahim · 14:37',
    transliteration:
      "Rabbana li-yuqeemus-salata faj'al af'idatam minan-nasi tahwi ilayhim, warzuqhum minath-thamarati la'allahum yashkuroon.",
    translation:
      'Our Lord, that they may establish prayer. So make hearts among the people incline toward them and provide for them fruits that they might be grateful.',
  },
  {
    reference: 'Ibrahim · 14:38',
    transliteration:
      "Rabbana innaka ta'lamu ma nukhfi wa ma nu'lin, wa ma yakhfa 'alal-lahi min shay'in fil-ardi wa la fis-sama'.",
    translation:
      'Our Lord, You know what we conceal and what we declare, and nothing is hidden from Allah on earth or in the heaven.',
  },
  {
    reference: 'Ibrahim · 14:40',
    transliteration: "Rabbana wa taqabbal du'a.",
    translation: 'Our Lord, and accept my supplication.',
  },
  {
    reference: 'Ibrahim · 14:41',
    transliteration:
      "Rabbanagh-fir li wa li-walidayya wa lil-mu'mineena yawma yaqoomul-hisab.",
    translation:
      'Our Lord, forgive me and my parents and the believers on the Day the reckoning is established.',
  },
  {
    reference: 'Al-Kahf · 18:10',
    transliteration:
      "Rabbana atina mil-ladunka rahmatanw wa hayyi' lana min amrina rashada.",
    translation:
      'Our Lord, grant us mercy from Yourself and guide us to right conduct in our affair.',
    source: "The du'a of the young men of the Cave",
  },
  {
    reference: "Al-Mu'minun · 23:109",
    transliteration:
      'Rabbana amanna faghfir lana warhamna wa anta khayrur-rahimeen.',
    translation:
      'Our Lord, we believe, so forgive us and have mercy upon us, for You are the best of the merciful.',
  },
  {
    reference: 'Al-Furqan · 25:65',
    transliteration:
      "Rabbanasrif 'anna 'adhaba jahannama inna 'adhabaha kana gharama.",
    translation:
      'Our Lord, avert from us the punishment of Hell. Indeed, its punishment is ever adhering.',
  },
  {
    reference: 'Al-Furqan · 25:74',
    transliteration:
      "Rabbana hab lana min azwajina wa dhurriyyatina qurrata a'yuninw waj'alna lil-muttaqeena imama.",
    translation:
      'Our Lord, grant us from our spouses and offspring comfort to our eyes, and make us leaders for the righteous.',
  },
  {
    reference: 'Ghafir · 40:7',
    transliteration:
      "Rabbana wasi'ta kulla shay'ir-rahmatanw wa 'ilman faghfir lil-ladhina taboo wattaba'oo sabilaka wa qihim 'adhabal-jaheem.",
    translation:
      'Our Lord, You have encompassed all things in mercy and knowledge, so forgive those who repent and follow Your way, and protect them from the punishment of the Blazing Fire.',
    source: "The du'a of the angels for believers",
  },
  {
    reference: 'Ghafir · 40:8',
    transliteration:
      "Rabbana wa adkhilhum jannati 'adnin-illati wa'adtahum wa man salaha min aba'ihim wa azwajihim wa dhurriyyatihim, innaka antal-'azeezul-hakeem.",
    translation:
      'Our Lord, admit them to the Gardens of Eternity which You promised them, and whoever was righteous among their fathers, spouses and offspring. Indeed, You are the Exalted in Might, the Wise.',
  },
  {
    reference: 'Al-Hashr · 59:10',
    transliteration:
      "Rabbanagh-fir lana wa li-ikhwaninal-ladhina sabaqoona bil-imani wa la taj'al fi quloobina ghillal-lil-ladhina amanoo.",
    translation:
      'Our Lord, forgive us and our brothers who preceded us in faith, and leave not in our hearts any resentment toward those who have believed.',
  },
  {
    reference: 'Al-Hashr · 59:10',
    transliteration: "Rabbana innaka ra'oofur-raheem.",
    translation: 'Our Lord, You are Kind and Merciful.',
  },
  {
    reference: 'Al-Mumtahanah · 60:4',
    transliteration:
      "Rabbana 'alayka tawakkalna wa ilayka anabna wa ilaykal-maseer.",
    translation:
      'Our Lord, upon You we have relied, to You we turn in repentance, and to You is the final destination.',
  },
  {
    reference: 'Al-Mumtahanah · 60:5',
    transliteration:
      "Rabbana la taj'alna fitnatal-lil-ladhina kafaroo waghfir lana rabbana.",
    translation:
      'Our Lord, make us not a trial for those who disbelieve, and forgive us, our Lord.',
  },
  {
    reference: 'Al-Mumtahanah · 60:5',
    transliteration: "Innaka antal-'azeezul-hakeem.",
    translation: 'Indeed, it is You who is the Exalted in Might, the Wise.',
  },
  {
    reference: 'At-Tahrim · 66:8',
    transliteration:
      "Rabbana atmim lana noorana waghfir lana innaka 'ala kulli shay'in qadeer.",
    translation:
      'Our Lord, perfect for us our light and forgive us. Indeed, You are over all things competent.',
  },
];
