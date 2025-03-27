import PlantUMLDiagram from "@/components/PlantUMLDiagram";
import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
    <h1 className="text-2xl font-bold text-center mb-6">VOLUME 1 / LESSON NO: 2 - THE DEFINITION OF ISLAM</h1>
    
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold">Q 1: Who are we?</h2>
        <p className="mt-2">A. We are Muslims.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 2: Who is called a Muslim?</h2>
        <p className="mt-2">A. The follower of Islamic faith is called a Muslim.</p>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 3: On which principles is Islam based?</h2>
        <p className="mt-2">A. Islamic faith is based on five cardinal principles:</p>
        <ul className="list-decimal pl-6 mt-2 space-y-2">
          <li>To bear witness that there is no God except Allah and that Hazrat Mohammed (PBUH) is His chosen servant and true Apostle.</li>
          <li>To offer prayer five times a day.</li>
          <li>To pay &quot;Zakaat&quot; (charity) - only upon those who are rich.</li>
          <li>To perform Hajj - only upon those who can reach the holy place.</li>
          <li>To observe fasts during the holy month of Ramadaan.</li>
        </ul>
      </div>
      
      <div>
        <h2 className="text-lg font-semibold">Q 4: What is Kalemah of Islam (Islamic declaration)?</h2>
        <p className="mt-2 font-arabic text-xl text-green-600">
          َل ِؕ اّٰله َِؕ ُاَّٰلَ ِؕل ّال ِؕ ُمحََّمد ِؕ رَّهسُٰوْل ُِؕل ّال ِؕ
        </p>
        <p className="mt-2">A. &quot;Laa Ilaaha Illal Laahu Mohammedur Rasoolul Laah&quot;. (There is no God except Allah: Mohammed is the Apostle of Allah.)</p>
      </div>
    </div>

    <PlantUMLDiagram
        code={`
@startmindmap
<style>
mindmapDiagram {
  node {
    BackgroundColor lightBlue
    BorderColor darkBlue
    FontColor black
  }
  :depth(1) {
    BackgroundColor lightGreen
  }
  :depth(2) {
    BackgroundColor lightYellow
  }
  :depth(3) {
    MaximumWidth 200
    BackgroundColor lightPink
  }
}
</style>
* Islam
** Who are we?
*** We are Muslims
** Who is a Muslim?
*** Follower of Islamic faith
** Five Principles of Islam
*** 1. Witness (Kalemah of Islam)
**** Laa Ilaaha Illal Laahu (No God except Allah)
**** Mohammedur Rasoolul Laah (Mohammed (PBUH) is His Apostle)
*** 2. Prayer
**** Five times a day
*** 3. Fasting
**** During Ramadaan
*** 4. Zakaat (Charity)
**** For the rich
*** 5. Hajj
**** For those who can reach Khana Kaaba
@endmindmap`}
      />
  </div>
  );
};

export default page;
