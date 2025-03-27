import PlantUMLDiagram from "@/components/PlantUMLDiagram";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-100 text-black">
      <div className="max-w-4xl mx-auto px-6 py-14">
        <article className="prose prose-slate lg:prose-lg mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-bold mb-8 text-black tracking-tight">
            What is the Islamic Concept of Life?
          </h1>
          
          <div className="space-y-6 text-zinc-800 leading-relaxed">
            <p className="text-lg first-letter:text-4xl first-letter:font-serif first-letter:mr-2 first-letter:float-left">
              Islamic teachings, as a complete code of life, have two main aspects. On one hand, Islam sheds light on the fundamental truths of life, explaining the reality of the universe, the true position of humans within it, the purpose of life, and the underlying laws governing existence. Through its core beliefs, Islam acquaints individuals with the realities of life and provides a clear perspective on the universe and existence.
            </p>

            <p className="text-lg">
              On the other hand, Islam offers a detailed set of laws to guide individuals in balancing their personal and collective lives with moderation and harmony. This ensures success and well-being. The combination of beliefs and principles of action is known as the &quot;Islamic Concept of Life.&quot; In sociological terms, this combination can also be referred to as an &quot;ideology.&quot;
            </p>

            <p className="text-lg">
              In modern sociological literature, the term &quot;ideology&quot; refers to a system of thought and action that is based on philosophical and intellectual foundations and provides a clear framework for politics, culture, and social systems. Dr. George Boas defines it in the <em>Dictionary of Philosophy</em> as:
            </p>

            <blockquote className="pl-6 border-l-4 border-zinc-300 my-6 text-lg bg-zinc-50 p-6 rounded-r-xl">
            &quot;A system of general ideas or a program based on thought and philosophy.&quot;
            </blockquote>

            <p className="text-lg">
              Similarly, the renowned linguist Webster defines it as:
            </p>

            <blockquote className="pl-6 border-l-4 border-zinc-300 my-6 text-lg bg-zinc-50 p-6 rounded-r-xl">
            &quot;The scientific explanation of a general plan or program for any cultural, political, or social movement.&quot;
            </blockquote>

            <p className="text-lg">
              Reflecting on these definitions, it becomes evident that an ideology serves as the intellectual foundation of a movement or civilization, shaping its cultural and civilizational outlook.
            </p>

            <p className="text-lg">
              When we use the term <em>Islamic Concept of Life</em>, it refers to the framework of thought and the civilizational and social program presented by Islam. The key characteristic of any ideology is that it provides guidance on various aspects of life based on its unique worldview. Just as a thread connects pearls into a unified necklace, every ideology possesses a unifying spirit that links the programs of different fields of life into a cohesive whole. This shared spirit and thought guide all areas of life, resulting in a comprehensive system of thought and action that reflects the true unity of life.
            </p>

            <p className="text-lg">
              This unity leads to harmony and coherence in all aspects of human life, creating a sense of beauty in existence. This is why the Qur&apos;an often mentions <em>faith</em> and <em>righteous deeds</em> together—they complement one another, and one remains incomplete without the other.
            </p>
          </div>
        </article>
      </div>
      <PlantUMLDiagram
          code={`
          @startmindmap
<style>
mindmapDiagram {
    node {
        BackgroundColor #E8F5E9
        BorderColor #2E7D32
        FontColor black
    }
    .main {
        BackgroundColor #FFB74D
        FontSize 16
        FontStyle bold
    }
    .fundamental {
        BackgroundColor #B2EBF2
        FontColor #006064
    }
    .modern {
        BackgroundColor #E1BEE7
        FontColor #4A148C
    }
    .unity {
        BackgroundColor #FFCDD2
        FontColor #B71C1C
    }
}
</style>

* Islamic Concept of Life <<main>>

** Fundamental Teachings <<fundamental>>
*** Core Truths
**** Universe's Reality
**** Human Position
**** Life's Purpose
**** Governing Laws
*** Practical Guidance
**** Personal Balance
**** Collective Harmony
**** Moderation Principles
**** Success Framework

** Modern Understanding <<modern>>
*** Ideological Definitions
**** George Boas
***** Philosophical System
***** General Ideas Framework
**** Webster
***** Scientific Explanation
***** Cultural Movement Guide
***** Social Program

left side

** System Characteristics <<unity>>
*** Unified Framework
**** Comprehensive Guidance
**** Connected Elements
**** Cohesive Structure

*** Implementation Areas
**** Political Sphere
**** Cultural Domain
**** Social Systems
**** Individual Life

** Core Components <<unity>>
*** Faith Elements
**** Beliefs
**** Worldview
*** Practical Elements
**** Righteous Deeds
**** Actions
*** Integration
**** Unity of Life
**** Harmony
**** Beauty in Existence

@endmindmap`}
        />
    </main>
  );
}