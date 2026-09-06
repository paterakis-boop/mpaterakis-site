(function () {
  var KEY = "paterakis-lang";

  var dict = {
    el: {
      "title.home": "Δικηγορικό γραφείο Πατεράκη — Ξάνθη | Δικηγόρος παρ’ Αρείω Πάγω",
      "title.faq": "Συχνές ερωτήσεις — Πατεράκης",
      "title.mme": "Το γραφείο στα ΜΜΕ | Δικηγορικό γραφείο Πατεράκη, Ξάνθη",
      "title.apofaseis": "Αποφάσεις σε υποθέσεις του γραφείου | Δικηγορικό γραφείο Πατεράκη, Ξάνθη",
      "brand.n1": "Πατεράκης Μιχαήλ",
      "brand.n2": "& Συνεργάτες",
      "brand.n3": "Δικηγορικό γραφείο",
      "about.h2": "Μιχαήλ Πατεράκης",
      "team.name.mt": "Μαρίνα Τσαγγαλίδου",
      "team.name.ft": "Φατμέ Τασήμογλου",
      "team.name.gg": "Γκιουλμπέν Γκίντα",
      "team.name.in": "Ιλαΐντα Ναζμίογλου",
      "team.name.ag": "Αλεξάνδρα Γεωργαντά",
      "lang.label": "Γλώσσα",
      "nav.who": "Ποιοι είμαστε",
      "nav.what": "Τι κάνουμε",
      "nav.office": "Το γραφείο μας",
      "nav.faq": "Συχνές ερωτήσεις",
      "nav.media": "ΜΜΕ",
      "nav.judgments": "Αποφάσεις",
      "nav.contact": "Επικοινωνία",
      "nav.book": "Κλείστε ραντεβού",
      "hero.kicker": "Από το 2011 · Παρ’ Αρείω Πάγω",
      "seo.h1": "Δικηγορικό γραφείο Πατεράκη στην Ξάνθη — ",
      "hero.h1": "Η δικηγορία είναι άσκηση ευθύνης.",
      "hero.lede": "Πλήρης νομική κάλυψη σε αστικές, ποινικές και διοικητικές υποθέσεις.",
      "hero.continue": "Συνέχεια",
      "about.kicker": "Ποιοι είμαστε",
      "about.photo": "Προσωρινή φωτογραφία",
      "about.p1": "Δικηγόρος παρ’ Αρείω Πάγω, μέλος του Δικηγορικού Συλλόγου Ξάνθης (ΑΜ 314), με μεταπτυχιακή ειδίκευση στο Φορολογικό Δίκαιο από τη Νομική Σχολή του Δημοκριτείου Πανεπιστημίου Θράκης. Το γραφείο λειτουργεί από το 2011, με έδρα το Astron Center στην Ξάνθη.",
      "about.p2": "Παρίσταται σε δικαστήρια σε όλη την Ελλάδα, σε κάθε βαθμό δικαιοδοσίας, από τα πρωτοδικεία μέχρι τον Άρειο Πάγο και το Συμβούλιο της Επικρατείας.",
      "about.p3": "Στη σελίδα παρατίθενται αποφάσεις σε υποθέσεις του γραφείου, καθώς και τοποθετήσεις σε τηλεοπτικά και ραδιοφωνικά μέσα.",
      "bubble.j.k": "Αρχείο",
      "bubble.m.k": "Μέσα",
      "team.lawyer": "Δικηγόρος",
      "team.trainee": "Ασκούμενη δικηγόρος",
      "team.hint": "Βιογραφικό",
      "team.aria.mt": "Βιογραφικό, Μαρίνα Τσαγγαλίδου",
      "team.aria.ft": "Βιογραφικό, Φατμέ Τασήμογλου",
      "team.aria.gg": "Βιογραφικό, Γκιουλμπέν Γκίντα",
      "team.aria.in": "Βιογραφικό, Ιλαΐντα Ναζμίογλου",
      "team.aria.ag": "Βιογραφικό, Αλεξάνδρα Γεωργαντά",
      "areas.h2": "Τι αναλαμβάνουμε",
      "areas.1.t": "Τραπεζικό δίκαιο και ρύθμιση οφειλών",
      "areas.1.b": "Ανακοπές, ρυθμίσεις και προστασία της κύριας κατοικίας έναντι τραπεζών και εταιρειών διαχείρισης.",
      "areas.2.t": "Πειθαρχικό και δημοσιοϋπαλληλικό",
      "areas.2.b": "Υπεράσπιση σε ΕΔΕ, πειθαρχικά συμβούλια και διοικητικά δικαστήρια.",
      "areas.3.t": "Συνταξιοδοτικό και κοινωνικοασφαλιστικό",
      "areas.3.b": "Προσυνταξιοδοτική μελέτη, αίτηση, ένσταση και δικαστική προσφυγή, όπου απαιτείται.",
      "areas.4.t": "Διοικητικό και φορολογικό δίκαιο",
      "areas.4.b": "Προσφυγές κατά πράξεων της διοίκησης, της φορολογικής αρχής και των ταμείων.",
      "areas.5.t": "Ποινικό δίκαιο",
      "areas.5.b": "Υπεράσπιση και υποστήριξη κατηγορίας, από την προανάκριση έως το ακροατήριο κάθε βαθμού.",
      "areas.6.t": "Οικογενειακό δίκαιο",
      "areas.6.b": "Διαζύγια, διατροφές και επιμέλεια, με προτεραιότητα στο συμφέρον του τέκνου.",
      "areas.7.t": "Τροχαία ατυχήματα και αποζημιώσεις",
      "areas.7.b": "Διεκδίκηση αποζημίωσης και παράσταση στην ποινική δίκη, για τον παθόντα ή τον οδηγό.",
      "areas.8.t": "Ακίνητα και Κτηματολόγιο",
      "areas.8.b": "Αγοραπωλησίες, έλεγχος τίτλων, διορθώσεις κτηματολογικών εγγραφών και εμπράγματες διαφορές.",
      "areas.9.t": "Εταιρικό δίκαιο",
      "areas.9.b": "Σύσταση και λειτουργία εταιρειών, καταστατικά, συμφωνίες εταίρων και εταιρικές διαφορές.",
      "areas.10.t": "Κληρονομικό δίκαιο",
      "areas.10.b": "Αποδοχή και αποποίηση, κληρονομικά χρέη, διανομή, νόμιμη μοίρα και διαθήκες.",
      "areas.11.t": "Πτωχευτικό δίκαιο και εξωδικαστικός μηχανισμός",
      "areas.11.b": "Πτώχευση φυσικών προσώπων, απαλλαγή οφειλών, ρύθμιση με το Δημόσιο και τα ταμεία.",
      "office.h2": "Το γραφείο μας",
      "contact.h2": "Επικοινωνία",
      "contact.phone": "Τηλέφωνο",
      "contact.email": "Email",
      "contact.addressLabel": "Διεύθυνση",
      "contact.hoursLabel": "Ωράριο",
      "contact.whatsapp": "WhatsApp",
      "form.name": "Ονοματεπώνυμο",
      "form.phone": "Τηλέφωνο",
      "form.email": "Email",
      "form.message": "Μήνυμα",
      "form.fine": "Τα στοιχεία χρησιμοποιούνται μόνο για την απάντηση του γραφείου.",
      "form.send": "Αποστολή",
      "form.ok": "Το μήνυμα εστάλη. Το γραφείο θα επικοινωνήσει μαζί σας.",
      "contact.address": "Άστρον Σέντερ<br>Θερμοπυλών 1, 6ος<br>671 31 Ξάνθη",
      "contact.hours": "Δευτέρα – Παρασκευή<br>8:30–17:30",
      "footer.firm": "Δικηγορικό γραφείο Πατεράκη Μιχαήλ και Συνεργατών",
      "footer.privacy": "Πολιτική απορρήτου",
      "pbox.close": "Κλείσιμο",
      "title.aporrito": "Πολιτική απορρήτου | Δικηγορικό γραφείο Πατεράκη, Ξάνθη",
      "form.consent": "Έλαβα γνώση της <a href=\"aporrito.html\" target=\"_blank\" rel=\"noopener\">Πολιτικής απορρήτου</a> και συναινώ στην επεξεργασία των στοιχείων μου για την απάντηση του γραφείου.",
      "footer.note": "© 2011–2026",
      "lb.photo": "Φωτογραφία",
      "faq.kicker": "Ερωτήσεις",
      "faq.h1": "Συχνές ερωτήσεις.",
      "faq.q1": "Πώς κλείνω ραντεβού;",
      "faq.a1": "Τηλεφωνικά στο 25410 20113 ή στο 697 475 6492, από τη φόρμα ή το εικονίδιο συνομιλίας. Η ημέρα και η ώρα επιβεβαιώνονται από το γραφείο. Συναντήσεις εκτός ωραρίου κατόπιν συνεννόησης.",
      "faq.q2": "Πόσο θα μου κοστίσει;",
      "faq.a2": "Κάθε αμοιβή συμφωνείται πριν από την ανάθεση και αποτυπώνεται εγγράφως (Κώδικας Δικηγόρων). Πριν δεσμευθείτε, γνωρίζετε κόστος και τι περιλαμβάνει.",
      "faq.q3": "Τι να έχω μαζί μου στην πρώτη συνάντηση;",
      "faq.a3": "Ό,τι έγγραφο σχετίζεται με την υπόθεση. Όσο πληρέστερος ο φάκελος από την αρχή, τόσο ακριβέστερη η εκτίμηση.",
      "faq.q4": "Γίνεται εξ αποστάσεως;",
      "faq.a4": "Ναι. Τηλεδιάσκεψη, email ή courier. Τα διοικητικά τα αναλαμβάνει το γραφείο. Πολλές υποθέσεις χωρίς μετακίνηση στην Ξάνθη.",
      "faq.q5": "Εκτός Ξάνθης;",
      "faq.a5": "Ναι. Θράκη και Ανατολική Μακεδονία. Παρ’ Αρείω Πάγω και στην Αθήνα όταν χρειάζεται.",
      "faq.q6": "Επιχειρήσεις;",
      "faq.a6": "Ναι. Συμβουλευτική και δικαστηριακή εκπροσώπηση. Πάγια συνεργασία με μηνιαία κάλυψη.",
      "faq.q7": "Πορεία υπόθεσης;",
      "faq.a7": "Κάθε κατάθεση, δικάσιμος και απόφαση γνωστοποιείται, με το επόμενο βήμα.",
      "faq.q8": "Χρόνος απάντησης;",
      "faq.a8": "Εντός ωραρίου την ίδια ημέρα. Εκτός ωραρίου και αργίες: επόμενη εργάσιμη. Προθεσμία: τηλέφωνο.",
      "faq.q9": "Εχεμύθεια;",
      "faq.a9": "Δικηγορικό απόρρητο, ακόμη και αν δεν ανατεθεί η υπόθεση. ΓΚΠΔ στα έγγραφα.",
      "faq.q10": "Αλλαγή ραντεβού;",
      "faq.a10": "Ναι, τηλεφώνημα ή μήνυμα. Αν είναι εφικτό, μία εργάσιμη ημέρα νωρίτερα.",
      "apo.kicker": "Νομολογία του γραφείου",
      "apo.h1": "Αποφάσεις.",
      "apo.fine": "Οι υποθέσεις δημοσιεύονται ανωνυμοποιημένες όπου απαιτείται. Η παρουσίαση δεν συνιστά υπόσχεση αποτελέσματος.",
      "apo.1.date": "Άρειος Πάγος · Αμετάκλητη κρίση",
      "apo.1.title": "Οριστική διαγραφή οφειλών ύψους 17.000.000 ευρώ",
      "apo.1.body": "Με απόφαση του Αρείου Πάγου κατέστη αμετάκλητη η διαγραφή τραπεζικών οφειλών 17.000.000 ευρώ για επιχειρηματική οικογένεια της περιοχής. Η υπόθεση δικάστηκε σε όλους τους βαθμούς δικαιοδοσίας, απέναντι σε συστημικές τράπεζες.",
      "apo.2.date": "Πρωτοδικείο Ξάνθης · Πανελλαδικό ρεπορτάζ",
      "apo.2.title": "Διαγραφή κληρονομικών χρεών 1.000.000 ευρώ",
      "apo.2.body": "Εντολέας βρέθηκε με κληρονομικές οφειλές 1.000.000 ευρώ προς το Δημόσιο, χωρίς να γνωρίζει ότι είχε καταστεί κληρονόμος. Το Πρωτοδικείο Ξάνθης έκρινε ότι το τεκμήριο αποδοχής δεν ίσχυε και απαλλάχθηκε πλήρως.",
      "apo.3.date": "Τριμελές Πλημμελειοδικείο Ξάνθης · 2025",
      "apo.3.title": "Η δικαίωση της οικογένειας της 19χρονης Αϊσέ",
      "apo.3.body": "Το γραφείο υποστήριξε την κατηγορία για τον θανάσιμο τραυματισμό της 19χρονης Αϊσέ από όχημα αστυνομικού. Το δικαστήριο καταδίκασε τον υπαίτιο το 2025.",
      "apo.4.date": "Πρωτοδικείο · Πρωτόδικη κρίση",
      "apo.4.title": "Διαγραφή οφειλής προς την πρώην Αγροτική Τράπεζα λόγω παραγραφής",
      "apo.4.body": "Το Πρωτοδικείο δέχθηκε ανακοπή εντολέα και έκρινε ότι απαίτηση της υπό ειδική εκκαθάριση πρώην Αγροτικής Τράπεζας είχε παραγραφεί. Η απόφαση δεν έχει καταστεί ακόμη αμετάκλητη.",
      "apo.5.date": "Τριμελές Πλημμελειοδικείο Ξάνθης · Υποστήριξη κατηγορίας",
      "apo.5.title": "Καταδίκη γιατρού για προσβολή της γενετήσιας αξιοπρέπειας ανήλικης",
      "apo.5.body": "Το γραφείο υποστήριξε την κατηγορία στο πλευρό της οικογένειας. Το δικαστήριο επέβαλε ποινή φυλάκισης. Σε υποθέσεις ανηλίκων δεν δημοσιεύονται άλλα στοιχεία.",
      "mme.kicker": "Το γραφείο στη δημοσιότητα",
      "mme.h1": "ΜΜΕ.",
      "mme.fine": "Οι σύνδεσμοι ανοίγουν το αρχικό μέσο. Η παρουσίαση είναι ενημερωτική.",
      "mme.1.date": "dikastiko.gr · 3 Οκτωβρίου 2025",
      "mme.1.title": "Ένοχος ο αστυνομικός για τη θανάσιμη παράσυρση της Αϊσέ",
      "mme.1.body": "Δήλωση των συνηγόρων της οικογένειας Μιχαήλ Πατεράκη και Ιωάννη Μπάρκα μετά την καταδίκη σε 4 έτη και 10 μήνες.",
      "mme.2.date": "Κοινωνία Ώρα MEGA · 1 Σεπτεμβρίου 2025",
      "mme.2.title": "Διαγραφή κληρονομικών χρεών 1.000.000 ευρώ",
      "mme.2.body": "«Εάν δεν μπορούσες να γνωρίζεις ότι είσαι κληρονόμος, δεν μπορεί να τρέξει η τετράμηνη προθεσμία αποποίησης.»",
      "mme.3.date": "ΤΑ ΝΕΑ · 1 Σεπτεμβρίου 2025",
      "mme.3.title": "Πρωτόδικη απόφαση-σταθμός για κληρονομικά χρέη",
      "mme.3.body": "Αναδημοσίευση των δηλώσεων στην «Κοινωνία Ώρα MEGA».",
      "mme.4.date": "Παραπολιτικά · Σεπτέμβριος 2025",
      "mme.4.title": "Διαγράφηκαν χρέη ενός εκατομμυρίου εν αγνοία του κληρονόμου",
      "mme.5.date": "MEGA · 13 Δεκεμβρίου 2023",
      "mme.5.title": "Ερωτήματα για τη φονική παράσυρση 19χρονης",
      "mme.5.body": "«Όσα αναφέρει για τις συνθήκες διερευνώνται· προς το παρόν δεν τα αποδεχόμαστε.»",
      "mme.6.date": "Πρώτο Θέμα · 13 Δεκεμβρίου 2023",
      "mme.6.title": "Έκκληση της οικογένειας μέσω του πληρεξουσίου δικηγόρου",
      "mme.6.body": "Δήλωση στο protothema.gr: να κατατεθεί κάθε πληροφορία ή υλικό κάμερας στις Αρχές.",
      "mme.7.date": "Super 88 Radio · 4 Νοεμβρίου 2022",
      "mme.7.title": "«Πολλοί προέτρεπαν την 20χρονη να κρατήσει το στόμα της κλειστό»",
      "mme.7.body": "Συνέντευξη στον Γιάννη Κοκκαλίδη μετά την καταδίκη γιατρού σε 12 μήνες φυλάκιση.",
      "mme.8.date": "Xanthitimes · 6 Νοεμβρίου 2022",
      "mme.8.title": "12 μήνες φυλακή σε γιατρό για προσβολή γενετήσιας αξιοπρέπειας",
      "mme.8.body": "Το γραφείο εκπροσώπησε την παθούσα από την καταγγελία έως το ακροατήριο.",
      "mme.9.date": "ΕΜΠΡΟΣ · Ιούνιος 2019",
      "mme.9.title": "Δικαστική απόφαση για τον διευθυντή στο Μουσικό Σχολείο Ξάνθης",
      "mme.9.body": "Δήλωση του δικηγόρου του εκπαιδευτικού: η απόφαση προστατεύει τον θεσμό του Μουσικού Σχολείου.",
      "mme.10.date": "ΕΜΠΡΟΣ · 12 Δεκεμβρίου 2025",
      "mme.10.title": "Κληρονομικό δίκαιο: μια αλλαγή που αγγίζει κάθε σπίτι",
      "mme.10.body": "Συνέντευξη για τις νέες ρυθμίσεις: χρέη κληρονομιάς, αποποίηση και νόμιμη μοίρα.",
    },
    en: {
      "title.home": "Paterakis Law Office — Xanthi, Greece | Supreme Court Lawyer",
      "title.faq": "Frequently asked questions — Paterakis",
      "title.mme": "Media | Paterakis Law Office, Xanthi",
      "title.apofaseis": "Judgments | Paterakis Law Office, Xanthi",
      "brand.n1": "Michail Paterakis",
      "brand.n2": "& Associates",
      "brand.n3": "Law firm",
      "about.h2": "Michail Paterakis",
      "team.name.mt": "Marina Tsangalidou",
      "team.name.ft": "Fatme Tasimoglou",
      "team.name.gg": "Gioulben Ginta",
      "team.name.in": "Ilayda Nazmioglou",
      "team.name.ag": "Alexandra Georganta",
      "lang.label": "Language",
      "nav.who": "Who we are",
      "nav.what": "What we do",
      "nav.office": "Our office",
      "nav.faq": "FAQ",
      "nav.media": "Media",
      "nav.judgments": "Judgments",
      "nav.contact": "Contact",
      "nav.book": "Book an appointment",
      "hero.kicker": "Since 2011 · admitted before the Supreme Court (Areios Pagos)",
      "seo.h1": "Paterakis Law Office in Xanthi, Greece — ",
      "hero.h1": "The practice of law is an exercise of responsibility.",
      "hero.lede": "Full legal coverage in civil, criminal and administrative matters.",
      "hero.continue": "Continue",
      "about.kicker": "Who we are",
      "about.photo": "Temporary photograph",
      "about.p1": "Lawyer admitted before the Supreme Court (Areios Pagos), member of the Xanthi Bar Association (Reg. No. 314), with a postgraduate specialization in Tax Law from the Law School of the Democritus University of Thrace. The office has operated since 2011, based at Astron Center in Xanthi.",
      "about.p2": "He appears before courts throughout Greece, at every instance, from the courts of first instance to the Supreme Court (Areios Pagos) and the Council of State.",
      "about.p3": "This site presents judgments in matters handled by the office, as well as television and radio appearances.",
      "bubble.j.k": "Archive",
      "bubble.m.k": "Press",
      "team.lawyer": "Lawyer",
      "team.trainee": "Trainee lawyer",
      "team.hint": "Biography",
      "team.aria.mt": "Biography, Marina Tsangalidou",
      "team.aria.ft": "Biography, Fatme Tasimoglou",
      "team.aria.gg": "Biography, Gioulben Ginta",
      "team.aria.in": "Biography, Ilayda Nazmioglou",
      "team.aria.ag": "Biography, Alexandra Georganta",
      "areas.h2": "What we handle",
      "areas.1.t": "Banking law and debt restructuring",
      "areas.1.b": "Objections, settlements and protection of the primary residence against banks and servicers.",
      "areas.2.t": "Disciplinary and civil-service law",
      "areas.2.b": "Defence in preliminary inquiries, disciplinary boards and administrative courts.",
      "areas.3.t": "Pension and social-security law",
      "areas.3.b": "Pre-retirement study, application, objection and court appeal, where required.",
      "areas.4.t": "Administrative and tax law",
      "areas.4.b": "Appeals against acts of the administration, the tax authority and the funds.",
      "areas.5.t": "Criminal law",
      "areas.5.b": "Defence and support of the prosecution, from the preliminary investigation to trial at every instance.",
      "areas.6.t": "Family law",
      "areas.6.b": "Divorce, maintenance and custody, with priority to the child’s best interests.",
      "areas.7.t": "Road traffic accidents and damages",
      "areas.7.b": "Recovery of damages and appearance in the criminal trial, for the injured party or the driver.",
      "areas.8.t": "Real estate and Cadastre",
      "areas.8.b": "Sales and purchases, title review, correction of cadastral entries and property disputes.",
      "areas.9.t": "Corporate law",
      "areas.9.b": "Formation and operation of companies, articles of association, shareholder agreements and corporate disputes.",
      "areas.10.t": "Inheritance law",
      "areas.10.b": "Acceptance and renunciation, inherited debts, partition, forced heirship and wills.",
      "areas.11.t": "Insolvency law and out-of-court debt settlement",
      "areas.11.b": "Personal bankruptcy, discharge of debts, settlements with the State and social-security funds.",
      "office.h2": "Our office",
      "contact.h2": "Contact",
      "contact.phone": "Telephone",
      "contact.email": "Email",
      "contact.addressLabel": "Address",
      "contact.hoursLabel": "Hours",
      "contact.whatsapp": "WhatsApp",
      "form.name": "Full name",
      "form.phone": "Telephone",
      "form.email": "Email",
      "form.message": "Message",
      "form.fine": "The details are used only so that the office may reply.",
      "form.send": "Send",
      "form.ok": "The message has been sent. The office will contact you.",
      "contact.address": "Astron Center<br>Thermopylon 1, 6th floor<br>671 31 Xanthi",
      "contact.hours": "Monday–Friday<br>8:30–17:30",
      "footer.firm": "Law office of Michail Paterakis and Associates",
      "footer.privacy": "Privacy policy",
      "pbox.close": "Close",
      "title.aporrito": "Privacy policy | Paterakis Law Office, Xanthi",
      "form.consent": "I have read the <a href=\"aporrito.html\" target=\"_blank\" rel=\"noopener\">Privacy policy</a> and consent to the processing of my details so that the office may reply.",
      "footer.note": "© 2011–2026",
      "lb.photo": "Photograph",
      "faq.kicker": "Questions",
      "faq.h1": "Frequently asked questions.",
      "faq.q1": "How do I book an appointment?",
      "faq.a1": "By telephone at 25410 20113 or 697 475 6492, or via WhatsApp. The date and time are confirmed by the office. Meetings outside office hours by arrangement.",
      "faq.q2": "What will it cost?",
      "faq.a2": "Every fee is agreed before the instruction and is set out in writing (Code of Lawyers). Before you commit, you know the cost and what it covers.",
      "faq.q3": "What should I bring to the first meeting?",
      "faq.a3": "Any document related to the matter. The more complete the file from the outset, the more accurate the assessment.",
      "faq.q4": "Can it be done remotely?",
      "faq.a4": "Yes. Videoconference, email or courier. Administrative steps are handled by the office. Many matters do not require travel to Xanthi.",
      "faq.q5": "Outside Xanthi?",
      "faq.a5": "Yes. Thrace and Eastern Macedonia. Appearances before the Supreme Court (Areios Pagos) and in Athens when required.",
      "faq.q6": "Businesses?",
      "faq.a6": "Yes. Advisory work and court representation. Ongoing cooperation with monthly coverage.",
      "faq.q7": "Progress of a case?",
      "faq.a7": "Every filing, hearing date and judgment is communicated, together with the next step.",
      "faq.q8": "Response time?",
      "faq.a8": "During office hours, the same day. Outside office hours and on public holidays: the next working day. For a deadline: telephone.",
      "faq.q9": "Confidentiality?",
      "faq.a9": "Professional secrecy, even if the matter is not instructed. GDPR applies to documents.",
      "faq.q10": "Changing an appointment?",
      "faq.a10": "Yes, by telephone or message. If possible, one working day in advance.",
      "apo.kicker": "Case-law of the office",
      "apo.h1": "Judgments.",
      "apo.fine": "Cases are published anonymised where required. The presentation does not constitute a promise of result.",
      "apo.1.date": "Supreme Court (Areios Pagos) · Final judgment",
      "apo.1.title": "Final write-off of debts amounting to 17,000,000 euros",
      "apo.1.body": "By a judgment of the Supreme Court (Areios Pagos), the write-off of bank debts of 17,000,000 euros for a business family of the region became final. The case was heard at every instance, against systemic banks.",
      "apo.2.date": "Court of First Instance of Xanthi · National press coverage",
      "apo.2.title": "Write-off of inherited debts of 1,000,000 euros",
      "apo.2.body": "A client was found to have inherited debts of 1,000,000 euros to the State, without knowing that he had become an heir. The Court of First Instance of Xanthi held that the presumption of acceptance did not apply and he was fully discharged.",
      "apo.3.date": "Three-member Misdemeanours Court of Xanthi · 2025",
      "apo.3.title": "Vindication of the family of 19-year-old Aise",
      "apo.3.body": "The office supported the prosecution in the fatal injury of 19-year-old Aise by a police officer’s vehicle. The court convicted the person responsible in 2025.",
      "apo.4.date": "Court of First Instance · First-instance judgment",
      "apo.4.title": "Write-off of a debt to the former Agricultural Bank due to limitation",
      "apo.4.body": "The Court of First Instance upheld a client’s objection and held that a claim of the former Agricultural Bank, under special liquidation, had become time-barred. The judgment has not yet become final.",
      "apo.5.date": "Three-member Misdemeanours Court of Xanthi · Support of the prosecution",
      "apo.5.title": "Conviction of a doctor for offence against the sexual dignity of a minor",
      "apo.5.body": "The office supported the prosecution alongside the family. The court imposed a prison sentence. In cases involving minors, no further details are published.",
      "mme.kicker": "The office in the press",
      "mme.h1": "Media.",
      "mme.fine": "The links open the original medium. The presentation is for information.",
      "mme.1.date": "dikastiko.gr · 3 October 2025",
      "mme.1.title": "Police officer found guilty of the fatal running-down of Aise",
      "mme.1.body": "Statement by family counsel Mixalis Paterakis and Ioannis Barkas after the sentence of 4 years and 10 months.",
      "mme.2.date": "Κοινωνία Ώρα MEGA · 1 September 2025",
      "mme.2.title": "Write-off of inherited debts of 1,000,000 euros",
      "mme.2.body": "“If you could not know you were an heir, the four-month disclaimer period cannot run.”",
      "mme.3.date": "ΤΑ ΝΕΑ · 1 September 2025",
      "mme.3.title": "Landmark first-instance judgment on inherited debts",
      "mme.3.body": "Reprint of the statements on Κοινωνία Ώρα MEGA.",
      "mme.4.date": "Parapolitika · September 2025",
      "mme.4.title": "One million euros of inherited debts written off without the heir’s knowledge",
      "mme.5.date": "MEGA · 13 December 2023",
      "mme.5.title": "Questions over the fatal running-down of a 19-year-old",
      "mme.5.body": "“What he says about the circumstances is under investigation; for now we do not accept it.”",
      "mme.6.date": "Proto Thema · 13 December 2023",
      "mme.6.title": "The family’s appeal through counsel",
      "mme.6.body": "Statement to protothema.gr: any information or camera footage should be given to the authorities.",
      "mme.7.date": "Super 88 Radio · 4 November 2022",
      "mme.7.title": "“Many urged the 20-year-old to keep her mouth shut”",
      "mme.7.body": "Interview with Giannis Kokkalidis after a doctor’s 12-month prison sentence.",
      "mme.8.date": "Xanthitimes · 6 November 2022",
      "mme.8.title": "12 months’ imprisonment for a doctor for insult to sexual dignity",
      "mme.8.body": "The office represented the injured party from the complaint through the hearing.",
      "mme.9.date": "EMPROS · June 2019",
      "mme.9.title": "Court judgment on the head of the Xanthi Music School",
      "mme.9.body": "Statement by counsel for the teacher: the judgment protects the institution of the Music School.",
      "mme.10.date": "EMPROS · 12 December 2025",
      "mme.10.title": "Inheritance law: a change that touches every home",
      "mme.10.body": "Interview on the new rules: inherited debts, disclaimer and forced heirship.",
    }
  };

  var people = {
    mt: {
      img: "assets/ph/mt.jpg?v=3",
      el: {
        name: "Μαρίνα Τσαγγαλίδου",
        role: "Δικηγόρος",
        lines: [
          "Δικηγόρος, μέλος του Δικηγορικού Συλλόγου Ξάνθης από το 2019 και απόφοιτη της Νομικής Σχολής του Δημοκριτείου Πανεπιστημίου Θράκης.",
          "Κύριο αντικείμενο ενασχόλησης το Αστικό Δίκαιο (εμπράγματο, οικογενειακό, κληρονομικό).",
          "Γλώσσες: ελληνικά, αγγλικά, ισπανικά."
        ]
      },
      en: {
        name: "Marina Tsangalidou",
        role: "Lawyer",
        lines: [
          "Lawyer, member of the Xanthi Bar Association since 2019 and graduate of the Law School of the Democritus University of Thrace.",
          "Her main practice is Civil Law (property, family and succession law).",
          "Languages: Greek, English, Spanish."
        ]
      }
    },
    ft: {
      img: "assets/ph/ft.jpg?v=3",
      el: {
        name: "Φατμέ Τασήμογλου",
        role: "Δικηγόρος",
        lines: [
          "Γεννήθηκε και μεγάλωσε στη Θεσσαλονίκη. Απόφοιτη της Νομικής Σχολής του Δημοκριτείου Πανεπιστημίου Θράκης και μέλος του Δικηγορικού Συλλόγου Ξάνθης.",
          "Πραγματοποίησε μεταπτυχιακές σπουδές στο Ουσιαστικό Αστικό Δίκαιο· η διπλωματική της αφορούσε τη σχέση της συνεπιμέλειας με τη διατροφή ανηλίκου τέκνου.",
          "Η επαγγελματική της δραστηριότητα επικεντρώνεται στο Αστικό Δίκαιο, με ιδιαίτερο ενδιαφέρον για το οικογενειακό και το κληρονομικό.",
          "Δίνει έμφαση στην προσωπική επικοινωνία με τον εντολέα και στην εξατομικευμένη προσέγγιση κάθε υπόθεσης, με σαφή, πρακτική και αποτελεσματική νομική καθοδήγηση. Παρακολουθεί τις εξελίξεις της νομοθεσίας και της νομολογίας."
        ]
      },
      en: {
        name: "Fatme Tasimoglou",
        role: "Lawyer",
        lines: [
          "Born and raised in Thessaloniki. Graduate of the Law School of the Democritus University of Thrace and member of the Xanthi Bar Association.",
          "She completed postgraduate studies in Substantive Civil Law; her dissertation examined the relationship between joint custody and child maintenance.",
          "Her practice centres on Civil Law, with particular interest in family and succession law.",
          "She emphasises personal communication with the client and a tailored approach to each case, aiming for clear, practical and effective legal guidance. She keeps abreast of developments in legislation and case law."
        ]
      }
    },
    gg: {
      img: "assets/ph/gg.jpg?v=3",
      el: {
        name: "Γκιουλμπέν Γκίντα",
        role: "Δικηγόρος",
        lines: [
          "Απόφοιτη της Νομικής Σχολής του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης και μέλος του Δικηγορικού Συλλόγου Ξάνθης.",
          "Ασχολείται με υποθέσεις αστικού, ποινικού, εταιρικού και διοικητικού δικαίου, με έμφαση στην εξατομικευμένη προσέγγιση κάθε υπόθεσης και στην αποτελεσματική δικαστηριακή και εξωδικαστική εκπροσώπηση.",
          "Γλώσσες: ελληνικά, τουρκικά, αγγλικά."
        ]
      },
      en: {
        name: "Gioulben Ginta",
        role: "Lawyer",
        lines: [
          "Graduate of the Law School of the Aristotle University of Thessaloniki and member of the Xanthi Bar Association.",
          "She handles civil, criminal, corporate and administrative law matters, with emphasis on a tailored approach to each case and effective representation in and out of court.",
          "Languages: Greek, Turkish, English."
        ]
      }
    },
    in: {
      img: "assets/ph/in.jpg?v=3",
      el: {
        name: "Ιλαΐντα Ναζμίογλου",
        role: "Ασκούμενη δικηγόρος",
        lines: [
          "Απόφοιτη της Νομικής Σχολής του Δημοκριτείου Πανεπιστημίου Θράκης (2025). Από το ίδιο έτος ασκούμενη δικηγόρος στο γραφείο.",
          "Ασχολείται με τη μελέτη, την προετοιμασία και την οργάνωση των δικογράφων, και παρακολουθεί την εκδίκαση υποθέσεων ενώπιον πολιτικών, ποινικών και διοικητικών δικαστηρίων.",
          "Στόχος της είναι η συνέχιση των σπουδών σε μεταπτυχιακό επίπεδο, με εξειδίκευση στους τομείς δικαίου που την ενδιαφέρουν.",
          "Γλώσσες: ελληνικά, αγγλικά, τουρκικά."
        ]
      },
      en: {
        name: "Ilayda Nazmioglou",
        role: "Trainee lawyer",
        lines: [
          "She graduated from the Law School of the Democritus University of Thrace in 2025 and has been a trainee lawyer at the office since that year.",
          "She studies, prepares and organises pleadings, and follows cases through the civil, criminal and administrative courts.",
          "She intends to continue her studies at postgraduate level, with further specialisation in the areas of law that interest her.",
          "Languages: Greek, English, Turkish."
        ]
      }
    },
    ag: {
      img: "assets/ph/ag.jpg?v=3",
      el: {
        name: "Αλεξάνδρα Γεωργαντά",
        role: "Ασκούμενη δικηγόρος",
        lines: [
          "Ασκούμενη δικηγόρος, απόφοιτη του Τμήματος Νομικής του Δημοκριτείου Πανεπιστημίου Θράκης (2025).",
          "Κατά τη διάρκεια της άσκησής της αναλαμβάνει την προετοιμασία και οργάνωση των φακέλων των υποθέσεων, τη συγκέντρωση των απαραίτητων δικαιολογητικών και εγγράφων, καθώς και την παρακολούθηση της εξέλιξης της πορείας τους.",
          "Γλώσσες: ελληνικά, αγγλικά."
        ]
      },
      en: {
        name: "Alexandra Georganta",
        role: "Trainee lawyer",
        lines: [
          "Trainee lawyer and graduate of the Law School of the Democritus University of Thrace (2025).",
          "During her traineeship she prepares and organises case files, gathers the necessary supporting documents, and follows the progress of each matter.",
          "Languages: Greek, English."
        ]
      }
    }
  };

  var current = "el";

  function readQuery() {
    try {
      var q = (new URLSearchParams(window.location.search).get("lang") || "").toLowerCase();
      if (q === "en" || q === "el") return q;
    } catch (e) {}
    return null;
  }

  function readStore() {
    try {
      var s = localStorage.getItem(KEY);
      if (s === "en" || s === "el") return s;
    } catch (e) {}
    return null;
  }

  function saveStore(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function syncQuery(lang) {
    try {
      var u = new URL(window.location.href);
      if (!u.searchParams.has("lang")) return;
      if (u.searchParams.get("lang") === lang) return;
      u.searchParams.set("lang", lang);
      history.replaceState(null, "", u.pathname + u.search + u.hash);
    } catch (e) {}
  }

  function detect() {
    return readQuery() || readStore() || "el";
  }

  function applyLang(lang) {
    if (lang !== "en" && lang !== "el") lang = "el";
    current = lang;
    saveStore(lang);
    document.documentElement.lang = lang;
    var d = dict[lang] || dict.el;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (d[key] != null) el.textContent = d[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (d[key] != null) el.innerHTML = d[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (d[key] != null) el.setAttribute("aria-label", d[key]);
    });

    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) document.title = titleEl.textContent;

    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.classList.toggle("on", btn.getAttribute("data-lang") === lang);
    });

    document.dispatchEvent(new CustomEvent("paterakis:lang", { detail: lang }));
  }

  function onToggle(lang) {
    applyLang(lang);
    syncQuery(lang);
  }

  function bind() {
    document.querySelectorAll(".lang [data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        onToggle(btn.getAttribute("data-lang"));
      });
    });
  }

  window.PATERAKIS = {
    applyLang: applyLang,
    getLang: function () { return current; },
    people: people,
    dict: dict
  };
  window.applyLang = applyLang;

  applyLang(detect());
  bind();
})();
